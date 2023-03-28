import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from 'src/app/servicesAuth/user-auth.service';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class userServiceService {


  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }
  PATH_OF_API = "http://localhost:8080";

  requestHeader = new HttpHeaders(
    { "No-Auth": "True" }
  )

  getAllUsers() {
    return this.http.get("http://localhost:8080/user/");
  }
  postAllUsers(data: UserClass) {
    return this.http.post<any>("http://localhost:8080/user/", data);
  }
  DeleteAllUsers(id: number) {
    return this.http.delete<any>("http://localhost:8080/user/" + id);
  }
  updateAllUsers(data: any, id: number) {
    return this.http.put<any>("http://localhost:8080/user/" + id, data);
  }

  public login(loginData: any) {
    return this.http.post(this.PATH_OF_API + "/authenticate", loginData, { headers: this.requestHeader });
  }
  public forUser() {
    return this.http.get(this.PATH_OF_API + '/forUser', { responseType: 'text' });
  }

  public forAdmin() {
    return this.http.get(this.PATH_OF_API + '/forAdmin', { responseType: 'text' });
  }

  public roleMatch(allowedRoles:string[]):boolean{
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

   
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            break;
           
          }
          else {
            return isMatch;
            
            
          }

        }
        
      }
      return isMatch;

     
    }
  }


