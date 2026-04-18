import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mat Rules - Guerreiro Grappling",
  description: "Essential guidelines and etiquette for training at Guerreiro Grappling. Ensuring safety, respect, and technical growth on the mats.",
};

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
