import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Header Component', () => {
  it('should display header', () => {
    render(<Header />);

    expect(screen.getByTestId("header-data")).toBeInTheDocument();
  });
});
