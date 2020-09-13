import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Pickup } from '@app/_models/pickup';


@Injectable({ providedIn: 'root' })
export class PickupService {
    private pickupSubject: BehaviorSubject<Pickup>;
    public pickup: Observable<Pickup>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.pickupSubject = new BehaviorSubject<Pickup>(JSON.parse(localStorage.getItem('pickup')));
        this.pickup = this.pickupSubject.asObservable();
    }

    public get pickupValue(): Pickup {
        return this.pickupSubject.value;
    }



    register(pickup: Pickup) {
       // return this.http.post('http://localhost:62522/api/PickupRequest/Add', pickup);
        return this.http.post(`${environment.apiUrl}/api/PickupRequest/Add`, pickup);



    }

    getAll() {
        //return this.http.get<Pickup[]>('http://localhost:62522/api/PickupRequest/Get');
        //return this.http.get<Logistics[]>(`${environment.apiUrl}/api/LogisticCompany/Get`);
        return this.http.get<Pickup[]>(`${environment.apiUrl}/api/PickupRequest/Get`);




    }

    getByPickupId(pickupRequestDetailId: string) {
        return this.http.get<Pickup>(`${environment.apiUrl}/api/PickupRequest/${pickupRequestDetailId}/getByPickupId`);





    }

    update(pickupRequestDetailId, params) {


       // return this.http.put('http://localhost:62522/api/PickupRequest/Edit', params)
        return this.http.put(`${environment.apiUrl}/api/PickupRequest/Edit`, params)


            .pipe(map(x => {

                return x;
            }));
    }


    delete(pickupRequestDetailId: string) {


        return this.http.delete(`${environment.apiUrl}/api/PickupRequest/Remove?pickupRequestId=${pickupRequestDetailId}`)
            .pipe(map(x => {

                return x;
            }));
    }
}

