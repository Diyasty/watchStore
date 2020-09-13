import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesComponent } from './product-des.component';

describe('ProductDesComponent', () => {
  let component: ProductDesComponent;
  let fixture: ComponentFixture<ProductDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
