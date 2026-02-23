import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactForm from './ContactForm';

// Mock react-icons
vi.mock('react-icons/hi', () => ({
  HiArrowRight: () => <span data-testid="arrow-right" />,
  HiCheck: () => <span data-testid="check" />
}));

// Mock Button to render simple button
vi.mock('./Button', () => ({
  // eslint-disable-next-line no-unused-vars
  default: ({ variant, fullWidth, icon, children, ...props }) => <button {...props}>{children}</button>
}));

describe('ContactForm Logic', () => {
  it('clears error when user types in input', async () => {
    render(<ContactForm />);

    // Submit empty form to trigger errors
    const submitBtn = screen.getByText(/Send Message/i);
    fireEvent.click(submitBtn);

    // Expect error for name
    // The component renders error message below input
    // The error message text is "Name is required"
    expect(await screen.findByText("Name is required")).toBeDefined();

    // Now type in the name input
    const nameInput = screen.getByLabelText(/Full Name/i);
    fireEvent.change(nameInput, { target: { value: 'John' } });

    // Expect error to disappear
    // We wait for element to be removed
    await waitFor(() => {
        const errorMsg = screen.queryByText("Name is required");
        expect(errorMsg).toBeNull();
    });
  });
});
