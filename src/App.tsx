import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RoomsSection from "./components/RoomsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import LocationSection from "./components/LocationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <RoomsSection />
      <FacilitiesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
