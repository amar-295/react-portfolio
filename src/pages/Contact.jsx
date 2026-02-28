import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

/**
 * Render the site's contact section containing contact information and a contact form.
 *
 * Manages local submission state (isSubmitting, isSuccess, error), posts form data to Formspree when
 * VITE_CONTACT_SERVICE_ID is provided, and simulates a successful submission when that ID is missing.
 * Displays success and error UI states and resets the form on successful submission.
 *
 * @returns {JSX.Element} A React element representing the contact section UI.
 */
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

<<<<<<< HEAD
    const form = e.target;
    const formData = new FormData(form);
=======
    const formData = new FormData(e.target);
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
    const serviceId = import.meta.env.VITE_CONTACT_SERVICE_ID;

    if (!serviceId) {
      console.warn("Contact form submitted, but VITE_CONTACT_SERVICE_ID is missing.");
      // Simulate network request for demo purposes if ID is missing
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
<<<<<<< HEAD
        form.reset();
=======
        e.target.reset();
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
      }, 1000);
      return;
    }

    try {
      const response = await globalThis.fetch(`https://formspree.io/f/${serviceId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
<<<<<<< HEAD
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Contact Form Submission Error:", err);
=======
        e.target.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

<<<<<<< HEAD
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "hello@amarnath.dev";
  const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/in/amarnath";

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-slate-800/50"
    >
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-start">

=======
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-white dark:bg-[#0a0a0a] border-t border-slate-100 dark:border-slate-800/50"
    >
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-start">

>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
        {/* Contact Info */}
        <div className="opacity-0 animate-fade-in-up">
          <SectionHeading center={false}>
            Let's Connect.
          </SectionHeading>
<<<<<<< HEAD

=======

>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light mt-6 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
<<<<<<< HEAD
            <a
              href={`mailto:${contactEmail}`}
              className="group flex items-center gap-4 text-slate-900 dark:text-white hover:text-primary-blue dark:hover:text-primary-blue transition-colors focus-visible:ring-2 focus-visible:ring-primary-blue rounded-lg p-1"
=======
            <a
              href="mailto:hello@amarnath.dev"
              className="group flex items-center gap-4 text-slate-900 dark:text-white hover:text-primary-blue dark:hover:text-primary-blue transition-colors"
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 group-hover:bg-primary-blue/10 transition-colors">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
<<<<<<< HEAD
              <span className="font-semibold text-lg">{contactEmail}</span>
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-slate-900 dark:text-white hover:text-primary-blue dark:hover:text-primary-blue transition-colors focus-visible:ring-2 focus-visible:ring-primary-blue rounded-lg p-1"
=======
              <span className="font-semibold text-lg">hello@amarnath.dev</span>
            </a>

            <a
              href="https://linkedin.com/in/amarnath"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-slate-900 dark:text-white hover:text-primary-blue dark:hover:text-primary-blue transition-colors"
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900 group-hover:bg-primary-blue/10 transition-colors">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <span className="font-semibold text-lg">LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
<<<<<<< HEAD
        <form
=======
        <form
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full opacity-0 animate-fade-in-up delay-200"
          data-testid="contact-form"
        >
          {isSuccess ? (
            <div className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center animate-fade-in-up">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
<<<<<<< HEAD
              <button
                type="button"
=======
              <button
                type="button"
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
                onClick={() => setIsSuccess(false)}
                className="mt-6 text-sm font-semibold text-primary-blue hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Full Name</label>
<<<<<<< HEAD
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] text-slate-900 dark:text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue h-14 px-5 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm"
                  placeholder="John Doe"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] text-slate-900 dark:text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue h-14 px-5 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] text-slate-900 dark:text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue p-5 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 min-h-[160px] resize-y shadow-sm"
=======
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] text-slate-900 dark:text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue h-14 px-5 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm"
                  placeholder="John Doe"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] text-slate-900 dark:text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue h-14 px-5 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 shadow-sm"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111] text-slate-900 dark:text-white focus:border-primary-blue focus:ring-1 focus:ring-primary-blue p-5 text-base transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 min-h-[160px] resize-y shadow-sm"
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {error && (
                <div className="text-red-500 text-sm font-medium pl-1">
                  {error}
                </div>
              )}

<<<<<<< HEAD
              <button
=======
              <button
>>>>>>> a9d6ba74e05597ac8525b7741cc4048dc2cbbb4c
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center justify-center gap-3 w-full bg-primary-blue hover:bg-blue-700 text-white font-bold h-14 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </>
          )}
        </form>

      </div>
    </section>
  );
}
