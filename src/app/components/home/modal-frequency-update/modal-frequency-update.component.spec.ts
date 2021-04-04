import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFrequencyUpdateComponent } from './modal-frequency-update.component';

describe('ModalFrequencyUpdateComponent', () => {
  let component: ModalFrequencyUpdateComponent;
  let fixture: ComponentFixture<ModalFrequencyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFrequencyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFrequencyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
