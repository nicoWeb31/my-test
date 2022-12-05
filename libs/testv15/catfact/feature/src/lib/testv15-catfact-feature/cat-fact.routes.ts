import { Routes } from '@angular/router';
import { MathService } from '@my-test/shared/math/utils';
import { Testv15CatfactFeatureComponent } from './testv15-catfact-feature.component';

export const JSON_PL_ROUTES: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'cat-fact',
  // },
  {
    path: '',
    component: Testv15CatfactFeatureComponent,
    providers: [],// replace provide module 
  },
];
