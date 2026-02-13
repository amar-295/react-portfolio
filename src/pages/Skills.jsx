import {
    SkillCard,
    LearningTag,
    TimelineItem,
    SectionHeading,
} from "../components";
import { coreSkills, learningItems, timelineEntries } from "../data/skills";

/* ------------------------------------------------------------------ */
/*  Skills & Journey Page                                              */
/* ------------------------------------------------------------------ */

export default function Skills() {
    return (
        <>
            {/* ===== Hero Section ===== */}
            <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 text-center z-10 bg-white dark:bg-transparent">
                {/* Layered glow effects - only in dark mode */}
                <div className="hidden dark:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/12 blur-[120px] rounded-full -z-10"></div>
                <div className="hidden dark:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/8 blur-[80px] rounded-full -z-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-gray-900 dark:text-white">
                        Building <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-purple-500">Digital Experiences</span>
                    </h1>
                    <p className="text-gray-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A visual roadmap of my technical expertise and professional journey through the world of software development.
                    </p>
                </div>
            </section>

            {/* ===== Core Competencies ===== */}
            <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <SectionHeading title="Core Competencies" badge="Updated 2025" />

                <h3 className="text-gray-900 dark:text-slate-400 text-sm font-bold dark:font-medium mb-6 uppercase tracking-wider">
                    Frontend Development
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {coreSkills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>

                <div className="border-l-4 border-gray-900 dark:border-emerald-600/50 pl-4 mb-6">
                    <h3 className="text-gray-900 dark:text-slate-400 text-sm font-bold dark:font-medium uppercase tracking-wider">
                        Currently Learning
                    </h3>
                </div>

                <div className="flex flex-wrap gap-4">
                    {learningItems.map((item) => (
                        <LearningTag key={item.label} {...item} />
                    ))}
                </div>
            </section>

            {/* ===== Learning Journey Timeline ===== */}
            <section className="py-20 md:py-32 px-6 md:px-12 relative bg-gray-50/50 dark:bg-transparent">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Learning Journey
                    </h2>
                    <p className="text-gray-600 dark:text-slate-400 font-medium text-lg">
                        A timeline of my academic milestones and self-driven development
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Center vertical line */}
                    <div
                        className="hidden md:block bg-gray-300 dark:bg-gray-700"
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: "2px",
                            transform: "translateX(-50%)",
                        }}
                    ></div>

                    {timelineEntries.map((entry) => (
                        <TimelineItem key={entry.title} {...entry} />
                    ))}
                </div>
            </section>
        </>
    );
}