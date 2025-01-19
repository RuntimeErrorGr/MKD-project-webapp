import {AfterViewInit, Component, Input} from '@angular/core';
import {ReferenceObject} from "../../model/ReferenceObject";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent{

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    this.navbarReferences.push(
      new ReferenceObject(0, "Impact", document.querySelector('#problem-solution-container')),
      new ReferenceObject(1, "Relevanță", document.querySelector('#landing-target-market-container')),
      new ReferenceObject(2, "Utilizare", document.querySelector('#landing-primary-functions-container'))
    )

    // TODO: Add maybe a way to send to the bottom of the shop page for the Contact button
    this.pageReferences.push(
      new ReferenceObject(0, "Contact", "/contact"),
      new ReferenceObject(1, "Cumpără", "/shop")
    )
  }

  @Input() navbarReferences: ReferenceObject[] = [];
  @Input() pageReferences: ReferenceObject[] = [];
  @Input() buttonNumber: number = 0
  
  navigateToSection(elRef: any) {
    elRef.scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
  }

  navigateToPage(pageRef: any) {
    this.router.navigate([pageRef])
  }
}
