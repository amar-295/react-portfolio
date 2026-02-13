import PropTypes from "prop-types";

/**
 * A single entry in the Learning Journey timeline.
 * Alternates layout based on `side` prop.
 *
 * Props:
 *   period      – e.g. "2023 - Present"
 *   subtitle    – e.g. "Formal Education"
 *   emoji       – emoji displayed in the card
 *   badge       – badge text (e.g. "Class of 2025")
 *   badgeColor  – "green" | "emerald" (controls badge color theme)
 *   title       – card heading
 *   institution – optional subtitle under the title
 *   description – card body text
 *   side        – "right" (card on right) | "left" (card on left)
 *   dotColor    – tailwind color for the center dot (default: "blue")
 *   isActive    – whether the dot gets a ring effect (default: false)
 */

const badgeColors = {
    green: "bg-blue-100 dark:bg-green-900/30 text-blue-700 dark:text-green-400 border-blue-200 dark:border-green-800 font-bold dark:font-normal",
    emerald: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 font-bold dark:font-normal",
};

const dotColors = {
    blue: "border-blue-500 dark:border-blue-500",
    emerald: "border-emerald-500 dark:border-emerald-500",
};

const dotBgColors = {
    blue: "bg-primary-blue dark:bg-primary-blue",
    emerald: "bg-emerald-500 dark:bg-emerald-500",
};

export default function TimelineItem({
    period,
    subtitle,
    emoji,
    badge,
    badgeColor = "green",
    title,
    institution,
    description,
    side = "right",
    dotColor = "blue",
    isActive = false,
}) {
    const isRight = side === "right";

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12 relative">
            {/* ---- Date Info ---- */}
            <div
                className={`w-full md:w-5/12 mb-4 md:mb-0 ${isRight
                    ? "text-center md:text-right pr-0 md:pr-12 order-1"
                    : "text-center md:text-left pl-0 md:pl-12 order-1 md:order-3"
                    }`}
            >
                <h4 className="text-gray-900 dark:text-white font-extrabold dark:font-bold text-xl dark:text-lg">{period}</h4>
                <p className="text-gray-600 dark:text-slate-400 font-semibold dark:font-normal text-sm uppercase tracking-wide">{subtitle}</p>
            </div>

            {/* ---- Center Dot ---- */}
            <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-6 h-6 border-2 rounded-full z-10 bg-white dark:bg-gray-900 order-2 ${dotColors[dotColor] || dotColors.blue
                    } ${isActive ? "ring-4 ring-white dark:ring-gray-900 shadow-sm" : ""}`}
            >
                <div
                    className={`w-2 h-2 rounded-full ${dotBgColors[dotColor] || dotBgColors.blue
                        }`}
                ></div>
            </div>

            {/* ---- Content Card ---- */}
            <div
                className={`w-full md:w-5/12 ${isRight
                    ? "pl-0 md:pl-12 order-3"
                    : "pr-0 md:pr-12 order-3 md:order-1"
                    }`}
            >
                <div className="bg-gray-50 dark:bg-transparent border border-gray-100 dark:border-white/10 p-8 rounded-xl relative hover:border-gray-900 dark:hover:border-primary-blue/30 transition-all shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none">
                    {emoji && (
                        <div className="mb-5 flex justify-between items-start">
                            <span className="text-4xl">{emoji}</span>
                            {badge && (
                                <span
                                    className={`text-xs px-3 py-1 rounded-full border ${badgeColors[badgeColor] || badgeColors.green
                                        }`}
                                >
                                    {badge}
                                </span>
                            )}
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    {institution && (
                        <p className="text-gray-600 dark:text-slate-400 font-medium dark:font-normal text-sm mb-4">{institution}</p>
                    )}
                    <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}

TimelineItem.propTypes = {
    period: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    emoji: PropTypes.string,
    badge: PropTypes.string,
    badgeColor: PropTypes.oneOf(["green", "emerald"]),
    title: PropTypes.string.isRequired,
    institution: PropTypes.string,
    description: PropTypes.string.isRequired,
    side: PropTypes.oneOf(["right", "left"]),
    dotColor: PropTypes.oneOf(["blue", "emerald"]),
    isActive: PropTypes.bool,
};
