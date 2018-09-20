import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

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


@Injectable({
  providedIn: 'root'
})


export class DialogformService {

exString: string ='yyy'
exDate: Date;
infoEventsx: any = []
events : CalendarEvent[] = [];
sample: CalendarEvent= {
  title: 'New event',
  start: startOfDay(this.exDate),
  end: endOfDay(this.exDate),
  //color: color.red,
  draggable: true,
  resizable: {
    beforeStart: true,
    afterEnd: true
  }
} ;
private editInfo = new BehaviorSubject<CalendarEvent>( this.sample);
private editHolder= this.editInfo.asObservable();


private eventsInfo = new BehaviorSubject<CalendarEvent[]>( this.events);
public eventsHolder= this.eventsInfo.asObservable();


private infoEvents = new BehaviorSubject<any[]>( this.infoEvents ]);
public infoEventsHolder= this.infoEvents.asObservable();

  constructor(
) { }

setDate(datex: Date){
  this.exDate = datex;
  console.log('ServiceSam[lpe]',this.exDate)
}

setString(res: string){
  this.exString = res;
  console.log(this.exString)
}



addEvent(res: CalendarEvent){
  this.sample = res;
  console.log(this.sample)
  this.events.push(this.sample)

}


schedEvent(res: any){
  this.sample = {

    title: res.title
    start: res.start,
    end: res.end),
    color: 'red',
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true
    }
  }

  this.events.push(this.sample)
  this.infoEventsx.push(this.res)

}

getString(): string{
  return this.exString;
}


getDate(): Date {
  return this.exDate;
}
}
