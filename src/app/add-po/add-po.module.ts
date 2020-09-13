import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddEditPoComponent } from './add-edit-po.component';
import { AddPoComponent } from './add-po.component';
import { LayoutPoComponent } from './layout-po.component';
import { AddPoRoutingModule } from './add-po-routing.module';

@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddPoRoutingModule
  ],
  declarations: [
      LayoutPoComponent,
      AddPoComponent,
      AddEditPoComponent
   
    ]
 
})
export class AddPoModule { }
