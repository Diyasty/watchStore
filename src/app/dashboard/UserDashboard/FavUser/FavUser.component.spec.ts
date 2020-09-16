/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavUserComponent } from './FavUser.component';

describe('FavUserComponent', () => {
  let component: FavUserComponent;
  let fixture: ComponentFixture<FavUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
