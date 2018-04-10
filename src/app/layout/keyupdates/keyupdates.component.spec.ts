import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyupdatesComponent } from './keyupdates.component';

describe('KeyupdatesComponent', () => {
  let component: KeyupdatesComponent;
  let fixture: ComponentFixture<KeyupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
