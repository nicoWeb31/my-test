import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BreedsInterface } from '../models/cat-fact-breeds.interface';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  http = inject(HttpClient);
  url = 'https://catfact.ninja/breeds';

  catBreeds$ = this.http.get<BreedsInterface[]>(this.url);
}
