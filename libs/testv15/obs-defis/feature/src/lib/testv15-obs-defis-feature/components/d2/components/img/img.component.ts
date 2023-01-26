import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'my-test-img',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
  <img [src]="'assets/images-def/v.png'" />
  <img [ngSrc]="'https://picsum.photos/200/300'" />
  `,
  styles: [],
})
export class ImgComponent {

  img = 'assets/images-def/v.png'

}
