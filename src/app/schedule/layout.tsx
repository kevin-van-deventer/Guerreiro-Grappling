import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule | BJJ, MMA & Kickboxing Timetable – Gillitts, Durban",
  description:
    "View Guerreiro Grappling's weekly class schedule in Gillitts, Durban. BJJ, No-Gi, MMA, Kickboxing, Ladies Only & Junior classes (ages 7–14). Private training available Mon–Sun from 07:30.",
  alternates: {
    canonical: "https://guerreirograppling.co.za/schedule",
  },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
