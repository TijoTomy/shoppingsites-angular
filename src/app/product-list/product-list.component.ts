import { Component } from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {BannerComponent} from '../banner/banner.component';
@Component({
  selector: 'app-product-list',
  imports: [ProductComponent,BannerComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
