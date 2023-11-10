import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-badg4',
  standalone: true,
  imports: [CommonModule],
  template: `<span
    class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
    >Red</span
  >`,
  styles: [],
})
export class Badg4Component {}
