import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Card from './Card';
import card from '../../mocks/cardData';

vi.mock('axios');

const mockCard = card;

describe('Card Component', () => {
  it('should display card with correct data', () => {
    render(
      <MemoryRouter>
        <Card card={mockCard} />
      </MemoryRouter>
    );

    expect(screen.getByTestId('card-list-character')).toBeInTheDocument();
    expect(screen.getByTestId('card-character-name')).toHaveTextContent(
      'Albus Severus Potter'
    );
    expect(screen.getByAltText('hero')).toHaveAttribute(
      'src',
      'https://static.wikia.nocookie.net/harrypotter/images/e/e7/AlbusPotterWand.jpeg'
    );
  });

  it('should navigate to details page when clicked', () => {
    render(
      <MemoryRouter>
        <Card card={mockCard} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId('card-list-character'));

    expect(window.location.pathname).toBe('/');
  });

  it('should prevent default when clicked in details page', () => {
    render(
      <MemoryRouter
        initialEntries={['/details/58dd187b-9005-4d06-a154-2a03bbfc0e24']}
      >
        <Card card={mockCard} />
      </MemoryRouter>
    );

    const preventDefault = vi.fn();

    fireEvent.click(screen.getByTestId('card-list-character'), {
      preventDefault,
    });
  });
});
