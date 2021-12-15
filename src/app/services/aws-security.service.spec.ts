import { TestBed } from '@angular/core/testing';

import { AwsSecurityService } from './aws-security.service';

describe('AwsSecurityService', () => {
  let service: AwsSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
