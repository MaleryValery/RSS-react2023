import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CardsList from './CardsList';
import SearchContext from '../../contexts/SearchContext';
import catdList from '../../mocks/cardList';

const mockFunction = vi.fn();
describe('CardList', () => {
  it('should render correct number of cards', () => {
    render(
      <MemoryRouter>
        <SearchContext.Provider
          value={{
            searchValue: '',
            cardsList: catdList,
            setSearchValue: mockFunction,
            setCardsList: mockFunction,
          }}
        >
          <CardsList />
        </SearchContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getAllByText('Albus Severus Potter').length).toEqual(
      catdList.length
    );
  });
  it('should display message if no cards are found', () => {
    render(
      <SearchContext.Provider
        value={{
          searchValue: '',
          cardsList: [],
          setSearchValue: mockFunction,
          setCardsList: mockFunction,
        }}
      >
        <CardsList />
      </SearchContext.Provider>
    );
    expect(screen.getByText('cannot find anything')).toBeInTheDocument();
  });
});
