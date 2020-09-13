import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { CustomerService } from '@app/_services/customer.service';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.less']
})
export class AddCustomerComponent implements OnInit {
  customer = null;
  shrikant = 'shrikant_sharad'; 
  la = null;
  lg= null;

        constructor(private customerService: CustomerService,
          private alertService: AlertService) { }

        ngOnInit() {

        this.customerService.getAll()
        .pipe(first())
        .subscribe(customer => this.customer = customer);

        navigator.geolocation.getCurrentPosition((position) => {
          const coords = position.coords;
          const latlong = [coords.latitude,coords.longitude];
          console.log('HI');
          console.log(position.coords.latitude);
          this.la=position.coords.latitude;
          this.lg=position.coords.longitude;
          console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
        })



        }

        deleteCustomer(customerId: string) {
        const us = this.customer.find(x => x.customerId === customerId);
        us.isDeleting = true;
        this.customerService.delete(customerId)
        .pipe(first())
        .subscribe(() => {
            this.customer = this.customer.filter(x => x.customerId !== customerId);
            this.alertService.success('Customer Deleted successfully', { keepAfterRouteChange: true });

});

}

}






