import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let spectator: SpectatorHost<ButtonComponent>;
  const createHost = createHostFactory(ButtonComponent);

  it('should display the title from host property', () => {
    spectator = createHost(
      `
      <div>
      <my-test-button></my-test-button>
      </div>
      `,
    );
    console.log('', spectator);
    expect(spectator.query('div')).toBeTruthy();
  });

  // it('should create', () => {

  //   expect(spectator.component).toBeTruthy();
  // });

  // it('should have a value', () => {
  //   const btnValue = spectator.query('boutton');
  //   expect(btnValue).toBeTruthy();
  // });
});
