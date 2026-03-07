import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer.jsx";

const MockIcon = (props) => <svg data-testid="mock-icon" {...props} />;

describe("Footer component", () => {
    it("renders without links arrays and asserts no list items are rendered", () => {
        // Render Footer without quickLinks and socialLinks props
        render(<Footer />);

        // The headings for the two sections
        expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
        expect(screen.getByText(/Connect/i)).toBeInTheDocument();

        // Verify that no list items (li) are rendered for the links
        const listItems = screen.queryAllByRole("listitem");
        expect(listItems).toHaveLength(0);
    });

    it("renders provided quickLinks and socialLinks correctly", () => {
        const mockQuickLinks = [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
        ];

        const mockSocialLinks = [
            { platform: "GitHub", icon: MockIcon, href: "https://github.com" },
            { platform: "Twitter", icon: MockIcon, href: "https://twitter.com" },
        ];

        render(<Footer quickLinks={mockQuickLinks} socialLinks={mockSocialLinks} />);

        // Quick Links should be rendered
        expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
        expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");

        // Social Links should be rendered (links might contain SVG and text, so use name with regex or string)
        const githubLink = screen.getByRole("link", { name: /GitHub/i });
        expect(githubLink).toHaveAttribute("href", "https://github.com");

        const twitterLink = screen.getByRole("link", { name: /Twitter/i });
        expect(twitterLink).toHaveAttribute("href", "https://twitter.com");

        // We should have 4 list items in total (2 quick links + 2 social links)
        const listItems = screen.queryAllByRole("listitem");
        expect(listItems).toHaveLength(4);

        // Icons should be rendered for social links
        const icons = screen.queryAllByTestId("mock-icon");
        expect(icons).toHaveLength(2);
    });
});
