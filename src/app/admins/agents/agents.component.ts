import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AgentsDialogComponent } from '../agent/agents-dialog/agents-dialog.component';
import { ServiceService } from './service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
data:any;
displayedColumns: string[] = ['userName','firstName', 'lastName', 'email','password','telNum','dob','sex','address','marital_status','nationality','actions'];
  dataSource!:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id: any;
  snapshot: any;

  constructor(private service:ServiceService, public dialog: MatDialog, private router:ActivatedRoute) { }
  openDialog() {
    this.dialog.open(AgentsDialogComponent, {
      width: '50%', 
      height:'auto', 
      maxWidth: '80vw', 
      maxHeight: 'auto',
      disableClose: true,
      }).afterClosed().subscribe(res=>{
        this.getAllagents();
      })
    
    };
  
  ngOnInit(): void {
  this.getAllagents();

    }
    getAllagents(){
      this.service.getAll().subscribe((res:any)=>{
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
  

  editAgent(row:any){
    this.dialog.open(AgentsDialogComponent, {
      width: '50%',
      height:'auto', 
      maxWidth: '90vw', 
      maxHeight: '90vh', 
      data:row
    }).afterClosed().subscribe(res=>{
      this.getAllagents();
    });
  }

  deleteAgent(id:number){
   return this.service.DeleteAll(id).subscribe({
    next:(res)=>{
      this.data=this.getAllagents();
      alert("deleted successfully")
    },
    error:()=>{
      alert("data not deleted");
    }
   });
  }


}


