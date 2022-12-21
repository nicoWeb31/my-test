import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { doesServiceImplementsOnDestroy } from '@ngneat/spectator';
import { EventDirective } from '../directives/event.directive';
import { MouseEnterDirective } from '../directives/mouse-enter.directive';

//NOTE: https://www.youtube.com/watch?v=2S6FVt-tQ7M

@Component({
  selector: 'my-test-testv15-directive-composition-feature',
  standalone: true,
  imports: [CommonModule, MouseEnterDirective],
  // hostDirectives:[MouseEnterDirective],//its possible to call directly here
  hostDirectives:[EventDirective],
  template: `
    <div
      myTestMouseEnter
      underlineCol="black"
      (boldHover)="hoverHandler()"

    >
      test directive
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testv15DirectiveCompositionFeatureComponent implements OnInit {
  hoverHandler() {
    console.log('hover ;)');
  }


  eventDirective = inject(EventDirective)

  ngOnInit(): void {
    this.eventDirective.data = {
      age: 12,
      
      }
  }
}
