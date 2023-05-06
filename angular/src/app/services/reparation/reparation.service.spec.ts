import { TestBed } from '@angular/core/testing';

import { ReparationService } from './reparation.service';

describe('ReparationService', () => {
  let service: ReparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
