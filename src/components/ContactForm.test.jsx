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

  const fillAndSubmitForm = (name, email, subject, message) => {
    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: name },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: subject },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: message },
    });

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);
  };

  it('displays general error message on network failure', async () => {
    // Mock network error
    globalThis.fetch.mockRejectedValue(new Error('Network error'));

    render(<ContactForm />);

    fillAndSubmitForm('John Doe', 'john@example.com', 'Test Subject', 'This is a test message.');

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

    fillAndSubmitForm('Jane Doe', 'jane@example.com', 'Another Subject', 'Another test message.');

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

    fillAndSubmitForm('Success User', 'success@example.com', 'Success Subject', 'Success message.');

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Message Sent!')).toBeInTheDocument();
    });

    expect(onSubmitMock).toHaveBeenCalledWith(expect.objectContaining({
        name: 'Success User',
        email: 'success@example.com',
        _subject: 'Success Subject',
        message: 'Success message.'
    }));
  });
});
