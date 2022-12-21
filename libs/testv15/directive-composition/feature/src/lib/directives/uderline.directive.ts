import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[myTestUnderline]',
  standalone: true,
})
export class UnderlineDirective {
  @Input() color = 'red';
  htmlElement = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  mousseIn() {
    this.htmlElement.nativeElement.style.textDecoration = 'underline';
    this.htmlElement.nativeElement.style.textDecorationColor = this.color;
  }

  @HostListener('mouseleave')
  mousseOut() {
    this.htmlElement.nativeElement.style.textDecoration = 'none';
    this.htmlElement.nativeElement.style.textDecorationColor = 'none';
  }
}
