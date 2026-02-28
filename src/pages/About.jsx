import { memo } from "react";
import SectionHeading from "../components/SectionHeading";

// Timeline Data
const timelineData = [
  {
    year: "2023 - Present",
    title: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    description: "Leading UI architecture, implementing design systems, and migrating legacy codebases to modern React. Mentoring junior developers.",
    icon: "work"
  },
  {
    year: "2021 - 2023",
    title: "React Developer",
    company: "Digital Dynamics",
    description: "Developed complex data visualization dashboards. Improved application performance by 40% through code splitting and memoization.",
    icon: "code"
  },
  {
    year: "2018 - 2021",
    title: "Web Developer",
    company: "Creative Agency",
    description: "Built responsive, accessible websites for diverse clients using HTML, CSS, JavaScript, and CMS platforms.",
    icon: "web"
  },
  {
    year: "2014 - 2018",
    title: "B.Tech in Computer Science",
    company: "University of Technology",
    description: "Foundational studies in algorithms, data structures, and software engineering principles.",
    icon: "school"
  }
];

// Reusable Timeline Card Component
const TimelineCard = memo(({ item, index }) => {
  return (
    <div
      className="relative pl-8 md:pl-0 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Desktop Timeline Line & Dot */}
      <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

      {/* Mobile Timeline Line */}
      <div className="md:hidden absolute left-0 top-2 bottom-[-2rem] w-px bg-slate-200 dark:bg-slate-800"></div>

      <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

        {/* Empty space for alternating layout on desktop */}
        <div className="hidden md:block w-5/12"></div>

        {/* Central Dot */}
        <div className="absolute left-[-5px] md:relative md:left-auto md:w-2/12 flex justify-center z-10 top-2 md:top-0">
          <div className="w-3 h-3 bg-white dark:bg-[#0a0a0a] border-2 border-primary-blue rounded-full shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"></div>
        </div>

        {/* Content Card */}
        <div className="w-full md:w-5/12">
          <div className="p-6 bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {item.company}
                </p>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-blue bg-primary-blue/10 dark:bg-primary-blue/20 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                {item.year}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
});

TimelineCard.displayName = "TimelineCard";

/**
 * Render the "About" section with an introductory header and a data-driven timeline of experience.
 *
 * @returns {JSX.Element} The About section element containing the title, descriptive paragraph, and a mapped list of TimelineCard entries.
 */
export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-slate-50 dark:bg-[#050505] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left max-w-3xl opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            About Me.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            I'm a frontend developer focused on building scalable, performant web applications.
            I bridge the gap between design and engineering, ensuring interfaces are not just visually
            stunning, but architecturally sound and accessible.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-8 md:space-y-12">
          {timelineData.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
