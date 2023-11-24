import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Header from './Header';

it('renders Header component without errors', () => {
  render(<Header />);

  expect(screen.getByText('React App')).toHaveTextContent('React App');
});

it('renders Header component without errors', () => {
  render(<Header />);

  expect(screen.getByText('error')).toBeInTheDocument();
});
