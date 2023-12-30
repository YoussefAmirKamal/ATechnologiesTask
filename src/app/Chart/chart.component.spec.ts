import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: chartComponent;
  let fixture: ComponentFixture<chartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [chartComponent],
    });
    fixture = TestBed.createComponent(chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
