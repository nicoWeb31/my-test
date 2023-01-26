import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'my-test-img',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
  <img class='m-auto' [ngSrc]="'assets/images-def/v.png'"  width="500" height="300" />
  <!-- <img [ngSrc]="'https://picsum.photos/200/300'" width="500" height="500" /> -->
  `,
  styles: [],
})
export class ImgComponent {

  img = 'assets/images-def/v.png'

}
