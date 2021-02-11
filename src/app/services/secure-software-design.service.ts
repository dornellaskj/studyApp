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
        question:"The most well-known SDL model is the __________, a process that Microsoft has adopted for the development of software that needs to withstand malicious attack and is considered the most mature of the top three models.",
        answers: [
          "Cigital Software Security Touchpoints model",
          "OWASP Security Development Lifecycle", 
          "Cisco Secure Development Lifecycle", 
          "Trustworthy Computing Security Development Lifecycle"
        ],
        correct: 3
      },
      {
        question:"The ISO/IEC __________ standard provides guidance to help organizations embed security within their processes that help secure applications running in the environment, including application life cycle processes.",
        answers: [
          "17799",
          "27034", 
          "27001", 
          "SDLC"
        ],
        correct: 1
      },
      {
        question:"__________ is a global, industry-led effort to identify and promote best practices for developing and delivering more secure and reliable software, hardware, and services.",
        answers: [
          "NCSD",
          "BSI", 
          "SAFECode", 
          "SDLC"
        ],
        correct: 2
      },
      {
        question:"The __________ is a list of information security vulnerabilities and exposures that aims to provide common names for publicly known problems.",
        answers: [
          "CVE",
          "SAMATE", 
          "NCSD", 
          "SDLC"
        ],
        correct: 0
      },
      {
        question:"__________ is the analysis of computer software that is performed by executing programs on a real or virtual processor in real time.",
        answers: [
          "Fuzzing",
          "Dynamic program analysis", 
          "Static program analysis", 
          "Scratching"
        ],
        correct: 1
      },
      {
        question:"__________ is a black-box software testing technique that can be automated and provides invalid, unexpected, or random data to the inputs of a computer software program.",
        answers: [
          "Fuzzing",
          "Dynamic program analysis", 
          "Static program analysis", 
          "Scratching"
        ],
        correct: 0
      },
      {
        question:"__________ is the analysis of computer software that is performed without actually executing programs.",
        answers: [
          "Fuzzing",
          "Dynamic program analysis", 
          "Static program analysis", 
          "Scratching"
        ],
        correct: 2
      },
      {
        question:"The __________ requires that in a particular abstraction layer of a computing environment, every module must be able to access only the information and resources that are necessary for its legitimate purpose.",
        answers: [
          "principle of least privilege",
          "software security maturity model", 
          "secure development life cycle", 
          "software assurance forum"
        ],
        correct: 0
      },
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
