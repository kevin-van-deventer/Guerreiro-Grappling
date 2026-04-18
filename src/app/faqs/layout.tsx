import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - Guerreiro Grappling",
  description: "Find answers to common questions about our Brazilian Jiu Jitsu gym in Durban. Get info on classes, membership, and training tips!",
};

export default function FaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
