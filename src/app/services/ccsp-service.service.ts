import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CcspServiceService {

  constructor() { }

  getQuestions() {
    return [
      {
        question:"Which of the following is used to determine the critical paths, process, and assets of an organization",
        answers: [
          "Business Impact analyssis",
          "Risk Management framework", 
          "Confidentiality, integrity, and availability triad", 
          "Business requirements"
        ],
        correct: 0
      },
      {
        question:"If a cloud customer cannot get access to the cloud provider, this affects what portion of the CIA triad",
        answers: [
          "Integrity",
          "Authentication", 
          "Confidentiality", 
          "Availability"
        ],
        correct: 3
      },
      {
        question:"If a cloud customer wants a fully operational environment with very little maintenance or administration necessary, which cloud service model would probably be best?",
        answers: [
          "Hybrid",
          "Iaas", 
          "PaaS", 
          "SaaS"
        ],
        correct: 3
      },
      {
        question:"What reason is responsible that an organization may want to consider cloud migration?",
        answers: [
          "Reduced operational expenses",
          "Reduced efficiency", 
          "Increased personnel costs", 
          "Elimination of risks"
        ],
        correct: 0
      },
      {
        question:"The cloud deployment model that features joint ownership of assets among an affinity group is known as a ______________ cloud model.",
        answers: [
          "hybrid",
          "community", 
          "private", 
          "public"
        ],
        correct: 1
      },
      {
        question:"Cloud vendors are held to contractual obligations with specified metrics by ___________________.",
        answers: [
          "discipline",
          "law", 
          "regulations", 
          "service-level-agreements"
        ],
        correct: 3
      },
      {
        question:"___________________ drive(s) security decisions.",
        answers: [
          "Public opinion",
          "Business requirements", 
          "Surveys", 
          "Customer service responses"
        ],
        correct: 1
      },
      {
        question:"The cloud deployment model that features ownership by a cloud provider, with services offered to anyone who wants to subscribe, is known as a _____________ cloud model.",
        answers: [
          "hybrid",
          "latent", 
          "private", 
          "public"
        ],
        correct: 3
      },
      {
        question:"The risk that a cloud provider might go into bankruptcy or otherwise leave the market, and the cloud customer might not be able to recover data is known as ___________________.",
        answers: [
          "Vendor closure",
          "Vending route", 
          "Vendor lock-in", 
          "Vendor lock-out"
        ],
        correct: 3
      },
      {
        question:"If an organization owns all of the hardware and infrastructure of a cloud data center that is used only by members of that organization, which cloud model would this be?",
        answers: [
          "Private",
          "Public", 
          "Hybrid", 
          "Motive"
        ],
        correct: 0
      },
      {
        question:"As encryption can be used in various aspects of cloud computing, which of the following will always be a risk of interception of data?",
        answers: [
          "Infrared devices",
          "Magnetic swipe cards", 
          "EMV cards", 
          "Remote access"
        ],
        correct: 3
      },
      {
        question:"If a cloud customer wants a bare-bones environment in which to replicate his own enterprise for business continuity/disaster recovery (BC/DR) purposes, which cloud service model would probably be best?",
        answers: [
          "Hybrid",
          "SaaS", 
          "PaaS", 
          "IaaS"
        ],
        correct: 3
      },
      {
        question:"Which of the following are not the features of cloud computing?",
        answers: [
          "On-demand self-service",
          "Broad network access", 
          "Reversed charging configuration", 
          "Rapid elasticity"
        ],
        correct: 2
      },
      {
        question:"If a cloud customer wants a secure, isolated environment in order to conduct software development and testing, which cloud service model would probably be best?",
        answers: [
          "IaaS",
          "Hybrid", 
          "SaaS", 
          "PaaS"
        ],
        correct: 3
      },
      {
        question:"When a cloud customer uploads personally identifiable information (PII) to a cloud provider, who is ultimately responsible for the security of that PII?",
        answers: [
          "The individuals who are the subjects of PII",
          "Cloud customer", 
          "Cloud vendor", 
          "Cloud provider"
        ],
        correct: 1
      },
      {
        question:"AAAA",
        answers: [
          "AAA",
          "aaa", 
          "aaa", 
          "aaa"
        ],
        correct: 0
      },
      
    ]
  }
}
