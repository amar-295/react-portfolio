import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TimelineItem from '../TimelineItem';

describe('TimelineItem component', () => {
    const defaultProps = {
        period: '2023 - Present',
        subtitle: 'Education',
        title: 'Computer Science',
        description: 'Studying at university.',
    };

    it('handles rendering and layout permutations correctly', () => {
        const scenarios = [
            {
                name: 'basic content',
                props: { ...defaultProps },
                find: [defaultProps.period, defaultProps.subtitle, defaultProps.title, defaultProps.description],
            },
            {
                name: 'optional fields',
                props: { ...defaultProps, emoji: '🎓', badge: 'Graduated', institution: 'Tech University' },
                find: ['🎓', 'Graduated', 'Tech University'],
            },
            {
                name: 'right alignment layout',
                props: { ...defaultProps, side: 'right' },
                assertions: () => {
                    const dateParent = screen.getByText(defaultProps.period).closest('div').parentElement;
                    ['md:text-right', 'pr-0', 'md:pr-12', 'order-1'].forEach(c => expect(dateParent).toHaveClass(c));
                    const cardParent = screen.getByText(defaultProps.title).closest('.w-full.md\\:w-5\\/12');
                    ['pl-0', 'md:pl-12', 'order-3'].forEach(c => expect(cardParent).toHaveClass(c));
                }
            },
            {
                name: 'left alignment layout',
                props: { ...defaultProps, side: 'left' },
                assertions: () => {
                    const dateParent = screen.getByText(defaultProps.period).closest('div').parentElement;
                    ['md:text-left', 'pl-0', 'md:pl-12', 'order-1', 'md:order-3'].forEach(c => expect(dateParent).toHaveClass(c));
                    const cardParent = screen.getByText(defaultProps.title).closest('.w-full.md\\:w-5\\/12');
                    ['pr-0', 'md:pr-12', 'order-3', 'md:order-1'].forEach(c => expect(cardParent).toHaveClass(c));
                }
            },
            {
                name: 'green badge color',
                props: { ...defaultProps, emoji: '🎓', badge: 'B', badgeColor: 'green' },
                assertions: () => expect(screen.getByText('B')).toHaveClass('dark:bg-green-900/30')
            },
            {
                name: 'blue badge color',
                props: { ...defaultProps, emoji: '🎓', badge: 'B', badgeColor: 'blue' },
                assertions: () => expect(screen.getByText('B')).toHaveClass('dark:bg-blue-900/30')
            },
            {
                name: 'active state',
                props: { ...defaultProps, isActive: true },
                assertions: (container) => expect(container.querySelector('.order-2')).toHaveClass('ring-4')
            }
        ];

        scenarios.forEach(({ props, find = [], assertions }) => {
            const { container, unmount } = render(<TimelineItem {...props} />);
            find.forEach(text => expect(screen.getByText(text)).toBeInTheDocument());
            if (assertions) assertions(container);
            unmount();
        });
    });

    it('omits optional fields when not provided', () => {
        render(<TimelineItem {...defaultProps} />);
        ['🎓', 'Graduated', 'Tech University'].forEach(t => expect(screen.queryByText(t)).not.toBeInTheDocument());
    });
});
