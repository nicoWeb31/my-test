import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testv15ShellComponent } from './testv15-shell.component';

describe('Testv15ShellComponent', () => {
  let component: Testv15ShellComponent;
  let fixture: ComponentFixture<Testv15ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testv15ShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Testv15ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
