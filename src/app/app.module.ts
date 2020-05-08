import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ContentComponent } from './components/template/content/content.component';
import { ListComponent } from './views/list/list.component';
import { CartComponent } from './views/cart/cart.component';
import { DetailComponent } from './views/detail/detail.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { AddItemComponent } from './components/cart/add-item/add-item.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    ListComponent,
    CartComponent,
    DetailComponent,
    ProductCardComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
