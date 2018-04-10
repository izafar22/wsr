import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpdatesComponent } from './key-updates.component';

describe('KeyUpdatesComponent', () => {
  let component: KeyUpdatesComponent;
  let fixture: ComponentFixture<KeyUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
