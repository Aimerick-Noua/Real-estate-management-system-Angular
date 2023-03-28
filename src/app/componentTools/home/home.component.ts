import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, filter } from 'rxjs';
import { PropertyClass } from 'src/app/admins/property/property-class';
import { PropertyImageServiceService } from 'src/app/admins/property/property-image-service.service';
import { ProservService } from 'src/app/admins/property/proserv.service';
import { userServiceService } from 'src/app/admins/users/userService.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: any;
  sort = '';
  message='';
  prodata: any;
  calls: PropertyClass[] = [];
  imageToShow: any;
  constructor(private route: Router, private proserv: ProservService, 
    private proImageSer: PropertyImageServiceService, 
    private routing:ActivatedRoute,
    private userService:userServiceService) { }

  ngOnInit(): void {
   
    this.getALL();
  }
  
  getALL() {
    this.proserv.getAll()
      .pipe(
        map((x: PropertyClass[], i) => x.map((property: PropertyClass) => this.proImageSer.createImages(property)))
      )
      .subscribe((res: PropertyClass[]) => {
        this.prodata = res;
        console.log(this.prodata);

      })

  }
  openPropertyDetails(id: string) {
    this.route.navigate(['details', id]);
  }

  searchItem(sort:String, search?:string){
    this.proserv.getAll()
    .subscribe((res:PropertyClass[])=>{
      this.calls=res;
    })
  }
  
  
}
