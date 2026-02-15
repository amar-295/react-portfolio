import PropTypes from "prop-types";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { HiArrowRight } from "react-icons/hi";
import Button from "./Button";

/**
 * Contact form component with custom validation and Formspree hook integration.
 */

export default function ContactForm({ onSubmit }) {
    const contactServiceId = import.meta.env.VITE_CONTACT_SERVICE_ID || "xeelgjya";
    const [state, submitToFormspree] = useForm(contactServiceId);
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const name = formData.get("name")?.toString().trim();
        if (!name) {
            newErrors.name = "Name is required";
        }

        const email = formData.get("email")?.toString().trim();
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        const subject = formData.get("_subject")?.toString().trim();
        if (!subject) {
            newErrors._subject = "Subject is required";
        }

        const message = formData.get("message")?.toString().trim();
        if (!message) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLocalSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        if (!validateForm(formData)) {
            return;
        }

        if (!contactServiceId) {
            console.warn("Contact form submission failed: VITE_CONTACT_SERVICE_ID is not defined.");
            alert("The contact form is currently not configured. Please use a different method to contact me.");
            return;
        }

        // Pass the event to the Formspree hook's handler
        const result = await submitToFormspree(e);

        if (result.response.ok && onSubmit) {
            onSubmit(Object.fromEntries(formData));
        }
    };

    const handleSendAnother = () => {
        window.location.reload();
    };

    // Helper to get input classes based on error state
    const getInputClass = (fieldName) => {
        const baseClass = "block w-full rounded-lg bg-white dark:bg-[#1e293b]/50 py-3 pl-10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 sm:text-sm transition-opacity transition-transform duration-300 focus:ring-4";
        const validClass = "border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/10 dark:focus:ring-blue-400/10";
        const errorClass = "border-rose-500 dark:border-rose-500 focus:border-rose-500 focus:ring-rose-500/10";

        return `${baseClass} ${errors[fieldName] ? errorClass : validClass}`;
    };

    // Success UI
    if (state.succeeded) {
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
            <form onSubmit={handleLocalSubmit} className="space-y-6" noValidate>
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
                                <i className={`fa-regular fa-user ${errors.name ? "text-rose-500" : "text-gray-400 dark:text-slate-500"}`}></i>
                            </div>
                            <input
                                className={getInputClass("name")}
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                type="text"
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : undefined}
                                onChange={() => {
                                    if (errors.name) setErrors({ ...errors, name: null });
                                }}
                            />
                        </div>
                        {errors.name && (
                            <p id="name-error" className="text-xs text-rose-500 mt-1 ml-1" role="alert">{errors.name}</p>
                        )}
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
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
                                <i className={`fa-solid fa-at ${errors.email ? "text-rose-500" : "text-gray-400 dark:text-slate-500"}`}></i>
                            </div>
                            <input
                                className={getInputClass("email")}
                                id="email"
                                name="email"
                                placeholder="hello@yourcompany.com"
                                type="email"
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                onChange={() => {
                                    if (errors.email) setErrors({ ...errors, email: null });
                                }}
                            />
                        </div>
                        {errors.email && (
                            <p id="email-error" className="text-xs text-rose-500 mt-1 ml-1" role="alert">{errors.email}</p>
                        )}
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
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
                            <i className={`fa-regular fa-folder ${errors._subject ? "text-rose-500" : "text-gray-400 dark:text-slate-500"}`}></i>
                        </div>
                        <input
                            className={getInputClass("_subject")}
                            id="subject"
                            name="_subject"
                            placeholder="How can I help you today?"
                            type="text"
                            aria-invalid={!!errors._subject}
                            aria-describedby={errors._subject ? "subject-error" : undefined}
                            onChange={() => {
                                if (errors._subject) setErrors({ ...errors, _subject: null });
                            }}
                        />
                    </div>
                    {errors._subject && (
                        <p id="subject-error" className="text-xs text-rose-500 mt-1 ml-1" role="alert">{errors._subject}</p>
                    )}
                    <ValidationError prefix="Subject" field="_subject" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
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
                        className={`${getInputClass("message").replace("pl-10", "px-4")}`}
                        id="message"
                        name="message"
                        placeholder="Share some details about your vision, goals, or just say hello..."
                        rows="4"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        onChange={() => {
                            if (errors.message) setErrors({ ...errors, message: null });
                        }}
                    ></textarea>
                    {errors.message && (
                        <p id="message-error" className="text-xs text-rose-500 mt-1 ml-1" role="alert">{errors.message}</p>
                    )}
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-rose-500 mt-1 ml-1" />
                </div>

                {/* Submit Button */}
                <div>
                    <Button
                        variant="primary"
                        fullWidth
                        type="submit"
                        disabled={state.submitting}
                        className={state.submitting ? "opacity-75 cursor-not-allowed" : ""}
                        icon={!state.submitting ? HiArrowRight : null}
                    >
                        {state.submitting ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};
