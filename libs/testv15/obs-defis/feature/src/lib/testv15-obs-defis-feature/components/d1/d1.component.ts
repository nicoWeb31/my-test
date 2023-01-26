import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusService, Testv15ObsDefisDataAccessModule } from '@my-test/testv15/obs-defis/data-access';

@Component({
  selector: 'my-test-d1',
  standalone: true,
  imports: [CommonModule, Testv15ObsDefisDataAccessModule],
  template: `
    <div>
      <h2 class="text-center m-6">Défis 1</h2>
      <p class="p-3 ">Create an Observable to track focus in a section of the page.</p>
    </div>
  `,
  styles: [],
})
export class D1Component implements OnInit {
  constructor(
    private focusService: FocusService,
    private ref: ElementRef<HTMLElement>
  ) {}

  ngOnInit(): void {
    this.focusService.focus(this.ref).subscribe();
  }
}
