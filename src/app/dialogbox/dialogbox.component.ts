import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import { FormControl, Validators} from '@angular/forms'
import * as moment from 'moment'
import 'moment-recur-ts'


import {DialogformService} from '../dialogform.service'
import { CalendarEvent } from 'angular-calendar';
import {
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfMonth,
  endOfWeek,
  endOfDay,
  subDays,
  addDays,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { Color} from 'color';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


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

  timeSetting: string ="Appointment";
  recurrence: boolean = false;
  recurrenceFreq: string = "Week"
  recurrenceWeek: string[]=[]
  recurrenceMonth: string='';
  DayList = [1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29];
  recurrenceDay: number=1;

  view: string = 'month';
  test: string[] =[];
  viewDate: Date = new Date();
  recurringEvents: any[] = [];

  startDate: any;
  endDate:any;
  RecuttingEvents: any;

  jsonEvent = {
      title: this.eventTitle,
      dateEvent: this.datex,
      start: moment().toDate(),
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
    rateControl = new FormControl("", [Validators.max(100), Validators.min(1), Validators.required])

  constructor( private dservice: DialogformService, private ngZone: NgZone) {
   }

  ngOnInit() {
    this.viewDate = this.dservice.getDate()

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
      if(this.recurrence==true){
        console.log(this.jsonEvent.start)
        if( this.jsonEvent.start.toString() == 'Invalid Date'){
          console.log('undefined')
          this.startDate = moment([ moment(this.viewDate).year(), moment(this.viewDate).month()])
          this.endDate = moment([ moment(this.viewDate).add('y',1).year() , moment(this.viewDate).month()])
          console.log( this.startDate)
          console.log(this.endDate)
        } else{
          this.startDate = moment([ moment(this.jsonEvent.start).year(), moment(this.jsonEvent.start).month()]);
          this.endDate = moment([ moment(this.jsonEvent.start).add('y',1).year() , moment(this.jsonEvent.start).month()])

        }
        let holder;
       // Clone the value before .endOf()
      //  this.endDate = moment(this.startDate).endOf('month');
        if(this.recurrenceFreq='Week'){
           holder = this.startDate.recur(this.endDate).every(this.recurrenceWeek).daysOfWeek().all("L")
      } else if(this.recurrenceFreq='Month'){
         holder = this.startDate.recur(this.endDate).every(this.recurrenceMonth).daysOfMonth().all("L");
      } else if(this.recurrenceFreq='Daily'){
         holder = this.startDate.recur(this.endDate).every(this.recurrenceDay).day().all("L");
      }
        for(let i of holder){
          this.jsonEvent.start = moment(i).add({hours: moment(this.jsonEvent.duration).hours(), minutes: moment(this.jsonEvent.duration).minutes() }).toDate()
          this.jsonEvent.end = moment(i).add({hours: moment(this.jsonEvent.duration).hours(), minutes: moment(this.jsonEvent.duration).minutes() }).toDate()
          this.dservice.schedEvent(this.jsonEvent)
          this.refresh.next()

        }
      }else{

          console.log(this.jsonEvent)
          this.dservice.schedEvent(this.jsonEvent)
          this.refresh.next()
        }
  }

  sendMessage(): void {
    this.showEvents = true
    console.log('send');
    this.dservice.setString('this Works')
    this.event= {
      title: this.eventTitle,
      start: startOfDay(this.datex),
      end: endOfDay(this.datex),

      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },

    };
    this.dservice.addEvent(this.event);
    this.refresh.next()

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
