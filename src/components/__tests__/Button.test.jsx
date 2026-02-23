import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button.jsx";

describe("Button component", () => {
    it("renders as a <button> by default", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole("button", { name: /click me/i });
        expect(button).toBeDefined();
        expect(button.tagName).toBe("BUTTON");
    });

    it("renders as an <a> when href is provided", () => {
        render(<Button href="https://example.com">Link</Button>);
        const link = screen.getByRole("link", { name: /link/i });
        expect(link).toBeDefined();
        expect(link.getAttribute("href")).toBe("https://example.com");
    });

    it("renders children correctly", () => {
        render(<Button>Button Text</Button>);
        expect(screen.getByText("Button Text")).toBeDefined();
    });

    it("renders icon when provided", () => {
        const MockIcon = () => <svg data-testid="mock-icon" />;
        render(<Button icon={MockIcon}>With Icon</Button>);
        expect(screen.getByTestId("mock-icon")).toBeDefined();
    });

    it("applies primary variant classes by default", () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole("button");
        expect(button.className).toContain("bg-gray-900");
    });

    it("applies outline variant classes when specified", () => {
        render(<Button variant="outline">Outline</Button>);
        const button = screen.getByRole("button");
        expect(button.className).toContain("bg-transparent");
        expect(button.className).toContain("border-2");
    });

    it("applies fullWidth class when specified", () => {
        render(<Button fullWidth>Full Width</Button>);
        const button = screen.getByRole("button");
        expect(button.className).toContain("w-full");
    });

    it("passes through additional props", () => {
        render(<Button data-testid="custom-btn">Props</Button>);
        expect(screen.getByTestId("custom-btn")).toBeDefined();
    });
});
