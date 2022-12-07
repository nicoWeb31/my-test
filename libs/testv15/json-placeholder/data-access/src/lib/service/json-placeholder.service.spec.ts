import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { JsonPlaceholderService } from './json-placeholder.service';
import { mockPost } from './mock/posts.mock';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;
  let httpTestingController: HttpTestingController;
  const mockPostResponse = mockPost;
  const mockUrl = 'https://jsonplaceholder.typicode.com/posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceholderService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(JsonPlaceholderService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should json placeholder post', (done) => {
    service.post$.subscribe((res) => {
      expect(res).toEqual(mockPostResponse);
      done();
    });

    const req = httpTestingController.expectOne(mockUrl);
    expect(req.request.method).toEqual('GET');

    // Provide each request with a mock response
    req.flush(mockPostResponse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
