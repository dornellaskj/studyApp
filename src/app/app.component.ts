import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen ? this.menuOpen = false : this.menuOpen = true;
  }
}
