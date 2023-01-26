import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PAGE_VISIBILITY } from '@my-test/testv15/obs-defis/data-access';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-test-d2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>défis 2</h2>
      <div>Create a page visibility stream.</div>
    </div>
  `,
  styles: [],
})
export class D2Component implements OnInit, OnDestroy {
  subscription$ = new Subscription();

  constructor(
    @Inject(PAGE_VISIBILITY) public readonly pageVisible$: Observable<boolean>
  ) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.pageVisible$.subscribe((v) => {
        console.log('page visible', v);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
