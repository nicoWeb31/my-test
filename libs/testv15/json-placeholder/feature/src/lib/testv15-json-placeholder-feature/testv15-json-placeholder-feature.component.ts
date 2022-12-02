import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testv15JsonPlaceholderDataAccessModule } from '@my-test/testv15/json-placeholder/data-access';
import { JsonPlaceholderService } from 'libs/testv15/json-placeholder/data-access/src/lib/service/json-placeholder.service';

@Component({
  selector: 'my-test-testv15-json-placeholder-feature',
  standalone: true,
  imports: [CommonModule, Testv15JsonPlaceholderDataAccessModule],
  template: `
    <p>testv15-json-placeholder-feature works!</p>
    {{ posts$ | async | json }}
  `,
  styles: [],
})
export class Testv15JsonPlaceholderFeatureComponent implements OnInit {
  posts$ = this.placeHolderService.post$;

  constructor(private placeHolderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    console.log('test');
  }
}
