import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ProductComponent} from "./pages/product/product.component";

// Eu te aud bine

const routes: Routes = [
  {path: 'product/:id', component: ProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: '**', redirectTo: '/landing-page', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
