import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(
        [
          {
            path: '',
            loadComponent: () =>
              import('@my-test/testv15/shell').then(
                (c) => c.Testv15ShellComponent
              ),
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
              },
            ],
          },
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
