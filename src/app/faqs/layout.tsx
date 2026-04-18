import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | BJJ & Martial Arts Questions – Guerreiro Grappling, Durban",
  description:
    "Frequently asked questions about Brazilian Jiu-Jitsu at Guerreiro Grappling in Gillitts, Durban. Class info, pricing, memberships, Junior classes (ages 7–14) & private training.",
  alternates: { canonical: "https://guerreirograppling.co.za/faqs" },
};


export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
