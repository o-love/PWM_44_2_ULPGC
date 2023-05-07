import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfileViewComponent } from './car-profile-view.component';

describe('CarProfileViewComponent', () => {
  let component: CarProfileViewComponent;
  let fixture: ComponentFixture<CarProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProfileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
