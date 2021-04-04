import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMostFrequentUpdateComponent } from './modal-most-frequent-update.component';

describe('ModalMostFrequentUpdateComponent', () => {
  let component: ModalMostFrequentUpdateComponent;
  let fixture: ComponentFixture<ModalMostFrequentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMostFrequentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMostFrequentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
