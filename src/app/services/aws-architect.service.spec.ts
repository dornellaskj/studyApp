import { TestBed } from '@angular/core/testing';

import { AwsArchitectService } from './aws-architect.service';

describe('CcspAssService', () => {
  let service: AwsArchitectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsArchitectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
