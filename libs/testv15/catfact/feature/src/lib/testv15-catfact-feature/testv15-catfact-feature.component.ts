import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathService } from '@my-test/shared/math/utils';

@Component({
  selector: 'my-test-testv15-catfact-feature',
  standalone: true,
  imports: [CommonModule],
  providers: [MathService, { provide: 'numFromCaller', useValue: 15 }],
  templateUrl: './testv15-catfact-feature.component.html',
  styleUrls: ['./testv15-catfact-feature.component.css'],
})
export class Testv15CatfactFeatureComponent implements OnInit {
  num!: number;
  constructor(private mathService: MathService) {}
  ngOnInit(): void {
    this.num = this.mathService.addFromCaller(10);
  }
}
