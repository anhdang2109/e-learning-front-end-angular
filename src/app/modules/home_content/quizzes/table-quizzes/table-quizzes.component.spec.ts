import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableQuizzesComponent } from './table-quizzes.component';

describe('TableQuizzesComponent', () => {
  let component: TableQuizzesComponent;
  let fixture: ComponentFixture<TableQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
