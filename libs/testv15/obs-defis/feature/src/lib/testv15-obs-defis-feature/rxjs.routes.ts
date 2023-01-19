import { Routes } from '@angular/router';
import { D3Component } from './components/d3/d3.component';
import { D4Component } from './components/d4/d4.component';
import { Testv15ObsDefisFeatureComponent } from './testv15-obs-defis-feature.component';

export const RXJS_ROUTES: Routes = [
  {
    path: '',
    component: Testv15ObsDefisFeatureComponent,
    children: [
      {
        path: 'd-1',
        loadComponent: () =>
          import('./components/d1/d1.component').then((c) => c.D1Component),
      },
      {
        path: 'd-2',
        loadChildren: ()=> import('./components/d2/d2.component').then(c=> c.D2Component),
      },
      {
        path: 'd-3',
        component: D3Component,
      },
      {
        path: 'd-4',
        component: D4Component,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'd-1',
      },
    ],
  },
];
