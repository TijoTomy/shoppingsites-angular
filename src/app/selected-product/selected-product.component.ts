import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProductDataService} from '../service/product-data.service';
import {CartService} from '../service/cart.service';
@Component({
  selector: 'app-selected-product',
  imports: [],
  providers:[],
  templateUrl: './selected-product.component.html',
  styleUrl: './selected-product.component.css'
})
export class SelectedProductComponent implements OnInit {
 selectedProduct:any;
  constructor(private router:Router,private route:ActivatedRoute,private productService:ProductDataService,public cartService:CartService ){}
  ngOnInit(){
    console.log( this.productService.selectedProduct, "jjjjj")
    this.route.queryParams.subscribe((query: any) => {
     this.selectedProduct= this.productService.productlist.filter((data:any)=>data.id==Number(query.id))[0];
    });
  }
  onAddToCart(){
    // this.cartService.cartData.push(this.selectedProduct)
    this.cartService.cartData.push(this.selectedProduct)
    this.router.navigateByUrl("/Cart")
  }
}
