import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Footer from "../Footer";

const MockIcon = (props) => <svg data-testid="mock-icon" {...props} />;

describe("Footer component", () => {
    it("renders with default props", () => {
        render(<Footer />);
        // Default brandName is AMARNATH
        const brandNames = screen.getAllByText("AMARNATH");
        expect(brandNames.length).toBeGreaterThan(0);

        // Default tagline
        expect(screen.getByText("Building and learning one project at a time.")).toBeInTheDocument();

        // Check for section headings
        expect(screen.getByRole("heading", { name: /quick links/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /connect/i })).toBeInTheDocument();
    });

    it("renders custom brandName and tagline", () => {
        const customBrand = "ACME Corp";
        const customTagline = "Making things since 1920.";
        render(<Footer brandName={customBrand} tagline={customTagline} />);

        const brandNames = screen.getAllByText(customBrand);
        expect(brandNames.length).toBeGreaterThan(0);
        expect(screen.getByText(customTagline)).toBeInTheDocument();
    });

    it("renders quickLinks correctly", () => {
        const mockQuickLinks = [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ];

        render(<Footer quickLinks={mockQuickLinks} />);

        // Find the Quick Links section
        const quickLinksHeading = screen.getByRole("heading", { name: /quick links/i });
        const quickLinksContainer = quickLinksHeading.parentElement;
        const listItems = within(quickLinksContainer).getAllByRole("listitem");

        expect(listItems).toHaveLength(mockQuickLinks.length);

        mockQuickLinks.forEach((link) => {
            const anchor = within(quickLinksContainer).getByRole("link", { name: link.label });
            expect(anchor).toBeInTheDocument();
            expect(anchor).toHaveAttribute("href", link.href);
        });
    });

    it("renders socialLinks correctly", () => {
        const mockSocialLinks = [
            { platform: "Twitter", icon: MockIcon, href: "https://twitter.com" },
            { platform: "GitHub", icon: MockIcon, href: "https://github.com" },
        ];

        render(<Footer socialLinks={mockSocialLinks} />);

        const connectHeading = screen.getByRole("heading", { name: /connect/i });
        const connectContainer = connectHeading.parentElement;
        const listItems = within(connectContainer).getAllByRole("listitem");

        expect(listItems).toHaveLength(mockSocialLinks.length);

        mockSocialLinks.forEach((social) => {
            const anchor = within(connectContainer).getByRole("link", { name: new RegExp(social.platform, "i") });
            expect(anchor).toBeInTheDocument();
            expect(anchor).toHaveAttribute("href", social.href);
            expect(anchor).toHaveAttribute("target", "_blank");
            expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
        });

        const icons = within(connectContainer).getAllByTestId("mock-icon");
        expect(icons).toHaveLength(mockSocialLinks.length);
    });

    it("renders copyright text correctly", () => {
        const currentYear = new Date().getFullYear();
        render(<Footer brandName="TestBrand" />);
        expect(screen.getByText(`© ${currentYear} TestBrand. All rights reserved.`)).toBeInTheDocument();
    });

    it("handles gracefully when props are null or undefined", () => {
        render(<Footer quickLinks={undefined} socialLinks={undefined} />);

        // Should not crash and should render headings
        expect(screen.getByRole("heading", { name: /quick links/i })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /connect/i })).toBeInTheDocument();

        // No list items should be present in sections
        const quickLinksHeading = screen.getByRole("heading", { name: /quick links/i });
        const quickLinksContainer = quickLinksHeading.parentElement;
        expect(within(quickLinksContainer).queryAllByRole("listitem")).toHaveLength(0);

        const connectHeading = screen.getByRole("heading", { name: /connect/i });
        const connectContainer = connectHeading.parentElement;
        expect(within(connectContainer).queryAllByRole("listitem")).toHaveLength(0);
    });
});
