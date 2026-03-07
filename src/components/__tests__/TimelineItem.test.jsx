import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TimelineItem from "../TimelineItem";

describe("TimelineItem", () => {
  const defaultProps = {
    period: "2023 - Present",
    subtitle: "Education",
    title: "Computer Science",
    description: "Studying at university.",
  };

  it("renders basic content correctly", () => {
    render(<TimelineItem {...defaultProps} />);

    expect(screen.getByText(defaultProps.period)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders optional emoji and badge", () => {
    render(<TimelineItem {...defaultProps} emoji="🎓" badge="Graduated" />);

    expect(screen.getByText("🎓")).toBeInTheDocument();
    expect(screen.getByText("Graduated")).toBeInTheDocument();
  });

  it("renders institution when provided", () => {
    render(<TimelineItem {...defaultProps} institution="Tech University" />);

    expect(screen.getByText("Tech University")).toBeInTheDocument();
  });

  it("applies correct classes for right alignment (default)", () => {
    render(<TimelineItem {...defaultProps} side="right" />);

    // Date info container
    const dateText = screen.getByText(defaultProps.period);
    const dateInfoContainer = dateText.closest("div").parentElement;
    expect(dateInfoContainer).toHaveClass("md:text-right");
    expect(dateInfoContainer).toHaveClass("pr-0 md:pr-12");
    expect(dateInfoContainer).toHaveClass("order-1");

    // Content card container
    const titleText = screen.getByText(defaultProps.title);
    const contentCardContainer = titleText.closest(".w-full.md\\:w-5\\/12");
    expect(contentCardContainer).toHaveClass("pl-0 md:pl-12");
    expect(contentCardContainer).toHaveClass("order-3");
  });

  it("applies correct classes for left alignment", () => {
    render(<TimelineItem {...defaultProps} side="left" />);

    // Date info container
    const dateText = screen.getByText(defaultProps.period);
    const dateInfoContainer = dateText.closest("div").parentElement;
    expect(dateInfoContainer).toHaveClass("md:text-left");
    expect(dateInfoContainer).toHaveClass("pl-0 md:pl-12");
    expect(dateInfoContainer).toHaveClass("order-1");
    expect(dateInfoContainer).toHaveClass("md:order-3");

    // Content card container
    const titleText = screen.getByText(defaultProps.title);
    const contentCardContainer = titleText.closest(".w-full.md\\:w-5\\/12");
    expect(contentCardContainer).toHaveClass("pr-0 md:pr-12");
    expect(contentCardContainer).toHaveClass("order-3");
    expect(contentCardContainer).toHaveClass("md:order-1");
  });

  it("applies correct badge colors", () => {
    const { rerender } = render(
      <TimelineItem
        {...defaultProps}
        emoji="🎓"
        badge="Badge"
        badgeColor="green"
      />,
    );
    let badge = screen.getByText("Badge");
    expect(badge).toHaveClass("dark:bg-green-900/30");

    rerender(
      <TimelineItem
        {...defaultProps}
        emoji="🎓"
        badge="Badge"
        badgeColor="blue"
      />,
    );
    badge = screen.getByText("Badge");
    expect(badge).toHaveClass("dark:bg-blue-900/30");
  });

  it("applies active styles to the dot when isActive is true", () => {
    const { container } = render(
      <TimelineItem {...defaultProps} isActive={true} />,
    );
    // The dot is the middle element with order-2
    const dot = container.querySelector(".order-2");
    expect(dot).toHaveClass("ring-4");
  });

  it("handles missing optional fields gracefully", () => {
    render(<TimelineItem {...defaultProps} />);
    expect(screen.queryByText("🎓")).not.toBeInTheDocument();
    // Badge is only rendered if emoji is present in the current implementation
    // Let's verify that behavior or if it's a bug.
    // Current code: {emoji && (... {badge && (...)})}
    expect(screen.queryByText("Graduated")).not.toBeInTheDocument();
    expect(screen.queryByText("Tech University")).not.toBeInTheDocument();
  });
});
