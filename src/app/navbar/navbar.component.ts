import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userServiceService } from '../admins/users/userService.service';
import { UserAuthService } from '../servicesAuth/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private userAuthService:UserAuthService,
    private router:Router,
    public userService:userServiceService) { }

  ngOnInit(): void {
    
  }
  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }

}
