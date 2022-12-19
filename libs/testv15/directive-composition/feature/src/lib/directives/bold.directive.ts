import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[myTestBold]',
  standalone: true,
})
export class BoldDirective {
  constructor(private hostElement: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave')
  onMousseLeave() {
    this.hostElement.nativeElement.style.fontWeight = 'normal';
  }
}
