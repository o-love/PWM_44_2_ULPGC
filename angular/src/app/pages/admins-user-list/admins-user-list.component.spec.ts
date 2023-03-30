import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsUserListComponent } from './admins-user-list.component';

describe('AdminsUserListComponent', () => {
  let component: AdminsUserListComponent;
  let fixture: ComponentFixture<AdminsUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
