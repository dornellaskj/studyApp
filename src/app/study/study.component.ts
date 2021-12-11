import { Component, OnInit } from '@angular/core';
import { SecureSoftwareDesignService } from '../services/secure-software-design.service';
import { DataService } from '../services/data.service';
import {CyberSecurityManagementService} from '../services/cyber-security-management.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
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
  wrongQuestions = [];
  
  constructor(
    private dataService: SecureSoftwareDesignService,
    private ogDataService: DataService,
    private cyberMgmtService: CyberSecurityManagementService
  ) {}

  ngOnInit() {

  }

  setQuestions(input) {
    switch(input) {
      case 0:
        this.questions = this.ogDataService.getQuestions();
        this.setQuestion(this.index);
        break;
      case 1:
        this.questions = this.dataService.getQuestions();
        this.setQuestion(this.index);
        break;
      case 2:
        this.questions = this.cyberMgmtService.getQuestions();
        this.setQuestion(this.index);
        break;
        
    }
    
  }

  next() {
    if(this.wasAnswered === true) {
      this.isCorrect = null;
      this.wasAnswered = false;
      this.index = this.index + 1;
      this.calcPercent();
      if(this.index < this.questions.length) {
        this.setQuestion(this.index);
      } else if(this.wrongQuestions.length > 0) {
        this.questions = this.wrongQuestions;
        this.wrongQuestions = [];
        this.index = 0;
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
        this.wrongQuestions.push(this.question);
        this.isCorrect = false;
        this.wrongCount = this.wrongCount + 1;
      }
    }
  }

}
