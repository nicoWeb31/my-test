import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'my-test-testv15-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div>
      <p>testv15-shell works! toto</p>
    </div>
    <div>
      router :
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class Testv15ShellComponent {}
