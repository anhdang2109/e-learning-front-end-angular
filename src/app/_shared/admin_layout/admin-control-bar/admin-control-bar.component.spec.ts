import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminControlBarComponent } from './admin-control-bar.component';

describe('AdminControlBarComponent', () => {
  let component: AdminControlBarComponent;
  let fixture: ComponentFixture<AdminControlBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminControlBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminControlBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
