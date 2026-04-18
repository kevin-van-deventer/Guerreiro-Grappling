import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Guerreiro Grappling",
  description: "Join our Brazilian Jiu Jitsu gym in Durban for expert training, all skill levels welcome. Build strength, confidence, and technique.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
