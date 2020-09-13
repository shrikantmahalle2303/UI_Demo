import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Po } from '@app/_models/po';


@Injectable({ providedIn: 'root' })
export class PoService {
    private poSubject: BehaviorSubject<Po>;
    public po: Observable<Po>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.poSubject = new BehaviorSubject<Po>(JSON.parse(localStorage.getItem('po')));
        this.po = this.poSubject.asObservable();
    }

    public get poValue(): Po {
        return this.poSubject.value;
    }

   

    register(po: Po) {
       // return this.http.post(`${environment.apiUrl}/users/register`, logistics);
       console.log('service call ke pahale');
     //  return this.http.post('http://localhost:62522/api/PurchaseOrder/Add', po);
       return this.http.post(`${environment.apiUrl}/api/PurchaseOrder/Add`, po);


    } 

    getAll() {
        return this.http.get<Po[]>(`${environment.apiUrl}/api/PurchaseOrder/Get`);
    }

    getByPoId(purchaseOrderDetail1: string) {
        //return this.http.get<Logistics>(`${environment.apiUrl}/users/${logisticCompanyId}`);
        return this.http.get<Po>(`${environment.apiUrl}/api/PurchaseOrder/${purchaseOrderDetail1}/getPoById`);
        //http://localhost:62522/api/PurchaseOrder/8/getPoById




    }

    update(purchaseOrderDetail1, params) {
        console.log(purchaseOrderDetail1);
        console.log(params);

        //return this.http.put(`${environment.apiUrl}/users/${logisticCompanyId}`, params)
        //return this.http.put('http://localhost:62522/api/PurchaseOrder/Edit', params)
        return this.http.put(`${environment.apiUrl}/api/PurchaseOrder/Edit`, params)


            .pipe(map(x => {
              
                return x;
            }));
    }


    delete(purchaseOrderDetail1: string) {
        console.log('Here purchaseOrderDetail is ');
        console.log(purchaseOrderDetail1);


        return this.http.delete(`${environment.apiUrl}/api/PurchaseOrder/Remove?purchaseOrderId=${purchaseOrderDetail1}`)
            .pipe(map(x => {
             
                return x;
            }));
    }
}

