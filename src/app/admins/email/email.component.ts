import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MailServiceService } from 'src/app/contact-form/mail-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
data:any;
  constructor(private httpservice:MailServiceService,private route:Router) { }

  ngOnInit(): void {
    this.httpservice.getMail().subscribe(
      data=>{
        this.data=data;
        console.log(data)
      }
    )
  }
  openPropertyDetails(id: number) {
    this.route.navigate(['admins/readmail/', id]);
  }

}
