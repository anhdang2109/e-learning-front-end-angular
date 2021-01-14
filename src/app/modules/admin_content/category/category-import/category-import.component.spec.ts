import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryImportComponent } from './category-import.component';

describe('CategoryImportComponent', () => {
  let component: CategoryImportComponent;
  let fixture: ComponentFixture<CategoryImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
