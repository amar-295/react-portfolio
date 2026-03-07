import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

const BASE_CLASSES = [
  "fixed bottom-8 right-8 z-50 p-3 rounded-full",
  "shadow-lg transition-all duration-300 transform",
  "bg-accent-dark dark:bg-blue-600 text-white",
  "hover:bg-black dark:hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1",
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-dark dark:focus:ring-blue-500",
].join(" ");

const throttle = (func, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = throttle(() => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 100);

    // Check initial scroll position
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={[
        BASE_CLASSES,
        isVisible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-90 translate-y-4 pointer-events-none",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <HiArrowUp className="w-6 h-6" aria-hidden="true" />
    </button>
  );
}
