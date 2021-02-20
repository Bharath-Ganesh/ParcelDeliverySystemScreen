import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchOrderServiceService } from '../services/fetch-order-service.service';
import {Orders} from "../models/order.model"

@Component({
  selector: 'app-vieworderdetails',
  templateUrl: './vieworderdetails.component.html',
  styleUrls: ['./vieworderdetails.component.css']
})
export class VieworderdetailsComponent implements OnInit {

  errorMessage:String;
  successMessage:String;

  trackingStatus: String[] =["SHIPPING","SHIPPED","DELIVERED"];
  selectedStatus:String=null;
  orders : Orders[];

  constructor(private fb:FormBuilder,private fetchOrderService:FetchOrderServiceService) { }

  ngOnInit(): void {
    
  }

  fetchAllOrders(){
    this.errorMessage=null;
    this.successMessage=null;
    console.log(this.selectedStatus);
    this.fetchOrderService.getAllOrders(this.selectedStatus)
    .subscribe(
      (response)=>{    
           this.orders=response;
           console.log(this.orders);
         },
         (error)=>{
           this.errorMessage=error.error;
           console.log(this.errorMessage);
         }
       )
     }
   }