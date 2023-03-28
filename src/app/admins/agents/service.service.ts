import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgentClass } from './agent-class';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get("http://localhost:8080/agents/");
  }
  postAll(data:AgentClass){
    return this.http.post<any>("http://localhost:8080/agents/",data);
  }
  DeleteAll(id:number){
    return this.http.delete<any>("http://localhost:8080/agents/"+id);
  }
  updateAll(data:any,id:number){
    console.log(data,id);
    return this.http.put<any>("http://localhost:8080/agents/"+id,data);
  }
 
}
