import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddEditPickupComponent } from './add-edit/add-edit-pickup.component';
import { AddPickupComponent } from './list/list-pickup.component';
import { LayoutPickupComponent } from './layout-pickup.component';


const routes: Routes = [

  {
    path: '', component: LayoutPickupComponent,
    children: [
      { path: '', component: AddPickupComponent },
      { path: 'add', component: AddEditPickupComponent },
      { path: 'edit/:pickupRequestDetailId', component: AddEditPickupComponent }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPickupRoutingModule { }
