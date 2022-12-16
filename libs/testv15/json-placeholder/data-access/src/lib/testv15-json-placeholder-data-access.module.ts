import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonPlaceholderService } from './service/json-placeholder.service';
import { myToken, someTest } from './service/testTocken';

@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
    // EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [JsonPlaceholderService, { provide: myToken, useValue: someTest }],//test inject
})
export class Testv15JsonPlaceholderDataAccessModule {}
