import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-badg5',
  standalone: true,
  imports: [CommonModule],
  template: `<span
    class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
    >Dark</span
  >`,
  styles: [],
})
export class Badg5Component {}
