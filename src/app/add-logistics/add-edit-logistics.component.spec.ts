import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLogisticsComponent } from './add-edit-logistics.component';

describe('AddEditLogisticsComponent', () => {
  let component: AddEditLogisticsComponent;
  let fixture: ComponentFixture<AddEditLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
