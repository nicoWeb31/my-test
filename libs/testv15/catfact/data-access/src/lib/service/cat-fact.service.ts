import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BreedsInterface } from '../models/cat-fact-breeds.interface';

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  http = inject(HttpClient);
  url = 'https://catfact.ninja/breeds';

  catBreeds$ = this.http.get<any>(this.url).pipe(
    map(({data})=> data)
  );
}
