import { Component, OnInit } from '@angular/core';
import { CharacterdataService } from '../services/characterdata.service';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  characterModel: any;
  constructor(private characterData: CharacterdataService) { }
  ngOnInit(): void {
    let charData = JSON.parse(localStorage.getItem('charData'));
    if(charData){
      this.characterModel = charData;
    } else {
      this.characterModel = this.characterData.getCharacterData();
      this.calcStats();
      this.calcDef();
      this.calcSkills();
    }
  }

  change() {
    this.calcStats();
    this.calcDef();
    this.calcSkills();
    localStorage.setItem('charData', JSON.stringify(this.characterModel));
  }

  calcStats() {
    this.str= +this.characterModel.stats[1].value + +this.characterModel.stats[2].value;
    this.characterModel.stats[0].value = this.str;
    this.dex= +this.characterModel.stats[7].value + +this.characterModel.stats[8].value;
    if (+this.characterModel.armor[4].value != 0 && this.dex > +this.characterModel.armor[4].value) {
      this.dex = +this.characterModel.armor[4].value;
    }
    this.characterModel.stats[6].value = this.dex;
    this.characterModel.defense[9].value = this.dex;
    this.con = +this.characterModel.stats[14].value + +this.characterModel.stats[15].value;
    this.characterModel.stats[13].value = this.con;
    this.characterModel.defense[3].value = this.con;
    this.int = +this.characterModel.stats[20].value + +this.characterModel.stats[21].value;
    this.characterModel.stats[19].value = this.int;
    this.wis = +this.characterModel.stats[26].value + +this.characterModel.stats[27].value;
    this.characterModel.stats[25].value = this.wis;
    this.characterModel.defense[15].value = this.wis;
    this.cha = +this.characterModel.stats[32].value + +this.characterModel.stats[33].value;
    this.characterModel.stats[31].value = this.cha;
  }

  calcDef() {
    let armor = +this.characterModel.armor[0].value > +this.characterModel.headers[3].value ? +this.characterModel.armor[0].value : +this.characterModel.headers[3].value;
    this.characterModel.defense[2].value = armor;
    this.characterModel.defense[8].value = armor;
    this.characterModel.defense[14].value = armor;
    this.characterModel.defense[0].value = +this.characterModel.defense[1].value + +this.characterModel.defense[2].value + +this.characterModel.defense[3].value + +this.characterModel.defense[4].value + +this.characterModel.defense[5].value;
    this.characterModel.defense[6].value = +this.characterModel.defense[7].value + +this.characterModel.defense[8].value + +this.characterModel.defense[9].value + +this.characterModel.defense[10].value + +this.characterModel.defense[11].value;
    this.characterModel.defense[12].value = +this.characterModel.defense[13].value + +this.characterModel.defense[14].value + +this.characterModel.defense[15].value + +this.characterModel.defense[16].value + +this.characterModel.defense[17].value;
  }

  calcSkills() {
    let lvlCalc = Math.floor((+this.characterModel.headers[3].value / 2));
    for(let i = 0; i < 125; i += 5) {
      switch (this.characterModel.skills[i].attr) {
        case 'dex': 
          this.characterModel.skills[i].value = this.dex + lvlCalc + this.calcSkillParts(i);
          break;
        case 'str':
          this.characterModel.skills[i].value = this.str + lvlCalc + this.calcSkillParts(i);
          break;
        case 'con':
          this.characterModel.skills[i].value = this.con + lvlCalc + this.calcSkillParts(i);
          break;
        case 'cha':
          this.characterModel.skills[i].value = this.cha + lvlCalc + this.calcSkillParts(i);
          break;
        case 'int':
          this.characterModel.skills[i].value = this.int + lvlCalc + this.calcSkillParts(i);
          break;
        case 'wis':
          this.characterModel.skills[i].value = this.wis + lvlCalc + this.calcSkillParts(i);
          break;
      }
    }
  }

  calcSkillParts(start): number {
    let sum = 0;
    for(let i = start + 1; i< start + 5; i++) {
      sum += +this.characterModel.skills[i].value;
    }
    return sum;
  }

  addWeapon() {
    this.characterModel.weapons.push(
      {name: 'Weapon', value: '', width: 'width-4'},
      {name: 'Range', value: '', width: 'width-2'}, 
      {name: 'Attack', value: '', width: 'width-2'},
      {name: 'Damage', value: '', width: 'width-2'},
      {name: 'Crit', value: '', width: 'width-1'},
      {name: 'type', value: '', width: 'width-1'},
    );
  }

  addAction() {
    this.characterModel.actions.push(
      {name: 'Action', value: '', width: 'width-12'},
    );
  }

  addTalents() {
    this.characterModel.talents.push(
      {name: 'talent', value: '', width: 'width-12'},
    );
  }

  addFeats() {
    this.characterModel.feats.push(
      {name: 'Feat', value: '', width: 'width-12'},
    );
  }

  addLanguages() {
    this.characterModel.languages.push(
      {name: 'Language', value: '', width: 'width-12'},
    );
  }

  addSpecies() {
    this.characterModel.species.push(
      {name: 'Species Info', value: '', width: 'width-12'},
    );
  }

  addForce() {
    this.characterModel.force.push(
      {name: 'Force Power', value: '', width: 'width-6'},
      {name: 'Uses', value: '', width: 'width-3'},
      {name: 'Spent', value: '', width: 'width-3'},
    );
  }

  addEquipment() {
    this.characterModel.equipment.push(
      {name: 'Gear', value: '', width: 'width-6'},
      {name: 'Weight', value: '', width: 'width-3 hidden'},
      {name: 'Weight', value: '', width: 'width-3'}
    );
  }

}
