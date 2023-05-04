import { TestBed } from '@angular/core/testing';

import { CcspBookTest2Service } from './ccsp-book-test2.service';

describe('CcspBookTest2Service', () => {
  let service: CcspBookTest2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CcspBookTest2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
