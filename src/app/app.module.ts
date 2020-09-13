import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { AddLogisticsComponent } from './add-logistics/add-logistics.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LayoutCustomerComponent } from './add-customer/layout-customer.component';
import { AddEditCustomerComponent } from './add-customer/add-edit-customer.component';
import { AddPoComponent } from './add-po/add-po.component';
import { AddEditPoComponent } from './add-po/add-edit-po.component';
import { LayoutPoComponent } from './add-po/layout-po.component';
import { AddPickupComponent } from './pickup/list/list-pickup.component';
import { AddEditPickupComponent } from './pickup/add-edit/add-edit-pickup.component';
import { LayoutPickupComponent } from './pickup/layout-pickup.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent 
      
              ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };