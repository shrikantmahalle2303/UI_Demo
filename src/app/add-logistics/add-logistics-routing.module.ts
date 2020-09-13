import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditLogisticsComponent } from './add-edit-logistics.component';
import { AddLogisticsComponent } from './add-logistics.component';
import { LayoutLogisticsComponent } from './layout-logistics.component';

	

const routes: Routes = [

 {
  path: '', component: LayoutLogisticsComponent,
  children: [
      { path: '', component: AddLogisticsComponent },
      { path: 'add', component: AddEditLogisticsComponent },
      { path: 'edit/:logisticCompanyId', component: AddEditLogisticsComponent }
  ]
}

            

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLogisticsRoutingModule { }
