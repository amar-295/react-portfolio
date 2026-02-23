import PropTypes from "prop-types";
import { useState } from "react";
import { HiArrowRight, HiCheck } from "react-icons/hi";
import Button from "./Button";

/**
 * Contact form component with custom validation and Formspree hook integration.
 */

export default function ContactForm({ onSubmit }) {
    const contactServiceId = import.meta.env.VITE_CONTACT_SERVICE_ID;
    const [status, setStatus] = useState({
        submitting: false,
        succeeded: false,
        errors: []
    });
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

        setStatus({ submitting: true, succeeded: false, errors: [] });

        try {
            const response = await fetch(`https://formspree.io/f/${contactServiceId}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ submitting: false, succeeded: true, errors: [] });
                if (onSubmit) {
                    onSubmit(Object.fromEntries(formData));
                }
                form.reset();
            } else {
                const errorMessages = data.errors?.map(err => err.message) || ["Something went wrong. Please try again."];
                setStatus({ submitting: false, succeeded: false, errors: errorMessages });
            }
        } catch (error) {
            setStatus({ submitting: false, succeeded: false, errors: ["Network error. Please try again later."] });
        }
    };

    const handleSendAnother = () => {
        setStatus({ submitting: false, succeeded: false, errors: [] });
        setErrors({});
    };

    // Helper to get input classes based on error state
    const getInputClass = (fieldName) => {
        const baseClass = "block w-full rounded-lg bg-white dark:bg-[#1e293b]/50 py-3 pl-10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 sm:text-sm transition-opacity transition-transform duration-300 focus:ring-4";
        const validClass = "border-gray-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-blue-500/10 dark:focus:ring-blue-400/10";
        const errorClass = "border-rose-500 dark:border-rose-500 focus:border-rose-500 focus:ring-rose-500/10";

        return `${baseClass} ${errors[fieldName] ? errorClass : validClass}`;
    };

    // Success UI
    if (status.succeeded) {
        return (
            <div className="bg-white dark:bg-[#0f172a]/60 rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-slate-800/50 shadow-sm dark:shadow-none backdrop-blur-sm flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-500/20 border-2 border-blue-200 dark:border-blue-500 flex items-center justify-center mb-6">
                    <HiCheck className="text-blue-600 dark:text-blue-500 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent!</h3>
                <p className="text-gray-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
                    Thank you for reaching out. I've received your message and will get back to you soon.
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
                {status.errors.length > 0 && (
                    <div className="p-4 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg text-rose-600 dark:text-rose-300 text-sm">
                        {status.errors.join(", ")}
                    </div>
                )}
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
                </div>

                {/* Submit Button */}
                <div>
                    <Button
                        variant="primary"
                        fullWidth
                        type="submit"
                        disabled={status.submitting}
                        className={status.submitting ? "opacity-75 cursor-not-allowed" : ""}
                        icon={!status.submitting ? HiArrowRight : null}
                    >
                        {status.submitting ? "Sending..." : "Send Message"}
                    </Button>
                </div>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
};
