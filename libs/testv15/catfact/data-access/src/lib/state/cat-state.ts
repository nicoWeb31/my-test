import { BreedsInterface } from '../models/cat-fact-breeds.interface';

export interface CatsStateInterface {
  breeds: BreedsInterface[];
  error: string | null;
}

export const initialCatsState: CatsStateInterface = {
  breeds: [],
  error: null,
};
