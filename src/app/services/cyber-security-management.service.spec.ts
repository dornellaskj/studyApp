import { TestBed } from '@angular/core/testing';

import { CyberSecurityManagementService } from './cyber-security-management.service';

describe('CyberSecurityManagementService', () => {
  let service: CyberSecurityManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyberSecurityManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
