import Header from "@/app/components/header";
import Hero from "./components/hero";
import GridSection from "./components/gridSection";
import Footer from "./components/footer";
import Form from "./components/form";
import PaymentOptions from "./components/paymentOptions";
import CenterSection from "./components/centerSection";
import TwoColSection from "./components/twoColSection";
import XlCard from "./components/cards/xlCard";
import think from "public/think.svg";
import offices from "public/offices.svg";
import QueryClientComponent from "./components/queryClientComponent";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <GridSection />
        <div className="max-w-5xl m-auto mb-24 px-3 lg:px-0">
          <XlCard
            content={{
              title: "Efficient Appointment Management",
              description:
                "With DentalTrack, managing appointments has never been easier. Our app allows dentists to schedule and reschedule appointments, mark them as completed, and track cancellations and no-shows, all in one place. Say goodbye to confusing schedules and missed appointments!",
            }}
            colors={{
              background: "bg-blue-600",
              mediaquery: "md:bg-blue-600",
              text: "text-white",
            }}
            image={think}
            reverse={false}
          />
          <XlCard
            content={{
              title: "Customizable Office Setup",
              description:
                "DentalTrack is designed to adapt to the unique needs of each dental practice. Dentists can easily create custom offices and organize appointments based on location. This makes it easy to keep track of appoint-ments and ensure that everyone is on the same page.",
            }}
            colors={{
              background: "bg-neutral-100",
              mediaquery: "md:bg-neutral-100",
              text: "text-balck",
            }}
            image={offices}
            reverse={true}
          />
        </div>
        <TwoColSection />
        <CenterSection />
        <PaymentOptions />
        <QueryClientComponent>
          <Form />
        </QueryClientComponent>
      </main>
      <Footer />
    </>
  );
}
