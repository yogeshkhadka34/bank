import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import clsxm from "./utils/clsxm";
function App() {
  return (
    <div className="bg-primary">
      <div className="max-w-[1600px] mx-auto">
        <Navbar />
        <HeroSection />
        <Stats />
        <Features />
        <Billing />
        <CardDeal />
      </div>
    </div>
  );
}

export default App;
