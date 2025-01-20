import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import {LocationStrategy, HashLocationStrategy, NgOptimizedImage} from "@angular/common";
import {CardModule} from "primeng/card";
import {ToolbarModule} from "primeng/toolbar";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import {ChartModule} from "primeng/chart";
import {FieldsetModule} from "primeng/fieldset";
import {GalleriaModule} from "primeng/galleria";
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import { LandingIntroComponent } from './pages/landing-page/landing-intro/landing-intro.component';
import { LandingTargetMarketComponent } from './pages/landing-page/landing-target-market/landing-target-market.component';
import { SecondaryFunctionsComponent } from './pages/landing-page/secondary-functions/secondary-functions.component';
import { LandingProblemSolutionComponent } from './pages/landing-page/landing-problem-solution/landing-problem-solution.component';
import {TabViewModule} from "primeng/tabview";
import { LandingPrimaryFunctionsComponent } from './pages/landing-page/landing-primary-functions/landing-primary-functions.component';
import {ImageModule} from "primeng/image";
import {PanelModule} from "primeng/panel";
import { NavigationBarComponent } from './ui-elements/navigation-bar/navigation-bar.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FooterComponent } from './ui-elements/footer/footer.component';
import {DividerModule} from "primeng/divider";
import { ProductComponent } from './pages/product/product.component';
import {ContactComponent} from "./pages/contact/contact.component";
import {ImportsModule} from "./imports";
import { LandingAdvantagesComponent } from './pages/landing-page/landing-advantages/landing-advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingIntroComponent,
    LandingTargetMarketComponent,
    SecondaryFunctionsComponent,
    LandingProblemSolutionComponent,
    LandingPrimaryFunctionsComponent,
    LandingAdvantagesComponent,
    NavigationBarComponent,
    ShopComponent,
    CheckoutComponent,
    FooterComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    NgOptimizedImage,
    CardModule,
    ToolbarModule,
    SidebarModule,
    HttpClientModule,
    ChartModule,
    FieldsetModule,
    GalleriaModule,
    AppRoutingModule,
    RouterOutlet,
    OverlayPanelModule,
    TabViewModule,
    ImageModule,
    PanelModule,
    DividerModule,
    ImportsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
