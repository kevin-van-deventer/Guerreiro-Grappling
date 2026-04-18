import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Guerreiro Grappling BJJ Academy – Gillitts, Durban",
  description:
    "Meet the coaches and story behind Guerreiro Grappling – Durban's premier BJJ academy in Gillitts. Expert instruction in Brazilian Jiu-Jitsu, MMA & Kickboxing for all levels.",
  alternates: { canonical: "https://guerreirograppling.co.za/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
