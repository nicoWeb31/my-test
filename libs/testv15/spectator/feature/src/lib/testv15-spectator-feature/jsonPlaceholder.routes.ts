import { Routes } from '@angular/router';

export const SPECTATOR_PL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./testv15-spectator-feature.component').then(
        (c) => c.Testv15SpectatorFeatureComponent
      ),
  },
];
