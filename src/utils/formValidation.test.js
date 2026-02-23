import { describe, it, expect } from 'vitest';
import { validateContactForm } from './formValidation';

describe('validateContactForm', () => {
    it('returns no errors for valid data', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'john@example.com');
        formData.append('_subject', 'Hello');
        formData.append('message', 'This is a message');

        const errors = validateContactForm(formData);
        expect(errors).toEqual({});
    });

    it('returns error when name is missing', () => {
        const formData = new FormData();
        formData.append('email', 'john@example.com');
        formData.append('_subject', 'Hello');
        formData.append('message', 'This is a message');

        const errors = validateContactForm(formData);
        expect(errors.name).toBe('Name is required');
    });

    it('returns error when email is missing', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('_subject', 'Hello');
        formData.append('message', 'This is a message');

        const errors = validateContactForm(formData);
        expect(errors.email).toBe('Email is required');
    });

    it('returns error for invalid email', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'invalid-email');
        formData.append('_subject', 'Hello');
        formData.append('message', 'This is a message');

        const errors = validateContactForm(formData);
        expect(errors.email).toBe('Please enter a valid email address');
    });

    it('returns error when subject is missing', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'john@example.com');
        formData.append('message', 'This is a message');

        const errors = validateContactForm(formData);
        expect(errors._subject).toBe('Subject is required');
    });

    it('returns error when message is missing', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        formData.append('email', 'john@example.com');
        formData.append('_subject', 'Hello');

        const errors = validateContactForm(formData);
        expect(errors.message).toBe('Message is required');
    });

    it('trims whitespace and validates accordingly', () => {
        const formData = new FormData();
        formData.append('name', '   ');
        formData.append('email', '   ');
        formData.append('_subject', '   ');
        formData.append('message', '   ');

        const errors = validateContactForm(formData);
        expect(errors.name).toBe('Name is required');
        expect(errors.email).toBe('Email is required');
        expect(errors._subject).toBe('Subject is required');
        expect(errors.message).toBe('Message is required');
    });

    it('returns error when email is too long', () => {
        const formData = new FormData();
        formData.append('name', 'John Doe');
        // 250 'a's + '@example.com' (12 chars) = 262 chars > 254
        const longEmail = 'a'.repeat(250) + '@example.com';
        formData.append('email', longEmail);
        formData.append('_subject', 'Hello');
        formData.append('message', 'This is a message');

        const errors = validateContactForm(formData);
        expect(errors.email).toBe('Email address is too long');
    });
});
