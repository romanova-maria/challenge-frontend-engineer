import '@testing-library/jest-dom';
// @ts-ignore
import React from 'react';
import { setupServer } from 'msw/node';
import { handlers } from './src/mocks/handlers';
import { toHaveNoViolations } from 'jest-axe';

// to check a11y issues
expect.extend(toHaveNoViolations);

const server = setupServer(...handlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
