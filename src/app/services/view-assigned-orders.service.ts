import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {UserResponse} from "../models/userResponse.model"
import {Orders} from "../models/order.model"
import {CreateOrderResponse} from '../models/createOrderResponse.model'

@Injectable({
  providedIn: 'root'
})
export class ViewAssignedOrdersService {

  constructor(private http:HttpClient) { }

  getUserDetails(username:any){
    return <Observable<UserResponse>> this.http.get("http://localhost:8001/userservice/user/userdetails?username=" + username);
  }

  viewAssignedOrder(userId:any){
    return <Observable<Orders>> this.http.get("http://localhost:8000/orderservice/order/trackingstatus/"+userId);
  }

  updateOrderStatus(data:any){
    return <Observable<CreateOrderResponse>> this.http.post("http://localhost:8000/orderservice/order/assign",data);
  }
}
