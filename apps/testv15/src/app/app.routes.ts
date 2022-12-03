import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@my-test/testv15/shell').then((r) => r.SHELL_ROUTES),
  },
];
