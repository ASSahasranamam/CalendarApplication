import { Component, OnChanges, OnInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { DateTime } from 'luxon';

import * as moment from 'moment'
import 'moment-recur-ts'

import {MatDialog} from '@angular/material';

import { Subject } from 'rxjs/Subject';

import {DialogboxComponent} from '../dialogbox/dialogbox.component'
import {BuySellDialogComponent} from '../buy-sell-dialog/buy-sell-dialog.component'
import {DialogformService} from  '../dialogform.service'
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
const startOfPeriod: any = {
  month: startOfMonth,
  week: startOfWeek,
  day: startOfDay
};

const endOfPeriod: any = {
  month: endOfMonth,
  week: endOfWeek,
  day: endOfDay
};



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  showDashboard: boolean  = false;
  showProjects: boolean = false
  view: string = 'day';
  eventDetails: any[] =[];
    viewDate: Date = new Date();
    message: string ='hxx';
    events: CalendarEvent[] ;
  clickedDate: Date;
  refresh: Subject<any> = new Subject();

  recurringEvents: any[] = []
  startDate = moment([ moment().year(), moment().month()]);
  nextEvents: any[];
 // Clone the value before .endOf()
  endDate = moment(this.startDate).endOf('month');
  recurrence = this.startDate.recur(this.endDate).every(["Friday", "Monday"]).daysOfWeek();

  constructor(public dialog: MatDialog, private dservice: DialogformService ) {}

    ngOnInit(){
      this.nextEvents=[];

      this.dservice.eventsHolder.subscribe(events => {
      this.events = events;
      this.refresh.next()
      this.displaySelected()


    });

    this.dservice.infoEventsHolder.subscribe(infoEventsx => {
    this.eventDetails = infoEventsx;
    console.log(infoEventsx);
    this.refresh.next()
    this.displaySelected()

  });

  this.displaySelected();

  }

    addEvent(evDate: Date): void {
  //
  // this.events.push({
  //   title: 'New event',
  //   start: startOfDay(new Date(this.evDate)),
  //   end: endOfDay(new Date()),
  //   color: 'red',
  //   draggable: true,
  //   resizable: {
  //     beforeStart: true,
  //     afterEnd: true
  //   }
  // });
//  this.refresh.next();
}

openDialog() {
  let dialogRef = this.dialog.open(DialogboxComponent, {});
//  this.dservice.setDate(this.clickedDate)
// console.log(this.clickedDate)
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
      this.refresh.next()
      this.displaySelected()
  });
}

openBsDialog(option: string) {



  this.dservice.setBs(option);
  console.log(option);


  let dialogRef2 = this.dialog.open(BuySellDialogComponent, {

  minWidth: '70%',
  width: 'auto'

});
  dialogRef2.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.refresh.next()
    this.displaySelected()
  });
}


dashCalSwitch(): void {
  if(this.showDashboard== true){
    this.showDashboard= false
    this.showProjects = false
  } else{
    this.showDashboard = true
    this.showProjects = false
  }
}


displaySelected(): void{
  console.log(this.eventDetails)
  console.log("hello")
  for(var i of this.eventDetails){
    if(moment(i.start).isAfter(moment())){
      console.log(i.start)
      this.nextEvents.push(i)
    }
  }
console.log(this.nextEvents);
}

displayProject(): void{
  console.log("helo");
  this.showDashboard = false;
  this.showProjects =  true;
  console.log(this.showProjects)
}

}
