import { TestBed } from '@angular/core/testing';

import { CcspTestAService } from './ccsp-test-a.service';

describe('CcspTestAService', () => {
  let service: CcspTestAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcspTestAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
