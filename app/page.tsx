import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
