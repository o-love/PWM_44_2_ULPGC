import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPriceListComponent } from './gas-price-list.component';

describe('GasPriceListComponent', () => {
  let component: GasPriceListComponent;
  let fixture: ComponentFixture<GasPriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasPriceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
