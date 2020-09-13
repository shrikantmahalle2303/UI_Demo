import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { LogisticsService } from '@app/_services/logistics.service';

@Component({
  selector: 'app-add-logistics',
  templateUrl: './add-logistics.component.html',
  styleUrls: ['./add-logistics.component.less']
})
export class AddLogisticsComponent implements OnInit {
	 logistics = null;
  constructor(private logisticsService: LogisticsService,
              private alertService: AlertService) { }

  ngOnInit() {

        this.logisticsService.getAll()
            .pipe(first())
            .subscribe(logistics => this.logistics = logistics);
    }
    deleteLogistics(logisticCompanyId: string) {
        const us = this.logistics.find(x => x.logisticCompanyId === logisticCompanyId);
        us.isDeleting = true;
        this.logisticsService.delete(logisticCompanyId)
            .pipe(first())
            .subscribe(() => {
                this.logistics = this.logistics.filter(x => x.logisticCompanyId !== logisticCompanyId);
                this.alertService.success('Company Deleted successfully', { keepAfterRouteChange: true });
            
            });

        }

}





