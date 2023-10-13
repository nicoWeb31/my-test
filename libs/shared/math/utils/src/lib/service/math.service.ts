import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {

  constructor(@Inject('numFromCaller') private numFromCaller: number) {}

  addFromCaller(n: number) {
    return n + this.numFromCaller ?? 0;
  }
}
