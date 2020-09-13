import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddEditPickupComponent } from './add-edit/add-edit-pickup.component';
import { AddPickupComponent } from './list/list-pickup.component';
import { LayoutPickupComponent } from './layout-pickup.component';
import { AddPickupRoutingModule } from './list-pickup-routing.module';

@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddPickupRoutingModule
  ],
  declarations: [
    LayoutPickupComponent,
    AddPickupComponent,
    AddEditPickupComponent

  ]

})
export class AddPickupModule { }
