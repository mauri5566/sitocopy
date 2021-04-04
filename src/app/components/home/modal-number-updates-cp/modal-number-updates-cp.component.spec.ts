import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNumberUpdatesCpComponent } from './modal-number-updates-cp.component';

describe('ModalNumberUpdatesCpComponent', () => {
  let component: ModalNumberUpdatesCpComponent;
  let fixture: ComponentFixture<ModalNumberUpdatesCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNumberUpdatesCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNumberUpdatesCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
