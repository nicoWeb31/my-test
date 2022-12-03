import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'my-test-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  template: `
    <header>
      <a [routerLink]="['/json-placeholder']">json PlaceHolder</a>
      <a [routerLink]="['cat-fact']">cat fact</a>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
