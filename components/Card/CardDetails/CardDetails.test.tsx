import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import CardDetails from './CardDetails';
import mockRouter from 'next-router-mock';
import { mockCardDetails } from '@/mock/CardDetails';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

test('Show Character Details', async () => {
  async () => {
    render(<CardDetails card={mockCardDetails} />);

    await waitFor(async () => {
      expect(screen.getByTestId('details-name')).toBeDefined();
      expect(screen.getByText('Achilles Tolliver')).toBeDefined();
      expect(screen.getByText('American')).toBeDefined();
    });
  };
});

test('Close Character Details', async () => {
  async () => {
    render(<CardDetails card={mockCardDetails} />);

    const closeBtn = screen.getByTestId('close-btn');
    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(mockRouter.query['details']).not.toBeDefined();
    });
  };
});
