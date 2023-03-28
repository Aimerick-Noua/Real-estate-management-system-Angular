import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserClass } from './user-class';
import { userServiceService } from './userService.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  check='';
  usersForm!: FormGroup;
  constructor( private formbuilder: FormBuilder,
     private http: userServiceService,private router:Router) { }
  ngOnInit(): void {
    this.usersForm = this.formbuilder.group({
      userName: ['', Validators.required],
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required],
    })
  }
    
  
    login(loginForm:NgForm){
      console.log(loginForm.value)
      this.http.reg(loginForm.value).subscribe( 
         (res:UserClass) => {
          alert("Account created successfully");
          console.log(res);
          this.router.navigate(['/signin']);
        },
         (error) => {
          alert("Failed to create account");
          console.log(error);
          alert(loginForm.value)
          alert(error.message)
        }
      )
      
    }
   
  }




