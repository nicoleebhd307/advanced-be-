import { TestBed } from '@angular/core/testing';

import { ProductimageEx13 } from './productimage-ex13';

describe('ProductimageEx13', () => {
  let service: ProductimageEx13;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductimageEx13);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
