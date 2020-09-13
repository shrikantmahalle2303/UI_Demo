import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Location } from '@app/_models/location';


@Injectable({ providedIn: 'root' })
export class LocationService {
    private locationSubject: BehaviorSubject<Location>;
    public location: Observable<Location>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) 
    {
        this.locationSubject = new BehaviorSubject<Location>(JSON.parse(localStorage.getItem('location')));
        this.location = this.locationSubject.asObservable();
    }

    public get locationValue(): Location {
        return this.locationSubject.value;
    }

   

    getByLocationId(id: string) {
        //return this.http.get<Logistics>(`${environment.apiUrl}/users/${logisticCompanyId}`);
       // console.log('id is '||id);
        console.log(id);
        return this.http.get<Location>(`${environment.apiUrl}/api/Location/${id}/getLocationById`);
        //return this.http.get<Location>('http://localhost:62522/api/Location/5/getLocationById');



    }

   
    
}