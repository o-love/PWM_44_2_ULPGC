import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentButtonsComponent } from './parent-buttons.component';

describe('ParentButtonsComponent', () => {
  let component: ParentButtonsComponent;
  let fixture: ComponentFixture<ParentButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
