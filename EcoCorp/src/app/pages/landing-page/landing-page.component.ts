import {AfterViewInit, Component, Input} from '@angular/core';
import {ReferenceObject} from "../../model/ReferenceObject";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements AfterViewInit{
  navbarReferences: ReferenceObject[] = [];
  pageReferences: ReferenceObject[] = []

  ngAfterViewInit(): void {
    this.navbarReferences.push(
      new ReferenceObject(0, "Impact", document.querySelector('#problem-solution-container')),
      new ReferenceObject(1, "Relevanță", document.querySelector('#landing-target-market-container')),
      new ReferenceObject(2, "Utilizare", document.querySelector('#landing-primary-functions-container')),
      new ReferenceObject(3, "Avantaje", document.querySelector("#advantages-container"))
    )

    this.pageReferences.push(
      new ReferenceObject(0, "Contact", "/contact"),
      new ReferenceObject(1, "Cumpără", "/shop")
    )
  }
}
