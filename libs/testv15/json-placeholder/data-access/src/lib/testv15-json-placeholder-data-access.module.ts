import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPlaceholderService } from './service/json-placeholder.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule,HttpClientModule],
  providers:[JsonPlaceholderService]
})
export class Testv15JsonPlaceholderDataAccessModule {}
