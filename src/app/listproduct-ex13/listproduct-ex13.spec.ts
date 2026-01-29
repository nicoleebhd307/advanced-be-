import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductEx13 } from './listproduct-ex13';

describe('ListproductEx13', () => {
  let component: ListproductEx13;
  let fixture: ComponentFixture<ListproductEx13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListproductEx13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListproductEx13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
