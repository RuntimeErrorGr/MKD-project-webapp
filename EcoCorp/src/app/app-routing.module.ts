import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FikiComponent} from "./pages/fiki/fiki.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";

// Eu te aud bine

const routes: Routes = [
  {path: 'fiki', component: FikiComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: '**', redirectTo: '/landing-page', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
