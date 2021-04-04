import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdatesPerSequenceCdfComponent } from './modal-updates-per-sequence-cdf.component';

describe('ModalUpdatesPerSequenceCdfComponent', () => {
  let component: ModalUpdatesPerSequenceCdfComponent;
  let fixture: ComponentFixture<ModalUpdatesPerSequenceCdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdatesPerSequenceCdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdatesPerSequenceCdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
