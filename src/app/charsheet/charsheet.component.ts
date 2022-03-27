import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {

  characterModel: any;
  constructor() { }
  ngOnInit(): void {
    let charData = JSON.parse(localStorage.getItem('charData'));
    if(charData){
      this.characterModel = charData;
    } else {
      this.characterModel = {
        headers:  [
          {name: 'Name', value: '', width: 'width-7'},
          {name: 'Player', value: '', width: 'width-5'},
          {name: 'Classes', value: '', width: 'width-10'},
          {name: 'Level', value: '', width: 'width-2'},
          {name: 'Species', value: '', width: 'width-4'},
          {name: 'Sex', value: '', width: 'width-2'},
          {name: 'Age', value: '', width: 'width-2'},
          {name: 'Height', value: '', width: 'width-2'},
          {name: 'Weight', value: '', width: 'width-2'},
          {name: 'Destiny', value: '', width: 'width-10'},
          {name: 'XP', value: '', width: 'width-2'},
        ],
        stats: [
          {name: 'Strength', value: '', width: 'width-1', readOnly:true},
          {name: 'Score', value: '', width: 'width-1'},
          {name: 'Mod', value: '', width: 'width-1'},
          {name: '', value: '', width: 'width-3 hidden', readOnly:true},
          {name: 'Total HP', value: '', width: 'width-3'},
          {name: 'Current HP', value: '', width: 'width-3'},
          {name: 'Dexterity', value: '', width: 'width-1', readOnly:true},
          {name: 'Score', value: '', width: 'width-1'},
          {name: 'Mod', value: '', width: 'width-1'},
          {name: '', value: '', width: 'width-2 hidden', readOnly:true},
          {name: 'Damage Threshold', value: '', width: 'width-3', readOnly:true},
          {name: 'Fort', value: '', width: 'width-2'},
          {name: 'Misc', value: '', width: 'width-2'},
          {name: 'Constitution', value: '', width: 'width-1', readOnly:true},
          {name: 'Score', value: '', width: 'width-1'},
          {name: 'Mod', value: '', width: 'width-1'},
          {name: '', value: '', width: 'width-3 hidden', readOnly:true},
          {name: 'Damage Reduction', value: '', width: 'width-3', readOnly:true},
          {name: 'Sheild', value: '', width: 'width-3'},
          {name: 'Intelligence', value: '', width: 'width-1', readOnly:true},
          {name: 'Score', value: '', width: 'width-1'},
          {name: 'Mod', value: '', width: 'width-1'},
          {name: '', value: '', width: 'width-3 hidden', readOnly:true},
          {name: 'Base Attack', value: '', width: 'width-3', readOnly:true},
          {name: 'Speed', value: '', width: 'width-3'},
          {name: 'Wisdom', value: '', width: 'width-1', readOnly:true},
          {name: 'Score', value: '', width: 'width-1'},
          {name: 'Mod', value: '', width: 'width-1'},
          {name: '', value: '', width: 'width-3 hidden', readOnly:true},
          {name: 'Force Points', value: '', width: 'width-3', readOnly:true},
          {name: 'Destiny Points', value: '', width: 'width-3'},
          {name: 'Charisma', value: '', width: 'width-1', readOnly:true},
          {name: 'Score', value: '', width: 'width-1'},
          {name: 'Mod', value: '', width: 'width-1'},
          {name: '', value: '', width: 'width-6 hidden', readOnly:true},
          {name: 'Dark Side Points', value: '', width: 'width-3'},
        ],
        defense: [
          {name: 'Fortification', value: '', width: 'width-2', readOnly:true},
          {name: '', value: '10', width: 'width-2', readOnly:true},
          {name: 'Level/Armor', value: '', width: 'width-2'}, 
          {name: 'Consitution', value: '', width: 'width-2', readOnly:true}, 
          {name: 'Class', value: '', width: 'width-2'}, 
          {name: 'Misc', value: '', width: 'width-2'}, 
          {name: 'Reflex', value: '', width: 'width-2', readOnly:true},
          {name: '', value: '10', width: 'width-2', readOnly:true},
          {name: 'Level/Armor', value: '', width: 'width-2'}, 
          {name: 'Dexterity', value: '', width: 'width-2', readOnly:true}, 
          {name: 'Class', value: '', width: 'width-2'}, 
          {name: 'Misc', value: '', width: 'width-2'},
          {name: 'Will', value: '', width: 'width-2', readOnly:true},
          {name: '', value: '10', width: 'width-2', readOnly:true},
          {name: 'Level/Armor', value: '', width: 'width-2'}, 
          {name: 'Wisdom', value: '', width: 'width-2', readOnly:true}, 
          {name: 'Class', value: '', width: 'width-2'}, 
          {name: 'Misc', value: '', width: 'width-2'},
        ]   
      }
    }
    this.calcStats();
    this.calcDef();
  }

  change(name, event) {
    this.calcStats();
    this.calcDef();
    //localStorage.setItem('charData', JSON.stringify(this.characterModel));
  }

  calcStats() {
    this.characterModel.stats[0].value = +this.characterModel.stats[1].value + +this.characterModel.stats[2].value;
    this.characterModel.stats[6].value = +this.characterModel.stats[7].value + +this.characterModel.stats[8].value;
    this.characterModel.defense[9].value = this.characterModel.stats[6].value;
    this.characterModel.stats[13].value = +this.characterModel.stats[14].value + +this.characterModel.stats[15].value;
    this.characterModel.defense[3].value = this.characterModel.stats[13].value;
    this.characterModel.stats[19].value = +this.characterModel.stats[20].value + +this.characterModel.stats[21].value;
    this.characterModel.stats[25].value = +this.characterModel.stats[26].value + +this.characterModel.stats[27].value;
    this.characterModel.defense[15].value = this.characterModel.stats[25].value;
    this.characterModel.stats[31].value = +this.characterModel.stats[32].value + +this.characterModel.stats[33].value;
  }

  calcDef() {
    this.characterModel.defense[0].value = +this.characterModel.defense[1].value + +this.characterModel.defense[2].value + +this.characterModel.defense[3].value + +this.characterModel.defense[4].value + +this.characterModel.defense[5].value;
    this.characterModel.defense[6].value = +this.characterModel.defense[7].value + +this.characterModel.defense[8].value + +this.characterModel.defense[9].value + +this.characterModel.defense[10].value + +this.characterModel.defense[11].value;
    this.characterModel.defense[12].value = +this.characterModel.defense[13].value + +this.characterModel.defense[14].value + +this.characterModel.defense[15].value + +this.characterModel.defense[16].value + +this.characterModel.defense[17].value;
  }

  

}
