import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar - Guerreiro Grappling",
  description: "View our Brazilian Jiu Jitsu gym calendar for class schedules, events, and important updates in Durban. Stay on track with your training!",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
