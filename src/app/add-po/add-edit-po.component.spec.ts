import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPoComponent } from './add-edit-po.component';

describe('AddEditPoComponent', () => {
  let component: AddEditPoComponent;
  let fixture: ComponentFixture<AddEditPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
