import { memo } from "react";
import Logo from "./Logo";
import { socialLinks } from "../data/contact";

const Footer = memo(() => {
  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-slate-800/50 pt-16 pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center">

        <div className="flex flex-col items-center gap-6 mb-12 opacity-0 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center rounded-lg font-bold text-lg">
              A
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
              Amarnath.
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium text-center max-w-sm">
            Building accessible, responsive, and performant web experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12 opacity-0 animate-fade-in-up delay-100">
          {socialLinks.map((link) => (
            <a
              key={link.platform || link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-sm font-bold text-slate-500 hover:text-primary-blue dark:text-slate-400 dark:hover:text-primary-blue uppercase tracking-widest transition-colors"
            >
              {link.platform || link.label}
            </a>
          ))}
        </div>

        <div className="w-full border-t border-slate-100 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 opacity-0 animate-fade-in-up delay-200">
          <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-wide">
            © {new Date().getFullYear()} Amarnath Kumar. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="#privacy" className="text-slate-400 dark:text-slate-500 text-xs font-semibold hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-primary-blue focus:outline-none rounded-sm">Privacy</a>
             <a href="#terms" className="text-slate-400 dark:text-slate-500 text-xs font-semibold hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-primary-blue focus:outline-none rounded-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
