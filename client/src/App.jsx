import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

function App() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      <Nav />
      <ThemeToggle />
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
