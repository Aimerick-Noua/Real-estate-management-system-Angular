import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserClass } from '../../users/user-class';
import { userServiceService } from '../userService.service';
@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.css'],
  providers: [userServiceService]

})
export class UserdialogComponent implements OnInit {

  usersForm!: FormGroup;
  actionBtn:string="Save"
  constructor( private formbuilder: FormBuilder,
     private http: userServiceService, @Inject(MAT_DIALOG_DATA)public editData:any, private dialogRef:MatDialogRef<UserdialogComponent>) { }
  ngOnInit(): void {
    this.usersForm = this.formbuilder.group({
      userName: ['', Validators.required],
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required],

    })
  if(this.editData){
    this.actionBtn="Update";
    this.usersForm.controls['userName'].setValue(this.editData.userName);
    this.usersForm.controls['userFirstName'].setValue(this.editData.userFirstName);
    this.usersForm.controls['userLastName'].setValue(this.editData.userLastName);
    this.usersForm.controls['userEmail'].setValue(this.editData.userEmail);
    this.usersForm.controls['userPassword'].setValue(this.editData.userPassword);
  }
  }
 
  saveUsers() {
    if(!this.editData){
      console.log(this.usersForm.value);
    if(this.usersForm.valid) {
      this.http.postAllUsers(this.usersForm.value).subscribe({
        
        next: (res) => {
          alert("Data added successfully");
          console.log(res);
          this.usersForm.reset();
          this.dialogRef.close('save');
        },
        error: (err) => {
          alert("Data not added");
          
        }
      }
      )
    }
    else {
      alert("form not valid");
    }
  }
else{
  this.updateUsers();
}}
updateUsers(){
  console.log(this.editData)
  return this.http.updateAllUsers(this.usersForm.value,this.editData.userName).subscribe({
    
    next:(res)=>{
      alert("Data updated successfully");
    },
    error:()=>{
      alert("Error while updating data");
    }
  }) 
 }

}
