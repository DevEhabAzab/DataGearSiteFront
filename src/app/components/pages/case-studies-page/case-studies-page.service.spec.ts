import { TestBed } from '@angular/core/testing';

import { CaseStudiesPageService } from './case-studies-page.service';

describe('CaseStudiesPageService', () => {
  let service: CaseStudiesPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseStudiesPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
