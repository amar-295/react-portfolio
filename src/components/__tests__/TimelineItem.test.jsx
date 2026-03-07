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

    it('renders basic content correctly', () => {
        render(<TimelineItem {...defaultProps} />);

        expect(screen.getByText(defaultProps.period)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    });

    it('renders optional emoji and badge', () => {
        render(<TimelineItem {...defaultProps} emoji="🎓" badge="Graduated" />);

        expect(screen.getByText('🎓')).toBeInTheDocument();
        expect(screen.getByText('Graduated')).toBeInTheDocument();
    });

    it('renders institution when provided', () => {
        render(<TimelineItem {...defaultProps} institution="Tech University" />);

        expect(screen.getByText('Tech University')).toBeInTheDocument();
    });

    it('applies correct classes for right alignment (default)', () => {
        render(<TimelineItem {...defaultProps} side="right" />);

        const dateInfoContainer = screen.getByText(defaultProps.period).closest('div').parentElement;
        const contentCardContainer = screen.getByText(defaultProps.title).closest('div[class*="md:w-5/12"]');

        ['md:text-right', 'pr-0', 'md:pr-12', 'order-1'].forEach(cls => expect(dateInfoContainer).toHaveClass(cls));
        ['pl-0', 'md:pl-12', 'order-3'].forEach(cls => expect(contentCardContainer).toHaveClass(cls));
    });

    it('applies correct classes for left alignment', () => {
        render(<TimelineItem {...defaultProps} side="left" />);

        const dateInfoContainer = screen.getByText(defaultProps.period).closest('div').parentElement;
        const contentCardContainer = screen.getByText(defaultProps.title).closest('div[class*="md:w-5/12"]');

        ['md:text-left', 'pl-0', 'md:pl-12', 'order-1', 'md:order-3'].forEach(cls => expect(dateInfoContainer).toHaveClass(cls));
        ['pr-0', 'md:pr-12', 'order-3', 'md:order-1'].forEach(cls => expect(contentCardContainer).toHaveClass(cls));
    });

    it('applies correct badge colors', () => {
        const { rerender } = render(<TimelineItem {...defaultProps} emoji="🎓" badge="Badge" badgeColor="green" />);
        let badge = screen.getByText('Badge');
        expect(badge).toHaveClass('dark:bg-green-900/30');

        rerender(<TimelineItem {...defaultProps} emoji="🎓" badge="Badge" badgeColor="blue" />);
        badge = screen.getByText('Badge');
        expect(badge).toHaveClass('dark:bg-blue-900/30');
    });

    it('applies active styles to the dot when isActive is true', () => {
        const { container } = render(<TimelineItem {...defaultProps} isActive={true} />);
        // The dot is the middle element with order-2
        const dot = container.querySelector('.order-2');
        expect(dot).toHaveClass('ring-4');
    });

    it('handles missing optional fields gracefully', () => {
        render(<TimelineItem {...defaultProps} />);
        expect(screen.queryByText('🎓')).not.toBeInTheDocument();
        // Badge is only rendered if emoji is present in the current implementation
        // Let's verify that behavior or if it's a bug.
        // Current code: {emoji && (... {badge && (...)})}
        expect(screen.queryByText('Graduated')).not.toBeInTheDocument();
        expect(screen.queryByText('Tech University')).not.toBeInTheDocument();
    });
});
