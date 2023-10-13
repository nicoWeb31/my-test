import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-test-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`,
  imports : [RouterModule,RouterOutlet],

})
export class AppComponent {
}
