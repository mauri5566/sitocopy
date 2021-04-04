import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDurationCdfComponent } from './modal-duration-cdf.component';

describe('ModalDurationCdfComponent', () => {
  let component: ModalDurationCdfComponent;
  let fixture: ComponentFixture<ModalDurationCdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDurationCdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDurationCdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
