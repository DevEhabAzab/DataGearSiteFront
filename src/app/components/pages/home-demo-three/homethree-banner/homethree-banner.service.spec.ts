import { TestBed } from '@angular/core/testing';

import { HomethreeBannerService } from './homethree-banner.service';

describe('HomethreeBannerService', () => {
  let service: HomethreeBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomethreeBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
