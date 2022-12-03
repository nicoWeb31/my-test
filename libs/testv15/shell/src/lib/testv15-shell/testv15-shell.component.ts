import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'my-test-testv15-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent],
  template: `
    <div>
      <my-test-header></my-test-header>

      <main>
        <router-outlet></router-outlet>
      </main>
      <my-test-footer></my-test-footer>
    </div>
  `,
  styles: [],
})
export class Testv15ShellComponent {}
