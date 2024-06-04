import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {
    // Ouvir eventos de navegação para esconder ou mostrar o header
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('/login');
      }
    });
  }
}

// export class AppComponent {
//   title = 'minha-aplicacao';
// }

