import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPopulationBubbleChartComponent } from './world-population-bubble-chart.component';

describe('WorldPopulationBubbleChartComponent', () => {
  let component: WorldPopulationBubbleChartComponent;
  let fixture: ComponentFixture<WorldPopulationBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldPopulationBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPopulationBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
