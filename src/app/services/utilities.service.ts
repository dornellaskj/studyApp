import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public randomizeQuestions(questions) {
    const numbersUsed = [];
    const randomQuestions = [];
    for(let i = 0; i < questions.length; i++){
      let randomNumber = this.getRandomInt(questions.length);
      if(!numbersUsed.includes(randomNumber)) {
        randomQuestions.push(questions[randomNumber]);
        numbersUsed.push(randomNumber);
      } else {
        randomNumber = 0;
        while (numbersUsed.includes(randomNumber)) {          
          randomNumber = randomNumber + 1;
        }
        randomQuestions.push(questions[randomNumber]);
        numbersUsed.push(randomNumber);      
      }
    }
    return randomQuestions;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
