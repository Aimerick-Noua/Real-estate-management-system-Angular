import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../servicesAuth/user-auth.service';
import { userServiceService } from './users/userService.service';


@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
message='';
  constructor(private authservice:UserAuthService,private userService:userServiceService) {
 
   }

  ngOnInit(): void {
  }
  forAdmin(){
    this.userService.forAdmin().subscribe(
      (res)=>{
        console.log(res);
        this.message=res;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
