import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import DotGrid from "./components/DotGrid";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

function App() {
  return (
    <>
      {/* Separate full-width navbar */}
      <Nav />

      {/* Animated portfolio area */}
      <main className="relative overflow-hidden">
        <DotGrid />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
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
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
