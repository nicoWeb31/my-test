import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter, withDebugTracing } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes,withDebugTracing()),
    provideEffects([]),
    provideHttpClient(),
    provideStore({}),
    provideStoreDevtools(),
  ],
}).catch((err) => console.error(err));
