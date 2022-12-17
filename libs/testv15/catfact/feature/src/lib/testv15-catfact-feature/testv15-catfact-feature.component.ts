import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MathService } from '@my-test/shared/math/utils';
import { Math2Service } from '@my-test/shared/math2/utils';
import {
  BreedsInterface,
  catsBreedsActions,
  catsBreedsSelector,
} from '@my-test/testv15/catfact/data-access';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-test-testv15-catfact-feature',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  providers: [MathService, { provide: 'numFromCaller', useValue: 15 }],
  templateUrl: './testv15-catfact-feature.component.html',
  styleUrls: ['./testv15-catfact-feature.component.css'],
})
export class Testv15CatfactFeatureComponent implements OnInit {
  num!: number;
  math2 = inject(Math2Service);
  catBreeds$!: Observable<BreedsInterface[]>;
  constructor(private mathService: MathService, private store: Store) {}
  ngOnInit(): void {
    console.log('math', this.math2);
    this.store.dispatch(catsBreedsActions.start());
    this.catBreeds$ = this.store.select(catsBreedsSelector);
    this.num = this.mathService.addFromCaller(10);
  }
}
