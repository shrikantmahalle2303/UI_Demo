import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddEditPoComponent } from './add-edit-po.component';
import { AddPoComponent } from './add-po.component';
import { LayoutPoComponent } from './layout-po.component';





const routes: Routes = [

 {
  path: '', component: LayoutPoComponent,
  children: [
      { path: '', component: AddPoComponent },
      { path: 'add', component: AddEditPoComponent },
      { path: 'edit/:purchaseOrderDetail1', component: AddEditPoComponent }
  ]
}

            

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPoRoutingModule { }
