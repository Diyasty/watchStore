import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDealComponent } from './big-deal.component';

describe('BigDealComponent', () => {
  let component: BigDealComponent;
  let fixture: ComponentFixture<BigDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
