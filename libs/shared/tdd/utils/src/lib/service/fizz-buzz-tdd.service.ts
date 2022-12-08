import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzTddService {
  fizzBuzz(num: number) {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzBuzz';
    }
    if (num % 3 === 0) {
      return 'fizz';
    }
    if (num % 5 === 0) {
      return 'buzz';
    }
    return num;
  }
}
