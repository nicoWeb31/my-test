import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MathService } from '@my-test/shared/math/utils';
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
    <span>number : {{num}}</span>
    <!-- {{ posts$ | async | json }} -->
    <div *ngFor="let item of posts$ | async">{{ item.title }}</div>
    <span>{{ message }}</span>
  `,
  styles: [],
})
export class  Testv15JsonPlaceholderFeatureComponent implements OnInit {
  @Input() message!: string;
  // placeHolderService = inject(JsonPlaceholderService);
  num!: number
  store = inject(Store);
  mathService = inject(MathService)

  posts$ = this.store.select(postsSelector);

  ngOnInit(): void {
    this.store.dispatch(postsActions.start());
    this.num = this.mathService.addFromCaller(12)
    // of('message hello toto')
    //   .pipe(delay(1000))
    //   .subscribe((message) => (this.message = message));
  }
}
