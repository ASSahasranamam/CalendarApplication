import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

import {DialogformService} from './dialogform.service'
import {MatDialog} from '@angular/material';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { filter } from 'rxjs/operators';

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
  showDashboard: boolean  = false;
  showProjects: boolean = false
  isLogin: boolean;



  username:string =''
  constructor(private http: HttpClient, private router: Router,
    public dialog: MatDialog, private dservice: DialogformService){



}


  ngOnInit(): void {
    this.http.get('http://localhost:5002/').subscribe(data => {
      console.log(data);
    });

    this.username = this.dservice.getUserName();

    this.router.events.pipe(
  filter(event =>
     event instanceof NavigationEnd)).subscribe(
       (event: NavigationEnd) => {
  console.log(event.url);
  if(event.url === '/login' || event.url=='/' ){
    this.isLogin = true;

  } else{
    this.isLogin = false;
  }
  console.log(this.isLogin);
  });

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

  dashCalSwitch(): void {
    if(this.showDashboard== true){
      this.showDashboard= false
      this.showProjects = false
    } else{
      this.showDashboard = true
      this.showProjects = false
    }
  }


  displayProject(): void{
    console.log("helo");

    this.router.navigateByUrl('/project');

    //this.showDashboard = false;
    //this.showProjects =  true;
    //console.log(this.showProjects)
  }

}
