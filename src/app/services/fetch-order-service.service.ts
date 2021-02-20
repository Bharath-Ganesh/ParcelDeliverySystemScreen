import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Orders} from "../models/order.model"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchOrderServiceService {

  constructor(private http:HttpClient) { }

  getAllOrders(data:any){
   
    return <Observable<Orders[]>> this.http.get("http://localhost:8000/orderservice/order/availability/" + data);
  }

 
}
