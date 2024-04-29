import { Component, OnInit } from '@angular/core';
import {Ship} from '../models/ship';
import {DefenseToken} from '../models/defenseToken';
import {ShipsService} from '../services/ships.service'
import {DefenseTokenService} from '../services/defense-token.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  ship: Ship = new Ship();
  currentShip = new Ship();
  factions: string[] = ['Rebel', 'Imperial', 'Republic', 'Separatist']; 
  faction: string;
  factionShips: Ship[] = [];
  defenseTokens: DefenseToken[];
  constructor(
    public shipService: ShipsService,
    public defenseTokenService: DefenseTokenService) {
  }

  ngOnInit(): void {
    this.defenseTokenService.getDefenseTokens().subscribe(tokens => {
      this.defenseTokens = tokens;
    })
  }

  onSubmit(form: NgForm) {
    let isNewShip = true;
    if (form.valid) {
      this.factionShips.forEach(ship => {
        if(ship.name === this.currentShip.name) {
          isNewShip = false
        }
      });
      if(isNewShip) {
        this.shipService.createShip(this.currentShip).subscribe(()=> {
          alert(this.currentShip.name + " Added!");
          this.currentShip = new Ship();
          this.onFactionChange(this.faction);
        }, error => {
          alert(error);
        })
      } else {
        alert("A ship with that name already exists.");
      };
      
    } else {
      alert('Please fill out all required fields.')
    }
    console.log(this.currentShip);
  }
  
  onFactionChange(selectedFaction: string) {
    this.faction = selectedFaction;
    this.currentShip.faction = selectedFaction;
    this.shipService.getShipsByFaction(selectedFaction).subscribe(ships => {
      if(ships.length > 0) {
        this.factionShips = ships;
      } else {
        this.factionShips = [];
      }
      
    })
  }

  selectShip(ship:Ship) {
    let shipCopy = JSON.stringify(ship);
    this.currentShip = JSON.parse(shipCopy);
    this.currentShip.id = null;
  }

  toNumber(value):Number {
    return +value;
  }
}
