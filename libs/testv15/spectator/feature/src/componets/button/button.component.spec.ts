import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let spectator: SpectatorHost<ButtonComponent>;
  const createHost = createHostFactory(ButtonComponent);

  it('should display the title from host property', () => {
    spectator = createHost(
      `
      <div>
      <h1>toto</h1>
      <my-test-button [btnName]='title'>toto</my-test-button>
      </div>
      `,
      {
        hostProps: {
          btnName: 'toto'
        }
      }
    );
    // console.log('', spectator);
    expect(spectator.query('.my-test-button__btnName')).toHaveText('toto');
  });

  // it('should create', () => {

  //   expect(spectator.component).toBeTruthy();
  // });

  // it('should have a value', () => {
  //   const btnValue = spectator.query('boutton');
  //   expect(btnValue).toBeTruthy();
  // });
});
