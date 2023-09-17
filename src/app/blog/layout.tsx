import Footer from "../components/footer";
import Header from "../components/header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header></Header>
        <section className="min-h-screen">
            {children}
        </section>
        <Footer></Footer>
    </>
    );
}
