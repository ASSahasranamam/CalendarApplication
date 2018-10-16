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
viewDate: Date = new Date()
exString: string ='yyy'
exDate: Date;
infoEventsx: any[] = []
username: string = '';
userID: string='';


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

bs: string ='buy'
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

getUserId(): string{
  return this.userID
}

getUserName(): string{
  return this.username;
}
setString(res: string){
  this.exString = res;
  console.log(this.exString)
}

setUser(userID: string, username: string){
  this.userID= userID;
  this.username= username;
}

addEvent(res: CalendarEvent){
  this.sample = res;
  console.log(this.sample)
  this.events.push(this.sample)

}

//USE THIS AS TEMPLATE AND FUNCTION ISNTEAD OF AddEvent
schedEvent( res: any){
  console.log(res.start)
  this.sample = {

    title: res.title,
    start: res.start,
    end: res.end,
    color: res.color,
    draggable: true,
    resizable: {
      beforeStart: true,
      afterEnd: true
    }

  }

  console.log(this.infoEventsx)

  this.events.push(this.sample)
  this.infoEventsx.push(res)
  console.log(this.infoEventsx);
}

getString(): string{
  return this.exString;
}


getDate(): Date {
  return this.viewDate;
}

//Set & Get buy or Sell
setBs(option: string): void {
  this.bs= option;
}

getBs(): string{
    return this.bs;
}

setProject(projDetails: any): void{
  console.log(projDetails);
}

}
