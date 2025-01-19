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
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './ui-elements/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingIntroComponent,
    LandingTargetMarketComponent,
    SecondaryFunctionsComponent,
    LandingProblemSolutionComponent,
    LandingPrimaryFunctionsComponent,
    NavigationBarComponent,
    ShopComponent,
    CheckoutComponent,
    ContactComponent,
    FooterComponent,
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
    PanelModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
