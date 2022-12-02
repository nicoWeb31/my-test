import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testv15JsonPlaceholderFeatureComponent } from './testv15-json-placeholder-feature.component';

describe('Testv15JsonPlaceholderFeatureComponent', () => {
  let component: Testv15JsonPlaceholderFeatureComponent;
  let fixture: ComponentFixture<Testv15JsonPlaceholderFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testv15JsonPlaceholderFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Testv15JsonPlaceholderFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
