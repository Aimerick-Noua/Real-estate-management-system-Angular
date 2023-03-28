import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { userServiceService } from '../admins/users/userService.service';
import { UserAuthService } from '../servicesAuth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService,
    private router: Router,
    private userService: userServiceService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.userAuthService.getToken() !== null) {
      const role = route.data["roles"] as Array<string>;
      if (role) {
        const match = this.userService.roleMatch(role);
        console.log(role)
        if (match) {
          return true;
        }
        else {
          this.router.navigate(['/home']);
          console.log(role)
          return false;
        }
      }
    }
    this.router.navigate(['/signin']);
    return false;
    
  } 
}
