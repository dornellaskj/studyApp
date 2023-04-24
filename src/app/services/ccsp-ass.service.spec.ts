import { TestBed } from '@angular/core/testing';

import { CcspAssService } from './ccsp-ass.service';

describe('CcspAssService', () => {
  let service: CcspAssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcspAssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
