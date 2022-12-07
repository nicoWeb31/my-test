import { catsReducer } from './cat-reducer';
import { initialCatsState } from '../cat-state';
import { breedsMock } from './state.mock';
import { BreedsInterface } from '../../models/cat-fact-breeds.interface';
import { catsActions, catsBreedsActions } from '../cat-action';

describe('get breeds start action', () => {
  it('should return the initial state', () => {
    const action = { type: 'unknown' } as any;
    const result = catsReducer(initialCatsState, action);

    expect(result).toBe(initialCatsState);
  });

  it('should return the breeds collections', async () => {
    const breedsMockValue = breedsMock;
    const action = catsBreedsActions.success({ breeds: breedsMockValue });
    const newState = catsReducer(initialCatsState, action);

    expect(newState).toStrictEqual({
      ...initialCatsState,
      breeds: breedsMockValue,
    });
  });
});
