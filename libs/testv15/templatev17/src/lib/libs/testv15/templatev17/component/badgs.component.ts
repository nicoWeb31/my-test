import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-badgs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
      >Default</span
    >

  `,
  styles: [],
})
export class BadgsComponent {}
