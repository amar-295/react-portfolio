import ContactInfoCard from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { contactInfo, footerData, socialLinks } from "../data/contact";

/* ------------------------------------------------------------------ */
/*  Contact Page                                                      */
/* ------------------------------------------------------------------ */

export default function Contact() {
    const handleFormSubmit = () => {
        // Form submission handled successfully in ContactForm component
    };

    return (
        <>
            {/* ===== Contact Section ===== */}
            <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#020617]" id="contact">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col space-y-8">
                        {/* Badge */}
                        <div>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-gray-100 dark:bg-blue-500/10 text-gray-700 dark:text-blue-300 border border-gray-200 dark:border-blue-500/20 tracking-widest uppercase">
                                Contact
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white font-display">
                            Get in <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-purple-500">Touch</span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
                            Feel free to reach out if you have any questions or would like to discuss a project.
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-8 pt-8">
                            {contactInfo.map((info) => (
                                <ContactInfoCard key={info.id} {...info} />
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">Connect with me</p>
                            <div className="flex space-x-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.platform}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 border border-gray-200 dark:border-slate-700/50 shadow-sm dark:shadow-none"
                                        aria-label={link.label || link.platform}
                                    >
                                        <link.icon className="text-lg" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <ContactForm onSubmit={handleFormSubmit} />
                    </div>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <Footer {...footerData} />
        </>
    );
}