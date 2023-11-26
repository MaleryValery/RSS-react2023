import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import mockRouter from 'next-router-mock';
import Card from './Card';
import { mockCardDetailsImg, mockCardDetails } from '@/mock/CardDetails';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('Card Component', () => {
  it('should display card with correct data', () => {
    mockRouter.setCurrentUrl('/?page=1&limit=10');

    render(
      <RouterContext.Provider value={mockRouter}>
        <Card card={mockCardDetailsImg} />
      </RouterContext.Provider>
    );

    expect(screen.getByTestId('card-list-character')).toBeInTheDocument();
    expect(screen.getByTestId('card-character-name')).toHaveTextContent(
      'Lily Luna Potter'
    );
    expect(screen.getByAltText('hero')).toHaveAttribute(
      'src',
      'https://static.wikia.nocookie.net/harrypotter/images/e/e6/Lily_L._Potter.jpg'
    );
  });

  it('should show local img if image is null', () => {
    mockRouter.setCurrentUrl('/?page=1&limit=10');
    render(
      <RouterContext.Provider value={mockRouter}>
        <Card card={mockCardDetails} />
      </RouterContext.Provider>
    );
    expect(screen.getByAltText('hero')).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fassets%2Fimages%2Fno-img.png&w=640&q=75'
    );

    expect(screen.getByTestId('card-loc-img')).toBeInTheDocument();
  });
});
