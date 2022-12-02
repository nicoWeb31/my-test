import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import {
  JsonPlaceholderService,
  postsActions,
  postsSelector,
  Testv15JsonPlaceholderDataAccessModule,
} from '@my-test/testv15/json-placeholder/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-test-testv15-json-placeholder-feature',
  standalone: true,
  imports: [NgFor, AsyncPipe, JsonPipe, Testv15JsonPlaceholderDataAccessModule],
  template: `
    <p>testv15-json-placeholder-feature works!</p>
    <!-- {{ posts$ | async | json }} -->
    <div *ngFor="let item of posts$ | async">{{ item.title }}</div>
  `,
  styles: [],
})
export class Testv15JsonPlaceholderFeatureComponent implements OnInit {
  placeHolderService = inject(JsonPlaceholderService);
  store = inject(Store);
  posts$ = this.store.select(postsSelector);

  ngOnInit(): void {
    this.store.dispatch(postsActions.start());
  }
}
