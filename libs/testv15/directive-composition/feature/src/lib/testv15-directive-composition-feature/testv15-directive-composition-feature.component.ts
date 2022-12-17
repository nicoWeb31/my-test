import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//NOTE: https://www.youtube.com/watch?v=2S6FVt-tQ7M

@Component({
  selector: 'my-test-testv15-directive-composition-feature',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>testv15-directive-composition-feature works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testv15DirectiveCompositionFeatureComponent {}
