import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { ContentComponent } from './components/template/content/content.component';
import { ListComponent } from './views/list/list.component';
import { CartComponent } from './views/cart/cart.component';
import { DetailComponent } from './views/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    ListComponent,
    CartComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
