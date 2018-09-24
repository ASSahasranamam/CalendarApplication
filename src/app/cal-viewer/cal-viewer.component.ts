import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import {MatDialog} from '@angular/material';

import { Subject } from 'rxjs/Subject';

import {DialogboxComponent} from '../dialogbox/dialogbox.component'
import {DialogformService} from  '../dialogform.service'
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

@Component({
  selector: 'app-cal-viewer',
  templateUrl: './cal-viewer.component.html',
  styleUrls: ['./cal-viewer.component.css']
})
export class CalViewerComponent implements OnInit {


    showDashboard: boolean  = true;
    view: string = 'month';
    test: string[] =[];
      viewDate: Date = new Date();
      message: string ='hxx';
      events: CalendarEvent[] ;
    clickedDate: Date;
    refresh: Subject<any> = new Subject();

      ngOnInit(){

        this.dservice.eventsHolder.subscribe(events => {
        this.events = events;
        this.refresh.next()

      });
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

  openDiaxlog(evDate: Date): void{

  }
  constructor(public dialog: MatDialog, private dservice: DialogformService ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogboxComponent, {

    minWidth: '50%',
    width: '837px'

  });
    this.dservice.setDate(this.clickedDate)
  console.log(this.clickedDate)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.refresh.next()

    });
  }


  //got a  job
  hello(): void {
    console.log("hello");
    this.test.push('hello')
    console.log(this.test);
  }

  receiveMessage($event){
    this.message = $event;
    console.log(this.message)
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }



}
