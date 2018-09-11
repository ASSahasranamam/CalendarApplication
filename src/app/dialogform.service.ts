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
getString(): string{
  return this.exString;
}


getDate(): Date {
  return this.exDate;
}
}
