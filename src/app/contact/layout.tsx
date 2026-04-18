import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Guerreiro Grappling",
  description: "Get in touch with our Brazilian Jiu Jitsu gym in Durban for inquiries, class info, or membership details. We're here to help!",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
