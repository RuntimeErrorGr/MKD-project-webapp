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
