import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { POSTS_STATE_NAME } from '@my-test/testv15/json-placeholder/data-access';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { PostsEffects } from 'libs/testv15/json-placeholder/data-access/src/lib/state/posts.effects';
import { postsReducer } from 'libs/testv15/json-placeholder/data-access/src/lib/state/posts.reducer';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideEffects([]),
    provideHttpClient(),
    provideStore({}),
    provideStoreDevtools(),
  ],
}).catch((err) => console.error(err));
