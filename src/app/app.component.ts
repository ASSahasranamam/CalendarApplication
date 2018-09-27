
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DialogformService} from './dialogform.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'docker-test';
  results = '';
  username:string =''
  constructor(private http: HttpClient, private dservice: DialogformService){
  }
  ngOnInit(): void {
    this.http.get('http://localhost:5002/').subscribe(data => {
      console.log(data);
    });

    this.username = this.dservice.getUserName();
  }
}
