import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill;
  beenClicked = 0;
  displayMessage = '';
  message = '';
  pauseTime = 70;

  constructor() { }

  ngOnInit(): void {
  }

  typeMessage(message) {
    if(this.beenClicked == 0) {
        this.beenClicked++;
        this.message = message.split('');
        this.typeChar(0);
    }
  }

  typeChar(index) {
      this.displayMessage = this.displayMessage + this.message[index];
      if(index + 2 <= this.message.length) {
          if(this.message[index + 1] == ' ') {
              this.displayMessage = this.displayMessage + this.message[index + 1];
          }
          setTimeout(() => {
              this.typeChar(index + 1);                
          }, this.pauseTime);
      }
  }

}
