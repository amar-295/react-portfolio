import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TimelineItem from '../TimelineItem';

describe('TimelineItem', () => {
    const defaultProps = {
        period: '2023 - Present',
        subtitle: 'Education',
        title: 'Computer Science',
        description: 'Studying at university.',
    };

    /**
     * Helper to verify layout classes based on side
     */
    const verifyAlignment = (side, expectedDateClasses, expectedContentClasses) => {
        render(<TimelineItem {...defaultProps} side={side} />);

        const dateInfoContainer = screen.getByText(defaultProps.period).closest('div').parentElement;
        expectedDateClasses.forEach(cls => expect(dateInfoContainer).toHaveClass(cls));

        const contentCardContainer = screen.getByText(defaultProps.title).closest('.w-full.md\\:w-5\\/12');
        expectedContentClasses.forEach(cls => expect(contentCardContainer).toHaveClass(cls));
    };

    it('renders basic content correctly', () => {
        render(<TimelineItem {...defaultProps} />);

        [defaultProps.period, defaultProps.subtitle, defaultProps.title, defaultProps.description].forEach(text => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });

    it('renders optional emoji, badge, and institution', () => {
        render(<TimelineItem {...defaultProps} emoji="🎓" badge="Graduated" institution="Tech University" />);

        ['🎓', 'Graduated', 'Tech University'].forEach(text => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });

    it('applies correct classes for right alignment (default)', () => {
        verifyAlignment(
            "right",
            ['md:text-right', 'pr-0', 'md:pr-12', 'order-1'],
            ['pl-0', 'md:pl-12', 'order-3']
        );
    });

    it('applies correct classes for left alignment', () => {
        verifyAlignment(
            "left",
            ['md:text-left', 'pl-0', 'md:pl-12', 'order-1', 'md:order-3'],
            ['pr-0', 'md:pr-12', 'order-3', 'md:order-1']
        );
    });

    it('applies correct badge colors', () => {
        const testCases = [
            { color: "green", expected: "dark:bg-green-900/30" },
            { color: "blue", expected: "dark:bg-blue-900/30" }
        ];

        testCases.forEach(({ color, expected }) => {
            const { unmount } = render(<TimelineItem {...defaultProps} emoji="🎓" badge="Badge" badgeColor={color} />);
            expect(screen.getByText('Badge')).toHaveClass(expected);
            unmount();
        });
    });

    it('applies active styles to the dot when isActive is true', () => {
        const { container } = render(<TimelineItem {...defaultProps} isActive={true} />);
        expect(container.querySelector('.order-2')).toHaveClass('ring-4');
    });

    it('handles missing optional fields gracefully', () => {
        render(<TimelineItem {...defaultProps} />);
        ['🎓', 'Graduated', 'Tech University'].forEach(text => {
            expect(screen.queryByText(text)).not.toBeInTheDocument();
        });
    });
});
