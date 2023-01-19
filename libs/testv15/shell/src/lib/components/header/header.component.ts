import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'my-test-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  template: `
    <header class="w-full h-10 bg-slate-400 flex items-center justify-evenly">
      <a [routerLink]="['/json-placeholder']" class="">json PlaceHolder</a>
      <a [routerLink]="['cat-fact']">cat fact</a>
      <a [routerLink]="['spectator']">spectator</a>
      <a [routerLink]="['directiveComp']">directive composition</a>
      <a [routerLink]="['rxjs']">rxjs</a>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
