import Header from "@/app/components/header";
import Hero from "./components/hero";
import GridSection from "./components/gridSection";
import Footer from "./components/footer";
import Form from "./components/form";
import PaymentOptions from "./components/paymentOptions";
import CenterSection from "./components/centerSection";
import TwoColSection from "./components/twoColSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <GridSection />
      <TwoColSection/>
      <CenterSection />     
      <PaymentOptions />
      <Form />
      <Footer />
    </main>
  );
}
