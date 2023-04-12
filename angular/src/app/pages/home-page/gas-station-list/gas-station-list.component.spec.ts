import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasStationListComponent } from './gas-station-list.component';

describe('GasStationListComponent', () => {
  let component: GasStationListComponent;
  let fixture: ComponentFixture<GasStationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasStationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasStationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
