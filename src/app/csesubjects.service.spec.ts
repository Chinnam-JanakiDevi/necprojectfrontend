import { TestBed } from '@angular/core/testing';

import { CsesubjectsService } from './csesubjects.service';

describe('CsesubjectsService', () => {
  let service: CsesubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsesubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
