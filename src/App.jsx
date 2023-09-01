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
    <div className="bg-primary overflow-x-hidden">
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
  );
}

export default App;
