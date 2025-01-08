import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-target-market',
  templateUrl: './landing-target-market.component.html',
  styleUrls: ['./landing-target-market.component.css']
})
export class LandingTargetMarketComponent {
  targets = [
    {
      title: "Corporations",
      description: "Private corporations with disused equipment",
      image: "./assets/target-market/Corporations.svg"
    },
    {
      title: "Government",
      description: "Confiscated items by the government",
      image: "./assets/target-market/Government.svg"
    },
    {
      title: "Individuals",
      description: "Individuals who want to sell old belonging",
      image: "./assets/target-market/Individuals.svg"
    },
  ]
}
