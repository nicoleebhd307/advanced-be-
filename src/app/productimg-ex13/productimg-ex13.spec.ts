import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductimgEx13 } from './productimg-ex13';

describe('ProductimgEx13', () => {
  let component: ProductimgEx13;
  let fixture: ComponentFixture<ProductimgEx13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductimgEx13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductimgEx13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
