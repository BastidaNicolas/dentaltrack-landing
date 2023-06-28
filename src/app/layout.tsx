import GoogleAnalytics from "./components/GoogleAnalytics";
import ContextWraper from "./components/contextWraper";
import CookieModal from "./components/cookieModal";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });

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
        <head>
          <meta property="og:image" content="https://i.imgur.com/92i627y.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta
            property="og:title"
            content="DentalTrack - Simplify Your Dental Appointment Scheduling"
          />
          <meta
            property="og:description"
            content="DentalTrack simplifies dental appointments scheduling & reminders, empowering dentists to manage their practice with ease. Sign up now for customizable schedules, automated reminders & secure patient records. Elevate your dental practice with DentalTrack."
          />
          <meta property="og:url" content="https://www.dentaltrack.ar/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta
            property="og:site_name"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="twitter:image:alt"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="twitter:title"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="og:title"
            content="DentalTrack - Simplify your appointments"
          />
          <meta
            name="twitter:text:title"
            content="DentalTrack simplifies dental appointments scheduling and patient reminders, making it easy for dentists to manage their practice and provide top-notch patient care. Our cloud-based software enables dentists to create customizable appointment schedules, automate appointment reminders and securely store patient records. Sign up today and take your dental practice to the next level with DentalTrack."
          />
          <GoogleAnalytics GA_MEASUREMENT_ID="G-SMWYVD359M" />
        </head>
        <body className={`${roboto.className}`}>
          {children}
          <CookieModal />
        </body>
    </ContextWraper>
  );
}
