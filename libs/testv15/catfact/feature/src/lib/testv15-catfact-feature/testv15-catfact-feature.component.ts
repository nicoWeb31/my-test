import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { MathService } from '@my-test/shared/math/utils';
import { Store } from '@ngrx/store';
import {
  BreedsInterface,
  catsBreedsActions,
  catsBreedsSelector,
} from '@my-test/testv15/catfact/data-access';
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
  catBreeds$!: Observable<BreedsInterface[]>;
  constructor(private mathService: MathService, private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(catsBreedsActions.start());
    this.catBreeds$ = this.store.select(catsBreedsSelector);
    this.num = this.mathService.addFromCaller(10);
  }
}
