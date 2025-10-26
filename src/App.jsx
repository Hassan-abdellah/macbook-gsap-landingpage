import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductViewer from "./Components/ProductViewer";
import Showcase from "./Components/Showcase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
}

export default App;
