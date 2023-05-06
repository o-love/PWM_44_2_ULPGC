import { TestBed } from '@angular/core/testing';

import { PumpingService } from './pumping.service';

describe('PumpingService', () => {
  let service: PumpingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
