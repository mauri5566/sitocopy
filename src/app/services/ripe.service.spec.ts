import { TestBed } from '@angular/core/testing';

import { RipeService } from './ripe.service';

describe('RipeService', () => {
  let service: RipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
