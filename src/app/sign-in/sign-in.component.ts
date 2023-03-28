import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userServiceService } from '../admins/users/userService.service';
import { UserAuthService } from '../servicesAuth/user-auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService:userServiceService,
    private userAthService:UserAuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  public data:any;

  login(loginForm:NgForm){
   this.userService.login(loginForm.value).subscribe(
    (res:any)=>{
   
    console.log(res)
    this.userAthService.setRoles(res.user.role);
    this.userAthService.setToken(res.jwtToken);
    const role = res.user.role[0].roleName;
    if(role === 'Admin'){
      this.router.navigate(['/admins/dashb']);
    }
    if (role === 'Agent') {
      this.router.navigate(['/agentAdmin/agentdasb']);
    } 
    if(role === 'User'){
      this.router.navigate(['/user']);

    }
   
   },
   (error)=>{
   console.log(error.message);
   })
   
  }
}
