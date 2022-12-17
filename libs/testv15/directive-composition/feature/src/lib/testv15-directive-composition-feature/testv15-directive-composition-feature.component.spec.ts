import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testv15DirectiveCompositionFeatureComponent } from './testv15-directive-composition-feature.component';

describe('Testv15DirectiveCompositionFeatureComponent', () => {
  let component: Testv15DirectiveCompositionFeatureComponent;
  let fixture: ComponentFixture<Testv15DirectiveCompositionFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testv15DirectiveCompositionFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      Testv15DirectiveCompositionFeatureComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
