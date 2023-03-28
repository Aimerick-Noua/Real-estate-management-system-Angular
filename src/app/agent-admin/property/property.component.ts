import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PdialogComponent } from './pdialog/pdialog.component';
import { ProservService } from './proserv.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PropertyClass } from './property-class';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';
import { PropertyImageServiceService } from './property-image-service.service';
import { AgentClass } from '../agents/agent-class';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  data:any;
displayedColumns: string[] = ['name', 'images','price','location','status','category','numRoom','numLivingRoom','numKitchen','numBath','area','last_update','actions'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id: any;
  snapshot: any;

  constructor(private proservImas:PropertyImageServiceService, private service:ProservService, public dialog: MatDialog, private router:ActivatedRoute) { }
  openDialog() {
    this.dialog.open(PdialogComponent, {
      width: '50%', 
      height:'100%', 
      maxWidth: '80vw', 
      maxHeight: '70vw',
      disableClose: true,
      }).afterClosed().subscribe(res=>{
        this.getAllProperties();
      })
    
    };
  
  ngOnInit(): void {
  this.getAllProperties();

    }
    getAllProperties(){
      this.service.getAll()
      .pipe(
         map((x: PropertyClass[],i)=>x.map((property:PropertyClass)=>this.proservImas.createImages(property)))
        )
      .subscribe((res:PropertyClass[])=>{
        
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
     
     });
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  

    editProperty(row:any){
    this.dialog.open(PdialogComponent, {
      width: '50%',
      height:'100%', 
      maxWidth: '90vw', 
      maxHeight: '90vh', 
      data:row
    }).afterClosed().subscribe(res=>{
      this.getAllProperties();
    });
  }

  deleteProperty(id:number){
   return this.service.DeleteAll(id).subscribe({
    next:(res)=>{
      this.data=this.getAllProperties();
      alert("deleted successfully")
    },
    error:()=>{
      alert("data not deleted");
    }
   });
  }
  showPropertyImages(property:PropertyClass){
    // console.log(property);
    this.dialog.open(PropertyDialogComponent, {
      data:{
         images:property.propertyImages,
      },
      width: '50%', 
      height:'auto', 
      maxWidth: '80vw', 
      maxHeight: '70vw',
      })

  }
}
