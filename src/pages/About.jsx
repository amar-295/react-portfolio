import aboutMeImage from '../assets/About.svg'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCode } from 'react-icons/fa';
import { InfoCard } from '../components';

export default function About() {
  return (
    <section
      className="py-20 md:py-32 bg-light-surface dark:bg-navy/50"
      data-purpose="about-section"
      id="about">

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Photo Column - Right side on desktop */}
          <div className="md:col-span-5 flex justify-center md:justify-start relative order-2 md:order-2">
            <div className="relative group max-w-[280px] sm:max-w-sm mx-auto md:mx-0 aspect-square w-full">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-accent-dark/30 dark:border-accent-teal/20 rounded-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-md dark:shadow-2xl border-2 border-light-border dark:border-slate-700 bg-white">

                <img
                  alt="PROFILE_PICTURE"
                  className="w-full h-full object-cover hover:scale-105 transition-transform transition-opacity duration-700 block"
                  src={aboutMeImage}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                />
                <div className="absolute inset-0 bg-accent-teal/10 mixed-blend-multiply opacity-40 hover:opacity-0 transition-opacity duration-500 pointer-events-none dark:opacity-0"></div>
              </div>
            </div>
          </div>

          {/* Text Column - Left side on desktop */}
          <div className="md:col-span-7 order-1 md:order-1">
            <h2 className="flex items-center text-3xl md:text-4xl font-bold text-light-text-primary dark:text-white mb-10 font-display">
              About Me
              <span className="h-px bg-light-border dark:bg-white/10 grow ml-8 max-w-xs hidden md:block"></span>
            </h2>

            <div className="text-light-text-secondary dark:text-gray-300 space-y-6 text-lg leading-relaxed">
              <p>
                I'm a frontend developer focused on building clean, intuitive web interfaces with a strong emphasis on accessibility and performance. My approach centers on creating functional codebases that are both maintainable and user-centric.
              </p>
              <p>
                Currently focusing on the MERN stack and exploring RESTful API architectures. I enjoy the process of translating complex requirements into reliable, component-based frontend solutions.
              </p>
              <p>
                Pursuing a Bachelor of Computer Applications and dedicated to continuous learning through project-based development and research into modern web standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <InfoCard
                icon={FaGraduationCap}
                title="Education"
                content="BCA | DAV Centenary College"
              />
              <InfoCard
                icon={FaBriefcase}
                title="Experience"
                content="Project-Based Learning (Self-Driven Projects)"
              />
              <InfoCard
                icon={FaMapMarkerAlt}
                title="Location"
                content="India (Remote Friendly)"
              />
              <InfoCard
                icon={FaCode}
                title="Specialization"
                content="Frontend Web Development"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
