import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armada',
  templateUrl: './armada.component.html',
  styleUrls: ['./armada.component.scss']
})
export class ArmadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuOpen: boolean = false;
  toggleMenu() {
    this.menuOpen ? this.menuOpen = false : this.menuOpen = true;
  }

}
