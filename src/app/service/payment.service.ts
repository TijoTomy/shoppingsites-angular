import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
paymentDetails:any={};
  constructor() { }
  storePaymentData(data:any){
    this.paymentDetails=data;
  }
}
