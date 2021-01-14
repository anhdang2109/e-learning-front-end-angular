import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionEditComponent } from './assumption-edit.component';

describe('AssumptionEditComponent', () => {
  let component: AssumptionEditComponent;
  let fixture: ComponentFixture<AssumptionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssumptionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
