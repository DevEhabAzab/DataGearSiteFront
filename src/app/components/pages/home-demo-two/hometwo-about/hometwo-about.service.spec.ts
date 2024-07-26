import { TestBed } from '@angular/core/testing';

import { HometwoAboutService } from './hometwo-about.service';

describe('HometwoAboutService', () => {
  let service: HometwoAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HometwoAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
