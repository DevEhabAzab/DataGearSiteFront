import { TestBed } from '@angular/core/testing';

import { HomeoneFeaturesService } from './homeone-features.service';

describe('HomeoneFeaturesService', () => {
  let service: HomeoneFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeoneFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
