import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchOrderServiceService } from '../services/fetch-order-service.service';
import {Orders} from "../models/order.model"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 


  constructor(private fb:FormBuilder,private fetchOrderService:FetchOrderServiceService) { }
  ngOnInit(): void {
   
  }

}