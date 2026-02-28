import { memo } from "react";

const SectionHeading = memo(({ children, subHeading, center = true }) => {
  return (
    <div className={`mb-16 md:mb-24 ${center ? "text-center" : "text-left"} opacity-0 animate-fade-in-up`}>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        {children}
      </h2>
      {subHeading && (
        <p className={`text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-2xl ${center ? "mx-auto" : ""}`}>
          {subHeading}
        </p>
      )}
    </div>
  );
});

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
