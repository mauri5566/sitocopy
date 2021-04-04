import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrefixDistributionCdfComponent } from './modal-prefix-distribution-cdf.component';

describe('ModalPrefixDistributionCdfComponent', () => {
  let component: ModalPrefixDistributionCdfComponent;
  let fixture: ComponentFixture<ModalPrefixDistributionCdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPrefixDistributionCdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrefixDistributionCdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
