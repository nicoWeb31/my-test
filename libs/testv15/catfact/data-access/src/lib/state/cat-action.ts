import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { BreedsInterface } from '../models/cat-fact-breeds.interface';

export const catsActions = createActionGroup({
  source: 'Cats',
  events: {
    'start breeds': emptyProps(),
    success: props<{ breeds: BreedsInterface[] }>(),
  },
});
