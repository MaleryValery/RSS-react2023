import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { searchSlice } from '../../redux/slices/searchSlice';
import { cardsListSlice } from '../../redux/slices/cardsListSlice';
import { limitSlice } from '../../redux/slices/limitSlice';

const apiActions = {
  ...searchSlice.actions,
  ...cardsListSlice.actions,
  ...limitSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(apiActions, dispatch), [dispatch]);
};

export default useActions;