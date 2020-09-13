import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPickupComponent } from './list-pickup.component';

describe('AddPickupComponent', () => {
  let component: AddPickupComponent;
  let fixture: ComponentFixture<AddPickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPickupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
