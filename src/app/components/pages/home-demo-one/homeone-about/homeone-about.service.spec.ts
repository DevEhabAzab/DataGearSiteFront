import { TestBed } from '@angular/core/testing';

import { HomeoneAboutService } from './homeone-about.service';

describe('HomeoneAboutService', () => {
  let service: HomeoneAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeoneAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
