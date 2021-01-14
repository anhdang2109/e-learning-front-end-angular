import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerImportComponent } from './question-answer-import.component';

describe('QuestionAnswerImportComponent', () => {
  let component: QuestionAnswerImportComponent;
  let fixture: ComponentFixture<QuestionAnswerImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAnswerImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
