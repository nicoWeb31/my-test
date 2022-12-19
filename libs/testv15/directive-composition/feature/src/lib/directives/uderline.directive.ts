import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[myTestUderline]',
  standalone: true
})
export class UderlineDirective {
  htmlElement = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  mousseIn() {
    this.htmlElement.nativeElement.style.textDecoration = 'underline'
  }
}
