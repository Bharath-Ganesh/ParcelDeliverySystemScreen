import {ParcelDimension} from "./parcelDimension.model"
import {GenericAddress} from "./address.model"

export class CreateOrderRequest{
    parcelDimension:ParcelDimension;
    pickUpPointAddress:GenericAddress;
    shippingAddress:GenericAddress;
    amount:any;
}