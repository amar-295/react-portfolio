import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { Logo } from "./index";
import { socialLinks } from "../data/contact";

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
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    const getLinkClass = (id) => {
        const isActive = activeSection === id;
        return `relative text-sm font-semibold transition-colors duration-300 group ${isActive
            ? "text-accent-dark dark:text-blue-400"
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
                    <Logo className={`w-8 h-8 transition-transform duration-300 group-hover:rotate-12 ${activeSection === "home" ? "text-accent-dark dark:text-blue-500 scale-105" : "text-accent-dark dark:text-blue-500"
                        }`} />
                    <span className="text-lg font-bold tracking-tight text-light-text-primary dark:text-white font-display">
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
                            <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent-dark dark:bg-blue-400 transition-transform duration-300 origin-left ${activeSection === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                }`} />
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center space-x-6">
                    <button
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                        className="text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-blue-400 transition-colors flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
                    >
                        {isDarkMode ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            // Contrast Icon (Professional Theme Toggle)
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                                <path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor" stroke="none" />
                            </svg>
                        )}
                    </button>

                    <a
                        className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white bg-accent-dark dark:bg-blue-500 rounded-lg hover:bg-black dark:hover:bg-blue-600 transition-all duration-300 shadow-sm"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Download Resume</span>
                        <span className="material-symbols-outlined text-sm">download</span>
                    </a>
                </div>

                <div className="md:hidden flex items-center gap-6">
                    <button
                        onClick={toggleTheme}
                        className="text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-blue-400 transition-colors p-2"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? (
                            // Sun Icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            // Contrast Icon (Professional Theme Toggle)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                                <path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor" stroke="none" />
                            </svg>
                        )}
                    </button>

                    <button
                        className="text-accent-dark dark:text-blue-400 focus:outline-none p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            // Close Icon (X)
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Menu Icon (Hamburger)
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 top-[72px] bg-black/20 dark:bg-black/50 backdrop-blur-[2px] md:hidden z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Menu Content */}
                    <div className="md:hidden absolute top-[72px] left-0 w-full z-50">
                        <div className="bg-white/95 dark:bg-navy/95 backdrop-blur-xl border-b border-light-border dark:border-white/10 shadow-2xl rounded-b-3xl py-8 px-6 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.id;
                                    return (
                                        <a
                                            key={link.id}
                                            href={link.href}
                                            onClick={() => {
                                                setActiveSection(link.id);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`
                                                block w-full py-3 px-6 rounded-xl text-center text-lg font-medium transition-all duration-300
                                                ${isActive
                                                    ? "bg-accent-light/50 dark:bg-blue-500/10 text-accent-dark dark:text-blue-400 font-bold"
                                                    : "text-light-text-secondary dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-white/5"
                                                }
                                            `}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}

                                <div className="pt-8 flex flex-col items-center gap-6">
                                    <hr className="w-12 border-2 border-gray-100 dark:border-white/10 rounded-full" />

                                    {/* Resume Button */}
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-max mx-auto px-8 py-3 rounded-full flex items-center justify-center gap-2 bg-accent-dark dark:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-300 text-sm"
                                    >
                                        <span>Download Resume</span>
                                        <span className="material-symbols-outlined text-sm">download</span>
                                    </a>

                                    {/* Footer Actions: Socials */}
                                    <div className="flex items-center justify-center gap-8">
                                        {/* Social Icons */}
                                        {socialLinks.map((link) => (
                                            <a
                                                key={link.platform}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 dark:text-slate-400 hover:text-accent-dark dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                                            >
                                                <i className={`${link.icon} text-2xl`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}
