import React from "react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Quick: [
    { name: "Classes", href: "/classes" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faqs" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Gym Rules", href: "/rules" },
  ],
  Contact: [
    { name: "082 495 7760", href: "tel:+27824957760" },
    { name: "info@guerreirograppling.co.za", href: "mailto:info@guerreirograppling.co.za" },
    { name: "Gillitts, Durban", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t-8 border-primary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <span className="font-headline font-black text-2xl uppercase tracking-tighter italic">
                Guerreiro <span className="text-secondary">Grappling</span>
              </span>
            </div>
            <p className="text-sm opacity-60 font-medium max-w-xs">
              Engineering kinetic mastery through disciplined motion. The fastest growing combat sport facility in Hillcrest.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-6">
              <h4 className="font-headline font-black text-xl uppercase tracking-tighter border-b-2 border-primary/20 pb-2 inline-block">
                {title}
              </h4 >
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors font-bold uppercase tracking-widest"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] opacity-40">
            © 2024 Guerreiro Grappling // Precision In Motion
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-label text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all">Instagram</a>
            <a href="#" className="font-label text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all">Facebook</a>
            <a href="#" className="font-label text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-primary transition-all">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
