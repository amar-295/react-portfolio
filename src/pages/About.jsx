import aboutMeImage from '../assets/About.svg'

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
            <div className="relative group max-w-70 md:max-w-sm mx-auto md:mx-0">
              <div className="absolute top-6 left-6 w-full h-full border-2 border-accent-dark/30 dark:border-accent-teal/20 rounded-xl transition-transform duration-500 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-md dark:shadow-2xl border-2 border-light-border dark:border-slate-700 bg-white">

                <img
                  alt="PROFILE_PICTURE"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700 block"
                  src={aboutMeImage}
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
                I'm a frontend developer who loves building interfaces that don't make
                users think. Currently focused on React and accessibility—because if
                someone can't use what I build, I haven't finished the job.
              </p>
              <p>
                Recently shipped a task management app with offline-first
                functionality (my first dive into service workers). Now learning backend
                development to understand the full stack, but UI is where I'm happiest.
              </p>
              <p>
                Currently pursuing my BCA and actively looking for internships or
                junior developer roles where I can contribute to real products.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {/* Education Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-all duration-300 shadow-sm dark:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center">
                      <i className="material-symbols-outlined text-white text-2xl">school</i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Education</h4>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">
                      BCA Student (Currently pursuing)
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-all duration-300 shadow-sm dark:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center">
                      <i className="material-symbols-outlined text-white text-2xl">work</i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Experience</h4>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">
                      Project-Based Learning (Self-Driven Projects)
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-all duration-300 shadow-sm dark:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center">
                      <i className="material-symbols-outlined text-white text-2xl">location_on</i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Location</h4>
                    <p className="text-base text-light-text-secondary dark:text-gray-300">India (Remote Friendly)</p>
                  </div>
                </div>
              </div>

              {/* Specialization Card */}
              <div className="bg-white dark:bg-lightNavy/40 p-8 rounded-xl border-2 border-light-border dark:border-white/10 hover:border-accent-dark dark:hover:border-accent-teal/40 transition-all duration-300 shadow-sm dark:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-accent-dark dark:bg-linear-to-br dark:from-accent-teal dark:to-accent-teal/80 flex items-center justify-center">
                      <i className="material-symbols-outlined text-white text-2xl">code</i>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-light-text-primary dark:text-white font-bold text-xl mb-1">Specialization</h4>
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
