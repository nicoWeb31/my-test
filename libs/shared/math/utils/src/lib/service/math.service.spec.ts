import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService, { provide: 'numFromCaller', useValue: 15 }],
    });
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be equal to 25', () => {
    expect(service.addFromCaller(10)).toBe(25);
  });

  it('should be equal to 15', () => {
    expect(service.addFromCaller(0)).toBe(15);
  });
});
