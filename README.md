# Guerreiro Grappling Architecture & Design

Welcome to the central repository for the **Guerreiro Grappling** web app. This project was built to deliver a premium, high-speed, and conversion-focused digital experience for Durban’s fastest-growing grappling academy.

## 🏗 Technology Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/) & React 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography & Icons**: Google Fonts (Space Grotesk, Manrope, Lexend) + Lucide React
- **Data Persistence**: Local JSON (for instant edge retrieval and flat-file scheduling)
- **Deployment**: Engineered for Vercel / Node Edge networks

---

## 🎨 Design System: "Kinetic Precision"

The UI/UX strategy for Guerreiro Grappling bypasses standard gym templates to embrace what we call **Kinetic Precision**. 
- **Dark Premium Aesthetic**: Heavy use of `bg-neutral-950` against stark white elements to build contrast.
- **Torque Gradients**: Custom high-contrast primary blue/cyan highlights slicing through dark planes.
- **"Skew" Architecture**: Buttons, cards, and image overlays rely heavily on `-12deg` to `8deg` skew transforms on hover. This physically implies momentum, dragging the user's eye forward through the sales funnel.
- **Micro-animations**: Elements slide in on scroll queues, creating an app that feels "alive" but not overwhelming.

---

## 🚀 Core Features & Modules

### 1. Global Navigation & Identity
- **Dynamic Navbar**: A multi-layout navigation bar that sits cleanly transparent over the hero, then shifts into a high-opacity blur overlay (`bg-white/95` / `dark:bg-neutral-950/95`) on scroll. Features kinetic desktop links and a full-screen mobile slide-out menu.
- **Universal Footer**: A highly optimized, 4-column footer implemented globally via `layout.tsx` to maintain absolute visual consistency across every single sub-page.

### 2. Global Lead Modal System
A conversion engine designed to capitalize on impulse decisions.
- **Event-Driven**: Rather than linking to a boring `/contact` route, all primary CTAs (*"Join the Fold"*, *"Get Started"*, *"Claim Your Mat Space"*) leverage Javascript `CustomEvent` dispatchers to instantly trigger the `LeadModal` over the user's current screen context.
- **Auto-Trigger**: Contains a session-stored 10-second timeout to gently prompt passive scrollers.
- **Premium Form Design**: High-contrast, floating labels with integrated `lucide` iconography, ensuring an effortless user experience.

### 3. Floating WhatsApp Integration
A scroll-aware floating component that only drops in once the user scrolls past the main hero title, preventing UI clutter while ensuring instant communication via WhatsApp is always 1 click away.

### 4. Dynamic Schedule System
Developed specifically to solve the "static gym calendar" problem:
- **Colour-coded Timetable**: Classes are natively tagged by categoriy (`adults`, `ladies`, `juniors`, `private`) matching a rigorous visual legend.
- **Admin Access Portal**: Includes a secure login drawer gatekept by environment variables.
- **Live Editing**: Administrators can add, override, delete, or shift class slots directly from the browser natively, syncing changes directly to the persistence layer.

### 5. Conversion-Focused Routing
- **Homepage (`/`)**: Follows a strict AIDA marketing funnel (Attention: Hero, Interest: Ascension timeline, Desire: Coaches, Action: Custom Pricing section).
- **Classes (`/classes`)**: Direct deep dives into disciplines with clear segmentation for Adults, Teens, and Kids.
- **Supporting Pages**: Clean, legible, typography-focused layouts for `FAQs`, `Rules`, and `About`.

---

## 🔍 SEO & Technical Optimization

- **Static Favicon Tree**: Custom sizes, `apple-touch-icon`, and `site.webmanifest` integrated meticulously via Next.js strictly configured `layout.tsx` metadata. 
- **Server/Client Separation**: Critical metadata paths remain purely server-rendered to accommodate fast web crawlers, while interactive sections leverage `"use client"` where necessary for Framer Motion.
- **Local Business Strategy**: Explicit injection of keyword structures covering local Durban vectors (*Gillitts, Hillcrest, Kloof, Waterfall*).

---

## 🛠 Environment Setup

To run this repository locally:

1. Copy `.env.example` (or set manually) to `.env.local`
2. Define `ADMIN_PASSWORD` & `NEXT_PUBLIC_ADMIN_PASSWORD` exactly to enable Schedule modifications.
3. Define `GOOGLE_PLACES_API_KEY` to enable the live synchronisation of the infinite Google Reviews marquee component.
4. Run `npm install`
5. Run `npm run dev`

*All changes to the schedule write directly to `src/data/schedule.json`. Ensure file-write permissions exist in production deployments.*

---

## ✅ Project Roadmap & Status

### Completed Operations
- [x] Full UI/UX redesign featuring high-contrast Kinetic Precision (skew transforms, torque gradients).
- [x] Migrated to Next.js App Router for superior server-side routing and metadata generation.
- [x] Rebuilt responsive, animated Navbar with glassmorphism scroll effects.
- [x] Engineered global auto-triggering `LeadModal` capturing high-intent trial conversions.
- [x] Re-architected all macro-CTA buttons across the site to bypass sub-pages and trigger `LeadModal`.
- [x] Deployed floating scroll-aware WhatsApp button for immediate lead capture.
- [x] Built the dynamic Schedule Component with category-based visual mapping (Adults, Kids, Ladies).
- [x] Developed highly secure, flat-JSON live Schedule Admin Drawer (protected by local `.env` variables).
- [x] Upgraded website structural SEO (Title tags, Schema.org LocalBusiness injection, meta descriptions).
- [x] Processed and integrated complete multi-platform Favicon setup (Apple Touch, Manifest, Android).
- [x] Implemented global multi-column footer matrix across all subpages cleanly via layout wrappers.
- [x] Designed and integrated the highly-kinetic 'Arsenal' Split-Screen SEO section to maximize AEO/SEO text indexing explicitly targeting 'BJJ Durban' queries.
- [x] Built the Live Google Places API Server Component to fetch and display the highest 4 & 5-star venue reviews in an infinite auto-scrolling marquee (with strict 24-hr caching).
- [x] Restructured core App Pages into dedicated Next.js Client modules (`HomeClient`, `AboutClient`) securely nestled under Server Component endpoints. This prevents API over-fetching and strictly prevents Google API Keys from ever entering the Client DOM.
- [x] Integrated raw SVG paths for Facebook and Instagram natively into the Global Footer, bypassing outdated `lucide-react` legacy limits and fully adopting the new Kinetic design hover-box styling perfectly.

### Pending Deployment & Verification (TODO)
- [ ] **Lead Form Engine**: Connect email address ingestion for the Lead Form submissions (e.g., via Resend/Nodemailer/Formspree).
- [ ] **WhatsApp Sync**: Update WhatsApp predefined message content and test actual device routing.
- [ ] **Data Audit**: Verify exact schedule times/details are 100% accurate against physical timetable.
- [ ] **SEO Pass**: Final check of all SEO content, ensuring maximum density for biggest target keyword: **BJJ Durban**.
- [ ] **Component Checks**: Final test of WhatsApp dynamic button and Contact Details in the Global Footer.
- [ ] **Google Ecosystem**: Inject Google Tag Manager (GTM).
- [ ] **Google Maps Alignment**: Update Google Business Profile with exact NAP (Name, Address, Phone Number) matching the site layout.
- [ ] **Network Delivery**: Connect routing to Cloudflare CDN.
- [ ] **Performance**: Re-verify caching strategies to guarantee split-second delivery.
- [ ] **DevOps**: Containerize the app with Docker for isolated deployment potential.
