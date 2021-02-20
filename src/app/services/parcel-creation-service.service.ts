import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateOrderResponse } from '../models/createOrderResponse.model';


@Injectable({
  providedIn: 'root'
})
export class ParcelCreationServiceService {

  constructor(private http:HttpClient) { }

  createOrder(data:any){
    console.log(data)
    return <Observable<CreateOrderResponse>> this.http.post("http://localhost:8000/orderservice/order/create",data);
  }
}
