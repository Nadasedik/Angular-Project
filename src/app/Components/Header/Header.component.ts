import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/UserAuth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {
  IsLogged:boolean;
  userName:string=""
  constructor(private userAuth:UserAuthService
             ,private location:Location) { 
    this.IsLogged=this.userAuth.IsUserLogged;
  }

  ngOnInit() {
    this.userAuth.GetUserStatus().subscribe(status=>
      {
        this.IsLogged=status
      })

      this.userAuth.GetUserName().subscribe(name=>
        {
          this.userName=name
        })
        console.log(this.IsLogged)
  }

  logout()
  {
    this.userAuth.Logout();
    this.IsLogged=this.userAuth.IsUserLogged;
    this.userName=""
    console.log("logout")
    
  }
}
