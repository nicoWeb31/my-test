import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Posts } from '../models';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  http = inject(HttpClient);
  // test = inject(myToken)
  url$ = of('https://jsonplaceholder.typicode.com/posts');

  post$: Observable<Posts[]> = this.url$.pipe(
    switchMap((url) => {
      return this.http.get<Posts[]>(url);
    }),
    tap(console.log)
  );
}
