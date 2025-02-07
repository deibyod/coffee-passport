import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Coffee Passport header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Coffee Passport/i);
  expect(headerElement).toBeInTheDocument();
});
