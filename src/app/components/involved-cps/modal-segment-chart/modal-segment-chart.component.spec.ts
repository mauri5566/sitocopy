import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSegmentChartComponent } from './modal-segment-chart.component';

describe('ModalSegmentChartComponent', () => {
  let component: ModalSegmentChartComponent;
  let fixture: ComponentFixture<ModalSegmentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSegmentChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSegmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
