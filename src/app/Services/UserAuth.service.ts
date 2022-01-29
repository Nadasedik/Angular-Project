import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLogin: BehaviorSubject<boolean>;
  private userName: BehaviorSubject<string>;
constructor() {
  this.isLogin=new BehaviorSubject <boolean> (this.IsUserLogged)
  this.userName=new BehaviorSubject <string> ("")
 }

Login(UserName:string,Password:string)
{
  let token='12345'
  localStorage.setItem("Token",token)
  this.isLogin.next(true)
  this.userName.next(UserName)
}
Logout()
{
  localStorage.removeItem("Token")
  this.isLogin.next(false)
  this.userName.next("")
}

get IsUserLogged(): boolean
{
  return  (localStorage.getItem('Token'))? true: false;
}

GetUserStatus():Observable<boolean>
{
  return this.isLogin.asObservable()
}

GetUserName():Observable<string>
{
  return this.userName.asObservable();
}
}
