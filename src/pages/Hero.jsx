import Button from "../components/Button";

export default function Hero() {
  const badges = ["React & JS", "3+ Projects Shipped", "Accessible"];

  return (
    <section
      className="relative flex flex-col justify-center min-h-[90vh] w-full overflow-hidden bg-white dark:bg-[#0a0a0a]"
      data-purpose="hero-section"
      id="home"
    >
      <main className="flex-1 flex flex-col justify-center px-6 py-20 z-10">
        <div className="max-w-4xl mx-auto w-full space-y-10 text-center md:text-left">

          <div className="space-y-6 opacity-0 animate-fade-in-up">
            <h1 className="text-slate-900 dark:text-white tracking-tight text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05]">
              Amarnath.<br className="hidden md:block" />
              <span className="text-primary-blue block mt-2 md:mt-4">Frontend Developer</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-2xl mx-auto md:mx-0">
              I build responsive React interfaces, manage application state, and ship performant frontend projects using modern CSS.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4 opacity-0 animate-fade-in-up delay-200">
            <Button
              href="#contact"
              variant="primary"
              className="flex h-14 sm:w-[200px] items-center justify-center rounded-lg bg-primary-blue text-white text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Button>
            <Button
              href="#projects"
              variant="outline"
              className="flex h-14 sm:w-[200px] items-center justify-center rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-transparent text-slate-900 dark:text-white text-base font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              View Projects
            </Button>
          </div>

          <div className="pt-12 md:pt-16 opacity-0 animate-fade-in-up delay-300">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              {badges.map((text) => (
                <span key={text} className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-transparent text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-blue"></span>
                  {text}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-primary-blue/5 dark:bg-primary-blue/10 blur-[100px] md:blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-slate-300/20 dark:bg-slate-800/30 blur-[80px] md:blur-[100px]"></div>
      </div>
    </section>
  );
}
