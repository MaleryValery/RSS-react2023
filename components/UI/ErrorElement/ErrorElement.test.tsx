import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorElement from './ErrorElement';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('ErrorElement Component', () => {
  it('should display ErrorElement', () => {
    render(<ErrorElement />);

    expect(screen.getByTestId('error-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('error-heading')).toBeInTheDocument();
    expect(screen.getByTestId('error-subheading')).toBeInTheDocument();
    expect(screen.getByTestId('error-img')).toBeInTheDocument();
  });

  it('should display error btn', () => {
    render(<ErrorElement />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
