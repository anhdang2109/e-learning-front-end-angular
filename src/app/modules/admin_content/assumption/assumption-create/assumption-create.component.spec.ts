import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionCreateComponent } from './assumption-create.component';

describe('AssumptionCreateComponent', () => {
  let component: AssumptionCreateComponent;
  let fixture: ComponentFixture<AssumptionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssumptionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
