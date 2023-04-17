import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormIconAndOptionsComponent } from './user-form-icon-and-options.component';

describe('UserFormIconAndOptionsComponent', () => {
  let component: UserFormIconAndOptionsComponent;
  let fixture: ComponentFixture<UserFormIconAndOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormIconAndOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormIconAndOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
