import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPickupComponent } from './add-edit-pickup.component';

describe('AddEditPickupComponent', () => {
  let component: AddEditPickupComponent;
  let fixture: ComponentFixture<AddEditPickupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPickupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
