import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReparationComponent } from './form-reparation.component';

describe('FormReparationComponent', () => {
  let component: FormReparationComponent;
  let fixture: ComponentFixture<FormReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
