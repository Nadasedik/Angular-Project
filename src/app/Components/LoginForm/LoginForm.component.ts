import { UserAuthService } from './../../Services/UserAuth.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-LoginForm',
  templateUrl: './LoginForm.component.html',
  styleUrls: ['./LoginForm.component.scss']
})
export class LoginFormComponent implements OnInit {

  IsLogged:boolean=false

  constructor(private userAuth:UserAuthService
              ,private location:Location) { }

  ngOnInit() {
 
  }

UserLogin(userName:string,password:string)
{
  this.userAuth.Login(userName,password)
  this.IsLogged=this.userAuth.IsUserLogged;
  this.location.back();
  console.log(userName)
}

Logout()
{
  this.userAuth.Logout()
  this.IsLogged=this.userAuth.IsUserLogged;
  console.log(this.IsLogged)
}
}
