import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from './contact.class';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService{
  getMailById(id: number){
    return this.http.get<Mail>("http://localhost:8080/mails/"+id);

  }

  constructor(private http:HttpClient) { }

  postMail(data:FormData){
    return this.http.post<Mail>("http://localhost:8080/mails",data);
  }
  getMail(){
    return this.http.get<Mail>("http://localhost:8080/mails");
  }
}
