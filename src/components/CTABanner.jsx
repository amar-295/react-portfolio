import PropTypes from "prop-types";
import Button from "./Button";

/**
 * Glassmorphism call-to-action banner.
 *
 * Props:
 *   heading     – CTA heading text
 *   buttonText  – label for the action button (default: "Contact Me")
 *   buttonIcon  – Material Symbols icon name (default: "mail")
 *   buttonHref  – link URL (default: "#")
 */
export default function CTABanner({
    heading,
    buttonText = "Contact Me",
    buttonIcon,
    buttonHref = "#",
}) {
    return (
        <div className="max-w-4xl mx-auto my-24 text-center px-4 relative z-10">
            <div className="bg-gray-50 dark:bg-card-bg/50 backdrop-blur-xl p-10 rounded-xl border-2 border-gray-200 dark:border-slate-800/50 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{heading}</h3>
                <div className="mt-8">
                    <Button variant="primary" href={buttonHref} icon={buttonIcon}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

CTABanner.propTypes = {
    heading: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    buttonHref: PropTypes.string,
};
