import { memo } from "react";
import SectionHeading from "../components/SectionHeading";

const skillsData = [
  {
    category: "Frontend Core",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Framer Motion", "Styled Components", "Sass", "Radix UI", "Shadcn UI"]
  },
  {
    category: "State Management & Data",
    items: ["Redux Toolkit", "Zustand", "React Query", "GraphQL", "Apollo", "REST APIs"]
  },
  {
    category: "Tools & Testing",
    items: ["Git", "Webpack", "Vite", "Jest", "React Testing Library", "Cypress"]
  }
];

const SkillGroup = memo(({ category, items, index }) => {
  return (
    <div
      className="flex flex-col opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight flex items-center gap-3">
        <span className="w-8 h-px bg-slate-300 dark:bg-slate-700"></span>
        {category}
      </h3>
      <div className="flex flex-wrap gap-3 pl-11">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md hover:border-primary-blue/30 dark:hover:border-primary-blue/30 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = "SkillGroup";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-50 dark:bg-[#050505] relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          subHeading="Technologies I use to build robust and scalable digital products."
          center={false}
        >
          Tech Stack.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {skillsData.map((group, index) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              items={group.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
