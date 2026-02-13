import PropTypes from "prop-types";

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
    brandInitial = "A",
    tagline = "Building and learning one project at a time.",
    quickLinks = [],
    socialLinks = [],
}) {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#020617] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gray-900 dark:bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md dark:shadow-lg dark:shadow-blue-900/20">
                                {brandInitial}
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-1">
                                {brandName}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                            {tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-blue-500 transition-colors text-sm font-medium"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                            Socials
                        </h3>
                        <ul className="space-y-3">
                            {socialLinks.map((social) => (
                                <li key={social.platform}>
                                    <a
                                        className="text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-blue-500 transition-colors text-sm flex items-center gap-2 font-medium"
                                        href={social.href}
                                    >
                                        <i className={social.icon}></i> {social.platform}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-slate-500 text-sm">
                        © {new Date().getFullYear()} {brandName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    brandName: PropTypes.string,
    brandInitial: PropTypes.string,
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
            icon: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};
