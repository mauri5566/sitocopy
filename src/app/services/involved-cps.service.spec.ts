import { TestBed } from '@angular/core/testing';

import { InvolvedCpsService } from './involved-cps.service';

describe('InvolvedCpsService', () => {
  let service: InvolvedCpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvolvedCpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
