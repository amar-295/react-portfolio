import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SocialLink from "../SocialLink.jsx";

const MockIcon = (props) => <svg data-testid="mock-icon" {...props} />;

describe("SocialLink component", () => {
    it("renders a link with default props (variant='button', platform='custom')", () => {
        render(<SocialLink href="https://example.com" icon={MockIcon} label="Test Link" />);
        const link = screen.getByRole("link", { name: /test link/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "https://example.com");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        expect(link).toHaveClass("bg-slate-800"); // custom platform base style
        expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("renders the button variant with a visible label", () => {
        render(
            <SocialLink
                href="https://github.com/test"
                icon={MockIcon}
                label="My GitHub"
                variant="button"
            />
        );
        const link = screen.getByRole("link", { name: /my github/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveTextContent("My GitHub");
    });

    it("renders the icon variant without visible label text", () => {
        render(
            <SocialLink
                href="https://linkedin.com/test"
                icon={MockIcon}
                label="LinkedIn Profile"
                variant="icon"
            />
        );
        const link = screen.getByRole("link", { name: "LinkedIn Profile" });
        expect(link).toBeInTheDocument();
        expect(link).not.toHaveTextContent("LinkedIn Profile");
        expect(link).toHaveAttribute("aria-label", "LinkedIn Profile");
        expect(link).toHaveAttribute("title", "LinkedIn Profile");
        expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("falls back to platform name for aria-label and title if label is missing on icon variant", () => {
        render(
            <SocialLink
                href="https://linkedin.com/test"
                icon={MockIcon}
                platform="linkedin"
                variant="icon"
            />
        );
        const link = screen.getByRole("link", { name: "linkedin" });
        expect(link).toHaveAttribute("aria-label", "linkedin");
        expect(link).toHaveAttribute("title", "linkedin");
    });

    it("applies the linkedin platform styles", () => {
        render(
            <SocialLink
                href="https://linkedin.com/test"
                icon={MockIcon}
                platform="linkedin"
                label="LinkedIn"
            />
        );
        const link = screen.getByRole("link", { name: "LinkedIn" });
        expect(link).toHaveClass("bg-[#0077b5]");
    });

    it("applies the github platform styles", () => {
        render(
            <SocialLink
                href="https://github.com/test"
                icon={MockIcon}
                platform="github"
                label="GitHub"
            />
        );
        const link = screen.getByRole("link", { name: "GitHub" });
        expect(link).toHaveClass("bg-slate-800");
    });

    it("applies custom platform styles when an unknown platform is provided", () => {
        render(
            <SocialLink
                href="https://example.com"
                icon={MockIcon}
                platform="unknown_platform"
                label="Unknown"
            />
        );
        const link = screen.getByRole("link", { name: "Unknown" });
        expect(link).toHaveClass("bg-slate-800"); // custom fallback style
    });

    it("applies accessibility attributes to the icon", () => {
        render(<SocialLink href="https://example.com" icon={MockIcon} label="Accessible Icon" />);
        const icon = screen.getByTestId("mock-icon");
        expect(icon).toHaveAttribute("aria-hidden", "true");
        expect(icon).toHaveAttribute("focusable", "false");
    });
});
