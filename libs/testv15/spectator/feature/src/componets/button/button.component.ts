import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-test-button',
  standalone: true,
  template: `
    <div>
      <p>button works!</p>
      <button>{{btnName}}</button>
    </div>
  `,
  styles: [],
})
export class ButtonComponent {
  @Input() btnName!: string;
}
