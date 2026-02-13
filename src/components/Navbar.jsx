import { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(
        document.documentElement.classList.contains("dark")
    );

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-light-bg/80 dark:bg-navy/80 backdrop-blur-md border-b border-light-border dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold text-accent-dark dark:text-accent-teal tracking-tight"
                >
                    Amarnath
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                    >
                        Skills
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                    >
                        Projects
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="text-sm font-semibold text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors duration-300"
                    >
                        Contact
                    </Link>

                    <button
                        onClick={toggleTheme}
                        className="text-slate-700 dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal transition-colors flex items-center"
                    >
                        <i className="material-symbols-outlined text-2xl">
                            {isDarkMode ? "light_mode" : "dark_mode"}
                        </i>
                    </button>

                    <Button
                        variant="primary"
                        href="https://drive.google.com/file/d/1example/view"
                        icon="download"
                    >
                        Download Resume
                    </Button>
                </div>

                <button className="md:hidden text-accent-dark dark:text-accent-teal focus:outline-none p-2">
                    <i className="material-symbols-outlined text-3xl">menu</i>
                </button>
            </div>
        </nav>
    );
}
