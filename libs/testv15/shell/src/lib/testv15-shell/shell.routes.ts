import { Routes } from '@angular/router';
import { Testv15ShellComponent } from './testv15-shell.component';

export const SHELL_ROUTES: Routes = [
  {
    path: '',
    component: Testv15ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@my-test/testv15/json-placeholder/feature').then(
            (c) => c.JSON_PL_ROUTES
          ),
      },
      {
        path: 'cat-fact',
        loadChildren: () =>
          import('@my-test/testv15/catfact/feature').then(
            (r) => r.JSON_PL_ROUTES
          ),
      },
    ],
  },
];
