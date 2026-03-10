import PropTypes from "prop-types";
import { HiDownload } from "react-icons/hi";
import { socialLinks } from "../data/contact";

export default function MobileMenu({
    isMenuOpen,
    setIsMenuOpen,
    navLinks,
    activeSection,
    setActiveSection,
    getMobileLinkClass
}) {
    if (!isMenuOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                role="button"
                tabIndex={0}
                aria-label="Close menu"
                className="fixed inset-0 top-[72px] bg-black/20 dark:bg-black/50 backdrop-blur-[2px] md:hidden z-40"
                onClick={() => setIsMenuOpen(false)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setIsMenuOpen(false);
                    }
                }}
            />

            {/* Menu Content */}
            <div id="mobile-menu-content" className="md:hidden absolute top-[72px] left-0 w-full z-50">
                <div className="bg-white/95 dark:bg-navy/95 backdrop-blur-xl border-b border-light-border dark:border-white/10 shadow-2xl rounded-b-3xl py-8 px-6 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => {
                                    setActiveSection(link.id);
                                    setIsMenuOpen(false);
                                }}
                                className={getMobileLinkClass(link.id)}
                                aria-current={activeSection === link.id ? "page" : undefined}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div className="pt-8 flex flex-col items-center gap-6">
                            <hr className="w-12 border-2 border-gray-100 dark:border-white/10 rounded-full" />

                            {/* Resume Button */}
                            <a
                                href="/resume.pdf"
                                download="Amarnath_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-max mx-auto px-8 py-3 rounded-full flex items-center justify-center gap-2 bg-accent-dark dark:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy"
                            >
                                <span>Download Resume</span>
                                <HiDownload className="text-sm" />
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
                                        aria-label={link.label || link.platform}
                                        title={link.label || link.platform}
                                        className="text-gray-500 dark:text-slate-400 hover:text-accent-dark dark:hover:text-blue-400 transition-opacity transform hover:scale-110 hover:opacity-80 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy"
                                    >
                                        <link.icon className="text-2xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

MobileMenu.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
    getMobileLinkClass: PropTypes.func.isRequired,
};
