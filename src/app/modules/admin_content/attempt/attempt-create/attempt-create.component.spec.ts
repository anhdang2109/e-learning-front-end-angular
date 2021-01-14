import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptCreateComponent } from './attempt-create.component';

describe('AttemptCreateComponent', () => {
  let component: AttemptCreateComponent;
  let fixture: ComponentFixture<AttemptCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttemptCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
