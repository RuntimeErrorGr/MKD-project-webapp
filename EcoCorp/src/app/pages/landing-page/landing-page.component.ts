import { Component} from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent{
  public value: string = '';
}
