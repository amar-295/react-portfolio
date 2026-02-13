import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Logo } from "./index";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === "dark";
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 w-full z-50 bg-light-bg/80 dark:bg-navy/80 backdrop-blur-lg border-b border-light-border dark:border-slate-800/50 h-[72px]"
            data-purpose="main-navigation"
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group transition-all duration-300">
                    <Logo className="w-9 h-9 text-accent-dark dark:text-accent-teal group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-bold tracking-tight text-light-text-primary dark:text-white font-display">
                        AMARNATH
                    </span>
                </a>

                <nav className="hidden md:flex items-center space-x-10">
                    <a
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                        href="#contact"
                    >
                        Contact
                    </a>
                </nav>

                <div className="hidden md:flex items-center space-x-6">
                    <button
                        aria-label="Toggle Theme"
                        onClick={toggleTheme}
                        className="text-slate-700 dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors flex items-center"
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

                <button className="md:hidden text-accent-dark dark:text-accent-teal focus:outline-none p-2">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </header>
    );
}
