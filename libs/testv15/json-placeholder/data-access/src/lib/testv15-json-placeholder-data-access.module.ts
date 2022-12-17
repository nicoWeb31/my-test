import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonPlaceholderService } from './service/json-placeholder.service';
import { myToken, someTest } from './service/testTocken';

@NgModule({
  imports: [CommonModule],
  providers: [JsonPlaceholderService], //test inject
})
export class Testv15JsonPlaceholderDataAccessModule {}





