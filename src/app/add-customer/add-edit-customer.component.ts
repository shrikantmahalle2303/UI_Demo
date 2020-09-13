import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CustomerService } from '@app/_services/customer.service';
import { AccountService, AlertService } from '@app/_services';

@Component({
  //selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.less']
})
export class AddEditCustomerComponent implements OnInit {

  form: FormGroup;
  //id: string;
  customerId: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  la = null;
  lg= null;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private alertService : AlertService,
    private accountService: AccountService

) { }

ngOnInit() {


  navigator.geolocation.getCurrentPosition((position) => {
    const coords = position.coords;
    const latlong = [coords.latitude,coords.longitude];
    console.log('HI');
    console.log(position.coords.latitude);
    this.la=position.coords.latitude;
    this.lg=position.coords.longitude;
    console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
  })

  //this.id = this.route.snapshot.params['id'];
  this.customerId = this.route.snapshot.params['customerId'];

  this.isAddMode = !this.customerId;
  
  // password not required in edit mode
  const passwordValidators = [Validators.minLength(6)];
  if (this.isAddMode) {
      passwordValidators.push(Validators.required);
  }
  if (!this.isAddMode) 
  {
  this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      zipcode: ['',Validators.required],
      address: ['',Validators.required],
      logisticCompanyId: ['',Validators.required],
      customerId: Number(this.customerId)
  });
}
  else 
  {
    this.form = this.formBuilder.group({
        name: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        mobileNumber: ['', Validators.required],
        zipcode: ['',Validators.required],
        address: ['',Validators.required],
        logisticCompanyId: ['',Validators.required]
  });
  }



    


  if (!this.isAddMode) {
      this.customerService.getByCustomerId(this.customerId)
          .pipe(first())
          .subscribe(x => {
              
              this.f.name.setValue(x.name);
              this.f.phoneNumber.setValue(x.phoneNumber);
              this.f.mobileNumber.setValue(x.mobileNumber);
              //this.f.phoneNumber.setValue(this.la);
              //this.f.mobileNumber.setValue(this.lg);
              this.f.zipcode.setValue(x.zipcode);
              this.f.address.setValue(x.address);
              this.f.logisticCompanyId.setValue(x.logisticCompanyId);
              //this.f.customerId.setValue(x.customerId);


              


          });
  }
}

// convenience getter for easy access to form fields
get f() { return this.form.controls; }

onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
   if (this.isAddMode) {
       console.log('Add me aaya');
      this.createCustomer();
  } else {
    console.log('Edit me aaya');
    console.log(this.customerId);

      this.updateCustomer();
  }
}

private createCustomer() {
  this.customerService.register(this.form.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Customer added successfully', { keepAfterRouteChange: true });
              this.router.navigate(['.', { relativeTo: this.route }]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}

private updateCustomer() {
  this.customerService.update(this.customerId, this.form.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Update successful', { keepAfterRouteChange: true });
              this.router.navigate(['..', { relativeTo: this.route }]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}
}