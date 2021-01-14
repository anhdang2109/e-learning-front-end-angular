import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionViewComponent } from './assumption-view.component';

describe('AssumptionViewComponent', () => {
  let component: AssumptionViewComponent;
  let fixture: ComponentFixture<AssumptionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssumptionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
