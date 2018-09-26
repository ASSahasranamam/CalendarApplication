import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from 'rxjs/Rx';
import { Http, Headers, RequestOptions,HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router, private http: Http) {
   }
name: string;
email: string;
password: string;
sReg: boolean;
sLogin: boolean;
reg: any

private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
private options = new RequestOptions({ headers: this.headers });

  ngOnInit() {
    this.showLogin()


  }

   add() : void {
     console.log(this.email)
     console.log(this.password)
}
showReg() : void {
  console.log("regshow");

  this.sReg = true;
  this.sLogin = false;
  console.log(this.sReg, 'showReg - login')
  console.log(this.sLogin, 'showLogin - login')

}
showLogin() : void {
  console.log("loginShow");

  this.sReg = false;
  this.sLogin = true;
  console.log(this.sReg, 'showReg -reg')
  console.log(this.sLogin, 'sLogin -reg')

}
cal() : void {
  this.router.navigate(['/calendar'])
  this.http.post('http://localhost:3000/users/register', JSON.stringify(this.reg), this.options).subscribe(
    res => {
      console.log("response")
      console.log(res);
   //   let resProc = res.json();
 },

  error => {
    alert("error: " + error);
  });

}

login(): any{

  this.reg = {
    email:  this.email,
    password: this.password

  }
  this.http.post('http://localhost:3000/users/login', JSON.stringify(this.reg), this.options).subscribe(
    res => {
      console.log("response")
      console.log(res);
      if(res["_body"] =="invalidLogin"){
        alert('Invalid Credentials')
      } else if(res["_body"] =='greenlight'){
        this.router.navigate(['/calendar']);
      }
   //   let resProc = res.json();
 },

  error => {
    alert("error: " + error);
  });


}


getComments() : void {
  this.reg = {
        email:  this.email,
        password: this.password,
        name: this.name
      }
console.log(this.reg)
 this.http.post('http://localhost:3000/users/register', JSON.stringify(this.reg), this.options).subscribe(
   res => {
     console.log("response")
     console.log(res);
  //   let resProc = res.json();
});

}

}
