import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPickupComponent } from './layout-pickup.component';

describe('LayoutPickupComponent', () => {
  let component: LayoutPickupComponent;
  let fixture: ComponentFixture<LayoutPickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
