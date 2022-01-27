import { SideMenuComponent } from './Components/SideMenu/SideMenu.component';
import { ProductsComponent } from './Components/Products/Products.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardDirective } from './Directive/product-card.directive';
import { EgyptianNationalIDPipe } from './Pipes/egyptian-national-id.pipe';
import { CreditcardPipe } from './Pipes/creditcard.pipe';
import {OrderMasterComponent} from './Components/Order/OrderMaster/OrderMaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    ProductCardDirective,
    EgyptianNationalIDPipe,
    CreditcardPipe,
    OrderMasterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


