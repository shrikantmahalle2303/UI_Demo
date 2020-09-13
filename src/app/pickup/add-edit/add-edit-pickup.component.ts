import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { PickupService } from '@app/_services/pickup.service';
import { AccountService, AlertService } from '@app/_services';

@Component({
  selector: 'app-add-edit-pickup',
  templateUrl: './add-edit-pickup.component.html',
  styleUrls: ['./add-edit-pickup.component.less']
})
export class AddEditPickupComponent implements OnInit {

  form: FormGroup;
  pickupRequestDetailId: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pickupService: PickupService,
    private alertService: AlertService,
    private accountService: AccountService

  ) { }

  ngOnInit() {
    this.pickupRequestDetailId = this.route.snapshot.params['pickupRequestDetailId'];

    this.isAddMode = !this.pickupRequestDetailId;


    if (!this.isAddMode) {
      this.form = this.formBuilder.group({
        customerId: ['', Validators.required],
        invoiceNumber: ['', Validators.required],
        fromCode: ['', Validators.required],
        toCode: ['', Validators.required],
        description: ['', Validators.required],
        loadType: ['', Validators.required],
        status: ['', Validators.required],
        isActive: ['', Validators.required],
        vehicleId: ['', Validators.required],
        driverId: ['', Validators.required],
        pickupRequestDetailId: Number(this.pickupRequestDetailId)
      });
    }
    else {
      this.form = this.formBuilder.group({
        customerId: ['', Validators.required],
        invoiceNumber: ['', Validators.required],
        fromCode: ['', Validators.required],
        toCode: ['', Validators.required],
        loadType: ['', Validators.required],
        status: ['', Validators.required],
        vehicleId: ['', Validators.required],
        driverId: ['', Validators.required]


      });
    }

    if (!this.isAddMode) {
      this.pickupService.getByPickupId(this.pickupRequestDetailId)
        .pipe(first())
        .subscribe(x => {
          this.f.customerId.setValue(x.customerId);
          this.f.invoiceNumber.setValue(x.invoiceNumber);
          this.f.fromCode.setValue(x.fromCode);
          this.f.toCode.setValue(x.toCode);
          this.f.description.setValue(x.description);
          this.f.loadType.setValue(x.loadType);
          this.f.status.setValue(x.status);
          this.f.isActive.setValue(x.isActive);
          this.f.vehicleId.setValue(x.vehicleId);
          this.f.driverId.setValue(x.driverId);




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
      this.createPickup();
    } else {

      this.updatePickup();
    }
  }

  private createPickup() {
    this.pickupService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Pickup Order added successfully', { keepAfterRouteChange: true });
          this.router.navigate(['.', { relativeTo: this.route }]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  private updatePickup() {
    this.pickupService.update(this.pickupRequestDetailId, this.form.value)
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

