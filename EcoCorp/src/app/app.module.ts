import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { IntroPageComponent } from './pages/fiki/intro-page/intro-page.component';
import {LocationStrategy, HashLocationStrategy, NgOptimizedImage} from "@angular/common";
import { TeamPageComponent } from './pages/fiki/team-page/team-page.component';
import {CardModule} from "primeng/card";
import { ProblemSolutionPageComponent } from './pages/fiki/problem-solution-page/problem-solution-page.component';
import { CompetitionPageComponent } from './pages/fiki/competition-page/competition-page.component';
import {MetricsPageComponent} from "./pages/fiki/metrics-page/metrics-page.component";
import {CostRevenuePageComponent} from "./pages/fiki/cost-revenue-page/cost-revenue-page.component";
import {ToolbarModule} from "primeng/toolbar";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CustomerDiscoveryPageComponent } from './pages/fiki/customer-discovery-page/customer-discovery-page.component';
import { HttpClientModule } from '@angular/common/http';
import {ChartModule} from "primeng/chart";
import {FieldsetModule} from "primeng/fieldset";
import { WireframesPageComponent } from './pages/fiki/wireframes-page/wireframes-page.component';
import {GalleriaModule} from "primeng/galleria";
import { UserExperiencePageComponent } from './pages/fiki/user-experience-page/user-experience-page.component';
import { AppRoutingModule } from './app-routing.module';
import {FikiComponent} from "./pages/fiki/fiki.component";
import {RouterOutlet} from "@angular/router";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import { AnalyticsValidationPageComponent } from './pages/fiki/analytics-validation-page/analytics-validation-page.component';
import { LandingIntroComponent } from './pages/landing-page/landing-intro/landing-intro.component';
import { LandingTargetMarketComponent } from './pages/landing-page/landing-target-market/landing-target-market.component';
import { SecondaryFunctionsComponent } from './pages/landing-page/secondary-functions/secondary-functions.component';
import { LandingProblemSolutionComponent } from './pages/landing-page/landing-problem-solution/landing-problem-solution.component';
import { MarketResearchPageComponent } from './pages/fiki/market-research-page/market-research-page.component';
import {TabViewModule} from "primeng/tabview";
import { LandingPrimaryFunctionsComponent } from './pages/landing-page/landing-primary-functions/landing-primary-functions.component';
import { MVPPageComponent } from './pages/fiki/MVP-page/mvp-page/mvp-page.component';
import {ImageModule} from "primeng/image";
import {PanelModule} from "primeng/panel";
import { NavigationBarComponent } from './ui-elements/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    TeamPageComponent,
    ProblemSolutionPageComponent,
    CompetitionPageComponent,
    MetricsPageComponent,
    CostRevenuePageComponent,
    CustomerDiscoveryPageComponent,
    WireframesPageComponent,
    UserExperiencePageComponent,
    FikiComponent,
    LandingPageComponent,
    AnalyticsValidationPageComponent,
    LandingIntroComponent,
    LandingTargetMarketComponent,
    SecondaryFunctionsComponent,
    LandingProblemSolutionComponent,
    MarketResearchPageComponent,
    LandingPrimaryFunctionsComponent,
    MVPPageComponent,
    NavigationBarComponent,
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
