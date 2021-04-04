import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLongestSuffixComponent } from './modal-longest-suffix.component';

describe('ModalLongestSuffixComponent', () => {
  let component: ModalLongestSuffixComponent;
  let fixture: ComponentFixture<ModalLongestSuffixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLongestSuffixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLongestSuffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
