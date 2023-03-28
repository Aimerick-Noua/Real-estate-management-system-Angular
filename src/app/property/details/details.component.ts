import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { PropertyClass } from 'src/app/admins/property/property-class';
import { PropertyImageServiceService } from 'src/app/admins/property/property-image-service.service';
import { ProservService } from 'src/app/admins/property/proserv.service';
import { ContactFormComponent } from 'src/app/contact-form/contact-form.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  property: PropertyClass = new PropertyClass;
  id!:number;
  selectedIndex=0;
  dataSource: any;
  constructor(private proserve:ProservService,
    private route:ActivatedRoute,
    private proImageSer: PropertyImageServiceService,
    public dialog: MatDialog,private proservImas:PropertyImageServiceService, private service:ProservService, private router:ActivatedRoute) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.proserve.getPropertyById(this.id)
    .pipe(
      map(p=>this.proImageSer.createImages(p))
    )
    .subscribe(
      (data:any)=>{
        this.property=data;
        console.log(data);
      },
      error=>console.log(error)
    );

  
  }
  changeIndex(index:number){
    this.selectedIndex=index;
  }

  

  contact(){
    this.dialog.open(ContactFormComponent, {
      width: '40%', 
      height:'auto%', 
      maxWidth: '80vw', 
      maxHeight: '70vw',
      disableClose: true,
      data:this.property,
      })
  }
}
