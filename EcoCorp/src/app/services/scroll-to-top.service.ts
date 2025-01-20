import {Injectable} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  constructor(private router: Router) {
    // Listen for route changes and scroll to the top when the route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);  // Scroll to the top
    });
  }
}
