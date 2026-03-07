import PropTypes from "prop-types";

export default function DesktopNav({
    navLinks,
    getLinkClass,
    activeSection,
    setActiveSection
}) {
    return (
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
    );
}

DesktopNav.propTypes = {
    navLinks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    getLinkClass: PropTypes.func.isRequired,
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
};
