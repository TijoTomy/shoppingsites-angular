import { AfterViewInit, Component, OnInit } from '@angular/core';
import {CartService} from '../service/cart.service';
import { NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [NgFor],
  providers:[],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit,AfterViewInit {
  cartData:any=[];
  constructor(public cartService:CartService,private router:Router){
  }
  ngOnInit(){
    this.cartData=this.cartService.cartData;
  }
  ngAfterViewInit(){
    this.cartData=this.cartService.cartData;

  }
  removeItem(index:any){
    this.cartService.cartData.splice(Number(index),1)

  }
  navigateToHome(){
    this.router.navigate(['/Home'])
  }
}
