import { CommonModule } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { PAGE_VISIBILITY } from '@my-test/testv15/obs-defis/data-access';
import { Observable, Subscription } from 'rxjs';
import { ImgComponent } from './components/img/img.component';

@Component({
  selector: 'my-test-d2',
  standalone: true,
  imports: [CommonModule,ImgComponent],
  template: `
    <div>
      <h2 class="text-center m-6">défis 2</h2>
      <div class="p-3">Create a page visibility stream.</div>
      <p>wih token</p>
      <my-test-img></my-test-img>

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
