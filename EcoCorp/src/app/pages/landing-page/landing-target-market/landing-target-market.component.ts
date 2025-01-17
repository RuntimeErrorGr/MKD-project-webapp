import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-target-market',
  templateUrl: './landing-target-market.component.html',
  styleUrls: ['./landing-target-market.component.css']
})
export class LandingTargetMarketComponent {
  targets = [
    {
      title: "Manageri și Executivi",
      description: "Profesioniști ocupați, responsabili de coordonarea echipelor, planificarea și gestionarea sarcinilor.",
      image: "./assets/target-market/management.png"
    },
    {
      title: "Studenți",
      description: "Tineri organizați sau în căutarea unor metode mai eficiente de gestionare a timpului pentru studiu.",
      image: "./assets/target-market/students.png"
    },
    {
      title: "Creatori de Conținut",
      description: "Persoane creative care lucrează la proiecte multimedia cu un flux de lucru dinamic.",
      image: "./assets/target-market/influencer.png"
    },
    {
      title: "Utilizatori Casnici",
      description: "Persoane care își simplifică viața zilnică prin organizarea activităților și utilizarea dispozitivelor inteligente.",
      image: "./assets/target-market/location.png"
    },
    {
      title: "Corporate",
      description: "Organizații care optimizează procesele interne și gestionează eficient resursele.",
      image: "./assets/target-market/corporation.png"
    },
  ]
}
