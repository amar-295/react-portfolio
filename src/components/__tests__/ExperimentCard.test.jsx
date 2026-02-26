import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperimentCard from '../ExperimentCard';
import { HiCode, HiExternalLink } from 'react-icons/hi';

describe('ExperimentCard Accessibility', () => {
  const defaultProps = {
    icon: HiCode,
    iconColor: 'indigo',
    title: 'Test Experiment',
    type: 'Component',
    status: 'Ready',
    description: 'An experiment description.',
    techStack: ['React'],
    repoLink: 'https://github.com/exp',
    demoLink: 'https://demo.com/exp',
  };

  it('renders GitHub link with descriptive accessible name', () => {
    render(<ExperimentCard {...defaultProps} />);
    // Check if the link has the correct name (via aria-label)
    const link = screen.getByRole('link', { name: 'View source code for Test Experiment on GitHub' });
    expect(link).toBeInTheDocument();
  });

  it('renders Live Demo link with descriptive accessible name', () => {
    render(<ExperimentCard {...defaultProps} />);
    const link = screen.getByRole('link', { name: 'View live demo of Test Experiment' });
    expect(link).toBeInTheDocument();
  });
});
