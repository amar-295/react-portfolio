// Regular expression for basic email validation
// Using a stricter pattern to avoid potential ReDoS issues with broad negations
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates the contact form data.
 * @param {FormData} formData - The form data to validate.
 * @returns {Object} An object containing error messages, if any.
 */
export const validateContactForm = (formData) => {
    const newErrors = {};

    const name = formData.get("name")?.toString().trim();
    if (!name) {
        newErrors.name = "Name is required";
    }

    const email = formData.get("email")?.toString().trim();
    if (!email) {
        newErrors.email = "Email is required";
    } else if (email.length > 254) {
        newErrors.email = "Email address is too long";
    } else if (!EMAIL_REGEX.test(email)) {
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
