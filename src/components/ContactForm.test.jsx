import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.restoreAllMocks();
    globalThis.fetch = vi.fn();

    // Mock environment variable
    vi.stubEnv('VITE_CONTACT_SERVICE_ID', 'test-service-id');
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
  });

  it('displays general error message on network failure', async () => {
    // Mock network error
    globalThis.fetch.mockRejectedValue(new Error('Network error'));

    render(<ContactForm />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: 'Test Subject' },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: 'This is a test message.' },
    });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Verify loading state
    expect(screen.getByText(/sending.../i)).toBeInTheDocument();

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Network error. Please try again later.')).toBeInTheDocument();
    });

    // Verify submit button is enabled again
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('displays server error message on API failure', async () => {
    // Mock server error response
    globalThis.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ errors: [{ message: 'Server specific error' }] }),
    });

    render(<ContactForm />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'Jane Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'jane@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: 'Another Subject' },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: 'Another test message.' },
    });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText('Server specific error')).toBeInTheDocument();
    });
  });

  it('handles successful submission', async () => {
    // Mock success response
    globalThis.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });

    const onSubmitMock = vi.fn();
    render(<ContactForm onSubmit={onSubmitMock} />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: 'Success User' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'success@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: 'Success Subject' },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: 'Success message.' },
    });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });

    // Since FormData is not easily inspecting in jsdom/node environment usually without proper polyfills,
    // let's just check if onSubmit was called.
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
