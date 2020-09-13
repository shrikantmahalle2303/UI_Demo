import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPoComponent } from './layout-po.component';

describe('LayoutPoComponent', () => {
  let component: LayoutPoComponent;
  let fixture: ComponentFixture<LayoutPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
