import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNumberSequencesCpComponent } from './modal-number-sequences-cp.component';

describe('ModalNumberSequencesCpComponent', () => {
  let component: ModalNumberSequencesCpComponent;
  let fixture: ComponentFixture<ModalNumberSequencesCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNumberSequencesCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNumberSequencesCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
