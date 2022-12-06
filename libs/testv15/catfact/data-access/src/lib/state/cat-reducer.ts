import { createReducer } from '@ngrx/store';
import { initialCatsState } from './cat-state';

export const catsReducer = createReducer(
  initialCatsState,
);
