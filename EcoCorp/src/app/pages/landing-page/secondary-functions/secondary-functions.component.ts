import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-functions',
  templateUrl: './secondary-functions.component.html',
  styleUrls: ['./secondary-functions.component.css']
})
export class SecondaryFunctionsComponent {
  functionalities = [
    {
      title: "Eco-friendly",
      description: "Revitalizing older products to prevent them from ending up in landfills",
      image: "./assets/secondary-functions/EcoFriendly.svg",
      scaleY: 1,
      translateX: 0
    },
    {
      title: "Buyer protection",
      description: "Advanced buyer protection for secure and worry-free transactions",
      image: "./assets/secondary-functions/BuyProtect.png",
      scaleY: 1,
      translateX: 0
    },
    {
      title: "ANAF collaboration",
      description: "Buy confiscated products from ANAF in a more intuitive way",
      image: "./assets/secondary-functions/ANAF.png",
      scaleY: 0.3,
      translateX: 0
    }
  ]

  getTransformStyle(translateX: number, scaleY: number): string {
    return `translate(calc(1% * ${translateX}), 25%) scale(1, ${scaleY})`;
  }
}
