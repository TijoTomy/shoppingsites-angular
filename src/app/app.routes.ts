import { Routes } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {SelectedProductComponent} from './selected-product/selected-product.component';
import {CartComponent} from './cart/cart.component';
import {PaymentComponent} from './payment/payment.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {SignupComponent} from './signup/signup.component';
export const routes: Routes = [
    { path: 'Home', component: ProductListComponent },
    { path: '',   redirectTo: '/Home', pathMatch: 'full' },
    {path:'Product',component:SelectedProductComponent},
    {path:'Cart',component:CartComponent},
    {path:'Payment',component:PaymentComponent},
    {path:'Confirmation',component:ConfirmationComponent},
    {path:'Signup',component:SignupComponent}


    
];
