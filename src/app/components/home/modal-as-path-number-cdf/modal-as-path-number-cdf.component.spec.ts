import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsPathNumberCdfComponent } from './modal-as-path-number-cdf.component';

describe('ModalAsPathNumberCdfComponent', () => {
  let component: ModalAsPathNumberCdfComponent;
  let fixture: ComponentFixture<ModalAsPathNumberCdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAsPathNumberCdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsPathNumberCdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
