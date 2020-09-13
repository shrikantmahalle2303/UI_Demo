import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { PickupService } from '@app/_services/pickup.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-pickup',
  templateUrl: './list-pickup.component.html',
  styleUrls: ['./list-pickup.component.less']
})
export class AddPickupComponent implements OnInit {
  pickup = null;
  form: FormGroup;
  pickupRequestDetailId: string;
  customerId: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  veh: string;
  dri: string;
  from: string;
  to: string;

  constructor(private pickupService:
    PickupService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,


  ) { }

  ngOnInit() {
    this.pickupService.getAll()
      .pipe(first())
      .subscribe(pickup => this.pickup = pickup);

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
        pickupRequestDetailId: Number(this.pickupRequestDetailId),
        //purchaseOrderId: ['',Validators.required]


      });
    }
    else {
      this.form = this.formBuilder.group({
        customerId: ['', Validators.required],
        vehicleId: ['', Validators.required],
        driverId: ['', Validators.required],
        fromCode: ['', Validators.required],
        toCode: ['', Validators.required],
        pickupRequestDetailId: Number(this.pickupRequestDetailId)

      });
    }

  }

  get f() { return this.form.controls; }

  onSubmit() {

    this.veh = this.form.value.vehicleId;
    this.dri = this.form.value.driverId;
    this.from = this.form.value.fromCode; 
    this.to = this.form.value.toCode; 
    this.alertService.clear();
    this.loading = true;
    this.form = this.formBuilder.group({
      vehicleId: (this.veh),
      driverId: (this.dri),
      fromCode:(this.from),
      toCode:(this.to),
      customerId: Number(this.customerId),
      pickupRequestDetailId: Number(this.pickupRequestDetailId)
    });


    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.updatePickup();
  }

  public getPickupDetails(pi: string, cust: string, from: string, to: string) {
    this.pickupRequestDetailId = pi;
    this.customerId = cust;
    this.from = from;
    this.to = to;
    console.log(this.pickupRequestDetailId);

  }


  public updatePickup() {
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


  deletePickup(pickupRequestDetailId: string) {
    const us = this.pickup.find(x => x.pickupRequestDetailId === pickupRequestDetailId);
    us.isDeleting = true;
    this.pickupService.delete(pickupRequestDetailId)
      .pipe(first())
      .subscribe(() => {
        this.pickup = this.pickup.filter(x => x.pickupRequestDetailId !== pickupRequestDetailId);
        this.alertService.success('Pickup Request Deleted successfully', { keepAfterRouteChange: true });

      });

  }

}