import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-test-testv15-obs-defis-feature',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="w-full p-10">
      <h1 class="text-center">RXJS</h1>
      <header class="">
        <a [routerLink]="['d-1']" class="">defis 1</a>
        <a [routerLink]="['d-2']" class="">defis 2</a>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class Testv15ObsDefisFeatureComponent {}
