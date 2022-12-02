import { Routes } from '@angular/router';
import { POSTS_STATE_NAME } from '@my-test/testv15/json-placeholder/data-access';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PostsEffects } from 'libs/testv15/json-placeholder/data-access/src/lib/state/posts.effects';
import { postsReducer } from 'libs/testv15/json-placeholder/data-access/src/lib/state/posts.reducer';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@my-test/testv15/shell').then((c) => c.Testv15ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'json-placeholder',
      },
      {
        path: 'json-placeholder',
        loadComponent: () =>
          import('@my-test/testv15/json-placeholder/feature').then(
            (c) => c.Testv15JsonPlaceholderFeatureComponent
          ),
        providers: [
          provideState(POSTS_STATE_NAME,postsReducer),
          provideEffects(PostsEffects),
        ],
      },
    ],
  },
];
