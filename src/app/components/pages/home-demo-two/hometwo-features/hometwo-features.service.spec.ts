import { TestBed } from '@angular/core/testing';

import { HometwoFeaturesService } from './hometwo-features.service';

describe('HometwoFeaturesService', () => {
  let service: HometwoFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HometwoFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
