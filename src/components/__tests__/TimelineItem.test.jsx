import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TimelineItem from "../TimelineItem";

describe("TimelineItem component", () => {
  const defaultProps = {
    period: "2023 - Present",
    subtitle: "Education",
    title: "Computer Science",
    description: "Studying at university.",
  };

  it("renders basic content correctly", () => {
    render(<TimelineItem {...defaultProps} />);
    [
      defaultProps.period,
      defaultProps.subtitle,
      defaultProps.title,
      defaultProps.description,
    ].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders optional fields correctly", () => {
    render(
      <TimelineItem
        {...defaultProps}
        emoji="🎓"
        badge="Graduated"
        institution="Tech University"
      />,
    );
    ["🎓", "Graduated", "Tech University"].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it.each([
    [
      "right",
      ["md:text-right", "pr-0", "md:pr-12", "order-1"],
      ["pl-0", "md:pl-12", "order-3"],
    ],
    [
      "left",
      ["md:text-left", "pl-0", "md:pl-12", "order-1", "md:order-3"],
      ["pr-0", "md:pr-12", "order-3", "md:order-1"],
    ],
  ])(
    "applies correct classes for %s alignment layout",
    (side, dateClasses, cardClasses) => {
      render(<TimelineItem {...defaultProps} side={side} />);

      const dateInfo = screen.getByTestId("timeline-date-info");
      dateClasses.forEach((c) => expect(dateInfo).toHaveClass(c));

      const contentCard = screen.getByTestId("timeline-content-card");
      cardClasses.forEach((c) => expect(contentCard).toHaveClass(c));
    },
  );

  it.each([
    ["green", "dark:bg-green-900/30"],
    ["blue", "dark:bg-blue-900/30"],
  ])("applies correct badge color: %s", (color, expectedClass) => {
    render(
      <TimelineItem
        {...defaultProps}
        emoji="🎓"
        badge="B"
        badgeColor={color}
      />,
    );
    expect(screen.getByText("B")).toHaveClass(expectedClass);
  });

  it("applies active styles to the dot when isActive is true", () => {
    render(<TimelineItem {...defaultProps} isActive={true} />);
    expect(screen.getByTestId("timeline-dot")).toHaveClass("ring-4");
  });

  it("omits optional fields when not provided", () => {
    render(<TimelineItem {...defaultProps} />);
    ["🎓", "Graduated", "Tech University"].forEach((t) => {
      expect(screen.queryByText(t)).not.toBeInTheDocument();
    });
  });
});
