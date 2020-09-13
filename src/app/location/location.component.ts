import { Component, OnInit } from '@angular/core';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { LocationService } from '@app/_services/location.service';
import { AccountService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';


declare const L: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent implements OnInit {
  title = 'locationApp';
  la = 10;
  lg= 20;
  id='7';
  location = null;


  constructor(
   
    private locationService: LocationService,
    private alertService : AlertService,
    private accountService: AccountService

) { }
  
  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      //const coords = position.coords;
      //const latLong = [coords.latitude, coords.longitude];
     //const latLong = [20.555669,50.780938];

    
    
      this.locationService.getByLocationId(this.id)
      .pipe(first())
      .subscribe(location => this.location = location);
      //.subscribe(x => {
        //this.la.set(x.lat);
        //this.lg.set(x.lang);
        //this.la=x.lat;
        //this.lg=x.lang;
        //console.log(x.lat);
        //console.log(x.lang);
        //console.log(x.created_date);
        //const latLong = [x.lat, x.lang];
       // console.log(latLong);

      //});
   
      //const latLong = [this.la, this.lg];
      console.log(this.location);
      console.log(this.lg);


    
      let mymap = L.map('map').setView(this.la,this.lg, 13);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);

      let marker = L.marker(this.la,this.lg).addTo(mymap);

      marker.bindPopup('<b>HI</b>').openPopup();

      let popup = L.popup()
          .setLatLng(this.la,this.lg)
          .setContent('This is You')
        .openOn(mymap);

    });
    this.watchPosition();
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
      //  console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

}

