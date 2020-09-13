import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddCustomerComponent } from './add-customer.component';
import { AddEditCustomerComponent } from './add-edit-customer.component';
import { LayoutCustomerComponent } from './layout-customer.component';
import { AddCustomerRoutingModule } from './add-customer-routing.module';



@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddCustomerRoutingModule
  ],
  
  declarations: [
    LayoutCustomerComponent,
    AddEditCustomerComponent,
    AddCustomerComponent
    
    ]
 
})
export class AddCustomerModule { }
