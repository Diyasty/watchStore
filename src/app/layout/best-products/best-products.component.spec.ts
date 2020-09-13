import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductsComponent } from './best-products.component';

describe('BestProductsComponent', () => {
  let component: BestProductsComponent;
  let fixture: ComponentFixture<BestProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
