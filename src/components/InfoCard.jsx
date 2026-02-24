import PropTypes from "prop-types";

/**
 * A reusable card component for displaying information with an icon, title, and content.
 * Used in the About section for Education, Experience, Location, etc.
 *
 * Props:
 *   icon     – The icon component to display (e.g., FaGraduationCap).
 *   title    – The title of the card (e.g., "Education").
 *   content  – The content text or description.
 */
export default function InfoCard({ icon: Icon, title, content }) {
  return (
    <div className="bg-white dark:bg-lightNavy/40 p-6 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-transform hover:-translate-y-1 duration-300 shadow-sm dark:shadow-lg group">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center transition-transform group-hover:scale-110">
            <Icon className="text-white text-2xl" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">{title}</h3>
          <p className="text-base text-light-text-secondary dark:text-gray-300">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
