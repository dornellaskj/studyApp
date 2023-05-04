import { TestBed } from '@angular/core/testing';

import { CcspBookTest1Service } from './ccsp-book-test1.service';

describe('CcspBookTest1Service', () => {
  let service: CcspBookTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcspBookTest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
