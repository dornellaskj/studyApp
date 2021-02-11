import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecureSoftwareDesignService {

  // {
  //   question:"aaa",
  //   answers: [
  //     "aaa",
  //     "aaa", 
  //     "aaa", 
  //     "aaa"
  //   ],
  //   correct: 0
  // },
  getQuestions() {
    return [
      {
        question:"Developers must take the time to code __________, and eradicate __________ security flaw before the code goes into production.",
        answers: [
          "cleanly, every possible",
          "quickly, the least possible", 
          "efficiently, the most common", 
          "slowly, the most prevalent"
        ],
        correct: 0
      },
      {
        question:"What are two attributes which complement each other and enhance overall software product integrity and market value?",
        answers: [
          "Proprietary, shared",
          "Open source, closed source", 
          "Reliability, usability", 
          "Quality, security"
        ],
        correct: 3
      },
      {
        question:"__________ and __________ are the two properties that support confidentiality as one ensures users have the appropriate role and privilege to view data, and the other ensures users are who they claim to be and that the data come from the appropriate place.",
        answers: [
          "Availability, authenticity",
          "Access, authorization", 
          "Authorization, authentication", 
          "Asymmetry, access"
        ],
        correct: 2
      },
      {
        question:"What is responsible for preserving authorized restrictions on information access and disclosure, including means for protecting personal privacy and proprietary information?",
        answers: [
          "Availability",
          "Confidentiality", 
          "Authorization", 
          "Integrity"
        ],
        correct: 1
      },
      {
        question:"What is responsible for guarding against improper information modification or destruction, and includes ensuring information non-repudiation and authenticity?",
        answers: [
          "Confidentiality",
          "Integrity", 
          "Availability", 
          "Authorization"
        ],
        correct: 1
      },
      {
        question:"What is responsible for ensuring timely and reliable access to and use of information?",
        answers: [
          "Confidentiality",
          "Integrity", 
          "Availability", 
          "Authorization"
        ],
        correct: 2
      },
      {
        question:"Which concept in the software life cycle understands the potential security threats to the system, determines risk, and establishes appropriate mitigations?",
        answers: [
          "Penetration testing",
          "Vulnerability assessment", 
          "Attack surface validation", 
          "Threat modeling"
        ],
        correct: 3
      },
      {
        question:"The majority of __________ against software __________ some vulnerability or weakness in that software; these terms are often used interchangeably.",
        answers: [
          "threats, hack",
          "malware, flaw", 
          "attacks, exploit", 
          "mitigations, remediate"
        ],
        correct: 2
      }
    ]
  }
}
