import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DialogformService} from './dialogform.service'
import {MatDialog} from '@angular/material';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';

import {DialogboxComponent} from './dialogbox/dialogbox.component'
import {BuySellDialogComponent} from './buy-sell-dialog/buy-sell-dialog.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'docker-test';
  results = '';
  refresh: Subject<any> = new Subject();

  username:string =''
  constructor(private http: HttpClient,
    public dialog: MatDialog, private dservice: DialogformService){
  }
  ngOnInit(): void {
    this.http.get('http://localhost:5002/').subscribe(data => {
      console.log(data);
    });

    this.username = this.dservice.getUserName();
  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogboxComponent, {});
  //  this.dservice.setDate(this.clickedDate)
  // console.log(this.clickedDate)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
        this.refresh.next()
  //    this.displaySelected()
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
    //  this.displaySelected()
    });
  }



}
