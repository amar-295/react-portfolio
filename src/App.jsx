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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] bg-gray-900 dark:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-xl transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1" className="focus:outline-none">
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
