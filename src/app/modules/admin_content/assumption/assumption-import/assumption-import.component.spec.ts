import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionImportComponent } from './assumption-import.component';

describe('AssumptionImportComponent', () => {
  let component: AssumptionImportComponent;
  let fixture: ComponentFixture<AssumptionImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssumptionImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
