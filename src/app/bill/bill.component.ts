import { Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bill',
  imports: [NgFor],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.css'
})
export class BillComponent implements OnInit {
  cartData:any;
  totalPrice:Number=0;
  totalCost:Number=0;
  hst:Number=0;
  constructor(public CartService:CartService){
  }
  ngOnInit(): void {
    this.cartData=this.CartService.cartData;
    this.calcutateTotalPrice()
  
    
  }
  calcutateTotalPrice(){
    this.CartService.cartData.forEach((item:any,index:Number )=> {
      this.totalPrice=Number(this.totalPrice) + Number(item.price);
    });
    this.totalCost=((Number(this.totalPrice) *13)/100)+Number( this.totalPrice);
    this.hst=(Number(this.totalPrice) *13)/100
  }
}
