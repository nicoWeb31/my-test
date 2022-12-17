import { TestBed } from '@angular/core/testing';

import { Math2Service } from './math2.service';

describe('Math2Service', () => {
  let service: Math2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Math2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
