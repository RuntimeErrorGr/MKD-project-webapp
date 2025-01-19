import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {ContactComponent} from "./pages/contact/contact.component";

// Eu te aud bine

const routes: Routes = [
  {path: 'checkout', component: CheckoutComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: '**', redirectTo: '/landing-page', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
