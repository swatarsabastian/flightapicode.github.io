import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayscheduleComponent } from './displayschedule.component';

describe('DisplayscheduleComponent', () => {
  let component: DisplayscheduleComponent;
  let fixture: ComponentFixture<DisplayscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
