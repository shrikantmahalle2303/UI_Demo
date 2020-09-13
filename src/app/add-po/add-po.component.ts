import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { PoService } from '@app/_services/po.service';


@Component({
  selector: 'app-add-po',
  templateUrl: './add-po.component.html',
  styleUrls: ['./add-po.component.less']
})
export class AddPoComponent implements OnInit {
  po = null;

  constructor(private poService: PoService,
    private alertService: AlertService) { }
    ngOnInit() {

      this.poService.getAll()
      .pipe(first())
      .subscribe(po => this.po = po);
      }

      deletePo(purchaseOrderDetail1: string) {
      const us = this.po.find(x => x.purchaseOrderDetail1 === purchaseOrderDetail1);
      us.isDeleting = true;
      this.poService.delete(purchaseOrderDetail1)
      .pipe(first())
      .subscribe(() => {
          this.po = this.po.filter(x => x.purchaseOrderDetail1 !== purchaseOrderDetail1);
          this.alertService.success('Purchase Order Deleted successfully', { keepAfterRouteChange: true });

});

      }
    }