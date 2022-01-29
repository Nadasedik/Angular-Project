import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Services/UserAuth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor(private userAuth:UserAuthService
    , private router: Router)
{}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.userAuth.IsUserLogged)
      {
        
        return true
      }
      else
      {
        alert ('You must login First...');
        this.router.navigate(['/Login']);
        return false
      }
  }
  
}
