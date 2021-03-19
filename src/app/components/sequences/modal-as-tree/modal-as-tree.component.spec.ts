import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsTreeComponent } from './modal-as-tree.component';

describe('ModalAsTreeComponent', () => {
  let component: ModalAsTreeComponent;
  let fixture: ComponentFixture<ModalAsTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAsTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
