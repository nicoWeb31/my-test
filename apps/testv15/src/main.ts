import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
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
          },
        ],
      },
    ]),
    provideStore({ }),
    provideStoreDevtools(),
    provideEffects(),
  ],
}).catch((err) => console.error(err));
