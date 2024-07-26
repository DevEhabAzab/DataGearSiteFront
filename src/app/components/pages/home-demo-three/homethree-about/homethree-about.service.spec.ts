import { TestBed } from '@angular/core/testing';

import { HomethreeAboutService } from './homethree-about.service';

describe('HomethreeAboutService', () => {
  let service: HomethreeAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomethreeAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
