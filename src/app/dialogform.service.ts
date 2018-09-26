import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

import {
  getMonth,
  startOfMonth,
  startOfWeek,
  startOfDay,
  endOfMonth,
  endOfWeek,
  endOfDay
} from 'date-fns';
import { CalendarEvent } from 'angular-calendar';



@Injectable({
  providedIn: 'root'
})

export class DialogformService {
userID: string;
viewDate: Date = new Date()
exString: string ='yyy'
exDate: Date;
infoEventsx: any[] = []


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


private infoEvents = new BehaviorSubject<any[]>( this.infoEventsx);
public infoEventsHolder= this.infoEvents.asObservable();

private dateInfo = new BehaviorSubject<Date>(this.viewDate);
public dateInfoHolder = this.dateInfo.asObservable;
  constructor(
) { }

setDate(datex: Date){
  this.viewDate = datex;
  console.log('ServiceSam[lpe]',this.viewDate)
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


schedEvent( res: any){
  this.sample = {

    title: res.title,
    start: res.start,
    end: res.end,
    //color: 'red',
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true
    }
  }

  this.events.push(this.sample)
  this.infoEventsx.push(res)
}

getString(): string{
  return this.exString;
}


getDate(): Date {
  return this.viewDate;
}


}
