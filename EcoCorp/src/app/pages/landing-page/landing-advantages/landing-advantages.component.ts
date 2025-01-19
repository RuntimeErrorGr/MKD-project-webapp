import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-advantages',
  templateUrl: './landing-advantages.component.html',
  styleUrls: ['./landing-advantages.component.css']
})
export class LandingAdvantagesComponent {
  advantages = [
    {
      title: "Eficiență crescută",
      description: "Dispozitivul poate transforma comenzi vocale în acțiuni instantanee, eliminând necesitatea de tastare sau navigare complexă.",
      icon: "./assets/advantages/efficiency.png"
    },
    {
      title: "Siguranță și confidențialitate",
      description: "Permite recunoașterea utilizatorului pe baza vocii pentru un plus de securitate.",
      icon: "./assets/advantages/security.png"
    },
    {
      title: "Flexibilitate și personalizare",
      description: "Analizează contextul pentru a răspunde mai bine cerințelor utilizatorului.",
      icon: "./assets/advantages/flexibility.png"
    },
    {
      title: "Ușurință în utilizare",
      description: "Instalare rapidă și ghiduri pas cu pas pentru utilizatori.",
      icon: "./assets/advantages/voice.png"
    },
    {
      title: "Economii financiare",
      description: "Investiție pe termen lung datorită întreținerii minime.",
      icon: "./assets/advantages/finance.png"
    },
    {
      title: "Interacțiune naturală",
      description: "Dispozitivul înțelege limbajul natural, permițând utilizatorilor să comunice într-un mod mai natural, fără a fi nevoie de sintaxe complicate.",
      icon: "./assets/advantages/brain.png"
    }
  ]
}
