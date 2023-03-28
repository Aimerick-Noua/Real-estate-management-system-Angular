import { Component, OnInit } from '@angular/core';
import { AgentsComponent } from '../agents/agents.component';
import { ServiceService } from '../agents/service.service';
import { PropertyClass } from '../property/property-class';
import { ProservService } from '../property/proserv.service';
import { userServiceService } from '../users/userService.service';

@Component({
  selector: 'app-dashb',
  templateUrl: './dashb.component.html',
  styleUrls: ['./dashb.component.css']
})
export class DashbComponent implements OnInit {
  data: any;
  counter:any;
  clientData:any;
  proData:any;
  r:any;
  s:any;
  constructor(private agentdata:ServiceService,private userhttp:userServiceService,private property:ProservService) { }
    
  ngOnInit(): void {

    this.userhttp.getAllUsers().subscribe({
      next:(res)=>{
        this.clientData=res;
      }
    });

  this.agentdata.getAll().subscribe({
    next:(res)=>{
      this.data=res;
    }
  });
  
  this.property.getAll().subscribe({
    next:(res:PropertyClass[])=>{
      this.proData=res;
      console.log(this.proData)
    }
  });

 

  }
}
