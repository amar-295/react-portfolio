import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import PropTypes from "prop-types";
import Button from "./Button";
import TechTag from "./TechTag";
import { HiExternalLink, HiCode } from "react-icons/hi";

/**
 * Large featured project card — image + details side-by-side on desktop,
 * stacked on mobile. Matches the main project article layout from the
 * Projects section HTML.
 *
 * Props:
 *   image           – project screenshot URL
 *   imageAlt        – alt text for the image
 *   title           – project name
 *   type            – e.g. "Personal Project"
 *   focus           – e.g. "UI & Architecture"
 *   status          – e.g. "UI Prototype (No Backend)"
 *   description     – short description paragraph
 *   learningOutcome – italic green learning note
 *   techStack       – string[] of tech names
 *   liveDemoLink    – URL for live demo button (optional)
 *   repoLink        – URL for GitHub repo button (optional)
 *   showBorder      – show bottom border (default: true)
 */
export default function ProjectCard({
  image,
  imageAlt,
  title,
  type,
  focus,
  status,
  description,
  learningOutcome,
  techStack = [],
  liveDemoLink,
  repoLink,
  showBorder = true,
  featured = false, // New prop for featured projects
  imageDark, // New prop for dark mode screenshot (to be shown in light mode)
}) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Logic: In Light Mode, show Dark Screenshot (imageDark) for contrast.
  // In Dark Mode, show Light Screenshot (image).
  // If imageDark is not provided, fall back to image.
  const displayImage = (imageDark && !isDarkMode) ? imageDark : image;

  // Memoize Unsplash-specific props to avoid re-calculating on every render
  const unsplashProps = useMemo(() => {
    if (!displayImage.includes("unsplash.com")) return {};

    return {
      srcSet: `
        ${displayImage.replace("w=1000", "w=400")} 400w,
        ${displayImage.replace("w=1000", "w=800")} 800w,
        ${displayImage.replace("w=1000", "w=1000")} 1000w
      `,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
    };
  }, [displayImage]);

  return (
    <article
      className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 ${showBorder ? "border-b-2 border-light-border dark:border-slate-800/40 pb-16 lg:pb-24" : "pb-16 lg:pb-0"
        } ${featured ? "relative" : ""
        }`}
    >
      {/* ---- Image Column ---- */}
      <div className="w-full lg:w-5/12">
        <div className="relative group bg-light-surface dark:bg-card-bg rounded-xl overflow-hidden border-2 border-light-border dark:border-slate-800/50 shadow-sm aspect-video">
          <img
            alt={imageAlt || title}
            className="w-full h-full object-contain bg-gray-50 dark:bg-slate-900/50 transform group-hover:scale-105 transition-transform duration-500"
            src={displayImage}
            loading="lazy"
            decoding="async"
            width="800"
            height="450"
            {...unsplashProps}
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop";
            }}
          />
        </div>

        {/* Mobile-only buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 lg:hidden">
          {liveDemoLink && (
            <Button href={liveDemoLink} icon={HiExternalLink} fullWidth target="_blank" rel="noopener noreferrer">
              Live Demo
            </Button>
          )}
          {repoLink && (
            <Button variant="outline" href={repoLink} icon={HiCode} fullWidth target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </Button>
          )}
        </div>
      </div>

      {/* ---- Details Column ---- */}
      <div className="w-full lg:w-7/12 space-y-4 flex flex-col justify-center">
        {/* Title + Meta */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-light-text-primary dark:text-white leading-tight font-display">
            {title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-light-text-secondary dark:text-slate-300 mt-2 font-medium tracking-wide flex-wrap">
            <span>Type: {type}</span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span>Focus: {focus}</span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span className="text-accent-dark dark:text-blue-500 font-bold">Status: {status}</span>
          </div>
        </div>

        {/* Description + Learning Outcome */}
        <div className="space-y-4">
          <p className="text-lg text-light-text-secondary dark:text-slate-200 leading-relaxed">
            {description}
          </p>
          {learningOutcome && (
            <p className="text-base text-accent-dark dark:text-blue-400/90 font-medium italic border-l-2 border-accent-dark/50 dark:border-blue-500/30 pl-4 py-1">
              Learning Outcome: {learningOutcome}
            </p>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {techStack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>

        {/* Desktop-only buttons */}
        <div className="hidden lg:flex gap-4 pt-4">
          {liveDemoLink && (
            <Button href={liveDemoLink} icon={HiExternalLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Button>
          )}
          {repoLink && (
            <Button variant="outline" href={repoLink} icon={HiCode} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </Button>
          )}
        </div>
      </div>
    </article >
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  focus: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  learningOutcome: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string),
  liveDemoLink: PropTypes.string,
  repoLink: PropTypes.string,
  showBorder: PropTypes.bool,
  featured: PropTypes.bool,
  imageDark: PropTypes.string,
};
