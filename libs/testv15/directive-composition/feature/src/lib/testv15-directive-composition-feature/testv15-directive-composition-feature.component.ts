import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoldDirective } from '../directives/bold.directive';
import { UderlineDirective } from '../directives/uderline.directive';

//NOTE: https://www.youtube.com/watch?v=2S6FVt-tQ7M

@Component({
  selector: 'my-test-testv15-directive-composition-feature',
  standalone: true,
  imports: [CommonModule,BoldDirective,UderlineDirective],
  template: `
  <div myTestBold myTestUderline>
    test directive 
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testv15DirectiveCompositionFeatureComponent {}
