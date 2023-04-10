import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarComponent } from './card-car.component';

describe('CardCarComponent', () => {
  let component: CardCarComponent;
  let fixture: ComponentFixture<CardCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
