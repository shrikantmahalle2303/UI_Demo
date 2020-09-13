import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { PoService } from '@app/_services/po.service';
import { AccountService, AlertService } from '@app/_services';


@Component({
  selector: 'app-add-edit-po',
  templateUrl: './add-edit-po.component.html',
  styleUrls: ['./add-edit-po.component.less']
})
export class AddEditPoComponent implements OnInit {

  form: FormGroup;
  //id: string;
  purchaseOrderDetail1: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private poService: PoService,
    private alertService : AlertService,
    private accountService: AccountService

) { }

ngOnInit() {
  //this.id = this.route.snapshot.params['id'];
  this.purchaseOrderDetail1 = this.route.snapshot.params['purchaseOrderDetail1'];
  //this.serviceTypeId = this.route.snapshot.params['serviceTypeId'];

  this.isAddMode = !this.purchaseOrderDetail1;
  
 
  if (!this.isAddMode) 
  {
  this.form = this.formBuilder.group({
      customerId: ['', Validators.required],
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['',Validators.required],
      //address: ['',Validators.required],
      //logisticCompanyId: ['',Validators.required],
      purchaseOrderDetail1: Number(this.purchaseOrderDetail1),
      serviceTypeId: ['',Validators.required]
  });
}
  else 
  {
    this.form = this.formBuilder.group({
      customerId: ['', Validators.required],
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['',Validators.required],
      serviceTypeId: ['',Validators.required]

  });
  }



    


  if (!this.isAddMode) {
      this.poService.getByPoId(this.purchaseOrderDetail1)
          .pipe(first())
          .subscribe(x => {
              this.f.customerId.setValue(x.customerId);
              this.f.name.setValue(x.name);
              this.f.startDate.setValue(x.startDate);
              this.f.endDate.setValue(x.endDate);
              this.f.description.setValue(x.description);
              this.f.serviceTypeId.setValue(x.serviceTypeId);

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
      this.createPo();
  } else {
    console.log('Edit me aaya');
    console.log(this.purchaseOrderDetail1);

      this.updatePo();
  }
}

private createPo() {
  this.poService.register(this.form.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Purchase Order added successfully', { keepAfterRouteChange: true });
              this.router.navigate(['.', { relativeTo: this.route }]);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
}

private updatePo() {
  this.poService.update(this.purchaseOrderDetail1, this.form.value)
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