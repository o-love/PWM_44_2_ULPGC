import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUserComponent } from './data-user.component';

describe('DataUserComponent', () => {
  let component: DataUserComponent;
  let fixture: ComponentFixture<DataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
