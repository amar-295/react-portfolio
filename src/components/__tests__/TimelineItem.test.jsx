import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import TimelineItem from '../TimelineItem';

describe('TimelineItem', () => {
    const defaultProps = {
        period: '2023 - Present',
        subtitle: 'Education',
        title: 'Master Degree',
        description: 'Test description',
    };

    test('renders with required props', () => {
        render(<TimelineItem {...defaultProps} />);
        expect(screen.getByText('2023 - Present')).toBeInTheDocument();
        expect(screen.getByText('Education')).toBeInTheDocument();
        expect(screen.getByText('Master Degree')).toBeInTheDocument();
        expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    test('renders with emoji and badge', () => {
        render(<TimelineItem {...defaultProps} emoji="🎓" badge="Grad" badgeColor="blue" />);
        expect(screen.getByText('🎓')).toBeInTheDocument();
        expect(screen.getByText('Grad')).toBeInTheDocument();
        expect(screen.getByText('Grad')).toHaveClass('bg-blue-100');
    });
});
