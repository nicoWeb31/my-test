import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPlaceholderService } from './service/json-placeholder.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { POSTS_STATE_NAME } from './state/posts.selector';
import { postsReducer } from './state/posts.reducer';
import { PostsEffects } from './state/posts.effects';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
    // EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [JsonPlaceholderService,],
})
export class Testv15JsonPlaceholderDataAccessModule {}
