import PropTypes from "prop-types";
import Logo from "./Logo";

/**
 * Footer component with brand, quick links, and social links.
 *
 * Props:
 *   brandName     – brand name (e.g. "AMARNATH")
 *   brandInitial  – single letter for logo (e.g. "A")
 *   tagline       – short tagline text
 *   quickLinks    – array of {label, href}
 *   socialLinks   – array of {platform, icon, href}
 */

export default function Footer({
    brandName = "AMARNATH",
    tagline = "Building and learning one project at a time.",
    quickLinks = [],
    socialLinks = [],
}) {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#020617] pt-10 pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Logo className="w-8 h-8 text-gray-900 dark:text-blue-500" />
                            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                {brandName}
                            </span>
                        </div>
                        <p className="text-gray-700 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                            {tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="text-gray-700 dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal hover:underline transition-opacity text-sm font-medium hover:opacity-80"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Connect
                        </h3>
                        <ul className="space-y-2">
                            {socialLinks.map((social) => (
                                <li key={social.platform}>
                                    <a
                                        className="text-gray-700 dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-teal hover:underline transition-opacity text-sm flex items-center gap-2 font-medium hover:opacity-80"
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon className="w-5 h-5 text-center" /> {social.platform}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-gray-200 dark:border-white/10 text-center">
                    <p className="text-gray-600 dark:text-slate-400 text-xs">
                        © {new Date().getFullYear()} {brandName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    brandName: PropTypes.string,
    tagline: PropTypes.string,
    quickLinks: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            platform: PropTypes.string.isRequired,
            icon: PropTypes.elementType.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};
