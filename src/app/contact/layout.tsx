import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Guerreiro Grappling – BJJ Gym in Gillitts, Durban",
  description:
    "Contact Guerreiro Grappling in Gillitts, Durban. Call +27824957760 or visit us at 6 Old Main Road. BJJ, MMA & Kickboxing classes available for adults & kids.",
  alternates: { canonical: "https://guerreirograppling.co.za/contact" },
};


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
