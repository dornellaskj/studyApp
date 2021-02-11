import { TestBed } from '@angular/core/testing';

import { SecureSoftwareDesignService } from './secure-software-design.service';

describe('SecureSoftwareDesignService', () => {
  let service: SecureSoftwareDesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecureSoftwareDesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
