import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyImportComponent } from './study-import.component';

describe('StudyImportComponent', () => {
  let component: StudyImportComponent;
  let fixture: ComponentFixture<StudyImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
