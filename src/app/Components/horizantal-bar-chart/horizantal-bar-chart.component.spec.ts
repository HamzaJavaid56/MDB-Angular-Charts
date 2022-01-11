import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizantalBarChartComponent } from './horizantal-bar-chart.component';

describe('HorizantalBarChartComponent', () => {
  let component: HorizantalBarChartComponent;
  let fixture: ComponentFixture<HorizantalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizantalBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizantalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
