import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from '../ProjectCard';

describe('ProjectCard Component', () => {
  const mockProject = {
    title: 'Test Project',
    image: 'test.jpg',
    description: 'A test project description.',
    tags: ['React', 'Vite'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com/repo',
  };

  it('renders View Project link when demoLink is provided', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const link = screen.getByRole('link', { name: /View Project/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://demo.com');
  });

  it('renders Source Code link when githubLink is provided', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const link = screen.getByRole('link', { name: /Source Code/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/repo');
  });

  it('renders project title text', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders placeholder image text if no image is provided', () => {
     render(<ProjectCard project={{...mockProject, image: null}} index={0} />);
     expect(screen.getByText('TEST PROJECT')).toBeInTheDocument();
  });
});
