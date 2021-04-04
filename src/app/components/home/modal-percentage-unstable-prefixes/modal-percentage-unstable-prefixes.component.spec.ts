import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPercentageUnstablePrefixesComponent } from './modal-percentage-unstable-prefixes.component';

describe('ModalPercentageUnstablePrefixesComponent', () => {
  let component: ModalPercentageUnstablePrefixesComponent;
  let fixture: ComponentFixture<ModalPercentageUnstablePrefixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPercentageUnstablePrefixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPercentageUnstablePrefixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
