import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

import {DialogformService} from '../dialogform.service'
import { CalendarEvent } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  datex: Date;
  event: CalendarEvent;
  result: string = "xxxx";
  eventTitle: string = 'title';
  events: CalendarEvent[] =[]
   id: number;
  showEvents: boolean;
  showScheduler: boolean = false;
  refresh: Subject<any> = new Subject();
  selected: string ='minutes'
  dateNull: boolean;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  timeSetting: string ="Duration"

  jsonEvent = {
      title: this.eventTitle,
      dateEvent: this.datex,
      start: startOfDay(this.datex),
      end: endOfDay(this.datex),

    //  color: 'red',
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      with: [],
      duration: 30,
      priority: 'Normal',
      durationUnit: 'Minutes',
      description: ''


    };

  constructor( private dservice: DialogformService, private ngZone: NgZone) {
   }

  ngOnInit() {
    this.datex = this.dservice.getDate()
    console.log(this.datex)
    if( this.datex === undefined){
      this.showEvents= false;
      this.showScheduler = true;
      this.dateNull = true
    }else{
      this.dateNull = false;
    }
    this.dservice.eventsHolder.subscribe(events => {
    this.events = events;
    this.refresh.next()
      });
    this.id = this.events.length +1 ;
    if(this.id === 1){
      this.showEvents = false;
    }else{
      this.showEvents = true;
    }
    console.log(this.showEvents)
    console.log(this.showScheduler)

    this.dropdownList = [
      { item_id: 1, item_text: 'John' },
      { item_id: 2, item_text: 'Bob' },
      { item_id: 3, item_text: 'Chuck' },
      { item_id: 4, item_text: 'Alex' },
      { item_id: 5, item_text: 'LeBron James' }
    ];
    this.selectedItems = [
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

}

  scheduleEvent(): void{

    this.showEvents = true
    console.log('send');
    this.dservice.setString('this Works')

    this.dservice.schedEvent(this.jsonEvent)


  }

  sendMessage(): void {
    this.showEvents = true
    console.log('send');
    this.dservice.setString('this Works')
    this.event= {
      title: this.eventTitle,
      start: startOfDay(this.datex),
      end: endOfDay(this.datex),

    //  color: 'red',
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },

    };
    this.dservice.addEvent(this.event)
  }

  onItemSelect (item:any) {
      console.log(item);
    }
    onSelectAll (items: any) {
      console.log(items);
    }
  message: string = "Aaaand this works!!"

scheduleEventshow(): void{

  this.showEvents=false;
  this.showScheduler=true;

}


  @ViewChild('autosize') autosize: CdkTextareaAutosize;

}
