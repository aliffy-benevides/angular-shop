import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './views/list/list.component';
import { DetailComponent } from './views/detail/detail.component';
import { CartComponent } from './views/cart/cart.component';

const routes: Routes = [
  {
    path: "products",
    component: ListComponent
  },
  {
    path: "detail/:id",
    component: DetailComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
