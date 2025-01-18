import {AfterViewInit, Component} from '@angular/core';
import {ReferenceObject} from "../../model/ReferenceObject";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements AfterViewInit{

  constructor(private router: Router) {
  }

  navbarReferences: ReferenceObject[] = []
  pageReferences: ReferenceObject[] = []

  ngAfterViewInit(): void {
    this.navbarReferences.push(
      new ReferenceObject(0, "Impact", document.querySelector('#problem-solution-container')),
      new ReferenceObject(1, "Relevanță", document.querySelector('#landing-target-market-container')),
      new ReferenceObject(2, "Utilizare", document.querySelector('#landing-primary-functions-container'))
    )

    // TODO: Andrei completeaza website-urile
    this.pageReferences.push(
      new ReferenceObject(0, "Contact", ""),
      new ReferenceObject(1, "Cumpără", "")
    )
  }

  navigateToSection(elRef: any) {
    elRef.scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
  }

  navigateToPage(pageRef: any) {
    this.router.navigate([pageRef])
  }
}
