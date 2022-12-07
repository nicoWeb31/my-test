import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CatFactService } from './cat-fact.service';
import { mockBreed } from './mock/breeds.mock';

describe('CatFactService', () => {
  let service: CatFactService;
  let httpTestingController: HttpTestingController;
  const mockUrl = 'https://catfact.ninja/breeds';
  const mockBreedResponse = mockBreed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatFactService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CatFactService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should  fetch cat breed data', (done) => {
    service.catBreeds$.subscribe((res) => {
      expect(res).toEqual(mockBreedResponse.data);
      done();
    });

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('GET');

    // Provide each request with a mock response
    req.flush(mockBreedResponse);
  });
});
