import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

/**
 * Contact form component.
 *
 * Props:
 *   onSubmit – form submit handler (optional)
 */

export default function ContactForm({ onSubmit }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            // Simplified Formspree integration
            const response = await fetch("https://formspree.io/f/612amar@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
                if (onSubmit) onSubmit(Object.fromEntries(formData));
            } else {
                alert("Oops! There was a problem submitting your form. Please try again or contact me directly.");
            }
        } catch (error) {
            alert("Oops! There was a connection error. Please try again later.");
        }
    };

    const handleSendAnother = () => {
        setIsSubmitted(false);
    };

    // Success UI
    if (isSubmitted) {
        return (
            <div className="bg-white dark:bg-[#0f172a]/60 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-slate-800/50 shadow-sm dark:shadow-none backdrop-blur-sm flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-500/20 border-2 border-blue-200 dark:border-blue-500 flex items-center justify-center mb-6">
                    <i className="fa-solid fa-check text-blue-600 dark:text-blue-500 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent!</h3>
                <p className="text-gray-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
                    Thank you for reaching out. I've received your message and will get back to you soon via email or LinkedIn.
                </p>
                <Button
                    variant="outline"
                    onClick={handleSendAnother}
                >
                    Send another
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-[#0f172a]/60 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-slate-800/50 shadow-lg shadow-gray-100/50 dark:shadow-none backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-bold dark:font-medium text-gray-700 dark:text-slate-400"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i className="fa-regular fa-user text-gray-400 dark:text-slate-500"></i>
                            </div>
                            <input
                                className="block w-full rounded-lg border-gray-200 dark:border-slate-700/50 bg-white dark:bg-[#1e293b]/50 py-3 pl-10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-gray-900 dark:focus:border-blue-500 focus:ring-gray-900 dark:focus:ring-blue-500 sm:text-sm transition-colors"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                type="text"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-bold dark:font-medium text-gray-700 dark:text-slate-400"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i className="fa-solid fa-at text-gray-400 dark:text-slate-500"></i>
                            </div>
                            <input
                                className="block w-full rounded-lg border-gray-200 dark:border-slate-700/50 bg-white dark:bg-[#1e293b]/50 py-3 pl-10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-gray-900 dark:focus:border-blue-500 focus:ring-gray-900 dark:focus:ring-blue-500 sm:text-sm transition-colors"
                                id="email"
                                name="email"
                                placeholder="hello@yourcompany.com"
                                type="email"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <label
                        className="block text-sm font-bold dark:font-medium text-gray-700 dark:text-slate-400"
                        htmlFor="subject"
                    >
                        Subject
                    </label>

                    <div className="relative rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <i className="fa-regular fa-folder text-gray-400 dark:text-slate-500"></i>
                        </div>
                        <input
                            className="block w-full rounded-lg border-gray-200 dark:border-slate-700/50 bg-white dark:bg-[#1e293b]/50 py-3 pl-10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-gray-900 dark:focus:border-blue-500 focus:ring-gray-900 dark:focus:ring-blue-500 sm:text-sm transition-colors"
                            id="subject"
                            name="subject"
                            placeholder="How can I help you today?"
                            type="text"
                            required
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label
                        className="block text-sm font-bold dark:font-medium text-gray-700 dark:text-slate-400"
                        htmlFor="message"
                    >
                        Your Message
                    </label>
                    <textarea
                        className="block w-full rounded-lg border-gray-200 dark:border-slate-700/50 bg-white dark:bg-[#1e293b]/50 py-3 px-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:border-gray-900 dark:focus:border-blue-500 focus:ring-gray-900 dark:focus:ring-blue-500 sm:text-sm transition-colors"
                        id="message"
                        name="message"
                        placeholder="Share some details about your vision, goals, or just say hello..."
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <Button
                        variant="primary"
                        fullWidth
                        type="submit"
                    >
                        Send Message
                        <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                </div>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};
