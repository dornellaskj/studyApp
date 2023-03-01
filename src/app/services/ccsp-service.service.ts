import { Injectable } from '@angular/core';
// import { Store, parse, literal, isLiteral, sym } from 'rdflib';
// import { readFileSync } from 'fs';

// const store = new Store();
@Injectable({
  providedIn: 'root'
})
export class CcspServiceService {

  constructor() {
    // this.loadFilesToStore(['../assets/ccsp.ttl'], store);
  }
  
  // private loadFilesToStore(filepaths, store) {
  //   for (const path of filepaths) {
  //       const ttl = readFileSync(path, {encoding: 'utf8'});
  //       parse(ttl, store, 'http://kevindornellas.me', 'text/turle')
  //   }
  // }

  // getSkillsRDF() {
  //   return store;
  // }
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
        question:"Which of the following  best describes risk?",
        answers: [
          "Preventable",
          "Everlasting", 
          "The likelyhood that a threat will exploit a vulnerability", 
          "Transient"
        ],
        correct: 2
      },
      {
        question:"Risk appetite for an organization is determined by which of the following?",
        answers: [
          "Reclusion evaluation",
          "Senior Management", 
          "Legislative mandates", 
          "Contractual agreement"
        ],
        correct: 1
      },
      {
        question:"The BIA can be used to provide information about which of the following elements?",
        answers: [
          "Demilitarized zone",
          "Secure acquisition", 
          "BC/DR planning", 
          "Selection of cloud models"
        ],
        correct: 2
      },
      {
        question:"Gathering business requirements can aid the organization in determining all of these facets of organizational assets except ___________________.",
        answers: [
          "full inventory",
          "usefulness", 
          "value", 
          "criticality"
        ],
        correct: 1
      },
      {
        question:"What is the risk leftover after controls and countermeasures are put in place?",
        answers: [
          "Null",
          "High", 
          "Residual", 
          "Pertinent"
        ],
        correct: 2
      },
      {
        question:"The cloud customer and provider negotiate their respective responsibilities and rights regarding the capabilities and data of the cloud service. Where is the eventual agreement codified?",
        answers: [
          "RMF",
          "Contract", 
          "MOU", 
          "BIA"
        ],
        correct: 1
      },
      {
        question:"In which cloud service model is the customer required to maintain and update only the applications?",
        answers: [
          "CaaS",
          "SaaS", 
          "PaaS", 
          "IaaS"
        ],
        correct: 2
      },
      {
        question:"In which cloud service model is the customer required to maintain the OS?",
        answers: [
          "CaaS",
          "SaaS", 
          "PaaS", 
          "IaaS"
        ],
        correct: 3
      },
      {
        question:"Devices in the cloud data center should be secure against attack. Which of the following are not a means of hardening devices?",
        answers: [
          "Using a strong password policy",
          "Removing default passwords", 
          "Strictly limiting physical access", 
          "Removing all admin accounts"
        ],
        correct: 3
      },
      {
        question:"What is an experimental technology that is intended to create the possibility of processing encrypted data without having to decrypt it first?",
        answers: [
          "Homorphic",
          "Polyinstantiation", 
          "Quantum-state", 
          "Gastronomic"
        ],
        correct: 0
      },
      {
        question:"The process of hardening a device should include which of the following?",
        answers: [
          "Encrypting the OS",
          "Updating and patching the sytstem", 
          "Using video cameras", 
          "Performing thorough personnel background checks"
        ],
        correct: 1
      },
      {
        question:"Which of the following is the best example of a physical control?",
        answers: [
          "Carpets",
          "Ceilings", 
          "Doors", 
          "Fences"
        ],
        correct: 3
      },
      {
        question:"Which of the following is considered a technological control?",
        answers: [
          "Installing firewall software",
          "Using a fireproof safe", 
          "Using a fire extinguisher", 
          "Firing personnel"
        ],
        correct: 0
      },
      {
        question:"Which of the following is considered an administrative control?",
        answers: [
          "Access control process",
          "Keystroke logging", 
          "Door locks", 
          "Biometric authentication"
        ],
        correct: 0
      },
      {
        question:"In attempting to provide a layered defense, the security practitioner should convince senior management to include security controls of which type?",
        answers: [
          "Technological",
          "Physical", 
          "Administrative", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"In the cloud, the data processor is usually referred to which of the following?",
        answers: [
          "The cloud provider",
          "The cloud access security broker", 
          "The party that assigns access rights", 
          "The cloud customer"
        ],
        correct: 0
      },
      {
        question:"What is the US federal agency that accepts applications for new patents?",
        answers: [
          "OSHA",
          "SEC", 
          "USDA", 
          "USPTO"
        ],
        correct: 3
      },
      {
        question:"Which of the following is the most pragmatic option for data disposal in the cloud?",
        answers: [
          "Melting",
          "Overwritting", 
          "Cold fusion", 
          "Cryptoshredding"
        ],
        correct: 3
      },
      {
        question:"Which of the following does not have a personal privacy law that limits the way all citizens and entities can share personal data?",
        answers: [
          "Japan",
          "Belguim", 
          "Argentina", 
          "USA"
        ],
        correct: 3
      },
      {
        question:"Which of the following can only remove the logical pointers to the data for processing purposes in terms of data sanitization?",
        answers: [
          "Deletion",
          "Industrial shredding", 
          "Drilling", 
          "Burning"
        ],
        correct: 0
      },
      {
        question:"What is intellectual property protection for the tangible expression of a creative idea?",
        answers: [
          "Copyright",
          "Patent", 
          "Trademark", 
          "Trade secret"
        ],
        correct: 0
      },
      {
        question:"All the following are data analytics modes except ____________.",
        answers: [
          "refactory iterations",
          "real-time analytics", 
          "datamining", 
          "agile business intelligence"
        ],
        correct: 0
      },
      {
        question:"The data owner is usually considered the ___________ in a cloud configuration.",
        answers: [
          "cloud customer",
          "cloud provider", 
          "Cloud access security broker", 
          "None of these"
        ],
        correct: 0
      },
      {
        question:"IRM solutions should generally include all the following functions except _______________.",
        answers: [
          "automatice expiration",
          "dynamic policy control", 
          "persistency", 
          "automatic self-destruct"
        ],
        correct: 3
      },
      {
        question:"What is the intellectual property protection for a confidential recipe for muffins?",
        answers: [
          "Copyright",
          "PAtent", 
          "Trademark", 
          "Trade secret"
        ],
        correct: 3
      },
      {
        question:"Which of the following includes confidentiality level, distribution limitations, and access restrictions?",
        answers: [
          "Data value",
          "Data source", 
          "Data label", 
          "Data level"
        ],
        correct: 2
      },
      {
        question:"IRM tools use a variety of methods for enforcement of intellectual property rights and do not include which of the following options?",
        answers: [
          "Media-present checks",
          "Dip switch validity", 
          "Local agent enforcement", 
          "Support-based licensing"
        ],
        correct: 1
      },
      {
        question:"What is intellectual property protection for a useful manufacturing innovation?",
        answers: [
          "Copyright",
          "Patent", 
          "Trademark", 
          "Trade secret"
        ],
        correct: 1
      },
      {
        question:"Which of the following is not a method of data discovery?",
        answers: [
          "Label-based",
          "User-based", 
          "Content-based", 
          "Metadata-based"
        ],
        correct: 1
      },
      {
        question:"What is the aspect of the DMCA that has often been abused and places the burden of proof on the accused?",
        answers: [
          "Takedown notice",
          "Decryption program prohibition", 
          "Toll exemption", 
          "Puppet plasticity"
        ],
        correct: 0
      },
      {
        "answers": [
            "  Create, Store, Use, Archive, Share, Destroy",
            "  Create, Store, Use, Share, Archive, Destroy",
            "  Create, Use, Store, Share, Archive, Destroy",
            "  Create, Archive, Store, Share, Use, Destroy"
        ],
        "question": "What is the correct order of the phases of the data lifecycle? ",
        "correct": 1
      },
      {
        "answers": [
            "  location",
            "  procedure",
            "  format",
            "  technology immediacy&nbsp;"
        ],
        "question": "When crafting plans and policies for data archiving, we should consider all of the following except ___________________.",
        "correct": 3
      },
      {
        question:"What are the US State Department controls on technology exports known as?",
        answers: [
          "ITAR",
          "EAR", 
          "EAL", 
          "IRM"
        ],
        correct: 0
      },
      {
        "answers": [
            "Object-based storage",
            "File-based storage",
            "Database",
            "CDN"
        ],
        "question": "What is a cloud storage architecture that manages the data in caches of copied content close to locations of high demand?",
        "correct": 3
      },
      {
        "answers": [
            "Object-based storage",
            "File-based storage",
            "Database",
            "CDN"
        ],
        "question": "What is a cloud storage architecture that manages the data in an arrangement of fields according to characteristics of each data element?",
        "correct": 2
      },
      {
        "answers": [
            "DLP",
            "CASB",
            "SIEM",
            "AES"
        ],
        "question": "What is the third-party provider of IAM functions for the cloud environment?",
        "correct": 1
      },
      {
        "answers": [
            "Have key recovery processes.",
            "Maintain key security.",
            "Pass keys out of band.",
            "Ensure multifactor authentication."
        ],
        "question": "Which of the following is not included in the best practices for key management?",
        "correct": 3
      },
      {
        "answers": [
            "be at least 128 bits long",
            "not be stored with the cloud provider",
            "split into groups",
            "be generated with dependency"
        ],
        "question": "Cryptographic keys for encrypted data stored in the cloud should ___________________.",
        "correct": 1
      },
      {
        "answers": [
            "IRMand this is correct answer",
            "SIEM",
            "Kerberos",
            "Hypervisors"
        ],
        "question": "DLP can be combined with which of the following security tools to enhance data controls?",
        "correct": 0
      },
      {
        "answers": [
            "Multiple authentication factors",
            "Two distinct databases",
            "Single encryption key",
            "Personnel"
        ],
        "question": "Which of the following will you use in order to implement tokenization?",
        "correct": 1
      },
      {
        "answers": [
            "Accurate data categorization",
            "Physical access limitations",
            "USB connectivity",
            "Physical presence"
        ],
        "question": "Proper implementation of DLP solutions for successful function requires which of the following?",
        "correct": 0
      },
      {
        "answers": [
            "Malicious disclosure",
            "Performance issues",
            "Bad policy",
            "Power failure"
        ],
        "question": "DLP solutions can help deter loss because of which of the following?",
        "correct": 0
      },
      {
        "answers": [
            "Randomization",
            "Inadvertent disclosure",
            "Natural disaster",
            "Device failure"
        ],
        "question": "DLP solutions can aid in deterring loss due to which of the following?",
        "correct": 1
      },
      {
        "answers": [
            "Centralize collection of log data",
            "Enhanced analysis capabilities",
            "Dashboarding",
            "Performance enhancement"
        ],
        "question": "Which of the following are not the goals of SIEM solution implementation?",
        "correct": 3
      },
      {
        "answers": [
            "Tokenization",
            "Data discovery",
            "Obfuscation",
            "Masking"
        ],
        "question": "Which of the following refers to hiding the data with useless characters?",
        "correct": 3
      },
      // {
      //   question:"AAAA",
      //   answers: [
      //     "AAA",
      //     "aaa", 
      //     "aaa", 
      //     "aaa"
      //   ],
      //   correct: 0
      // },
      
    ]
  }
}
