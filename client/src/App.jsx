import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import DotGrid from "./components/DotGrid";
import "./index.css";

// To do for Tomorrow!

// separate the navigation bar so that the dot animation is not present on the navbar
// add hover effects for all the buttons and links
// polish all the sections 1 by 1 and add animations to them.

function App() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      <DotGrid />
      <Nav />
      <div className="animate-fadeInUp">
        <Hero />
      </div>
      <div className="animate-fadeInUp">
        <About />
      </div>
      <div className="animate-fadeInUp">
        <Projects />
      </div>
      <div className="animate-fadeInUp">
        <Skills />
      </div>
      <div className="animate-fadeInUp">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;
