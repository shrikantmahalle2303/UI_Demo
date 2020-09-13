import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCustomerComponent } from './add-customer.component';
import { AddEditCustomerComponent } from './add-edit-customer.component';
import { LayoutCustomerComponent } from './layout-customer.component';


const routes: Routes = [

 {
  path: '', component: LayoutCustomerComponent,
  children: [
      { path: '', component: AddCustomerComponent },
      { path: 'add', component: AddEditCustomerComponent },
      { path: 'edit/:customerId', component: AddEditCustomerComponent }
  ]
}

            

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCustomerRoutingModule { }
