import { TestBed } from '@angular/core/testing';

import { FizzBuzzTddService } from './fizz-buzz-tdd.service';

describe('FizzBuzzTddService', () => {
  let service: FizzBuzzTddService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzBuzzTddService],
    });
    service = TestBed.inject(FizzBuzzTddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0', () => {
    expect(service.fizzBuzz(1)).toEqual(1);
  });

  it('if number %3 === 0 should return fizz', () => {
    expect(service.fizzBuzz(3)).toEqual('fizz');
  });

  it('if number %5 === 0 should return buzz', () => {
    expect(service.fizzBuzz(5)).toEqual('buzz');
  });
  it('if number %5 === 0 et num%3 === 0 should return fizzbuzz', () => {
    expect(service.fizzBuzz(15)).toEqual('fizzBuzz');
  });
});
