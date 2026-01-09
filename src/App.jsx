import "./style.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Accreditation from "./components/Accreditation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Training from "./components/Training";
import FloatingActionBar from "./components/FloatingActionButtons";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Accreditation />
      <Services />
      <Training />
      <Contact />
      <FloatingActionBar />
      <Footer />
    </>
  );
}

export default App;
