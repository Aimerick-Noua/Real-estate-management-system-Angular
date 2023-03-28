import { Component, OnInit } from '@angular/core';
import { userServiceService } from '../admins/users/userService.service';

@Component({
  selector: 'app-agent-admin',
  templateUrl: './agent-admin.component.html',
  styleUrls: ['./agent-admin.component.css']
})
export class AgentAdminComponent implements OnInit {
message='';
  constructor(private userService:userServiceService) { }

  ngOnInit(): void {
  
  }
 

}
