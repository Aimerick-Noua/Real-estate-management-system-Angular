import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../servicesAuth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor(    private userAthService:UserAuthService ){}
  canActivateChild(){

    if(this.userAthService.isLoggedIn()){
    return true;
    }else
    {
      return false;
    }
    
  
  }
  
}
