import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ScrollToTop from "../ScrollToTop";

// Helper to set window.scrollY
const setWindowScrollY = (value) => {
    Object.defineProperty(window, "scrollY", {
        value,
        writable: true,
        configurable: true,
    });
};

// Mock window.scrollTo
const scrollToMock = vi.fn();
Object.defineProperty(window, "scrollTo", { value: scrollToMock, writable: true });

describe("ScrollToTop component", () => {
    beforeEach(() => {
        scrollToMock.mockClear();
        // Reset scroll position
        setWindowScrollY(0);
    });

    it("is initially hidden", () => {
        render(<ScrollToTop />);
        // When aria-hidden is true, the accessible name is lost, so we query by role only with hidden: true
        const button = screen.getByRole("button", { hidden: true });

        expect(button).toHaveAttribute("aria-label", "Scroll to top");
        expect(button).toHaveClass("opacity-0");
        expect(button).toHaveClass("pointer-events-none");
        expect(button).toHaveAttribute("aria-hidden", "true");
        expect(button).toHaveAttribute("tabindex", "-1");
    });

    it("becomes visible when scrolled past 300px", async () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { hidden: true });

        // Simulate scroll
        setWindowScrollY(301);
        fireEvent.scroll(window);

        // Wait for re-render
        await waitFor(() => {
            expect(button).toHaveClass("opacity-100");
        });

        expect(button).not.toHaveClass("pointer-events-none");
        expect(button).toHaveAttribute("aria-hidden", "false");
        expect(button).toHaveAttribute("tabindex", "0");

        // Once visible (aria-hidden=false), it should have its accessible name back
        // We can verify this by querying again with the name
        expect(screen.getByRole("button", { name: /scroll to top/i })).toBeInTheDocument();
    });

    it("becomes hidden again when scrolled back up", async () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { hidden: true });

        // Scroll down
        setWindowScrollY(400);
        fireEvent.scroll(window);
        await waitFor(() => {
             expect(button).toHaveClass("opacity-100");
        });

        // Scroll up
        setWindowScrollY(200);
        fireEvent.scroll(window);
        await waitFor(() => {
            expect(button).toHaveClass("opacity-0");
        });

        expect(button).toHaveAttribute("aria-hidden", "true");
        expect(button).toHaveAttribute("tabindex", "-1");
    });

    it("scrolls to top when clicked", () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { hidden: true });

        // Make it visible first
        setWindowScrollY(400);
        fireEvent.scroll(window);

        fireEvent.click(button);

        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });

    it("mounts visible if already scrolled past 300px", () => {
        setWindowScrollY(350);
        render(<ScrollToTop />);
        // Should be visible immediately
        const button = screen.getByRole("button", { name: /scroll to top/i });

        expect(button).toHaveClass("opacity-100");
        expect(button).not.toHaveClass("pointer-events-none");
        expect(button).toHaveAttribute("aria-hidden", "false");
        expect(button).toHaveAttribute("tabindex", "0");
    });
});
