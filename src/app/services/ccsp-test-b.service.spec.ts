import { TestBed } from '@angular/core/testing';

import { CcspTestBService } from './ccsp-test-b.service';

describe('CcspTestBService', () => {
  let service: CcspTestBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcspTestBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
