import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-badg3',
  standalone: true,
  imports: [CommonModule],
  template: `<span
    class="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300"
    >Purple</span
  >`,
  styles: [],
})
export class Badg3Component {}
