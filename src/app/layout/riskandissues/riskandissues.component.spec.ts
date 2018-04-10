import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskandissuesComponent } from './riskandissues.component';

describe('RiskandissuesComponent', () => {
  let component: RiskandissuesComponent;
  let fixture: ComponentFixture<RiskandissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskandissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskandissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
