import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === "dark";

    return (
        <button
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className={`text-light-text-secondary dark:text-slate-300 hover:text-accent-dark dark:hover:text-blue-400 transition-opacity flex items-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg dark:focus-visible:ring-offset-navy ${className}`}
        >
            {isDarkMode ? (
                // Sun Icon
                <svg className="w-5 h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                // Contrast Icon (Professional Theme Toggle)
                <svg className="w-5 h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
                    <path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor" stroke="none" />
                </svg>
            )}
        </button>
    );
}

ThemeToggle.propTypes = {
    className: PropTypes.string,
};
