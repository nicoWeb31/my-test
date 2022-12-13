import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-test-testv15-spectator-feature',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tata toto">hello</div>
    <p class="p">testv15-spectator-feature works!</p>
  `,
  styles: [],
})
export class Testv15SpectatorFeatureComponent {}
