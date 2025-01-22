import { Component,OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';
import { NgFor,NgIf } from '@angular/common';
import {BillComponent} from '../bill/bill.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule,FormControl, FormGroup,Validators } from '@angular/forms';
import {PaymentService} from "../service/payment.service"
@Component({
  selector: 'app-payment',
  imports: [BillComponent,ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  cartData:any;
  paymentDetails:any={};
  paymentForm = new FormGroup({
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),
    cardNo: new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(8)]),
    cvc: new FormControl(null,Validators.required),
    expiryDate: new FormControl(null,Validators.required),

  });
  constructor(public CartService:CartService,public paymentService:PaymentService,private router:Router){
 this.cartData=this.CartService.cartData;
  }
ngOnInit(): void {
 

  
}
handleSubmit(){
  this.paymentDetails={
    firstName:this.paymentForm.value.firstName,
    lastName:this.paymentForm.value.lastName,
    cardNo:this.paymentForm.value.cardNo,
    cvc:this.paymentForm.value.cvc,
    expiryDate:this.paymentForm.value.expiryDate
  }
  this.paymentService.storePaymentData(this.paymentDetails);
  if(this.paymentForm.valid){
    setTimeout(()=>{
      this.router.navigate(['/Confirmation'])

    },2000)
  }
  
  
}

}
