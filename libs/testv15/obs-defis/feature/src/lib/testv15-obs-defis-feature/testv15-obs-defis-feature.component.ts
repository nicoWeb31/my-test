import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-test-testv15-obs-defis-feature',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="w-full">
      <h1 class="text-center bg-black text-green-50 p-4">RXJS</h1>
      <header class="text-white border-spacing-4 flex justify-evenly bg-slate-500">
        <a [routerLink]="['d-1']" class="">defis 1</a>
        <a [routerLink]="['d-2']" class="">defis 2</a>
        <a [routerLink]="['d-3']" class="">defis 3</a>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class Testv15ObsDefisFeatureComponent {}
