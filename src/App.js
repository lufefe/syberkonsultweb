import ButtonGradient from "./assets/customsvg/ButtonGradient";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Router>
          <NavBar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
