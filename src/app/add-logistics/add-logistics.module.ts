import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddLogisticsRoutingModule } from './add-logistics-routing.module';
import { AddEditLogisticsComponent } from './add-edit-logistics.component';
import { LayoutLogisticsComponent } from './layout-logistics.component';
import { AddLogisticsComponent } from './add-logistics.component';


@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddLogisticsRoutingModule
  ],
  
  declarations: [
    LayoutLogisticsComponent,
    AddEditLogisticsComponent,
    AddLogisticsComponent
    ]
 
})
export class AddLogisticsModule { }
