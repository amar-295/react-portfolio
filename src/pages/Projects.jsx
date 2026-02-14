import { ProjectCard, ExperimentCard, CTABanner } from "../components";
import { featuredProjects, experimentsData } from "../data/projects";
import { HiMail } from "react-icons/hi";

/* ------------------------------------------------------------------ */
/*  Projects Page                                                      */
/* ------------------------------------------------------------------ */

export default function Projects() {
    return (
        <section className="relative min-h-screen py-20 md:py-32" id="projects">
            {/* ---- Section Header ---- */}
            <header className="relative z-10 text-center mb-24 px-4">
                <span className="text-xs font-bold tracking-[0.2em] text-light-text-secondary dark:text-slate-400 uppercase">
                    My Learning Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-light-text-primary dark:text-white mt-4 tracking-tight font-display">
                    Projects - Personal Web Development Work
                </h2>
                <div className="flex justify-center pt-6">
                    <div className="w-24 h-1 bg-accent-dark dark:bg-primary-blue rounded-full"></div>
                </div>
            </header>

            {/* ---- Featured Projects ---- */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-16 relative z-10 mb-24">
                {featuredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        showBorder={index < featuredProjects.length - 1}
                    />
                ))}
            </div>

            {/* ---- CTA Banner ---- */}
            <CTABanner
                heading="Building something technical? Let's connect and discuss the details."
                buttonText="Connect with me"
                buttonIcon={HiMail}
                buttonHref="#contact"
            />

            {/* ---- Code Experiments Grid ---- */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t-2 border-light-border dark:border-slate-800/30">
                <h3 className="text-xl font-bold text-light-text-secondary dark:text-slate-400 mb-10 tracking-wide uppercase text-center lg:text-left">
                    Code Experiments &amp; UI Components
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experimentsData.map((exp) => (
                        <ExperimentCard key={exp.title} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
