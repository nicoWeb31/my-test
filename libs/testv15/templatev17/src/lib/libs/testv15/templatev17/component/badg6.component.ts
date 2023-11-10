import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-badg6',
  standalone: true,
  imports: [CommonModule],
  template: `<span
    class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
    >Indigo</span
  >`,
  styles: [],
})
export class Badg6Component {}
