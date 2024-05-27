import ButtonGradient from "./assets/svg/ButtonGradient";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
import OurWork from "./components/OurWork";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <NavBar />
        <Hero/>
        <Services/>
        <About/>
        {/* <Pricing/> {/* //todo decide on what to repurose with */ } */}
        <OurWork/>
        <ContactUs/>
        <Footer/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
