import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPumpingComponent } from './form-pumping.component';

describe('FormPumpingComponent', () => {
  let component: FormPumpingComponent;
  let fixture: ComponentFixture<FormPumpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPumpingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPumpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
