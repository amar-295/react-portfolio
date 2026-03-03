import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Navbar from "../Navbar";
import { ThemeProvider } from "../../context/ThemeContext";

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
globalThis.IntersectionObserver = vi.fn(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: vi.fn(),
}));

// Mock ResizeObserver
globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

describe("Navbar Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        window.scrollTo(0, 0);
        document.body.innerHTML = "";
    });

    const renderNavbar = () => {
        return render(
            <ThemeProvider>
                <Navbar />
            </ThemeProvider>
        );
    };

    it("renders the logo and brand name", () => {
        renderNavbar();
        expect(screen.getByText("AMARNATH")).toBeInTheDocument();
    });

    it("renders navigation links", () => {
        renderNavbar();
        // Check for desktop links (hidden md:flex might still be in DOM)
        expect(screen.getAllByText("About").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Projects").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Skills").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Contact").length).toBeGreaterThan(0);
    });

    it("toggles the theme when the theme button is clicked", () => {
        renderNavbar();
        const themeButtons = screen.getAllByLabelText("Toggle Theme");
        fireEvent.click(themeButtons[0]);
    });

    it("opens the mobile menu when the hamburger icon is clicked", () => {
        renderNavbar();
        const menuButton = screen.getByLabelText("Toggle Menu");
        fireEvent.click(menuButton);

        // After clicking, check if mobile links are rendered
        const mobileLinks = screen.getAllByText("About");
        expect(mobileLinks.length).toBeGreaterThan(1);
    });

    it("updates active section when a link is clicked", () => {
        renderNavbar();
        // Use getAllByRole to avoid ambiguity between desktop and mobile links
        const aboutLinks = screen.getAllByRole("link", { name: /About/i });
        fireEvent.click(aboutLinks[0]);

        expect(aboutLinks[0]).toHaveClass("text-accent-dark");
    });
});
