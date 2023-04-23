import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasInfoPageComponent } from './gas-info-page.component';

describe('GasInfoPageComponent', () => {
  let component: GasInfoPageComponent;
  let fixture: ComponentFixture<GasInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GasInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
