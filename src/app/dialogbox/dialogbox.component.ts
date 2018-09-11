import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
   id: number
  showEvents: boolean;
  constructor( private dservice: DialogformService) {
   }

  ngOnInit() {
    this.datex = this.dservice.getDate()

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
        afterEnd: true
      }
    };
    this.dservice.addEvent(this.event)
    this.refresh.next()
  }

  message: string = "Aaaand this works!!"



}
