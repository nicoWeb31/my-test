import { createReducer, on } from '@ngrx/store';
import { catsBreedsActions } from '../cat-action';
import { initialCatsState } from '../cat-state';

export const catsReducer = createReducer(
  initialCatsState,
  on(catsBreedsActions.start, (state) => state),
  on(catsBreedsActions.success, (state, action) => ({
    ...state,
    breeds: action.breeds,
  }))
);
