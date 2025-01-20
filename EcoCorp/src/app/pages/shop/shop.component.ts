import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";
import {ReferenceObject} from "../../model/ReferenceObject";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements AfterViewInit{
  containerReferences: ReferenceObject[] = []
  pageReferences: ReferenceObject[] = []

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    this.containerReferences.push(
      new ReferenceObject(0, "Voice Recognition Device", document.querySelector('#shop-vdr-container')),
      new ReferenceObject(1, "Digital Voice Communicator", document.querySelector('#shop-dvc-container'))
    )

    // TODO: Add maybe a way to send to the bottom of the shop page for the Contact button
    this.pageReferences.push(
      new ReferenceObject(0, "Contact", "/contact"),
      new ReferenceObject(1, "Coș", "/checkout")
    )
  }

  navigateToContainer(elRef: any) {
    elRef.scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
  }

  navigateToPage(pageRef: any) {
    this.router.navigate([pageRef])
  }

  navigateToPageWithParams(pageRef: any, productId: number) {
    this.router.navigate([pageRef, productId])
  }
}
