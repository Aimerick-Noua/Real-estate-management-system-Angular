import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentClass } from '../../agents/agent-class';
import { ServiceService } from '../../agents/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-agents-dialog',
  templateUrl: './agents-dialog.component.html',
  styleUrls: ['./agents-dialog.component.css'],
  providers: [ServiceService]
})
export class AgentsDialogComponent implements OnInit {
  agentsForm!: FormGroup;
  options = ['Male', 'Female'];
  status=['Married','Single'];
  actionBtn:string="Save"
  constructor( private formbuilder: FormBuilder,
     private http: ServiceService, @Inject(MAT_DIALOG_DATA)public editData:any, private dialogRef:MatDialogRef<AgentsDialogComponent>) { }
  ngOnInit(): void {
    this.agentsForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      userName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password:['',Validators.required],
      dob: ['', Validators.required],
      telNum: ['', Validators.required],
      address: ['', Validators.required],
      sex: ['', Validators.required],
      marital_status:['',Validators.required],
      nationality:['',Validators.required]
    })
  if(this.editData){
    this.actionBtn="Update";
    this.agentsForm.controls['userName'].setValue(this.editData.userName);
    this.agentsForm.controls['firstName'].setValue(this.editData.firstName);
    this.agentsForm.controls['lastName'].setValue(this.editData.lastName);
    this.agentsForm.controls['email'].setValue(this.editData.email);
    this.agentsForm.controls['password'].setValue(this.editData.password);
    this.agentsForm.controls['dob'].setValue(this.editData.dob);
    this.agentsForm.controls['telNum'].setValue(this.editData.telNum);
    this.agentsForm.controls['address'].setValue(this.editData.address);
    this.agentsForm.controls['sex'].setValue(this.editData.sex);
    this.agentsForm.controls['marital_status'].setValue(this.editData.marital_status);
    this.agentsForm.controls['nationality'].setValue(this.editData.nationality);

  }
  console.log(this.editData);
  }
  agentsObject: AgentClass = new AgentClass();
 
  saveAgent() {
    if(!this.editData){
    if (this.agentsForm.valid) {
      this.http.postAll(this.agentsForm.value).subscribe({
        
        next: (res) => {
          alert("Data added successfully");
          this.agentsForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
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
  this.updateAgent();
}}
updateAgent(){
  return this.http.updateAll(this.agentsForm.value,this.editData.id).subscribe({
    next:(res)=>{
      alert("Data updated successfully");
    },
    error:()=>{
      alert("Error while updating data");
    }
  }) 
 }
}
