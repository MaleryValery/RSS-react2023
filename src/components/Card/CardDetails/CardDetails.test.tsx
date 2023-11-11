import { describe, expect, test } from 'vitest';
import ApiService from '../../../service/apiService';
import card from './cardData';

describe('CardDetails', () => {
  test('card is loaded as expected', async () => {
    const cardDetails = await ApiService.getCharactersById(
      '58dd187b-9005-4d06-a154-2a03bbfc0e24'
    );
    expect(cardDetails).toEqual(card);
  });
});
