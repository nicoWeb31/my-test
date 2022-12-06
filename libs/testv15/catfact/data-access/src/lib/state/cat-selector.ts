import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatsStateInterface } from './cat-state';

export const CATS_STATE_NAME = 'cats';
export const getCatsState =
  createFeatureSelector<CatsStateInterface>(CATS_STATE_NAME);
export const catsBreedsSelector = createSelector(
  getCatsState,
  (state) => state.breeds
);
