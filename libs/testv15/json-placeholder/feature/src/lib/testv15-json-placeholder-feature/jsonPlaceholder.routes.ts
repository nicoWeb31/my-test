import { Routes } from '@angular/router';
import {
  // JsonPlaceholderService,
  myToken,
  PostsEffects,
  postsReducer,
  POSTS_STATE_NAME,
  someTest,
} from '@my-test/testv15/json-placeholder/data-access';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { Testv15JsonPlaceholderFeatureComponent } from './testv15-json-placeholder-feature.component';
import { MathService } from '@my-test/shared/math/utils';

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
      { provide: myToken, useValue: someTest },
      MathService, { provide: 'numFromCaller', useValue: 150 }
      // JsonPlaceholderService,
    ],
  },
];
