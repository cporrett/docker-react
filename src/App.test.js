import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Changed to feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

it('additional test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Changed to feature branch/i);
  expect(linkElement).toBeInTheDocument();
});