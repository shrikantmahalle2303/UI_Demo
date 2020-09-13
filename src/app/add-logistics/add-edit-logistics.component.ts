import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LogisticsService } from '@app/_services/logistics.service';
//import { AccountService } from '@app/_services/account.service';
//import { AlertService } from '@app/_services/alert.service';
import { AccountService, AlertService } from '@app/_services';



@Component({
  //selector: 'app-add-edit-logistics',
  templateUrl: './add-edit-logistics.component.html',
  styleUrls: ['./add-edit-logistics.component.less']
})
export class AddEditLogisticsComponent implements OnInit {

    form: FormGroup;
    //id: string;
    logisticCompanyId: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

 
    constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private logisticsService: LogisticsService,
      private alertService : AlertService,
      private accountService: AccountService

  ) {}

  ngOnInit() {
      //this.id = this.route.snapshot.params['id'];
      this.logisticCompanyId = this.route.snapshot.params['logisticCompanyId'];

      this.isAddMode = !this.logisticCompanyId;
      
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
          //password: ['', passwordValidators],
          zipcode: ['',Validators.required],
          address: ['',Validators.required],
          logisticCompanyId: Number(this.logisticCompanyId)

          
      });
    }
    else
    {
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            mobileNumber: ['', Validators.required],
            //password: ['', passwordValidators],
            zipcode: ['',Validators.required],
            address: ['',Validators.required]

        });
            

    }


      if (!this.isAddMode) {
          this.logisticsService.getByLogisticCompanyId(this.logisticCompanyId)
              .pipe(first())
              .subscribe(x => {
                  /*this.f.firstName.setValue(x.firstName);
                  this.f.lastName.setValue(x.lastName);
                  this.f.username.setValue(x.username);*/
                  this.f.name.setValue(x.name);
                  this.f.phoneNumber.setValue(x.phoneNumber);
                  this.f.mobileNumber.setValue(x.mobileNumber);
                  this.f.zipcode.setValue(x.zipcode);
                  this.f.address.setValue(x.address);


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
          this.createUser();
      } else {
        console.log('Edit me aaya');
        console.log(this.logisticCompanyId);

          this.updateUser();
      }
  }

  private createUser() {
      this.logisticsService.register(this.form.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Company added successfully', { keepAfterRouteChange: true });
                  this.router.navigate(['.', { relativeTo: this.route }]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

  private updateUser() {
      this.logisticsService.update(this.logisticCompanyId, this.form.value)
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