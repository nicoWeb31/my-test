import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-test-d3',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
    <h2>Défis 3</h2>
    Show error message for 5 seconds if login has failed.
  </div>
  `,
  styles: [],
})
export class D3Component {}
