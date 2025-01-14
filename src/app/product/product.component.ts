import { Component,OnInit,AfterViewInit } from '@angular/core';
import {ProductDataService} from '../service/product-data.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [NgFor],
  providers:[ProductDataService],
  templateUrl:'./product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit,AfterViewInit   {
   productList:any=[];
  constructor(private productDataService:ProductDataService){

  }
  ngOnInit(){
    
console.log(this.productDataService.productlist);
  }
  ngAfterViewInit(){
    this.productList=this.productDataService.productlist;
  }

}
