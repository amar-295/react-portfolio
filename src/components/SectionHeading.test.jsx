import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SectionHeading from "./SectionHeading";

describe("SectionHeading Component", () => {
    it("renders the title correctly", () => {
        render(<SectionHeading title="Experience" />);
        expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeInTheDocument();
    });

    it("renders the fallback title when title is omitted (negative test)", () => {
        render(<SectionHeading />);
        expect(screen.getByRole("heading", { level: 2, name: "Untitled Section" })).toBeInTheDocument();
    });

    it("renders the badge conditionally", () => {
        const { rerender } = render(<SectionHeading title="Projects" badge="New" />);
        expect(screen.getByText("New")).toBeInTheDocument();

        rerender(<SectionHeading title="Projects" />);
        expect(screen.queryByText("New")).not.toBeInTheDocument();
    });

    it("replaces 'border-' with 'bg-' correctly for multiple classes", () => {
        // We need to test the resulting DOM element
        const { container } = render(
            <SectionHeading
                title="Skills"
                borderColor="border-red-500 dark:border-blue-500 md:border-green-500"
            />
        );

        // Find the decorative bar. It has aria-hidden="true" and specific classes
        // The first child of the flex container is our bar
        const decorativeBar = container.querySelector('div[aria-hidden="true"]');

        expect(decorativeBar).toBeInTheDocument();
        expect(decorativeBar).toHaveClass("bg-red-500");
        expect(decorativeBar).toHaveClass("dark:bg-blue-500");
        expect(decorativeBar).toHaveClass("md:bg-green-500");

        // Ensure the original border classes are NOT present
        expect(decorativeBar).not.toHaveClass("border-red-500");
        expect(decorativeBar).not.toHaveClass("dark:border-blue-500");
        expect(decorativeBar).not.toHaveClass("md:border-green-500");
    });

    it("handles missing or undefined borderColor gracefully", () => {
        const { container } = render(<SectionHeading title="About" borderColor={undefined} />);
        const decorativeBar = container.querySelector('div[aria-hidden="true"]');

        expect(decorativeBar).toBeInTheDocument();
        expect(decorativeBar).toHaveClass("bg-gray-900");
        expect(decorativeBar).toHaveClass("dark:bg-primary-blue");
    });
});
