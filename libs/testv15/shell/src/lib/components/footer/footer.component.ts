import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'my-test-footer',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref],
  template: `
<footer>footer</footer>
  `,
  styles: [],
})
export class FooterComponent {}
