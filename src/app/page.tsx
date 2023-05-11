import Header from "@/app/components/header";
import Hero from "./components/hero";
import GridSection from "./components/gridSection";
import Footer from "./components/footer";
import Form from "./components/form";
import PaymentOptions from "./components/paymentOptions";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero/>
      <GridSection/>
      <PaymentOptions/>
      <Form/>
      <Footer/>
    </main>
  )
}
