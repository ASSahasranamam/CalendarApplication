import { Component, OnInit, ElementRef } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import { FormControl, Validators} from '@angular/forms'
import * as moment from 'moment'

import { } from '@types/googlemaps';


import{DialogformService} from '../dialogform.service'

import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-buy-sell-dialog',
  templateUrl: './buy-sell-dialog.component.html',
  styleUrls: ['./buy-sell-dialog.component.css']
})
export class BuySellDialogComponent implements OnInit {

  option : string;
  item: string ='';
  quantity: number=1;
  description: string=''
  dueDate: Date;
  costPU: number;

latitude: number ;
longitude: number ;
public searchControl: FormControl;
public zoom: number;
recurOrder: boolean = false;
minStock: number = 10;
radius: number = 50;
duration: number;
durationUnit: string;
color: string ='green'


reqMaint: boolean = true;
warrantyReq: boolean = true;
warrantyPer: number = 1;
condMonitor: boolean = false; 
@ViewChild("search")
public searchElementRef: ElementRef;



  quantityCont = new FormControl("", [Validators.min(1), Validators.required])
  reqControl = new FormControl("", [Validators.required])

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;



  constructor(
    private dservice: DialogformService,
    private mapsAPILoader: MapsAPILoader,
private ngZone: NgZone


  ) {   }


  ngOnInit() {
    this.option = this.dservice.getBs();


    //create search FormControl
  this.searchControl = new FormControl();

  //set current position
  this.setCurrentPosition();

  //load Places Autocomplete
  this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      types: ["address"]
    });
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
      });
    });
  });
}

private setCurrentPosition() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 12;
    });
  }
}




  @ViewChild('autosize') autosize: CdkTextareaAutosize;


}
