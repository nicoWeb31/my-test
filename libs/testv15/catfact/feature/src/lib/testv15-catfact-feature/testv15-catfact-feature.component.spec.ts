import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testv15CatfactFeatureComponent } from './testv15-catfact-feature.component';

describe('Testv15CatfactFeatureComponent', () => {
  let component: Testv15CatfactFeatureComponent;
  let fixture: ComponentFixture<Testv15CatfactFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testv15CatfactFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Testv15CatfactFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
