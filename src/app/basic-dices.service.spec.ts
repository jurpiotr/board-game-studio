import { TestBed } from '@angular/core/testing';

import { BasicDicesService } from './basic-dices.service';

describe('BasicDicesService', () => {
  let service: BasicDicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicDicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
