import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesEditComponent } from './quizzes-edit.component';

describe('QuizzesEditComponent', () => {
  let component: QuizzesEditComponent;
  let fixture: ComponentFixture<QuizzesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
