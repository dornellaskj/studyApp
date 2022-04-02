import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  enemies:any = [
  ]

  constructor() { }

  ngOnInit(): void {
    this.enemies.push(
      {
        name: 'kevin',
        hp:12
      }
    );
  }

  addEnemy() {

  }

  trash(isEnemy: boolean, index: number) {
    
    if (isEnemy == true) {
      this.enemies.splice(index, 1);
    }

  }

}
