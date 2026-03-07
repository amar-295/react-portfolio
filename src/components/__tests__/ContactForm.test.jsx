import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm", () => {
    const defaultEnv = "xeelgjya"; // Fallback ID from component

    // Mock global fetch
    const fetchMock = vi.fn();
    globalThis.fetch = fetchMock;

    // Mock window.alert
    const alertMock = vi.fn();
    globalThis.alert = alertMock;

    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubEnv("VITE_CONTACT_SERVICE_ID", defaultEnv);
    });

    afterEach(() => {
        vi.unstubAllEnvs();
    });

    const fillForm = (data) => {
        if (data.name !== undefined) fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: data.name } });
        if (data.email !== undefined) fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: data.email } });
        if (data.subject !== undefined) fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: data.subject } });
        if (data.message !== undefined) fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: data.message } });
    };

    it("renders all form fields and submit button", () => {
        render(<ContactForm />);

        expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
    });

    it("shows validation errors for empty fields on submit", async () => {
        render(<ContactForm />);

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText("Name is required")).toBeInTheDocument();
            expect(screen.getByText("Email is required")).toBeInTheDocument();
            expect(screen.getByText("Subject is required")).toBeInTheDocument();
            expect(screen.getByText("Message is required")).toBeInTheDocument();
        });

        expect(fetchMock).not.toHaveBeenCalled();
    });

    it("shows validation error for invalid email", async () => {
        render(<ContactForm />);

        fillForm({
            name: "John Doe",
            email: "invalid-email",
            subject: "Test Subject",
            message: "Test Message"
        });

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText("Please enter a valid email address")).toBeInTheDocument();
        });

        expect(fetchMock).not.toHaveBeenCalled();
    });

    it("submits the form successfully and displays success message", async () => {
        const mockOnSubmit = vi.fn();
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ next: "/thanks" })
        });

        render(<ContactForm onSubmit={mockOnSubmit} />);

        fillForm({
            name: "John Doe",
            email: "john@example.com",
            subject: "Hello",
            message: "World"
        });

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        expect(screen.getByRole("button", { name: /Sending.../i })).toBeInTheDocument();

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledWith(`https://formspree.io/f/${defaultEnv}`, expect.objectContaining({
                method: "POST",
                headers: { 'Accept': 'application/json' }
            }));
            expect(screen.getByText("Message Sent!")).toBeInTheDocument();
        });

        expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
            name: "John Doe",
            email: "john@example.com",
            _subject: "Hello",
            message: "World"
        }));
    });

    it("displays error message when API returns an error", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: false,
            json: async () => ({
                errors: [{ message: "Formspree API Error" }]
            })
        });

        render(<ContactForm />);

        fillForm({
            name: "John Doe",
            email: "john@example.com",
            subject: "Hello",
            message: "World"
        });

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText("Formspree API Error")).toBeInTheDocument();
        });
    });

    it("displays generic network error message on fetch failure", async () => {
        fetchMock.mockRejectedValueOnce(new Error("Network Failure"));

        render(<ContactForm />);

        fillForm({
            name: "John Doe",
            email: "john@example.com",
            subject: "Hello",
            message: "World"
        });

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText("Network error. Please try again later.")).toBeInTheDocument();
        });
    });

    it("resets the form when 'Send another' is clicked after success", async () => {
        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ next: "/thanks" })
        });

        render(<ContactForm />);

        fillForm({
            name: "Jane Doe",
            email: "jane@example.com",
            subject: "Hello",
            message: "World"
        });

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        await waitFor(() => {
            expect(screen.getByText("Message Sent!")).toBeInTheDocument();
        });

        fireEvent.click(screen.getByRole("button", { name: /Send another/i }));

        await waitFor(() => {
            expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
            // In React, input uncontrolled values stay unless we specifically test for it, but the form gets reset using form.reset()
        });
    });

    it("uses default fallback ID when VITE_CONTACT_SERVICE_ID is missing", async () => {
        // Stub to empty string
        vi.stubEnv("VITE_CONTACT_SERVICE_ID", "");

        // Temporarily redefine import.meta.env for this test since the component hardcodes the fallback
        // The component does: `const contactServiceId = import.meta.env.VITE_CONTACT_SERVICE_ID || "xeelgjya";`
        // We cannot override the fallback.
        // Thus, this branch `if (!contactServiceId)` is actually dead code right now.
        // Let's assert that the default fallback is used.

        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: async () => ({})
        });

        render(<ContactForm />);

        fillForm({
            name: "Test",
            email: "test@test.com",
            subject: "Test",
            message: "Test"
        });

        fireEvent.click(screen.getByRole("button", { name: /Send Message/i }));

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledWith("https://formspree.io/f/xeelgjya", expect.any(Object));
        });
    });
});
