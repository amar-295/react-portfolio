import CodeWindow from "../components/CodeWindow";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 min-h-screen flex items-center grid-bg"
      data-purpose="hero-section"
      id="home">

      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-7 space-y-8 text-center md:text-left order-1">
          <div className="flex flex-col space-y-2">
            <h1 className="tracking-tight">
              <span className="block text-xl md:text-2xl font-mono text-accent-dark dark:text-accent-teal font-bold mb-4">
                Hi, I'm
              </span>
              <span className="block text-5xl md:text-8xl font-extrabold text-light-text-primary dark:text-white leading-tight font-display">
                Amarnath.
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 font-display">
              <span className="text-gradient">
                Frontend Developer | Open to Opportunities
              </span>
            </h2>

            <p className="max-w-3xl mx-auto md:mx-0 text-light-text-secondary dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light">
              I build responsive React interfaces, manage application state, and
              ship performant frontend projects using modern CSS.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 py-8 px-6 md:px-10 bg-light-surface dark:bg-navy/60 border-2 border-light-border dark:border-white/10 rounded-2xl shadow-md dark:shadow-2xl">
            <div className="flex-1 text-center lg:text-left">
              <span className="block text-2xl font-bold text-light-text-primary dark:text-white font-display mb-2">
                React & JS
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-dark dark:text-accent-teal/80">
                Frontend Focused
              </span>
            </div>

            <div className="hidden lg:block w-px h-12 bg-light-border dark:bg-white/10 mx-8"></div>
            <div className="flex lg:hidden w-16 h-px bg-light-border dark:bg-white/10 mx-auto"></div>
            <div className="flex-1 text-center lg:text-left">
              <span className="block text-2xl font-bold text-light-text-primary dark:text-white font-display mb-2">
                3+ Projects
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-dark dark:text-accent-teal/80">
                Shipped & Deployed
              </span>
            </div>

            <div className="hidden lg:block w-px h-12 bg-light-border dark:bg-white/10 mx-8"></div>
            <div className="flex lg:hidden w-16 h-px bg-light-border dark:bg-white/10 mx-auto"></div>
            <div className="flex-1 text-center lg:text-left">
              <span className="block text-2xl font-bold text-light-text-primary dark:text-white font-display mb-2">
                Accessible
              </span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-dark dark:text-accent-teal/80">
                WCAG Compliant
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 pt-4">
            <Button
              href="#contact"
              variant="primary"
              className="w-full md:w-auto text-lg px-8 py-4 shadow-xl hover:translate-y-[-2px]"
            >
              Contact Me
            </Button>

            <Button
              href="#projects"
              variant="outline"
              className="w-full md:w-auto text-lg px-8 py-4 shadow-sm hover:translate-y-[-2px]"
            >
              View Projects
            </Button>
          </div>
        </div>

        <div className="md:col-span-5 relative flex justify-center items-center order-2 md:order-2 mt-8 md:mt-0">
          <div className="absolute w-48 md:w-64 h-48 md:h-64 bg-accent-dark/5 dark:bg-accent-teal/10 rounded-full blur-[80px] -z-10"></div>
          <CodeWindow />
        </div>
      </div>

    </section>
  );
}
