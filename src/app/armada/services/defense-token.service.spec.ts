import { TestBed } from '@angular/core/testing';

import { DefenseTokenService } from './defense-token.service';

describe('DefenseTokenService', () => {
  let service: DefenseTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefenseTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
