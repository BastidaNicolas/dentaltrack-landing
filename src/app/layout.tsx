import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "DentalTrack - Simplify Your Dental Appointment Scheduling",
  description:
    "DentalTrack simplifies dental appointments scheduling and patient reminders, making it easy for dentists to manage their practice and provide top-notch patient care. Our cloud-based software enables dentists to create customizable appointment schedules, automate appointment reminders and securely store patient records. Sign up today and take your dental practice to the next level with DentalTrack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
        <meta property="og:image" content="https://i.imgur.com/ytnzvzD.jpg" />
        <meta property="og:url" content="https://dentaltrack.ar/" />
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
      </head>
      <body className={`${roboto.className}`}>{children}</body>
    </html>
  );
}
