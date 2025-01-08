import { Component } from '@angular/core';

@Component({
  selector: 'app-metrics-page',
  templateUrl: './metrics-page.component.html',
  styleUrls: ['./metrics-page.component.css']
})
export class MetricsPageComponent {
  metrics : any[] = [
    "Accessing Users", "New users", "Average interaction time", "New users by source", "Sessions by source",
    "Users by country", "User activity", "Number of events triggered"
  ]
}
