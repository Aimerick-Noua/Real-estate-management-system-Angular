import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AgentsDialogComponent } from '../agent/agents-dialog/agents-dialog.component';
import { UserdialogComponent } from './userdialog/userdialog.component';
import { userServiceService } from './userService.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  data:any;
  displayedColumns: string[] = ['userName', 'userFirstName', 'userLastName','userEmail','userPassword','actions'];
    dataSource!:MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    id: any;
    snapshot: any;
  
    constructor(private service:userServiceService, public dialog: MatDialog, private router:ActivatedRoute) { }
    openDialog() {
      this.dialog.open(UserdialogComponent, {
        width: '50%', 
        height:'80%', 
        maxWidth: '80vw', 
        maxHeight: '80vw',
        disableClose: true,
        }).afterClosed().subscribe(res=>{
          this.getAllusers();
        })
      
      };
    
    ngOnInit(): void {
    this.getAllusers();
  
      }
  
      getAllusers(){
        this.service.getAllUsers().subscribe((res:any)=>{
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
    
  
    editUser(row:any){
      this.dialog.open(UserdialogComponent, {
        width: '50%',
        height:'auto', 
        maxWidth: '90vw', 
        maxHeight: '90vh', 
        data:row
      }).afterClosed().subscribe(res=>{
        this.getAllusers();
      });
    }
  
    deleteUser(id:number){
     return this.service.DeleteAllUsers(id).subscribe({
      next:(res)=>{
        this.data=this.getAllusers();
        alert("deleted successfully");
      },
      error:()=>{
        alert("data not deleted");
      }
     });
    }
}
