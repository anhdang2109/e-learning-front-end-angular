import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptImportComponent } from './attempt-import.component';

describe('AttemptImportComponent', () => {
  let component: AttemptImportComponent;
  let fixture: ComponentFixture<AttemptImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
