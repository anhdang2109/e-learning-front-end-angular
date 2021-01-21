import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDeletedComponent } from './users-deleted.component';

describe('UsersDeletedComponent', () => {
  let component: UsersDeletedComponent;
  let fixture: ComponentFixture<UsersDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDeletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
