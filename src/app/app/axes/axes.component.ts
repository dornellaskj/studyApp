import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-axes',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.scss']
})
export class AxesComponent implements OnInit {
  player1: string = '';
  player2: string = '';
  showPlayerForm: boolean = true;
  player1Score: number;
  player2Score: number;
  player1scores: number[] = [];
  player2scores: number[] = [];
  player1Games: any[] = [];
  player2Games: any[] = [];
  player1Total: number = 0;
  player2Total: number = 0;
  ThrowCount: number = 1;
  gameDone: boolean = false;
  showScoresView: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  begin() {
    if(this.player1.length > 0 && this.player2.length > 0 && this.player1 !== this.player2) {
      this.showPlayerForm = false;
    } else {
      alert("Please enter distinct names for players 1 & 2.");
    }
  }

  nextThrow() {
    if(this.player1Score && this.player2Score) {
      this.player1Total += parseInt(this.player1Score.toString());
      this.player2Total += parseInt(this.player2Score.toString());
      this.player1scores.push(this.player1Score);
      this.player2scores.push(this.player2Score);
      this.player1Score = null;
      this.player2Score = null;
      
      if(this.ThrowCount == 10) {
        let player1Game:any = {};
        let player2Game:any = {};
        player1Game.total =  this.player1Total;
        player2Game.total =  this.player2Total;
        this.player1Games.push(player1Game);
        player1Game.throws = this.player1scores;
        player2Game.throws = this.player2scores;
        this.player2Games.push(player2Game);
        this.gameDone = true;
      } else {
        this.ThrowCount = this.ThrowCount + 1;
      }
    }
  }

  playNextGame() {
    this.showScoresView = false;
    this.gameDone = false;
    this.player1Total = 0;
    this.player2Total = 0;
    this.ThrowCount = 1;
  }

  seeScores() {
    this.showScoresView = true;
  }

  seeGameScores(scores:number[]) {
    let throwsView:string = '';
    scores.forEach(score => {
      throwsView += score + ', ';
    });
    alert(throwsView);
  }

}
