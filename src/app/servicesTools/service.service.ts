import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{
  http: any;

  constructor(http:HttpClient) {}

  getPropertyList(){
    return this.http.get('http://localhost/8080/properties');
  }
  getUsername(){
    return this.http.get('http://localhost/8080/getUsers');
  }
}
