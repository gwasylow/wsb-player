import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WSB-Player test', () => {
  render(<App />);
  const linkElement = screen.getByText(/WSB-Player/i);
  expect(linkElement).toBeInTheDocument();
});