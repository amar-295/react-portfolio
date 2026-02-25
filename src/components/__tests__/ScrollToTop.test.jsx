import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ScrollToTop from "../ScrollToTop";

// Mock window.scrollTo
const scrollToMock = vi.fn();
Object.defineProperty(window, "scrollTo", { value: scrollToMock, writable: true });

describe("ScrollToTop component", () => {
    beforeEach(() => {
        scrollToMock.mockClear();
        // Reset scroll position
        window.scrollY = 0;
    });

    it("is initially hidden", () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { name: /scroll to top/i });
        expect(button).toHaveClass("opacity-0");
        expect(button).toHaveClass("pointer-events-none");
    });

    it("becomes visible when scrolled past 300px", () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { name: /scroll to top/i });

        // Simulate scroll
        window.scrollY = 301;
        fireEvent.scroll(window);

        expect(button).toHaveClass("opacity-100");
        expect(button).not.toHaveClass("pointer-events-none");
    });

    it("becomes hidden again when scrolled back up", () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { name: /scroll to top/i });

        // Scroll down
        window.scrollY = 400;
        fireEvent.scroll(window);
        expect(button).toHaveClass("opacity-100");

        // Scroll up
        window.scrollY = 200;
        fireEvent.scroll(window);
        expect(button).toHaveClass("opacity-0");
    });

    it("scrolls to top when clicked", () => {
        render(<ScrollToTop />);
        const button = screen.getByRole("button", { name: /scroll to top/i });

        // Make it visible first
        window.scrollY = 400;
        fireEvent.scroll(window);

        fireEvent.click(button);

        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: "smooth",
        });
    });
});
