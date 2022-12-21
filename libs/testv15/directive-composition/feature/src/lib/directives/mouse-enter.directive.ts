import { Directive } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { UnderlineDirective } from './uderline.directive';

@Directive({
  selector: '[myTestMouseEnter]',
  // hostDirectives: [UnderlineDirective,BoldDirective],//don't expose input
  hostDirectives: [
    {
      directive: BoldDirective,
      outputs : ['hover:boldHover'] //alias boldHover
    },
    {
      directive: UnderlineDirective,
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ['color:underlineCol'],//underlineCol is an 'color' alias 
    },
  ],
  standalone: true,
})
export class MouseEnterDirective {}
