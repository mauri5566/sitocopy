import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolvedCpsComponent } from './involved-cps.component';

describe('InvolvedCpsComponent', () => {
  let component: InvolvedCpsComponent;
  let fixture: ComponentFixture<InvolvedCpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvolvedCpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolvedCpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
