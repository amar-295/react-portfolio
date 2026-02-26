import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '../ProjectCard';

// Mock the useTheme hook
vi.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

describe('ProjectCard Accessibility', () => {
  const defaultProps = {
    title: 'Test Project',
    image: 'test.jpg',
    imageAlt: 'Test Image',
    type: 'Web App',
    focus: 'Frontend',
    status: 'Completed',
    description: 'A test project description.',
    techStack: ['React', 'Vite'],
    liveDemoLink: 'https://demo.com',
    repoLink: 'https://github.com/repo',
  };

  it('renders Live Demo buttons with descriptive accessible name', () => {
    render(<ProjectCard {...defaultProps} />);
    // Should find links with the full descriptive name (via aria-label)
    const links = screen.getAllByRole('link', { name: 'Live Demo of Test Project' });
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders GitHub Repository buttons with descriptive accessible name', () => {
    render(<ProjectCard {...defaultProps} />);
    // Should find links with the full descriptive name (via aria-label)
    const links = screen.getAllByRole('link', { name: 'GitHub Repository for Test Project' });
    expect(links.length).toBeGreaterThan(0);
  });
});
