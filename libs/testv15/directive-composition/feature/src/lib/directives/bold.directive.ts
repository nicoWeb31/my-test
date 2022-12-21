import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[myTestBold]',
  standalone: true,
})
export class BoldDirective {
  
  @Output() hover = new EventEmitter()

  constructor(private hostElement: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hostElement.nativeElement.style.fontWeight = 'bold';
    this.hover.emit()
  }

  @HostListener('mouseleave')
  onMousseLeave() {
    this.hostElement.nativeElement.style.fontWeight = 'normal';
  }
}
