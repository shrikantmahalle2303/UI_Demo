import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LocationComponent } from './location/location.component'
//import { AddLogisticsComponent } from './add-logistics/add-logistics.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const addlogisticsModule = () => import('./add-logistics/add-logistics.module').then(x => x.AddLogisticsModule);
const addcustomerModule = () => import('./add-customer/add-customer.module').then(x => x.AddCustomerModule);
const addpoModule = () => import('./add-po/add-po.module').then(x => x.AddPoModule); 
const addpickupModule = () => import('./pickup/list-pickup.module').then(x => x.AddPickupModule); 



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
        { path: 'location', component: LocationComponent, canActivate: [AuthGuard] },

    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'add-logistics', loadChildren: addlogisticsModule, canActivate:[AuthGuard]},
    { path: 'add-customer', loadChildren: addcustomerModule, canActivate:[AuthGuard]},
    { path: 'add-po', loadChildren: addpoModule, canActivate:[AuthGuard]},
    { path: 'add-pickup', loadChildren: addpickupModule, canActivate:[AuthGuard]},


    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}