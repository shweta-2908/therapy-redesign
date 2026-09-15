import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import OfficeSection from "./components/OfficeSection";
import FAQs from "./components/FAQs";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-primary)] font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <OfficeSection />
      <FAQs />
      <CtaBanner />
      <Footer />
    </main>
  );
}
