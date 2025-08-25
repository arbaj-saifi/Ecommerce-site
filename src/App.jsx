import react from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Slider from "./components/slider";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
