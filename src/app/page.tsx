import Header from "@/app/components/header";
import Hero from "./components/hero";
import GridSection from "./components/gridSection";
import Footer from "./components/footer";
import Form from "./components/form";
import PaymentOptions from "./components/paymentOptions";
import CenterSection from "./components/centerSection";
import TwoColSection from "./components/twoColSection";
import XlCard from "./components/cards/xlCard";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <GridSection />
      <div className="max-w-5xl m-auto mb-24 px-2 lg:px-0">
        <XlCard/>
      </div>
      <TwoColSection/>
      <CenterSection />     
      <PaymentOptions />
      <Form />
      <Footer />
    </main>
  );
}
