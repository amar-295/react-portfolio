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


            {/* ===== Core Competencies ===== */}
            <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full" id="skills">
                <SectionHeading title="Technical Skills" badge="Updated 2025" />

                <h3 className="text-gray-900 dark:text-slate-400 text-sm font-bold dark:font-medium mb-6 uppercase tracking-wider">
                    Frontend Development
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {coreSkills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>

                <div className="border-l-4 border-gray-900 dark:border-blue-600/50 pl-4 mb-6">
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 font-display">
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