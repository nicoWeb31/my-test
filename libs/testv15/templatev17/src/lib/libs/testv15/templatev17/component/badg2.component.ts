import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-badg2',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
      >Dark</span
    >
  `,
  styles: [],
})
export class Badg2Component {}
