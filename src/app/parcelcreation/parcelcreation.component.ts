import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenericAddress } from '../models/address.model';
import { CreateOrderRequest } from '../models/createOrderRequest.model';
import { ParcelDimension } from '../models/parcelDimension.model';
import { ParcelCreationServiceService } from '../services/parcel-creation-service.service';

@Component({
  selector: 'app-parcelcreation',
  templateUrl: './parcelcreation.component.html',
  styleUrls: ['./parcelcreation.component.css']
})
export class ParcelcreationComponent implements OnInit {

  errorMessage:String;
  successMessage:String;
  
  createOrderRequest:CreateOrderRequest=new CreateOrderRequest();
  parcelDimension:ParcelDimension = new ParcelDimension();
  pickUpPointAddress:GenericAddress=new GenericAddress();
  shippingAddress:GenericAddress=new GenericAddress();
  amount:String;

  constructor(private fb:FormBuilder,private parcelCreationService:ParcelCreationServiceService) { }

  parcelCreationForm=this.fb.group({
    height: ["",Validators.required],
    weight: ["",Validators.required],
    width: ["",Validators.required],
    length: ["",Validators.required],
    parcelType: ["",Validators.required],
    pickUpPoint: ["",Validators.required],
    shippingAddress: ["",Validators.required],
    amount: ["",Validators.required],
  })

  ngOnInit(): void {
  }

  createParcel(){
    this.errorMessage=null;
    this.successMessage=null;
    
    this.parcelDimension.height=this.parcelCreationForm.value.height;
    this.parcelDimension.weight=this.parcelCreationForm.value.weight;
    this.parcelDimension.breadth=this.parcelCreationForm.value.width;
    this.parcelDimension.length=this.parcelCreationForm.value.length;
    this.parcelDimension.typeOfParcel=this.parcelCreationForm.value.parcelType;
    this.pickUpPointAddress.city=this.parcelCreationForm.value.pickUpPoint;
    this.shippingAddress.city=this.parcelCreationForm.value.shippingAddress;
    this.amount=this.parcelCreationForm.value.amount;

    this.createOrderRequest.amount=this.amount;
    this.createOrderRequest.shippingAddress=this.shippingAddress;
    this.createOrderRequest.parcelDimension=this.parcelDimension;
    this.createOrderRequest.pickUpPointAddress=this.pickUpPointAddress;
    

    this.parcelCreationService.createOrder(this.createOrderRequest)
    .subscribe(
      
  
      (response)=>{
        
           console.log(response);
           this.successMessage=response.message;
           
           return response
           //this.router.navigate(['/viewMovie'])
         },
         (error)=>{
           this.errorMessage=error.error.errorMessage;
           
         }
       )
     }
   }
   



