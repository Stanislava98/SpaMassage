import { combineReducers } from '@reduxjs/toolkit';
import modal from './modalSlice';

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    modal,
    ...asyncReducers,
  });

  return combinedReducer(state, action);
};

export default createReducer;
