import PropTypes from "prop-types";
import { logoPaths } from "../data/logoPaths";

/**
 * Reusable Logo component using the high-detail brand SVG.
 * 
 * Props:
 *   className - additional Tailwind classes for sizing
 *   color     - "currentColor" (default) or specific color class
 *   strokeWidth - width of the sketched lines (default 80 for bold look)
 */
const Logo = ({ className = "w-8 h-8", color = "currentColor", strokeWidth = 80 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-23.33 1.66 1070.67 1018.34"
            fill="none"
            className={`${className} overflow-hidden`}
            preserveAspectRatio="xMidYMid meet"
        >
            <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
                {logoPaths.map((d, index) => (
                    <path key={index} d={d} />
                ))}
            </g>
        </svg>
    );
};
Logo.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    strokeWidth: PropTypes.number
};
export default Logo;
