import React from 'react';
import { Star } from 'lucide-react';

async function getReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  // Exact Place ID for Guerreiro Grappling extracted from Google Places API
  const placeId = 'ChIJ4XicTfr79h4RU_Zi5fu2JL8';
  
  if (!apiKey) {
    console.warn("GOOGLE_PLACES_API_KEY is missing. Reviews will not load.");
    return [];
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`, 
      { next: { revalidate: 604800 } } // Extremely aggressive caching (7 days) to protect API limits
    );
    const data = await res.json();
    
    if (!data.result || !data.result.reviews) {
      return [];
    }
    
    // Serve only 4 and 5 star reviews
    return data.result.reviews.filter((r: any) => r.rating >= 4);
  } catch (error) {
    console.error("Failed to fetch Google Reviews:", error);
    return [];
  }
}

export default async function Reviews() {
  const reviews = await getReviews();

  // Failsafe: Collapse section entirely if the fetch fails so UX isn't harmed
  if (!reviews || reviews.length === 0) return null;

  // Duplicate the array of reviews perfectly to allow for an infinite smooth scrolling CSS marquee
  const duplicateReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 md:py-32 bg-neutral-950 border-y-[12px] border-primary overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 flex flex-col items-center justify-center text-center gap-8 relative z-10">
        <div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-white skew-x-[-12deg]"></div>
            <span className="font-label font-bold text-white uppercase tracking-[0.3em] text-xs">Community Validated</span>
            <div className="w-8 h-1 bg-white skew-x-[-12deg]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-white uppercase tracking-tighter leading-[0.9] italic">
            TESTED IN <br /><span className="text-secondary torque-gradient bg-clip-text">THE FIRE</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-3 bg-white/5 px-8 py-4 border-l-4 border-r-4 border-primary backdrop-blur-sm skew-x-[-2deg]">
          <div className="flex text-yellow-500">
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
            <Star className="w-6 h-6 fill-current" />
          </div>
          <span className="font-headline font-black text-white text-xl md:text-2xl ml-2 tracking-tight">5.0 RATING</span>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full flex overflow-x-hidden pt-4 pb-8">
        <div className="flex gap-6 md:gap-8 px-4 animate-marquee w-max items-stretch z-10 hover:[animation-play-state:paused]">
          {duplicateReviews.map((review: any, i: number) => (
            <div 
              key={`${review.author_name}-${i}`} 
              className="w-[320px] md:w-[400px] shrink-0 bg-white p-6 md:p-8 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,255,255,0.05)] skew-x-[-2deg] transition-all duration-300 hover:skew-x-0 cursor-default"
            >
              <div>
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-900 font-medium leading-relaxed italic mb-8 opacity-90 text-lg">
                  "{review.text.length > 200 ? review.text.substring(0, 200) + '...' : review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto border-t-2 border-neutral-100 pt-4">
                <img 
                  src={review.profile_photo_url || "https://lh3.googleusercontent.com/a/O-NONE"} 
                  alt={review.author_name} 
                  className="w-12 h-12 border-2 border-primary grayscale hover:grayscale-0 transition-all object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-headline font-black text-neutral-950 uppercase text-lg leading-none mb-1">{review.author_name}</h3>
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{review.relative_time_description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft Fading Gradients mapping to the bg-neutral-950 base */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-neutral-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-neutral-950 to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
}
