import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable, of, switchMap, tap } from 'rxjs';
import { Posts } from '../models';
import { myTest, myToken } from './testTocken';


@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  http = inject(HttpClient)
  // tokentest = inject(myToken);


  constructor(@Inject(myToken) private myt : myTest ) {
    console.log('token',myt )
  }

  

  url$ = of('https://jsonplaceholder.typicode.com/posts');

  post$ : Observable<Posts[]> = this.url$.pipe(
    switchMap((url) => {
      return this.http.get<Posts[]>(url);
    }),
    tap(console.log)
  );
}
