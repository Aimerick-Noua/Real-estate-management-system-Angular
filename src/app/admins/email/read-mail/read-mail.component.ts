import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailServiceService } from 'src/app/contact-form/mail-service.service';

@Component({
  selector: 'app-read-mail',
  templateUrl: './read-mail.component.html',
  styleUrls: ['./read-mail.component.css']
})
export class ReadMailComponent implements OnInit {
  id!:number;
  data:any;
  constructor(private route:ActivatedRoute,private mailserv:MailServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mailserv.getMailById(this.id)
    .subscribe(
      (dat:any)=>{
        this.data=dat;
        console.log(this.data);
      },
      error=>console.log(error)
    );
  }

}
