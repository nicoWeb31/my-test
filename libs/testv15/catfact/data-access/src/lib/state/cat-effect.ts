import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap, tap } from 'rxjs';
import { CatFactService } from '../service/cat-fact.service';
import { catsBreedsActions } from './cat-action';

@Injectable()
export class CatsEffects {
  constructor(private actions: Actions, private catsService: CatFactService) {}

  getCatsBreedsEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(catsBreedsActions.start),
      mergeMap(() => {
        return this.catsService.catBreeds$.pipe(
          tap(console.log),
          map((breeds) => {
            return catsBreedsActions.success({ breeds });
          })
        );
      })
    );
  });
}
