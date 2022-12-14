import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  postsActions,
  postsSelector
} from '@my-test/testv15/json-placeholder/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-test-testv15-json-placeholder-feature',
  standalone: true,
  imports: [NgFor, AsyncPipe, JsonPipe],
  template: `
    <p>testv15-json-placeholder-feature works!</p>
    <!-- {{ posts$ | async | json }} -->
    <div *ngFor="let item of posts$ | async">{{ item.title }}</div>
    <span>{{ message }}</span>
  `,
  styles: [],
})
export class  Testv15JsonPlaceholderFeatureComponent implements OnInit {
  @Input() message!: string;
  // placeHolderService = inject(JsonPlaceholderService);
  store = inject(Store);

  posts$ = this.store.select(postsSelector);

  ngOnInit(): void {
    this.store.dispatch(postsActions.start());
    // of('message hello toto')
    //   .pipe(delay(1000))
    //   .subscribe((message) => (this.message = message));
  }
}
