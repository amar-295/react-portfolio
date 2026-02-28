import { useMemo } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    title: "E-commerce Analytics",
    description: "A high-performance retail dashboard focusing on real-time data visualization and stock management. Built with modular architecture for scalability.",
    image: null,
    tags: ["React", "TypeScript", "Tailwind"],
<<<<<<< HEAD
    demoLink: null,
    githubLink: null,
=======
    demoLink: "#",
    githubLink: "#",
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
  },
  {
    title: "Fintech Mobile App",
    description: "Seamless digital banking experience designed for modern users with biometric security integrations and real-time transaction tracking.",
    image: null,
    tags: ["React Native", "Redux", "Node.js"],
<<<<<<< HEAD
    demoLink: null,
    githubLink: null,
=======
    demoLink: "#",
    githubLink: "#",
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
  },
  {
    title: "SaaS Growth Tool",
    description: "Enterprise-grade marketing automation platform built with server-side rendering for maximum SEO impact and rapid page loads.",
    image: null,
    tags: ["Next.js", "GraphQL", "Prisma"],
<<<<<<< HEAD
    demoLink: null,
    githubLink: null,
=======
    demoLink: "#",
    githubLink: "#",
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
  },
  {
    title: "Design System UI",
    description: "A comprehensive component library built from the ground up focusing on accessibility, theming, and developer experience.",
    image: null,
    tags: ["React", "Storybook", "CSS"],
<<<<<<< HEAD
    demoLink: null,
    githubLink: null,
=======
    demoLink: "#",
    githubLink: "#",
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
  }
];

/**
 * Render the "Selected Work" section containing a responsive, memoized grid of project cards, a "View More on GitHub" link, and a subtle decorative background accent.
 *
 * The component memoizes the rendered ProjectCard elements to avoid re-rendering the list on repeated renders.
 *
 * @returns {JSX.Element} A section element containing the projects grid, heading, CTA link, and decorative background.
 */
export default function Projects() {
  const renderedProjects = useMemo(() => {
    return projectsData.map((project, index) => (
      <ProjectCard key={project.title} project={project} index={index} />
    ));
  }, []);

  return (
<<<<<<< HEAD
    <section
      id="projects"
      className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-slate-800/50 relative"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
=======
    <section
      id="projects"
      className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-slate-800/50 relative"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
          subHeading="A curated collection of digital experiences designed for scale and performance."
          center={false}
        >
          Selected Work.
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {renderedProjects}
        </div>
<<<<<<< HEAD

        <div className="mt-24 text-center md:text-left">
           <a
=======

        <div className="mt-24 text-center md:text-left">
           <a
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
              href="https://github.com/amarnath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-transparent px-8 text-slate-900 dark:text-white text-base font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              View More on GitHub
            </a>
        </div>
      </div>
<<<<<<< HEAD

=======

>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
      {/* Subtle Background Accent */}
      <div className="absolute top-[20%] right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-slate-100/50 dark:bg-slate-900/20 blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
}
