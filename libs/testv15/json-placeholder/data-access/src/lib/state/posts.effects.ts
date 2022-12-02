import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, mergeMap, tap } from 'rxjs';
import { JsonPlaceholderService } from '../service/json-placeholder.service';
import { postsActions } from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private actions: Actions,
    private postsService: JsonPlaceholderService
  ) {}

  getPostsEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(postsActions.start),
      mergeMap(() => {
          return this.postsService.post$.pipe(
            tap(console.log),
          map((posts) => {
            return postsActions.success({ posts });
          })
        );
      })
    );
  });
}
