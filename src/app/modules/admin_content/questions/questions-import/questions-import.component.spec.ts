import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsImportComponent } from './questions-import.component';

describe('QuestionsImportComponent', () => {
  let component: QuestionsImportComponent;
  let fixture: ComponentFixture<QuestionsImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
