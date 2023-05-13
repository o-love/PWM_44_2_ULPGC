import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasInfoPage } from './gas-info.page';

describe('GasInfoPage', () => {
  let component: GasInfoPage;
  let fixture: ComponentFixture<GasInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GasInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
