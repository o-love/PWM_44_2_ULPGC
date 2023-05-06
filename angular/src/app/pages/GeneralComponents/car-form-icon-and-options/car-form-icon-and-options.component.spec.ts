import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormIconAndOptionsComponent } from './car-form-icon-and-options.component';

describe('CarFormIconAndOptionsComponent', () => {
  let component: CarFormIconAndOptionsComponent;
  let fixture: ComponentFixture<CarFormIconAndOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFormIconAndOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFormIconAndOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
