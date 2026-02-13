import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { Logo } from "./index";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === "dark";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = ["home", "about", "skills", "projects", "contact"];

        const observerOptions = {
            root: null,
            rootMargin: "-10% 0px -80% 0px",
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    const getLinkClass = (id) => {
        const isActive = activeSection === id;
        return `text-sm font-semibold transition-all duration-300 ${isActive
                ? "text-accent-dark dark:text-blue-400 scale-110"
                : "text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-blue-400"
            }`;
    };

    return (
        <header
            className="fixed top-0 w-full z-50 bg-light-bg/80 dark:bg-navy/80 backdrop-blur-lg border-b border-light-border dark:border-slate-800/50 h-[72px]"
            data-purpose="main-navigation"
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-2 group transition-all duration-300 font-display"
                    onClick={() => setActiveSection("home")}
                >
                    <Logo className={`w-10 h-10 transition-transform duration-300 group-hover:rotate-12 ${activeSection === "home" ? "text-accent-dark dark:text-blue-500 scale-110" : "text-accent-dark dark:text-blue-500"
                        }`} />
                    <span className="text-xl font-bold tracking-tight text-light-text-primary dark:text-white font-display">
                        AMARNATH
                    </span>
                </a>

                <nav className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            className={getLinkClass(link.id)}
                            href={link.href}
                            onClick={() => setActiveSection(link.id)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-6">
                    <button
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                        className="text-slate-700 dark:text-slate-300 hover:text-accent-dark dark:hover:text-blue-400 transition-colors flex items-center"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            {isDarkMode ? "light_mode" : "dark_mode"}
                        </span>
                    </button>

                    <a
                        className="inline-block px-5 py-2 text-sm font-bold text-white bg-accent-dark dark:bg-blue-500 rounded-lg hover:bg-black dark:hover:bg-blue-600 transition-all duration-300 shadow-sm"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </div>

                <button
                    className="md:hidden text-accent-dark dark:text-blue-400 focus:outline-none p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isMenuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[72px] left-0 w-full bg-white dark:bg-navy border-b border-light-border dark:border-slate-800 shadow-xl py-6 px-6 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                className={getLinkClass(link.id)}
                                href={link.href}
                                onClick={() => {
                                    setActiveSection(link.id);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 flex items-center justify-between border-t border-light-border dark:border-slate-800">
                            <span className="text-sm font-medium text-light-text-secondary dark:text-slate-400">Switch Theme</span>
                            <button
                                aria-label="Toggle Theme"
                                onClick={toggleTheme}
                                className="text-slate-700 dark:text-slate-300 p-2"
                            >
                                <span className="material-symbols-outlined">
                                    {isDarkMode ? "light_mode" : "dark_mode"}
                                </span>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
