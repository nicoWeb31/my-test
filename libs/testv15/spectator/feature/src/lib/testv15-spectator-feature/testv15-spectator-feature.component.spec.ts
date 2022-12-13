import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { Testv15SpectatorFeatureComponent } from './testv15-spectator-feature.component';

describe('Testv15SpectatorFeatureComponent', () => {
  let spectator: Spectator<Testv15SpectatorFeatureComponent>;
  const createComponent = createComponentFactory(
    Testv15SpectatorFeatureComponent
  );

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should have div ', () => {
    expect(spectator.query('div')).toBeTruthy();
  });

  it('div should have class by toto', () => {
    expect(spectator.query('div')?.className).toBe('toto tata');
  });
});
