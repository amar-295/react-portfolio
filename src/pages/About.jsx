import aboutMeImage from '../assets/About.svg'
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {/* Education Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-transform hover:-translate-y-1 duration-300 shadow-sm dark:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaGraduationCap className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Education</h3>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">
                      BCA | DAV Centenary College
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-transform hover:-translate-y-1 duration-300 shadow-sm dark:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaBriefcase className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Experience</h3>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">
                      Project-Based Learning (Self-Driven Projects)
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-transform hover:-translate-y-1 duration-300 shadow-sm dark:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaMapMarkerAlt className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Location</h3>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">India (Remote Friendly)</p>
                  </div>
                </div>
              </div>

              {/* Specialization Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-transform hover:-translate-y-1 duration-300 shadow-sm dark:shadow-lg group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center transition-transform group-hover:scale-110">
                      <FaCode className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Specialization</h3>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">Frontend Web Development</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
