import { TestBed } from '@angular/core/testing';

import { FunfactsService } from './funfacts.service';

describe('FunfactsService', () => {
  let service: FunfactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunfactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
