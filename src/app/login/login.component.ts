import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router) {
   }
email: string
password: string
sReg: boolean
sLogin: boolean


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
}
}
