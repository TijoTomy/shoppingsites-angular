import { Component,OnInit,AfterViewInit } from '@angular/core';
import {ProductDataService} from '../service/product-data.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  imports: [NgFor],
  providers:[ProductDataService],
  templateUrl:'./product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit,AfterViewInit   {
   productList:any=[];
  constructor(private productDataService:ProductDataService, private router:Router){

  }
  ngOnInit(){
    this.productList=this.productDataService.productlist;
console.log(this.productDataService.productlist);
  }
  ngAfterViewInit(){
  }
  onSelectProduct(item:any){
    this.productDataService.selectedProduct[0]=item;
    this.router.navigate(['/Product'],{queryParams: {id: this.productDataService.selectedProduct[0].id}});
    console.log( this.productDataService.selectedProduct)
  }
}
