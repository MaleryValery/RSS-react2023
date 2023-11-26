import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Heading Component', () => {
  it('should display Navbar', () => {
    render(<Heading text={'test'} />);

    expect(screen.getByTestId('tag-name')).toBeInTheDocument();
  });
  
});
