import { describe, expect, test } from 'vitest';
import { getCharactersById } from '../../../service/apiService';
import card from '../../../mocks/cardData';

describe('CardDetails', () => {
  test('card is loaded as expected', async () => {
    const cardDetails = await getCharactersById(
      '58dd187b-9005-4d06-a154-2a03bbfc0e24'
    );
    expect(cardDetails).toEqual(card);
  });
});
