import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Customer } from '@app/_models/customer';


@Injectable({ providedIn: 'root' })
export class CustomerService {
    private customerSubject: BehaviorSubject<Customer>;
    public customer: Observable<Customer>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.customerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('customer')));
        this.customer = this.customerSubject.asObservable();
    }

    public get customerValue(): Customer {
        return this.customerSubject.value;
    }

   

    register(customer: Customer) {
       console.log('service call ke pahale');
         return this.http.post(`${environment.apiUrl}/api/Customer/Add`, customer);

    } 

    getAll() {
        return this.http.get<Customer[]>(`${environment.apiUrl}/api/Customer/Get`);



    }

    getByCustomerId(customerId: string) {
        return this.http.get<Customer>(`${environment.apiUrl}/api/Customer/${customerId}/getCustomerById`);



    }

    update(customerId, params) {
        console.log(customerId);
        console.log(params);

        //return this.http.put(`${environment.apiUrl}/users/${logisticCompanyId}`, params)
       // return this.http.put('http://localhost:62522/api/Customer/Edit', params)
        return this.http.put(`${environment.apiUrl}/api/Customer/Edit`, params)


            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
               // if (customerId == this.customerValue.customerId) {
                    // update local storage
                   // const customer = { ...this.customerValue, ...params };
                    //localStorage.setItem('user', JSON.stringify(customer));

                    // publish updated user to subscribers
                    //this.customerSubject.next(customer);
                //}
                return x;
            }));
    }


    delete(customerId: string) {

        return this.http.delete(`${environment.apiUrl}/api/Customer/Remove?customerId=${customerId}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
               // if (logisticCompanyId == this.logisticsValue.logisticCompanyId) {
                    //this.logout();
                 //   console.log('Company delete nhi hui');
                //}
                return x;
            }));
    }
}