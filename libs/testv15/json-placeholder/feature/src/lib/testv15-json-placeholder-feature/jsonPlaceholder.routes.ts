import { Routes } from '@angular/router';
import {
  PostsEffects,
  postsReducer,
  POSTS_STATE_NAME,
} from '@my-test/testv15/json-placeholder/data-access';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { Testv15JsonPlaceholderFeatureComponent } from './testv15-json-placeholder-feature.component';

export const JSON_PL_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'json-placeholder',
  },
  {
    path: 'json-placeholder',
    component: Testv15JsonPlaceholderFeatureComponent,
    providers: [
      provideState(POSTS_STATE_NAME, postsReducer),
      provideEffects(PostsEffects),
    ],
  },
];
