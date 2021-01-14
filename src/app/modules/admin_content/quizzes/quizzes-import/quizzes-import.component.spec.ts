import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesImportComponent } from './quizzes-import.component';

describe('QuizzesImportComponent', () => {
  let component: QuizzesImportComponent;
  let fixture: ComponentFixture<QuizzesImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzesImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
