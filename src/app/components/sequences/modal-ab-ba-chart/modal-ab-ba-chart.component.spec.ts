import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAbBaChartComponent } from './modal-ab-ba-chart.component';

describe('ModalAbBaChartComponent', () => {
  let component: ModalAbBaChartComponent;
  let fixture: ComponentFixture<ModalAbBaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAbBaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAbBaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
