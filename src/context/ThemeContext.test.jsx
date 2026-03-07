import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useTheme } from "./ThemeContext";

// Dummy component to test context consumption
function TestConsumer() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <span data-testid="theme-value">{theme}</span>
            <button onClick={toggleTheme} data-testid="toggle-btn">Toggle</button>
        </div>
    );
}

// Dummy component for out-of-bounds error testing
function ErrorConsumer() {
    useTheme();
    return null;
}

describe("ThemeContext", () => {
    let mockMatchMedia;

    beforeEach(() => {
        // Reset local storage
        localStorage.clear();

        // Reset document classes
        document.documentElement.className = "";

        // Setup mock for window.matchMedia
        mockMatchMedia = vi.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }));
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: mockMatchMedia,
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("should initialize with theme from localStorage if available", () => {
        localStorage.setItem("theme", "dark");
        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
        expect(document.documentElement).toHaveClass("dark");
    });

    it("should fall back to system preference (dark) if no localStorage", () => {
        mockMatchMedia.mockImplementation((query) => ({
            matches: query === "(prefers-color-scheme: dark)",
            media: query,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        }));

        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
        expect(document.documentElement).toHaveClass("dark");
        // We no longer set localStorage on mount when falling back to system preference
        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("should fall back to system preference (light) if no localStorage", () => {
         mockMatchMedia.mockImplementation((query) => ({
            matches: false,
            media: query,
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
        }));

        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>
        );
        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
        expect(document.documentElement).not.toHaveClass("dark");
        // We no longer set localStorage on mount when falling back to system preference
        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("should toggle theme between light and dark when toggleTheme is called", async () => {
        const user = userEvent.setup();
        // Force light mode start
        localStorage.setItem("theme", "light");

        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>
        );

        // Initial state
        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
        expect(document.documentElement).not.toHaveClass("dark");

        // Toggle to dark
        await act(async () => {
            await user.click(screen.getByTestId("toggle-btn"));
        });

        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
        expect(document.documentElement).toHaveClass("dark");
        expect(localStorage.getItem("theme")).toBe("dark");

        // Toggle back to light
        await act(async () => {
            await user.click(screen.getByTestId("toggle-btn"));
        });

        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");
        expect(document.documentElement).not.toHaveClass("dark");
        expect(localStorage.getItem("theme")).toBe("light");
    });

    it("should dynamically update theme when system preference changes and no localStorage is set", () => {
        let changeListener = null;

        mockMatchMedia.mockImplementation((query) => ({
            matches: false, // Start with light mode
            media: query,
            addEventListener: (event, callback) => {
                if (event === "change") changeListener = callback;
            },
            removeEventListener: vi.fn(),
        }));

        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>
        );

        // Initial state is light
        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");

        // Simulate system preference changing to dark
        act(() => {
            changeListener({ matches: true });
        });

        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
        expect(document.documentElement).toHaveClass("dark");

        // Ensure localStorage remains empty
        expect(localStorage.getItem("theme")).toBeNull();
    });

    it("should not dynamically update theme when system preference changes if localStorage is set", async () => {
        const user = userEvent.setup();
        let changeListener = null;

        mockMatchMedia.mockImplementation((query) => ({
            matches: false, // Start with light mode
            media: query,
            addEventListener: (event, callback) => {
                if (event === "change") changeListener = callback;
            },
            removeEventListener: vi.fn(),
        }));

        render(
            <ThemeProvider>
                <TestConsumer />
            </ThemeProvider>
        );

        // Initial state is light
        expect(screen.getByTestId("theme-value")).toHaveTextContent("light");

        // User explicitly toggles to dark
        await act(async () => {
            await user.click(screen.getByTestId("toggle-btn"));
        });

        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
        expect(localStorage.getItem("theme")).toBe("dark");

        // Simulate system preference changing back to light
        act(() => {
            changeListener({ matches: false });
        });

        // Theme should remain dark because user explicitly set it
        expect(screen.getByTestId("theme-value")).toHaveTextContent("dark");
        expect(document.documentElement).toHaveClass("dark");
    });

    it("should throw an error when useTheme is used outside of ThemeProvider", () => {
        // Suppress console.error expected from error boundary/React throw
        const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

        expect(() => {
            render(<ErrorConsumer />);
        }).toThrow("useTheme must be used within a ThemeProvider");

        consoleSpy.mockRestore();
    });
});
