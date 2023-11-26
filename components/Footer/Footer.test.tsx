import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should display Footer', () => {
    render(<Footer />);

    expect(screen.getByTestId('footer-data')).toBeInTheDocument();
  });
});
