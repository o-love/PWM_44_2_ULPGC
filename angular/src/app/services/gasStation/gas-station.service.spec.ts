import { TestBed } from '@angular/core/testing';

import { GasStationService } from './gas-station.service';

describe('GasStationService', () => {
  let service: GasStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get gas stations', () => {
    service.getGasStations().subscribe(gasStations => {
      expect(gasStations.length).toBeGreaterThan(0);
    });
  });
});
