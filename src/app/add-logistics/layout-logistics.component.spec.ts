import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLogisticsComponent } from './layout-logistics.component';

describe('LayoutLogisticsComponent', () => {
  let component: LayoutLogisticsComponent;
  let fixture: ComponentFixture<LayoutLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
