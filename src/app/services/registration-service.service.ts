import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserResponse} from "../models/userResponse.model"

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {



  constructor(private http:HttpClient) { }

  submitRegisterUser(data:any){
    console.log(data)
    return <Observable<UserResponse>> this.http.post("http://localhost:8001/userservice/user/register",data);
  }
}
