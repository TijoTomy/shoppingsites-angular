import { Component,OnInit } from '@angular/core';
import {PaymentService} from "../service/payment.service"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
constructor(public paymentService:PaymentService,private router:Router){

}
ngOnInit(): void {
  console.log(this.paymentService.paymentDetails)
}
navigateToHome(){
  this.router.navigate(['/Home'])
}
}
