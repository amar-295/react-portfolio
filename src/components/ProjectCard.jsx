import { memo } from "react";

const ProjectCard = memo(({ project, index }) => {
  return (
    <div
      className="flex flex-col items-stretch group opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] border border-slate-200 dark:border-slate-800 transition-transform duration-500 overflow-hidden relative"
      >
        {/* Placeholder gradient for image area - matching the high-end aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500 ease-out flex items-center justify-center">
            {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
            ) : (
                <span className="text-slate-400 dark:text-slate-600 font-mono text-sm tracking-widest">{project.title.toUpperCase()}</span>
            )}
        </div>
      </div>

      <div className="flex flex-col mt-6 gap-3">
        <h3 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-tight">
          {project.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-widest uppercase text-primary-blue bg-primary-blue/5 border border-primary-blue/10 dark:border-primary-blue/20 dark:bg-primary-blue/10 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-blue text-sm font-bold tracking-wide group/link hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                View Project
                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            )}
            {project.githubLink && (
               <a
               href={project.githubLink}
               target="_blank"
               rel="noopener noreferrer"
               className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide hover:text-slate-900 dark:hover:text-white transition-colors"
             >
               Source Code
             </a>
            )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
