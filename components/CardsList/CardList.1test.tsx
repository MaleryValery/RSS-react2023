import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import mockRouter from 'next-router-mock';
import CardsList from './CardsList';
import { noData, responseCards } from '@/mock/CardDetails';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('CardList', () => {
  it('should render correct number of cards', () => {
    mockRouter.setCurrentUrl('/?page=1&limit=10');
    render(<CardsList data={responseCards} />);
    const cardsQty = screen.getAllByText('card-list-character');
    expect(cardsQty).toHaveLength(10);
  });

  it('display message if no cards not found', () => {
    mockRouter.setCurrentUrl('/?page=1&limit=10');
    render(<CardsList data={noData} />);

    const message = screen.getByTestId('error-message');
    expect(message).toBeInTheDocument();
  });
});
