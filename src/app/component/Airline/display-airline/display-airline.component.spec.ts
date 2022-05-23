import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAirlineComponent } from './display-airline.component';

describe('DisplayAirlineComponent', () => {
  let component: DisplayAirlineComponent;
  let fixture: ComponentFixture<DisplayAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAirlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
