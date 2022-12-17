import { EnvironmentInjector, importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { SharedMath2UtilsModule } from '@my-test/shared/math2/utils';
import {
  CatsEffects,
  catsReducer,
  CATS_STATE_NAME,
} from '@my-test/testv15/catfact/data-access';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { Testv15CatfactFeatureComponent } from './testv15-catfact-feature.component';

export const CATS_ROUTES: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'cat-fact',
  // },
  {
    path: '',
    component: Testv15CatfactFeatureComponent,
    providers: [
      importProvidersFrom(SharedMath2UtilsModule.forTest(4)),
      provideState(CATS_STATE_NAME, catsReducer),
      provideEffects(CatsEffects),
    ],
  },
];
