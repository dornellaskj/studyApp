import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQuestions() {
    return [
      {
        question:"what",
        answers: ["apples","pears", "things", "stuff"],
        correct: 0
      },
      {
        question:"what",
        answers: ["apples","pears", "things", "stuff"],
        correct: 0
      }
    ]
  }
}
