import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Navbar Component', () => {
  it('should display Navbar', () => {
    render(<Navbar />);

    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
  });
  it('should display logo img', () => {
    render(<Navbar />);

    expect(screen.getByTestId('logo-img')).toBeInTheDocument();
  });
  it('should display logo text', () => {
    render(<Navbar />);

    expect(screen.getByTestId('logo-text')).toBeInTheDocument();
  });
  it('should display nav list', () => {
    render(<Navbar />);

    expect(screen.getByTestId('nav-list')).toBeInTheDocument();
  });
  it('should display nav btn', () => {
    render(<Navbar />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('should display nav item', () => {
    render(<Navbar />);

    expect(screen.getAllByTestId('nav-item')).toHaveLength(3);
  });
});
