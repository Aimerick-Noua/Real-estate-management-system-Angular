import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PropertyClass } from '../admins/property/property-class';
import { ProservService } from '../admins/property/proserv.service';
import { Mail } from './contact.class';
import { MailServiceService } from './mail-service.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  http: any;
  subj:any;
  id: any;
  constructor(private formbuilder: FormBuilder,
    private httpservice:MailServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

console.log(this.data)
  }
  contactForm: FormGroup = this.formbuilder.group({
    objet: ['', Validators.required],
    destinataire: ['', Validators.required],
    message: ['', Validators.required],
    last_send:['',Validators.required]
  });
  submit() {
    console.log(this.contactForm.value)
      if(this.contactForm.valid){
        this.httpservice.postMail(this.contactForm.value).subscribe(
          (data: Mail)=>{
            alert("Email sent successfully");
          },
          (error:any)=>{
            alert("Email not send");
          }
        )
      }
      else{
        alert("Form not valid");
      }
  }
}
