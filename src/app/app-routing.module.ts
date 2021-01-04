import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './componets/home/home.component';
import {LoginComponent} from './componets/login/login.component';
import {SignupComponent} from './componets/signup/signup.component';
import {CartComponent} from './componets/cart/cart.component';
import {GoodsComponent} from './componets/goods/goods.component';
import {NotFoundComponent} from './componets/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'cart' , component: CartComponent },
  {path: 'admin', component: GoodsComponent },
  { path : '**' , component: NotFoundComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
