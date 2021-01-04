import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
// import {AngularFireModule} from '@angular/fire';

import { HomeComponent } from './componets/home/home.component';
import { CartComponent } from './componets/cart/cart.component';
import { GoodsComponent } from './componets/goods/goods.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
   // AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
