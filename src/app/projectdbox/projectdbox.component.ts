import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectdbox',
  templateUrl: './projectdbox.component.html',
  styleUrls: ['./projectdbox.component.css']
})
export class ProjectdboxComponent implements OnInit {

  recurrence: boolean = false;
  recurrenceFreq: string = "Week"
  recurrenceWeek: string[]=[]
  recurrenceMonth: string='';
  DayList = [1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24,25,26,27,28,29];
  recurrenceDay: number=1;


  //end: new Date().setHours(23,59,59,999);
  reminderNeeded: boolean= false;
  reminderFreqNeeded:boolean= false;
  reminderFreq:number= 1;
  reminderFreqDuration: string= 'Hours';
  reminderQuote: string= '';
  constructor() { }

  ngOnInit() {
  }

}
