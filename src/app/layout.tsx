import ContextWraper from "./components/contextWraper";
import CookieModal from "./components/cookieModal";
import "./globals.css";

export const metadata = {
  title: "DentalTrack - Simplify Your Dental Appointment Scheduling",
  description:
    "DentalTrack simplifies dental appointments scheduling & reminders, empowering dentists to manage their practice with ease. Sign up now for customizable schedules, automated reminders & secure patient records. Elevate your dental practice with DentalTrack.",
  keywords: [
    "DentalTrack",
    "Appointment scheduling",
    "Appointment management software",
    "Dentist",
    "Dental clinic",
    "Management software",
    "Schedule",
    "Appointment",
    "Notification",
    "Dental practice",
    "Patient management",
    "Automated reminders",
    "Dental office",
    "Streamline workflow",
    "appointment system",
  ],
  icons: {
    icon: "/Group-91.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextWraper>
      {children}
      <CookieModal />
    </ContextWraper>
  );
}
