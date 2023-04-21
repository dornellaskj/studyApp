import { Injectable } from '@angular/core';
// import { Store, parse, literal, isLiteral, sym } from 'rdflib';
// import { readFileSync } from 'fs';
import { UtilitiesService } from './utilities.service';

// const store = new Store();
@Injectable({
  providedIn: 'root'
})
export class CcspServiceService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }
  
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
    return this.utilitiesService.randomizeQuestions([
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
        question:"Which of the following is the bestexample of a physical control?",
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
        question:"Which of the following does nothave a personal privacy law that limits the way all citizens and entities can share personal data?",
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
        question:"IRM tools use a variety of methods for enforcement of intellectual property rights and do notinclude which of the following options?",
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
        question:"Which of the following is nota method of data discovery?",
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
      {
        "answers": [
            "Vendor lock-out",
            "Vendor lock-in",
            "Masking",
            "Closing"
        ],
        "question": "What is the term used to describe the loss of access to data because the cloud provider has ceased operation?",
        "correct": 0
      },
      {
        "answers": [
            "Includeproprietary data formats.",
            "Use IRM and DLP solutions widely throughout the cloud operation.",
            "Ensure there are physical limitations to moving.",
            "Ensure favorable contract terms to support portability."
        ],
        "question": "What is the technique to enhance the portability of cloud data in order to minimize the potential of vendor lock-in?",
        "correct": 3
      },
      {
        "answers": [
            "Mobility",
            "Elasticity",
            "Obfuscation",
            "Portability"
        ],
        "question": "What is the term we use to describe the general ease and efficiency of moving data from one cloud provider either to another cloud provider or down from the cloud?",
        "correct": 3
      },
      {
        "answers": [
            "Malware",
            "Loss/theft of portable devices",
            "Backdoors",
            "DoS/DDoS"
        ],
        "question": "Because PaaS implementations are so often used for software development, what is one of the vulnerabilities that should always be kept in mind?",
        "correct": 2
      },
      {
        "answers": [
            "IaaS",
            "PaaS",
            "SaaS",
            "Community cloud"
        ],
        "question": "In which cloud computing arrangement, the cloud customer will have the most control of their data and systems, and the cloud provider will have the least amount of responsibility?",
        "correct": 0
      },
      {
        "answers": [
            "Type 1",
            "Type 2",
            "Type 3",
            "Type 4"
        ],
        "question": "What would the hypervisor malicious attackers prefer to attack?",
        "correct": 1
      },
      {
        "answers": [
            "Extensive access control and authentication tools and techniques",
            "Analysis and review of all log data by trained, skilled personnel on a frequent basis",
            "Periodic and effective use of cryptographic sanitization tools",
            "The use of automated analysis tools such as SIM, SIEM, and SEM solutions"
        ],
        "question": "Which of the following methods can notbe used to attenuate the harm caused by escalation of privilege?",
        "correct": 2
      },
      {
        "answers": [
            "Masking and obfuscation of data for all personnel who need to work directly with raw data",
            "Hardened perimeter devices",
            "Redundant ISPs",
            "Extensive and comprehensive training programs, including initial, recurring, and refresher sessions"
        ],
        "question": "Which of the following countermeasures is included for protecting cloud operations against internal threats?",
        "correct": 3
      },
      {
        "answers": [
            "Remote kill switch",
            "Dual control",
            "Muddling",
            "Safe harbor"
        ],
        "question": "Which of the following is a technique used to attenuate risks to the cloud environment, resulting in loss or theft of a device used for remote access?",
        "correct": 0
      },
      {
        "answers": [
            "Continual monitoring for anomalous activity",
            "Detailed and extensive background checks",
            "Hardened devices and systems, including servers, hosts, hypervisors, and virtual machines",
            "Regular and detailed configuration/change management activities"
        ],
        "question": "Which of the following is notincluded in the countermeasures for protecting cloud operations against external attackers?",
        "correct": 1
      },
      {
        "answers": [
            "Vendor lock-out",
            "Malware",
            "Favorable terms",
            "Lack of necessary services"
        ],
        "question": "A poorly negotiated cloud service contract could result in which of the following detrimental effects?",
        "correct": 3
      },
      {
        "answers": [
            "One-time pads",
            "Distributed, remote processing of, and storage of data",
            "Fast replication",
            "Regular backups offered by cloud providers"
        ],
        "question": "Benefits for addressing BC/DR offered by cloud operations include all of the following except ___________________.",
        "correct": 0
      },
      {
        "answers": [
            "NIST",
            "The cloud provider",
            "The cost-benefit analysis the organization conducted when deciding on cloud migration",
            "Open-source providers"
        ],
        "question": "After a cloud migration, the BIA should be updated to include a review of the new risks and impacts associated with cloud operations; this review should include an analysis of the possibility of vendor lock-in/lock-out. Analysis of this risk may not have to be performed as a new effort because a lot of the material that would be included is already available from which of the following?",
        "correct": 2
      },
      {
        "answers": [
            "Legal liability can't be transferred to the cloud provider.",
            "Many states have data breach notification laws.",
            "Breaches can cause the loss of proprietary data.",
            "Breaches can cause the loss of intellectual property."
        ],
        "question": "When reviewing BIA after a cloud migration, which of the following new factors should an organization take into account related to data breach impacts?",
        "correct": 0
      },
      {
        "answers": [
            "Public architecture, cloud backup",
            "Cloud architecture, backup from a public provider",
            "Cloud provider, backup from another cloud provider",
            "Cloud provider, backup from a private provider"
        ],
        "question": "What is the basic way of using cloud backups for BC/DR?",
        "correct": 2
      },
      {
          "answers": [
              "Database management software",
              "Proprietary software",
              "Secure software",
              "Open-source software"
          ],
          "question": "Which type of software is mostlikely to be reviewed by most personnel, with the most varied perspectives?",
          "correct": 3
      },
      {
          "answers": [
              "SOC 3",
              "SOC 4",
              "SOC 2  ",
              "SOC 1"
          ],
          "question": "Which kind of SSAE report provides only an attestation by a certified auditor?",
          "correct": 0
      },
      {
          "answers": [
              "DLP solution results",
              "SIM, SIEM, and SEM logs",
              "access to audit logs and performance data",
              "security control administration"
          ],
          "question": "To address shared monitoring and testing responsibilities in a cloud configuration, the provider might offer all these to the cloud customer except _____________________.",
          "correct": 3
      },
      {
          "answers": [
              "The contract",
              "HIPAA",
              "Security control matrix",
              "Statutes"
          ],
          "question": "In addition to whatever audit results in the provider shares with the customer, what other mechanism does the customer have to ensure trust in the providers performance and duties?",
          "correct": 0
      },
      {
          "answers": [
              "SOC 1",
              "SOC 3",
              "SOC 4",
              "SOC 2"
          ],
          "question": "Which kind of SSAE audit reviews the organizations controls for assuring the confidentiality, integrity, and availability of data?",
          "correct": 3
      },
      {
          "answers": [
              "PaaS",
              "IaaS",
              "QaaS",
              "SaaS"
          ],
          "question": "What is the cloud service model in which the customer is responsible for the administration of the OS?",
          "correct": 1
      },
      {
          "answers": [
              "Backend administrative access",
              "Site visit access",
              "Financial reports to shareholders",
              "Audit and performance log data"
          ],
          "question": "Which of the following is a cloud provider likely to provide to its customers in order to enhance the customers trust in the provider?",
          "correct": 3
      },
      {
          "answers": [
              "Virtualization engine",
              "Business requirements",
              "SLAs",
              "Hypervisor"
          ],
          "question": "In all cloud models, security controls are driven by which of the following?",
          "correct": 1
      },
      {
          "answers": [
              "physically visit the business location",
              "perform system scans",
              "deliver consulting services",
              "review documents"
          ],
          "question": "The auditor should not __________________.",
          "correct": 2
      },
      {
          "answers": [
              "randomization",
              "content filtering",
              "behavior analysis",
              "rule sets"
          ],
          "question": "A firewall can use all of the following techniques for controlling traffic except ____________ .",
          "correct": 0
      },
      {
          "answers": [
              "They want to enhance exclusivity for their customers, so only an elite tier of higher-paying clientele will be allowed physical access.",
              "They want to enhance security by keeping information about physical layout and controls confidential.",
              "Most data centers are inhospitable to human life, so minimizing physical access also minimizes safety concerns.",
              "They want to minimize traffic in those areas to maximize the efficiency of operational personnel."
          ],
          "question": "Why will cloud providers be unlikely to allow physical access to their data centers?",
          "correct": 1
      },
      {
          "answers": [
              "Security controls",
              "Data",
              "OS",
              "User permissions"
          ],
          "question": "In all cloud models, the customer will be given access and ability to modify which of the following?",
          "correct": 1
      },
      {
          "answers": [
              "SOC 3",
              "SOC 1 Type 2",
              "SOC 1 Type 1",
              "SOC 2 Type 2"
          ],
          "question": "Which kind of SSAE audit report is mostbeneficial for a cloud customer, even though its unlikely the cloud provider will share it without additional protections?",
          "correct": 3
      },
      {
          "answers": [
              "SOC 3",
              "SOC 1 Type 1",
              "SOC 2 Type 2",
              "SOC 1 Type 2"
          ],
          "question": "Which kind of SSAE audit report is a cloud customer mostlikely to receive from a cloud provider?",
          "correct": 0
      },
      {
          "answers": [
              "raw",
              "useless",
              "sensitive",
              "production"
          ],
          "question": "A honeypot should contain _______________ data.",
          "correct": 1
      },
      {
          "answers": [
              "raw",
              "useless",
              "sensitive",
              "production"
          ],
          "question": "A honeypot should contain _______________ data.",
          "correct": 1
      },
      {
          "answers": [
              "Identification",
              "Authentication",
              "Inflammation",
              "Authorization"
          ],
          "question": "Which of the following confirms that the identity assertion belongs to the entity presenting it?",
          "correct": 1
      },
      {
          "answers": [
              "A standard used for directory synchronization",
              "A standard for developing secure application management logistics",
              "A standard for exchanging authentication and authorization data between security domains",
              "A standard for exchanging usernames and passwords across devices"
          ],
          "question": "Which of the following best describes SAML?",
          "correct": 2
      },
      {
          "answers": [
              "Complex passwords and an HSM",
              "A hardware token and a magnetic strip card",
              "Something you know and something you have",
              "A complex password and a secret code"
          ],
          "question": "Multifactor authentication consists of at least two items. Which of the following best represents this concept?",
          "correct": 2
      },
      {
          "answers": [
              "the right individual gets access to the right resources at the right time for the right reasons",
              "all unauthorized users are properly authorized",
              "unauthorized users will get access to the right resources at the right time for the right reasons",
              "all unauthorized users are properly authenticated"
          ],
          "question": "Identity and access management (IAM) is a security discipline intended to ensure that _______________.",
          "correct": 0
      },
      {
          "answers": [
              "A test environment of isolated devices and cabling, completely distinct from the production environment",
              "Virtualization",
              "Emulation",
              "A nonproduction environment"
          ],
          "question": "Physical sandboxing provides which of the following?",
          "correct": 0
      },
      {
          "answers": [
              "money",
              "recurring inflation",
              "a runtime environment",
              "compartmentalization"
          ],
          "question": "DAST requires ________________ .",
          "correct": 2
      },
      {
          "answers": [
              "Relies heavily on XML",
              "Built on protocol standards  ",
              "Lightweight and scalable",
              "Only supports XML output"
          ],
          "question": "Which of the following best represents the REST approach to APIs?",
          "correct": 2
      },
      {
          "answers": [
              "The complete ONF",
              "A superset of the ONF  ",
              "A stand-alone framework for storing security practices for the ONF",
              "A subset of the ONF"
          ],
          "question": "The ANF is best described as which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "Each member organization/each member third-party",
              "Each member organization/a trusted third party",
              "The users of the various organizations within the federation/a CASB  ",
              "A contracted third-party/the various member organizations of the federation"
          ],
          "question": "In a federated identity arrangement using a trusted third-party model, who is the identity provider, and who is the relying party?",
          "correct": 3
      },
      {
          "answers": [
              "Rendering",
              "Galloping",
              "Agile",
              "Threat modeling"
          ],
          "question": "Which of the following terms means “to perceive software from the perspective of the attacker in order to locate/detect potential vulnerabilities”?",
          "correct": 3
      },
      {
          "answers": [
              "Define",
              "Design",
              "Test",
              "Reject"
          ],
          "question": "Which of the following is not commonly included in the phases of SDLC?",
          "correct": 3
      },
      {
          "answers": [
              "5",
              "7",
              "1",
              "3"
          ],
          "question": "At which of the following OSI layers do WAFs operate?",
          "correct": 1
      },
      {
          "answers": [
              "Serves as a newer replacement for NIST 800-53 r4",
              "Provides an overview of network and infrastructure security designed to secure cloud applications",
              "Describes international privacy standards for cloud computing",
              "Provides an overview of application security that introduces definitive concepts, principles, and processes involved in application security"
          ],
          "question": "Which of the following best describes the purpose and scope of ISO/IEC 27034-1?",
          "correct": 3
      },
      {
          "answers": [
              "XML",
              "SOAP",
              "TEMPEST",
              "SSL"
          ],
          "question": "APIs typically are built with REST or ____________________.",
          "correct": 1
      },
      {
          "answers": [
              "agent-based or network-based",
              "used in place of data masking",
              "used in the place of encryption",
              "reactive or imperative"
          ],
          "question": "Database activity monitoring (DAM) can be _____________________.",
          "correct": 0
      },
      {
          "answers": [
              "agent-based or network-based",
              "used in place of data masking",
              "used in the place of encryption",
              "reactive or imperative"
          ],
          "question": "Database activity monitoring (DAM) can be _____________________.",
          "correct": 0
      },
      {
          "answers": [
              "Location of many data centers",
              "Personnel deployment",
              "Carrying medium",
              "Expense"
          ],
          "question": "What is often a major challenge to getting both redundant power and communications utility connections?",
          "correct": 0
      },
      {
          "answers": [
              "3 ",
              "2 ",
              "4",
              "1"
          ],
          "question": "What is the lowest tier of data center redundancy, according to the Uptime Institute?",
          "correct": 3
      },
      {
          "answers": [
              "RAID",
              "SAN",
              "Data dispersion",
              "Cloud-bursting"
          ],
          "question": "Which of the following techniques for ensuring cloud data center storage resiliency uses parity bits and disk striping?",
          "correct": 0
      },
      {
          "answers": [
              "Converged",
              "Type II",
              "Cat IV",
              "Bare-metal"
          ],
          "question": "Which kind of hypervisor would malicious actors prefer to attack, ostensibly because it offers a greater attack surface?",
          "correct": 1
      },
      {
          "answers": [
              "Sealed exterior case",
              "Keystroke logging",
              "Push-button selectors",
              "Soldered chipsets"
          ],
          "question": "Which of the following is not a feature of a secure KVM component?",
          "correct": 1
      },
      {
          "answers": [
              "As much as needed to ensure all systems may be gracefully shut down and data securely stored  ",
              "1,000 gallons",
              "1 litre",
              "Enough to last 12 hours"
          ],
          "question": "What is the amount of fuel that should be on hand to power generators for backup data center power, in all tiers, according to the Uptime Institute?",
          "correct": 3
      },
      {
          "answers": [
              "2",
              "4",
              "6",
              "8"
          ],
          "question": "If a hospital is considering using a cloud data center, which Uptime Institute Tier should it require?",
          "correct": 1
      },
      {
          "answers": [
              "Developers of the application",
              "User community representatives",
              "Testing contractors",
              "Quality Assurance team members"
          ],
          "question": "Who should not be involved in application security testing?",
          "correct": 0
      },
      {
          "answers": [
              "Data dispersion",
              "Cloud-bursting",
              "RAID",
              "SAN"
          ],
          "question": "Which of the following techniques for ensuring cloud data center storage resiliency uses encrypted chunks of data?",
          "correct": 0
      },
      {
          "answers": [
              "Changing regulatory motif",
              "Squirrels",
              "Construction equipment",
              "Hackers"
          ],
          "question": "Which of the following has not been attributed as the cause of lost capabilities due to DoS?",
          "correct": 0
      },
      {
          "answers": [
              "Emergency egress",
              "Communications",
              "Spare components",
              "Generators"
          ],
          "question": "Which of the following data center redundancy efforts probably poses the greatest threat to human safety?",
          "correct": 3
      },
      {
          "answers": [
              "Fire suppression",
              "Vehicular approach/traffic",
              "Perimeter",
              "Elevation of dropped ceilings"
          ],
          "question": "Which of the following is generally not a high-priority aspect of physical security in the planning and design of a cloud data center facility?",
          "correct": 3
      },
      {
          "answers": [
              "Power and HVAC",
              "Infrastructure supporting the production environment",
              "Critical path/operations  ",
              "Health and human safety"
          ],
          "question": "What should be the primary focus of data center redundancy and contingency planning?",
          "correct": 3
      },
      {
          "answers": [
              "MAC",
              "Preventive measures",
              "RBAC",
              "The Chinese Wall model"
          ],
          "question": "The Brewer-Nash security model is also known as which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "Redundancy",
              "Resiliency  ",
              "Rijndael",
              "Repudiation"
          ],
          "question": "Which of the following is part of the STRIDE model?",
          "correct": 3
      },
      {
          "answers": [
              "Redundancy",
              "Resiliency  ",
              "Rijndael",
              "Repudiation"
          ],
          "question": "Which of the following is part of the STRIDE model?",
          "correct": 3
      },
      {
          "answers": [
              "Disk space",
              "Disk I/O usage",
              "CPU usage",
              "Print spooling"
          ],
          "question": "For performance purposes, OS monitoring should include all of the following except _____________.",
          "correct": 3
      },
      {
          "answers": [
              "breach",
              "theft",
              "inversion",
              "static discharge"
          ],
          "question": "Adhering to ASHRAE standards for humidity can reduce the possibility of _________________________.",
          "correct": 3
      },
      {
          "answers": [
              "Numerous change requests",
              "Power fluctuation  ",
              "To reduce redundancy",
              "Natural disaster"
          ],
          "question": "What is one of the reasons a baseline might be changed?",
          "correct": 0
      },
      {
          "answers": [
              "12 hours",
              "Indefinitely",
              "Three days",
              "10 minutes"
          ],
          "question": "Generator fuel storage for a cloud data center should last for how long, at a minimum?",
          "correct": 0
      },
      {
          "answers": [
              "Line conditioning",
              "Confidentiality",
              "Breach alert",
              "Communication redundancy"
          ],
          "question": "In addition to battery backup, a UPS can offer which capability?",
          "correct": 0
      },
      {
          "answers": [
              "Call tree",
              "Controls matrix",
              "Flashlight",
              "Checklist"
          ],
          "question": "Which tool can reduce confusion and misunderstanding during a BC/DR response?",
          "correct": 3
      },
      {
          "answers": [
              "A process for version control",
              "All regulatory compliance requirements",
              "As many systems throughout the organization as possible",
              "Data breach alerting and reporting"
          ],
          "question": "The baseline should cover which of the following?",
          "correct": 2
      },
      {
          "answers": [
              "IT department",
              "security office",
              "management",
              "regulators"
          ],
          "question": "The CMB should include representations from all of the following offices except _____________________.",
          "correct": 3
      },
      {
          "answers": [
              "Every week",
              "Whenever regulations dictate",
              "Often enough to address organizational needs and reduce frustration with the delay",
              "Annually"
          ],
          "question": "How often should the CMB meet?",
          "correct": 2
      },
      {
          "answers": [
              "Structured test",
              "Dry run",
              "Full test",
              "Tabletop"
          ],
          "question": "Which form of BC/DR testing has the least impact on operations?",
          "correct": 3
      },
      {
          "answers": [
              "Before the UPS duration is exceeded",
              "Three days",
              "Before the recovery point objective is reached",
              "10 seconds"
          ],
          "question": "A generator transfer switch should bring backup power online within what timeframe?",
          "correct": 0
      },
      {
          "answers": [
              "Vendor guidance",
              "Regulations",
              "Internal policy  ",
              "Competitors actions"
          ],
          "question": "When deciding whether to apply specific updates, which of the following is best to follow in order to demonstrate due care?",
          "correct": 0
      },
      {
          "answers": [
              "Flavor",
              "Price",
              "Burn rate",
              "Does not spoil"
          ],
          "question": "Which characteristic of liquid propane increases its desirability as fuel for backup generators?",
          "correct": 3
      },
      {
          "answers": [
              "Cost",
              "Noise reduction",
              "Faster problems recognition ",
              "Speed"
          ],
          "question": "Which characteristic of automated patching makes it attractive?",
          "correct": 3
      },
      {
          "answers": [
              "Joint operating agreements",
              "UPS",
              "Generators",
              "Regulations"
          ],
          "question": "A localized incident or disaster can be addressed in a cost-effective manner by using which of the following?",
          "correct": 0
      },
      {
          "answers": [
              "Joint operating agreements",
              "UPS",
              "Generators",
              "Regulations"
          ],
          "question": "A localized incident or disaster can be addressed in a cost-effective manner by using which of the following?",
          "correct": 0
      },
      {
          "answers": [
              "PCI Council",
              "AICPA",
              "ISO",
              "ISO/IEC"
          ],
          "question": "Generally Accepted Accounting Principles are created and maintained by which organization?",
          "correct": 1
      },
      {
          "answers": [
              "Type I",
              "SOC 3",
              "Type II",
              "SOC 2"
          ],
          "question": "Which of the following SOC report subtypes represents a point in time?",
          "correct": 0
      },
      {
          "answers": [
              "Items that should be implemented",
              "Audit rights of subcontractors",
              "PCI DSS contracts  ",
              "Mandatory breach reporting"
          ],
          "question": "Which of the following is a primary component of regulated PII?",
          "correct": 3
      },
      {
          "answers": [
              "SOX",
              "ISO 27064",
              "GLBA  ",
              "HIPAA"
          ],
          "question": "Which of the following laws resulted from a lack of independence in audit practices?",
          "correct": 0
      },
      {
          "answers": [
              "FERPA  ",
              "SOX",
              "HIPAA",
              "GLBA"
          ],
          "question": "Which statute addresses security and privacy matters in the US financial industry?",
          "correct": 3
      },
      {
          "answers": [
              "All of these",
              "Poor board oversight",
              "Lack of independent audits",
              "Poor financial controls"
          ],
          "question": "SOX was enacted because of which of the following?",
          "correct": 0
      },
      {
          "answers": [
              "The right to be forgotten",
              "EU Data Directives",
              "The right to audit",
              "The information security program"
          ],
          "question": "What is a primary component of the Graham-Leach-Bliley Act?",
          "correct": 3
      },
      {
          "answers": [
              "Financial services",
              "Public companies",
              "Wholesale or distribution",
              "Healthcare"
          ],
          "question": "Which of the following is not an example of a highly regulated environment?",
          "correct": 2
      },
      {
          "answers": [
              "All documentation created during a specific time period",
              "All emails",
              "Anything pertinent to the request",
              "Anything that can provide forensic benefit"
          ],
          "question": "What must be collected during the eDiscovery process?",
          "correct": 2
      },
      {
          "answers": [
              "Physical control",
              "Financial control",
              "Administrative control",
              "Technical control"
          ],
          "question": "Which of the following is not associated with HIPAA controls?",
          "correct": 1
      },
      {
          "answers": [
              "Independence",
              "Better results",
              "Cheaper",
              "Oversight  "
          ],
          "question": "Which of the following is the best advantage of external audits?",
          "correct": 0
      },
      {
          "answers": [
              "Absolute assurances",
              "Seal of approval",
              "HIPAA compliance",
              "Compliance with PCI/DSS"
          ],
          "question": "Which of the following is the primary purpose of the SOC 3 report?",
          "correct": 1
      },
      {
          "answers": [
              "SOC 3",
              "SSAE 18",
              "SOC 1",
              "SOC 2"
          ],
          "question": "Which of the following report is most aligned with financial control audits?",
          "correct": 2
      },
      {
          "answers": [
              "NIST 800-53r4 controls",
              "A security program standard, ISO 27001",
              "Payment Card Industry Data Security Standards (PCI DSS) contracts",
              "Controls designed to comply with laws and regulations related to the cloud environment"
          ],
          "question": "Legal controls refer to which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "Value of data",
              "Scope of processing",
              "Use of subcontractors  ",
              "Location of data"
          ],
          "question": "Which of the following is not a component of contractual PII?",
          "correct": 0
      },
      {
          "answers": [
              "Value of data",
              "Scope of processing",
              "Use of subcontractors  ",
              "Location of data"
          ],
          "question": "Which of the following is not a component of contractual PII?",
          "correct": 0
      },
      {
          "answers": [
              "SOC  ",
              "SLA",
              "CSA",
              "KRI"
          ],
          "question": "Which of the following is a valid risk management metric?",
          "correct": 3
      },
      {
          "answers": [
              "ISO 31000:2018",
              "HIPAA",
              "ISO 27017",
              "NIST 800-92  "
          ],
          "question": "Which of the following frameworks focuses specifically on design implementation and oversight of risk management?",
          "correct": 0
      },
      {
          "answers": [
              "Self-assessment certification",
              "SOC 2 audit certification",
              "Continuous monitoring-based certification  ",
              "Third-party assessment-based certification"
          ],
          "question": "The CSA STAR program consists of three levels. Which of the following is not one of the CSA STAR levels?",
          "correct": 1
      },
      {
          "answers": [
              "Mitigation",
              "Acceptance",
              "Avoidance",
              "Transference"
          ],
          "question": "Which of the following methods of addressing risk is most associated with insurance?",
          "correct": 3
      },
      {
          "answers": [
              "Isolation failure",
              "Insecure data deletion  ",
              "Availability",
              "Vendor lock-in"
          ],
          "question": "Which of the following is not a part of ENISAs top eight security risks of cloud computing?",
          "correct": 2
      },
      {
          "answers": [
              "ISO 9000",
              "ISO 31000:2018  ",
              "ISO/IEC 28000:2007",
              "ISO 27001"
          ],
          "question": "Which ISO standard refers to addressing security risks in a supply chain?",
          "correct": 2
      },
      {
          "answers": [
              "The availability requirements for a given period",
              "The amount of data allowed to be transmitted and received between the cloud provider and customer",
              "The number of user accounts allowed during a specified period",
              "Which personnel are responsible and authorized among both the provider and the customer to declare an emergency and transition the service to the contingency operation status"
          ],
          "question": "Which of the following is not appropriate to include in an SLA?",
          "correct": 3
      },
      {
          "answers": [
              "An inventory of cloud service security controls that are arranged into separate security domains",
              "An inventory of cloud services security controls that are arranged into a hierarchy of security domains",
              "A set of regulatory requirements for cloud service providers",
              "A set of software development lifecycle requirements for cloud service providers"
          ],
          "question": "What is the CSA STAR Cloud Controls Matrix (CCM)?",
          "correct": 0
      },
      {
          "answers": [
              "Maximum",
              "Condition alpha",
              "Zero",
              "Reduced"
          ],
          "question": "What is an impossible level of risk?",
          "correct": 2
      },
      {
          "answers": [
              "KRIs no longer exist, having been replaced by KPIs.",
              "KPIs no longer exist, having been replaced by KRIs.",
              "KRIs are forward looking, while KPIs are backward looking.",
              "There is no difference between KPIs and KRIs."
          ],
          "question": "The difference between KPIs and KRIs is which of the following?",
          "correct": 2
      },
      {
          "answers": [
              "Avoidance",
              "Transference",
              "Acceptance  ",
              "Mitigation"
          ],
          "question": "Which of the following is a risk management option that halts a business function?",
          "correct": 0
      },
      {
          "answers": [
              "The person or entity responsible for keeping cloud services running for customers",
              "The person or entity responsible for transporting data across the Internet",
              "An intermediary who provides connectivity and transport of cloud services between cloud providers and cloud consumers",
              "A person or entity responsible for making a cloud service available to consumers"
          ],
          "question": "Which of the following best describes a cloud carrier?",
          "correct": 2
      },
      {
          "answers": [
              "ENISA",
              "NIST 800-53",
              "ISO 27000",
              "COBIT  "
          ],
          "question": "Which of the following identifies the top eight security risks based on likelihood and impact?",
          "correct": 0
      },
      {
          "answers": [
              "Key risk indicators (KRIs)",
              "NIST SP 800-37",
              "ENISA Cloud Computing: Benefits, Risks, and Recommendations for Information Security",
              "ISO 31000:2018"
          ],
          "question": "Which of the following is not a risk management framework?",
          "correct": 0
      },
      {
          "answers": [
              "Background checks for the providers personnel  ",
              "The physical layout of the data center",
              "Use of subcontractors",
              "Redundant uplink grafts"
          ],
          "question": "Which of the following components is part of what a CCSP should review when looking at contracting with a cloud service provider?",
          "correct": 2
      },
      {
          "answers": [
              "Background checks for the providers personnel  ",
              "The physical layout of the data center",
              "Use of subcontractors",
              "Redundant uplink grafts"
          ],
          "question": "Which of the following components is part of what a CCSP should review when looking at contracting with a cloud service provider?",
          "correct": 2
      },
      
    ]);
  }
}
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
