import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchOrderServiceService } from '../services/fetch-order-service.service';
import { Orders } from "../models/order.model"
import { ViewAssignedOrdersService } from '../services/view-assigned-orders.service';
import { UserResponse } from '../models/userResponse.model';
import { AssignOrderRequest } from '../models/assignOrderRequest.model';
import { CreateOrderResponse } from '../models/createOrderResponse.model';



@Component({
  selector: 'app-viewassignedorder',
  templateUrl: './viewassignedorder.component.html',
  styleUrls: ['./viewassignedorder.component.css']
})
export class ViewassignedorderComponent implements OnInit {

  errorMessage: String;
  successMessage: String;

  userResponse: UserResponse = new UserResponse();
  order: Orders=new Orders();
  updateOrderStatusRequest: AssignOrderRequest= new AssignOrderRequest();
  createOrderResponse:CreateOrderResponse=new CreateOrderResponse();
 

  constructor(private fb: FormBuilder, private viewAssignedOrderService: ViewAssignedOrdersService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.errorMessage = null;
    this.successMessage = null;
    this.viewAssignedOrderService.getUserDetails("Divakar")
      .subscribe(
        (response) => {
          this.userResponse = response;
          console.log(this.userResponse);
        },
        (error) => {
          this.errorMessage = error.error;
          console.log(this.errorMessage);
        }
      )
  }

  
  viewAssignedOrder(){
    this.errorMessage = null;
    this.successMessage = null;

    this.viewAssignedOrderService.viewAssignedOrder(this.userResponse.userId)
      .subscribe(
        (response) => {
          this.order = response;
          console.log(this.userResponse);
        },
        (error) => {
          this.errorMessage = error.error;
          console.log(this.errorMessage);
        }
      )
  }

  updateOrderStatus() {
    this.errorMessage = null;
    this.successMessage = null;

    this.updateOrderStatusRequest.orderId=this.order.orderId;
    this.updateOrderStatusRequest.userId=this.userResponse.userId;
    this.updateOrderStatusRequest.userAvailability="N"
    this.updateOrderStatusRequest.trackingStatus="SHIPPED"
    
    this.viewAssignedOrderService.updateOrderStatus(this.updateOrderStatusRequest)
      .subscribe(
        (response) => {
          this.createOrderResponse = response;
          console.log(this.userResponse);
        },
        (error) => {
          this.errorMessage = error.error;
          console.log(this.errorMessage);
        }
      )
  }


}