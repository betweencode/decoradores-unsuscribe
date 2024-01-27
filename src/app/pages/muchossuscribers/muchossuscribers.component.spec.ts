/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuchossuscribersComponent } from './muchossuscribers.component';

describe('MuchossuscribersComponent', () => {
  let component: MuchossuscribersComponent;
  let fixture: ComponentFixture<MuchossuscribersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuchossuscribersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuchossuscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
