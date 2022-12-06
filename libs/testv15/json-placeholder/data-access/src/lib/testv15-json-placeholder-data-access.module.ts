import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonPlaceholderService } from './service/json-placeholder.service';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
    // EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [JsonPlaceholderService,],
})
export class Testv15JsonPlaceholderDataAccessModule {}
