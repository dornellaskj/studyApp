import { Component, OnInit } from '@angular/core';
import { SecureSoftwareDesignService } from '../services/secure-software-design.service';
import { DataService } from '../services/data.service';
import { CyberSecurityManagementService } from '../services/cyber-security-management.service';
import { AwsSecurityService } from '../services/aws-security.service';
import { CcspServiceService} from '../services/ccsp-service.service';
import { AwsArchitectService} from '../services/aws-architect.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit {
  questionLabel: string;
  isCorrect: boolean;
  wasAnswered: boolean = false;
  dun: boolean;
  percentCorrect: number;
  title = 'Kevin Dornellas';
  index = 0;
  question:any;
  answers: any;
  correct: number;
  correctCount: number = 0;
  wrongCount: number = 0;
  questions:any;
  wrongQuestions = [];
  progress: any;
  regularQuestionsComplete:boolean = false;
  constructor(
    public dataService: SecureSoftwareDesignService,
    public ogDataService: DataService,
    public cyberMgmtService: CyberSecurityManagementService,
    public awsSecurityService: AwsSecurityService,
    public ccspService: CcspServiceService,
    public awsArchService: AwsArchitectService
  ) {}

  ngOnInit() {

  }

  setQuestions(input) {
    switch(input) {
      case 0:
        this.questions = this.ogDataService.getQuestions();
        this.questionLabel = 'Information Security';
        this.setQuestion(this.index);
        break;
      case 1:
        this.questions = this.dataService.getQuestions();
        this.questionLabel = 'Secure Software Design';
        this.setQuestion(this.index);
        break;
      case 2:
        this.questions = this.cyberMgmtService.getQuestions();
        this.questionLabel = 'Cyber Security Management';
        this.setQuestion(this.index);
        break;
      case 3:
        this.questions = this.awsSecurityService.getQuestions();
        this.questionLabel = 'AWS Security';
        this.setQuestion(this.index);
        break;
      case 4:
        this.questions = this.ccspService.getQuestions();
        this.questionLabel = 'CCSP';
        this.setQuestion(this.index);
        break;
      case 5:
        this.questions = this.awsArchService.getQuestions();
        this.questionLabel = 'AWS Architect';
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
      if(this.index == this.questions.length && !this.regularQuestionsComplete) {
        this.recordProgress();
      }
      if(this.index < this.questions.length) {
        this.setQuestion(this.index);
        this.regularQuestionsComplete = true;
      } else if (this.index == this.questions.length){
        alert('you scored: ' + (this.correctCount/this.questions.length) * 100 + '%');
        this.correctCount = 0;
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

  getProgressFromLocalStorage() {
     this.progress = JSON.parse(localStorage.getItem('progress'));
    if(this.progress == null) {
      localStorage.setItem('progress', JSON.stringify([]));
      this.progress = [];
    }
  }

  recordProgress() {
    this.getProgressFromLocalStorage();
    const progressObject = {
      questionCount: this.questions?.length,
      correctAnswers: this.correctCount,
      quiz: this.questionLabel,
      date: new Date()
    }
    this.progress.push(progressObject);
    localStorage.setItem('progress', JSON.stringify(this.progress));
  }

}
