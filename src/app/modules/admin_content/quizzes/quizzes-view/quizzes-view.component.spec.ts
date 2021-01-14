import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesViewComponent } from './quizzes-view.component';

describe('QuizzesViewComponent', () => {
  let component: QuizzesViewComponent;
  let fixture: ComponentFixture<QuizzesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
