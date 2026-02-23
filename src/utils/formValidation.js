/**
 * Validates the contact form data.
 * @param {FormData} formData - The form data to validate.
 * @returns {Object} An object containing error messages, if any.
 */
export const validateContactForm = (formData) => {
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

    return newErrors;
};
