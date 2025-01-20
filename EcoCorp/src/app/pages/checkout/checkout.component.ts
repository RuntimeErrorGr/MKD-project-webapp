import { Component, OnInit } from '@angular/core';
import {ReferenceObject} from "../../model/ReferenceObject";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css', '../../ui-elements/navigation-bar/navigation-bar.component.css']
})
export class CheckoutComponent implements OnInit {

  pageReferences: ReferenceObject[] = []

  months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  years: number[] = [];
  expiryMonth: string = '';
  expiryYear: number | string = '';

  ngOnInit(): void {
    this.generateYearOptions();

    this.pageReferences.push(
      new ReferenceObject(0, "Magazin", "/shop"),
      new ReferenceObject(1, "Contact", "/contact")
    )
  }

  generateYearOptions(): void {
    const currentYear = new Date().getFullYear();
    const yearsRange = 10; // Show the current year and the next 10 years
    for (let i = 0; i <= yearsRange; i++) {
      this.years.push(currentYear + i);
    }
  }
}

