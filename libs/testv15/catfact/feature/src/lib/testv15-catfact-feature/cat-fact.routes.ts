import { Routes } from "@angular/router";
import { Testv15CatfactFeatureComponent } from "./testv15-catfact-feature.component";

export const JSON_PL_ROUTES: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'cat-fact',
  // },
  {
    path: '',
    component: Testv15CatfactFeatureComponent,
    // providers: [
    //   provideState(POSTS_STATE_NAME, postsReducer),
    //   provideEffects(PostsEffects),
    // ],
  },
];
