import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareListComponent } from './spare-list.component';

describe('SpareListComponent', () => {
  let component: SpareListComponent;
  let fixture: ComponentFixture<SpareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
