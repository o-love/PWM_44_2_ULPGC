import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpingListComponent } from './pumping-list.component';

describe('PumpingListComponent', () => {
  let component: PumpingListComponent;
  let fixture: ComponentFixture<PumpingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
