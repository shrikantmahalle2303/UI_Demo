import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
//import { User } from '@app/_models';

import { Logistics } from '@app/_models/logistics';


@Injectable({ providedIn: 'root' })
export class LogisticsService {
    private logisticsSubject: BehaviorSubject<Logistics>;
    public logistics: Observable<Logistics>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.logisticsSubject = new BehaviorSubject<Logistics>(JSON.parse(localStorage.getItem('logistics')));
        this.logistics = this.logisticsSubject.asObservable();
    }

    public get logisticsValue(): Logistics {
        return this.logisticsSubject.value;
    }

   /* login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    } */

    register(logistics: Logistics) {
       // return this.http.post(`${environment.apiUrl}/users/register`, logistics);
       console.log('service call ke pahale');
      // return this.http.post('http://localhost:62522/api/LogisticCompany/Add', logistics);
       return this.http.post(`${environment.apiUrl}/api/LogisticCompany/Add`, logistics);

    } 

    getAll() {
       // return this.http.get<Logistics[]>(`${environment.apiUrl}/users`);
        //return this.http.get<Logistics[]>('http://localhost:62522/api/LogisticCompany/Get');
                return this.http.get<Logistics[]>(`${environment.apiUrl}/api/LogisticCompany/Get`);


    }

    getByLogisticCompanyId(logisticCompanyId: string) {
        //return this.http.get<Logistics>(`${environment.apiUrl}/users/${logisticCompanyId}`);
        return this.http.get<Logistics>(`${environment.apiUrl}/api/LogisticCompany/${logisticCompanyId}/getCompanyById`);

        //http://localhost:62522/api/LogisticCompany/24/getCompanyById


    }

    update(logisticCompanyId, params) {
        console.log(logisticCompanyId);
        console.log(params);

        //return this.http.put(`${environment.apiUrl}/users/${logisticCompanyId}`, params)
        //return this.http.put('http://localhost:62522/api/LogisticCompany/Edit', params)
        return this.http.put(`${environment.apiUrl}/api/LogisticCompany/Edit`, params)

            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                //if (logisticCompanyId == this.logisticsValue.logisticCompanyId) {
                    // update local storage
                    //const logistics = { ...this.logisticsValue, ...params };
                    //localStorage.setItem('user', JSON.stringify(logistics));

                    // publish updated user to subscribers
                    //this.logisticsSubject.next(logistics);
                //}
                return x;
            }));
    }


    delete(logisticCompanyId: string) {
        return this.http.delete(`${environment.apiUrl}/api/LogisticCompany/Remove?logisticCompanyId=${logisticCompanyId}`)
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