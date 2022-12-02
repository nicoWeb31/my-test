import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap, tap } from 'rxjs';
import { Posts } from '../models';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  constructor(private http: HttpClient) {}

  url$ = of('https://jsonplaceholder.typicode.com/posts');

  post$ = this.url$.pipe(
    switchMap((url) => {
      return this.http.get<Posts[]>(url);
    }),
    tap(console.log)
  );
}
