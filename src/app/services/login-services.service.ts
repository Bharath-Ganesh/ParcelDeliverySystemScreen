import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import {UserResponse} from "../models/userResponse.model"

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private userURL='http://localhost:8001/userservice/user/login';
  constructor(private http:HttpClient) {}

    getUser(data:any):Observable<any>{
      return <Observable<UserResponse>> this.http.post(this.userURL,data);
   }   
}
