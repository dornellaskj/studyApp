import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCorrect: boolean;
  wasAnswered: boolean = false;
  dun: boolean;
  percentCorrect: number;
  title = 'studyApp';
  index = 0;
  question:any;
  answers: any;
  correct: number;
  correctCount: number = 0;
  wrongCount: number = 1;
  questions:any;
  
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
    this.setQuestion(this.index);
  }

  next() {
    if(this.wasAnswered === true) {
      this.isCorrect = null;
      this.wasAnswered = false;
      this.index = this.index + 1;
      this.calcPercent();
      if(this.index < this.questions.length) {
        this.setQuestion(this.index);
      } else {
        alert("all out of questions!");
      }
    }
    
  }

  setQuestion(int:number) {
    this.question = this.questions[int];
    this.answers = this.question.answers;
    this.correct = this.question.correct;
  }

  calcPercent() {
    this.percentCorrect = (this.correctCount / this.index) * 100;
  }

  answerSelected(index:number) {
    if(this.wasAnswered == false) {
      this.wasAnswered = true;
      if(index == this.correct) {
        this.isCorrect = true;
        this.correctCount = this.correctCount + 1;
      } else {
        this.isCorrect = false;
        this.wrongCount = this.wrongCount + 1;
      }
    }
  }
}
