import Billing from "./components/Billing";
import CTA from "./components/CTA";
import CardDeal from "./components/CardDeal";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-primary flex justify-center items-center overflow-x-hidden">
      <div className="max-w-[1600px]  ">
        <Navbar />
        <HeroSection />
        <Stats />
        <Features />
        <Billing />
        <CardDeal />
        <CTA />
        <Testimonials />
        <Footer />
        <div className="h-1"></div>
      </div>
    </div>
  );
}

export default App;
