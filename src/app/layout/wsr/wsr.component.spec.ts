import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrComponent } from './wsr.component';

describe('WsrComponent', () => {
  let component: WsrComponent;
  let fixture: ComponentFixture<WsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
