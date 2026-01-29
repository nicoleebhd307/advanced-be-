import { TestBed } from '@angular/core/testing';

import { ListproductEx13Service } from './listproduct-ex13-service';

describe('ListproductEx13Service', () => {
  let service: ListproductEx13Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListproductEx13Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
