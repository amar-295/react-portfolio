import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { footerData } from "./data/contact";

// Lazy load non-critical sections
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="h-40" />}>
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer {...footerData} />
      <ScrollToTop />
    </>
  );
}

export default App;
