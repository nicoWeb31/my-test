import { EnvironmentInjector, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, mergeMap, tap } from 'rxjs';
import { getPost$ } from '../service/json-placeholder.service';
import { postsActions } from './posts.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private actions: Actions,
    private readonly injector: EnvironmentInjector
  ) // private postsService: JsonPlaceholderService
  {}

  getPostsEffect$ = createEffect(() => {
    return this.actions.pipe(
      ofType(postsActions.start),
      mergeMap(() => {
        return this.injector.runInContext(() => {
          return getPost$().pipe(
            tap(console.log),
            map((posts) => {
              return postsActions.success({ posts });
            })
          );
        });
      })
    );
  });
}
