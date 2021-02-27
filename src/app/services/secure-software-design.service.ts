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
        question:"A disadvantage of using third-party software is inflexibility.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"Which term is used for software in government systems?",
        answers: [
          "COTS",
          "LOTS", 
          "GOTS", 
          "NOTS"
        ],
        correct: 2
      },
      {
        question:"What is one disadvantage to outsourcing software development to a third party?",
        answers: [
          "Ownership of code",
          "Available skilled resources", 
          "Tailored to business needs", 
          "Experience with technology"
        ],
        correct: 0
      },
      {
        question:"What is a challenge of using proprietary software?",
        answers: [
          "Decreased license fees",
          "No End of Support", 
          "Proprietary format", 
          "Open source nature"
        ],
        correct: 2
      },
      {
        question:"Outsourcing risks include ensuring that the staff of the supplier has the requisite knowledge and experience.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"What is a concern of security in third-party software?",
        answers: [
          "Security implanted during development",
          "Secure development environment", 
          "Untrusted distributions of software", 
          "Digital 'aluminum foil'"
        ],
        correct: 1
      },
      {
        question:"Which of the following is important criteria in choosing a vendor to purchase a product?",
        answers: [
          "Cost",
          "Repudiation", 
          "Lateralization", 
          "Unqualified staff"
        ],
        correct: 0
      },
      {
        question:"Which of the following is a consideration when evaluating vendors?",
        answers: [
          "Accreditation",
          "Certification", 
          "Social Media Policy", 
          "Priority Awareness"
        ],
        correct: 1
      },
      {
        question:"Which of the following is an additional consideration when evaluating vendors?",
        answers: [
          "Resource Gathering",
          "Ability to work with other vendors", 
          "Compliance Methodology and Maturity", 
          "Security Engineering Processes"
        ],
        correct: 3
      },
      {
        question:"Cost and warranty are not considerations when comparing outsourced or in-house vendor support.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"Question 5 :In evaluation of third party vendors, one method may include reviewing social media comments.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"The role of the audit function in acquisition process is to provide assurance to management of the incompliance with regulations.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"Which of the following represents an example of a vendor customization?",
        answers: [
          "Access control inadherence",
          "Privacy regulation avoidance", 
          "Reporting components", 
          "Incompatibility with other systems"
        ],
        correct: 2
      },
      {
        question:"Which of the following four basic steps is considered part of the new defense concepts to combat cyber-attacks as defined by the U.S. Department of Defense?",
        answers: [
          "Deter and mitigate insider threats",
          "Utilize current cyber best practices to improve its cyber security", 
          "Employ a passive cyber defense capability to prevent intrusions", 
          "Implement industry-standard defense operating concepts and computing architectures"
        ],
        correct: 0
      },
      {
        question:"Strategic software attacks are highly repeatable and use general targeting such as against a broad industry or groups of individuals, and must have long-term staying power.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"Post-release support (PRSA1-5) is typically conducted by your internal organization.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"A centralized group comprised of __________ seasoned software security architect per main software product group and __________ for each software product within that group in your software engineering development organization will be sufficient to scale.",
        answers: [
          "one, one",
          "two, two", 
          "one, two", 
          "two, one"
        ],
        correct: 0
      },
      {
        question:"There is a single path to appropriate coverage; a virtual team cannot be coalesced and led by a far smaller central team.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"The __________ standard defines application security as a process that an organization can perform for applying controls and measurements to its applications in order to manage the risk of using them.",
        answers: [
          "ISO 13485",
          "ISO 9001", 
          "ISO 27034", 
          "ISO 31000"
        ],
        correct: 2
      },
      {
        question:"The price to fix vulnerabilities later in the cycle is low. The level of effort that is required to tune and maintain current product security tools can be less expensive than buying the tool.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"Cyber espionage is non-strategic and involves obtaining secrets with the consent of the holder of the information.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"What illustrates the flow of activities through the SDL?",
        answers: [
          "Architect → Design → Code → Test",
          "Architect → Test → Code → Design", 
          "Code → Design → Architect → Test", 
          "Design → Architect → Code → Test"
        ],
        correct: 0
      },
      {
        question:"What is one of most well-known sets of security design principles as defined by OWASP?",
        answers: [
          "Keep security complex",
          "Trust infrastructure", 
          "Fail securely", 
          "Trust services"
        ],
        correct: 2
      },
      {
        question:"What is the first step in the architecture task flow for when a project is new or a redesign?",
        answers: [
          "Design Review",
          "Architecture Assessment", 
          "Threat Model", 
          "Test Plan"
        ],
        correct: 1
      },
      {
        question:"Regardless of architectural change, architectural analysis and threat modeling should never be bypassed.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"What is one principle that should be used during the development of software as defined by software security expert Gary McGraw?",
        answers: [
          "Share mechanisms",
          "Make security invisible", 
          "Assume your secrets are safe", 
          "Grant least privilege"
        ],
        correct: 3
      },
      {
        question:"Because of the standard nature of non-web inputs, finding a single type of tool that is good for each input method is practical.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"What is an advantage of dynamic analysis?",
        answers: [
          "Permits validating static code analysis findings",
          "Requires the analysis of applications for which you have access to the actual code", 
          "Restricts the collection of temporal information", 
          "Can only be conducted on a custom application"
        ],
        correct: 0
      },
      {
        question:"Requirements and architecture as a front-end process to Agile cycles is also known as __________.",
        answers: [
          "Dashes",
          "Rushes", 
          "Pushes", 
          "Sprints"
        ],
        correct: 3
      },
      {
        question:"SDL __________ covers all projects that have meaningful security and privacy risks, and is analyzed in each phase and updated to cover new threats and practices.",
        answers: [
          "policy compliance",
          "best practice", 
          "standards adherence", 
          "process improvement"
        ],
        correct: 3
      },
      {
        question:"Automated tools can be adequate substitutes for source-code review by a human.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"You should use as few vulnerability scanners as possible across the stack; web application scanning alone will be sufficient.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"__________ is a white-box security analysis of a software system to simulate the actions of a hacker, with the objective of uncovering potential vulnerabilities resulting from coding errors, system configuration faults, or other operational deployment weaknesses.",
        answers: [
          "Vulnerability scanning",
          "Penetration testing", 
          "Fuzzing", 
          "Code analysis"
        ],
        correct: 1
      },
      {
        question:"What is the first in the four-phase process to achieve the minimum requirements for penetration testing?",
        answers: [
          "Identify",
          "Evaluate and Plan", 
          "Assess", 
          "Deploy"
        ],
        correct: 2
      },
      {
        question:"Open-source software is free and it increases innovation, efficiency, and competitiveness for software product development.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"What is the first in the four-step process for the final product security review?",
        answers: [
          "Identify feature eligibility",
          "Assess resource availability", 
          "Evaluate and plan for remediation", 
          "Release and ship"
        ],
        correct: 1
      },
      {
        question:`The metrics to be collected during the Ship (A5) phase of the SDL are limited to:
        Number, type, and severity of security issues found through vulnerability scanning and penetration testing.
        Number of security findings remediated.
        Number, types, and severity of findings outstanding.`,
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"What is described as an evangelist for the overall software product security program promulgated policy, enforcing policy, and evangelizing the overall SDL process?",
        answers: [
          "SSC",
          "SSD", 
          "SSE", 
          "SES"
        ],
        correct: 2
      },
      {
        question:"Which two International Standards Organization (ISO) standards relate to the proper functioning of a vendor PSIRT?",
        answers: [
          "9000 & 9001",
          "14000 & 14001", 
          "9001 & 14001", 
          "29147 & 30111"
        ],
        correct: 3
      },
      {
        question:"In relation to software security, a __________ is responsible for responding to software product security incidents involving external discoveries of post-release software product security vulnerabilities.",
        answers: [
          "PSIRT",
          "CIRT", 
          "CERT", 
          "GCIH"
        ],
        correct: 0
      },
      {
        question:"Third-party testing should include testing just your product, not the entire stack.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"Which security or privacy certification or standard applies to healthcare?",
        answers: [
          "HIPAA",
          "FISMA", 
          "FIPS", 
          "DIACAP"
        ],
        correct: 0
      },
      {
        question:"Once software has been through an SDL, you can re-use the software code any way you want.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"What requires a communication cadence with customers that should be formalized and published so that everyone in the company is aware of it and can invoke it if needed?",
        answers: [
          "Post-Release Certifications",
          "Third-Party Security Reviews", 
          "Security Strategy for Legacy Code, M&A, and EOL Plans", 
          "External Vulnerability Disclosure Response Process"
        ],
        correct: 3
      },
      {
        question:"Question 8 :What consists of multiple security assessments from independent parties?",
        answers: [
          "Third-Party Security Reviews",
          "External Vulnerability Disclosure Response Process", 
          "Post-Release Certifications", 
          "Security Strategy for Legacy Code, M&A, and EOL Plans"
        ],
        correct: 0
      },
      {
        question:"Which due diligence activity for supply chain security should occur in the initiation phase of the software acquisition life cycle?",
        answers: [
          "Facilitating knowledge transfer between suppliers",
          "Lessening the risk of disseminating information during disposal", 
          "Mitigating supply chain security risk by providing user guidance", 
          "Developing a request for proposal (RFP) that includes supply chain security risk management"
        ],
        correct: 3
      },
      {
        question:"Which due diligence activity for supply chain security investigates the means by which data sets are shared and assessed?",
        answers: [
          "An on-site assessment",
          "A process policy review", 
          "A third-party assessment	", 
          "A document exchange and review	"
        ],
        correct: 3
      },
      {
        question:"Consider these characteristics:<br>Identification of the entity making the access request <br>Verification that the request has not changed since its initiation Application of the appropriate authorization procedures Reexamination of previously authorized requests by the same entity Which security design analysis is being described?",
        answers: [
          "Open design",
          "Complete mediation	", 
          "Economy of mechanism	", 
          "Least common mechanism	"
        ],
        correct: 1
      },
      {
        question:"Which software security principle guards against the improper modification or destruction of information and ensures the nonrepudiation and authenticity of information?",
        answers: [
          "Quality",
          "Integrity", 
          "Availability", 
          "Confidentiality"
        ],
        correct: 1
      },
      {
        question:"What type of functional security requirement involves receiving, processing, storing, transmitting, and delivering in report form?",
        answers: [
          "Logging",
          "Error handling", 
          "Primary dataflow", 
          "Access control flow"
        ],
        correct: 2
      },
      {
        question:"Which nonfunctional security requirement  provides a way to capture information correctly and a way to store that information to help support later audits?",
        answers: [
          "Logging",
          "Error handling", 
          "Primary dataflow", 
          "Access control flow"
        ],
        correct: 0
      },
      {
        question:"Which security concept refers to the quality of information that could cause harm or damage if disclosed?",
        answers: [
          "Isolation",
          "Discretion", 
          "Seclusion", 
          "Sensitivity"
        ],
        correct: 3
      },
      {
        question:"Which technology would be an example of an injection flaw, according to the OWASP Top 10?",
        answers: [
          "SQL",
          "API", 
          "XML", 
          "XSS"
        ],
        correct: 0
      },
      {
        question:"A company is creating a new software to track customer balance and wants to design a secure application. Which best practice should be applied?",
        answers: [
          "Develop a secure authentication method that has a closed design	",
          "Allow mediation bypass or suspension for software testing and emergency planning", 
          "Ensure there is physical acceptability to ensure software is intuitive for the users to do their jobs", 
          "Create multiple layers of protection so that a subsequent layer provides protection if a layer is breached"
        ],
        correct: 3
      },
      {
        question:"A company is developing a secure software that has to be evaluated and tested by a large number of experts. Which security principle should be applied?",
        answers: [
          "Fail safe",
          "Open design", 
          "Defense in depth", 
          "Complete mediation"
        ],
        correct: 1
      },
      {
        question:"Which type of TCP scanning indicates that a system is moving to the second phase in a three-way TCP handshake?",
        answers: [
          "TCP SYN scanning",
          "TCP ACK scanning", 
          "TCP XMAS scanning", 
          "TCP Connect scanning"
        ],
        correct: 0
      },
      {
        question:"Which evaluation technique provides invalid, unexpected, or random data to the inputs of a computer software program?",
        answers: [
          "Fuzz testing",
          "Static analysis", 
          "Dynamic analysis", 
          "Regression testing"
        ],
        correct: 0
      },
      {
        question:"Which approach provides an opportunity to improve the software development life cycle by tailoring the process to the specific risks facing the organization?",
        answers: [
          "Agile methodology",
          "Waterfall methodology", 
          "Building security in maturity model (BSIMM)", 
          "Software assurance maturity model (SAMM)"
        ],
        correct: 3
      },
      {
        question:"Which phase contains sophisticated software development processes that ensure that feedback from one phase reaches to the previous phase to improve future results?",
        answers: [
          "Initial",
          "Managed", 
          "Optimizing", 
          "Repeatable"
        ],
        correct: 3
      },
      {
        question:"The purpose of a policy compliance analysis is to define what needs to be protected and how it will be protected, including reviewing and incorporating policies from outside the SDL that may impact the development process.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"Unless the senior leadership of the development organization and the management team support the SDL, it will likely fail. It must be driven by a policy that is signed off, promulgated, and provides support by the software development management team and, ideally, by the CEO.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"Which exercise requires a special set of skills, experience, and mindset, and requires the team to think like an adversary?",
        answers: [
          "Threat modeling",
          "Vulnerability modeling", 
          "Exploit modeling", 
          "Security modeling"
        ],
        correct: 0
      },
      {
        question:"The diagram produced in this stage of the threat modeling process is called a __________. Its focus is to show how data moves through the software solution and what happens to the data as it moves.",
        answers: [
          "TFT",
          "STRIDE", 
          "DFD", 
          "MITM"
        ],
        correct: 2
      },
      {
        question:"What is the increasing trend in the software industry to draw on the strengths of various types of software to deliver the highest value at the lowest cost?",
        answers: [
          "Open source",
          "Mixed source", 
          "Proprietary", 
          "Shareware"
        ],
        correct: 1
      },
      {
        question:"Which assessment requires an extensive review that will be conducted by your software security architect, a third party, or a combination of both?",
        answers: [
          "Quality assessment",
          "Policy assessment", 
          "Compliance assessment", 
          "Security assessment"
        ],
        correct: 3
      },
      {
        question:"The __________ phase determines how PII will be handled to ensure that it conforms to applicable legal, regulatory, and policy requirements regarding privacy.",
        answers: [
          "analysis",
          "selection", 
          "threat", 
          "compliance"
        ],
        correct: 0
      },
      {
        question:"Which artifact lists software requirements and business risks mapped to the three pillars of information security?",
        answers: [
          "Informal business requirement",
          "Formal business requirement", 
          "Informal security requirement", 
          "Formal compliance requirement"
        ],
        correct: 1
      },
      {
        question:"It is important in __________ meetings, when the software security team is included, to ensure that security is a key element of the SDLC and is built into the process.",
        answers: [
          "kick-off",
          "discovery", 
          "hot wash", 
          "planning"
        ],
        correct: 0
      },
      {
        question:"Bringing the security team into the development process early is the most expensive way to enable risk identification, planning, and mitigation.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"Which requirements describe what an application must do to serve a business need?",
        answers: [
          "Nonfunctional requirements",
          "Fictional requirements", 
          "Functional requirements", 
          "Nonfictional requirements"
        ],
        correct: 2
      },
      {
        question:"Question 4 :Which requirements address how well the requirements are met or constrain the requirements to specified operating ranges?",
        answers: [
          "Functional requirements",
          "Nonfunctional requirements", 
          "Fictional requirements", 
          "Nonfictional requirements"
        ],
        correct: 1
      },
      {
        question:"The __________ meeting is essentially an SDL kick-off meeting where the key SDLC stakeholders get on the same page at the beginning of the process so that security is built in rather than bolted on post-release.",
        answers: [
          "kickoff",
          "discovery", 
          "hot wash", 
          "planning"
        ],
        correct: 1
      },
      {
        question:"The SDL __________ should outline security milestones based on the information gained during the previous phase and integrate them into the overall SDLC schedule to allow proper preparation as changes occur.",
        answers: [
          "discovery meeting",
          "impact assessment", 
          "project plan", 
          "metrics"
        ],
        correct: 2
      },
      {
        question:"Before you can begin developing a Privacy Impact Assessment (PIA), you will need to evaluate what regulatory legislation or policies are applicable to the software you are developing.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"The setting of the __________ for any SDL phase will make it more effective and will help in performing post-mortem afterwards to understand what worked and what did not.",
        answers: [
          "key success factors",
          "project plan", 
          "discovery meeting", 
          "impact assessment"
        ],
        correct: 0
      },
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
      },
      {
        question:"The activities for compliance include ensuring collected information is only used for intended purposes, information is timely and accurate, and the public is aware of the information collected and how it is used. Which well-accepted secure development standard is addressed by these activities?",
        answers: [
          "PIA",
          "PA-DSS", 
          "PCI-DSS", 
          "PTS-DSS"
        ],
        correct: 0
      },
      {
        question:"An organization is in the process of building an application for its banking software. Which security coding practice must the organization follow?",
        answers: [
          "Run a data analysis",
          "Conduct data validation	", 
          "Validate the data source	", 
          "Align business goals	"
        ],
        correct: 1
      },
      {
        question:"What is included in a typical job description of a software security champion (SSC)?",
        answers: [
          "Identify software update source and sink",
          "Review code to identify skill-related bugs", 
          "Develop and manage the after-SDLC stage", 
          "Consider all possible paths of attack or exploits"
        ],
        correct: 3
      },
      {
        question:"Which role is a training champion of software security, an advocate for the overall SDL process, and a proponent for promulgating and enforcing the overall software product security program?",
        answers: [
          "Software security user (SSU)",
          "Software security architect (SSA)", 
          "Software security evangelist (SSE)", 
          "Software security stakeholder (SSS)"
        ],
        correct: 2
      },
      {
        question:"Which role requires the technical capability to be trained as a software security architect who then assists the centralized software security group with architecture security analysis and threat modeling?",
        answers: [
          "Software champion",
          "Software evangelist", 
          "Junior software developer", 
          "Senior software programmer"
        ],
        correct: 0
      },
      {
        question:"An application development team is designing and building an application that interfaces with a back-end database. Which activity should be included when constructing a threat model for the application?",
        answers: [
          "Designate one or more primary keys for each database table in the database	",
          "Decompose the application to understand how it interacts with external entities	", 
          "Review the relationships among the attributes to be included in the database tables	", 
          "Create a set of performance metrics to assess the functionality of the developed application	"
        ],
        correct: 1
      },
      {
        question:"What is the third step for constructing a threat model for identifying a spoofing threat?",
        answers: [
          "Decompose threats",
          "Identify threats", 
          "Identify vulnerabilities", 
          "Survey the application"
        ],
        correct: 0
      },
      {
        question:"What is a step for constructing a threat model for a project when using practical risk analysis?",
        answers: [
          "Align your business goals",
          "Apply engineering methods", 
          "Estimate probability of project time", 
          "Make a list of what you are trying to protect"
        ],
        correct: 3
      },
      {
        question:"Which cyber threats are typically surgical by nature, have highly specific targeting, and are technologically sophisticated?",
        answers: [
          "Tactical attacks",
          "Criminal attacks	", 
          "Strategic attacks	", 
          "User-specific attacks	"
        ],
        correct: 0
      },
      {
        question:"Which type of cyberattacks are often intended to elevate awareness of a topic?",
        answers: [
          "Cyberwarfare",
          "Tactical attacks", 
          "User-specific attacks", 
          "Sociopolitical attacks"
        ],
        correct: 3
      },
      {
        question:"What type of attack locks a user’s desktop and then requires a payment to unlock it?",
        answers: [
          "Phishing",
          "Keylogger", 
          "Ransomware", 
          "Denial-of-service"
        ],
        correct: 2
      },
      {
        question:"What is a countermeasure against various forms of XML and XML path injection attacks?",
        answers: [
          "XML name wrapping	",
          "XML unicode encoding	", 
          "XML attribute escaping	", 
          "XML distinguished name escaping"
        ],
        correct: 2
      },
      {
        question:"Which countermeasure is used to mitigate SQL injection attacks?",
        answers: [
          "SQL Firewall	",
          "Projected bijection	", 
          "Query parameterization	", 
          "Progressive ColdFusion	"
        ],
        correct: 2
      },
      {
        question:"What is an appropriate countermeasure to an escalation of privilege attack?",
        answers: [
          "Enforcing strong password policies",
          "Using standard encryption algorithms and correct key sizes", 
          "Enabling the auditing and logging of all administration activities", 
          "Restricting access to specific operations through role-based access controls"
        ],
        correct: 3
      },
      {
        question:"Which configuration management security countermeasure implements least privilege access control?",
        answers: [
          "Following strong password policies to restrict access",
          "Restricting file access to users based on authorization	", 
          "Avoiding clear text format for credentials and sensitive data	", 
          "Using AES 256 encryption for communications of a sensitive nature	"
        ],
        correct: 1
      },
      {
        question:"Which phase of the software development life cycle (SDL/SDLC) would be used to determine the minimum set of privileges required to perform the targeted task and restrict the user to a domain with those privileges?",
        answers: [
          "Design",
          "Deploy", 
          "Development", 
          "Implementation"
        ],
        correct: 0
      },
      {
        question:"Which least privilege method is more granular in scope and grants specific processes only the privileges necessary to perform certain required functions, instead of granting them unrestricted access to the system?",
        answers: [
          "Entitlement privilege",
          "Separation of privilege", 
          "Aggregation of privileges", 
          "Segregation of responsibilities"
        ],
        correct: 1
      },
      {
        question:"Why does privilege creep pose a potential security risk?",
        answers: [
          "User privileges do not match their job role.",
          "With more privileges, there are more responsibilities.", 
          "Auditing will show a mismatch between individual responsibilities and their access rights.", 
          "Users have more privileges than they need and may perform actions outside their job description."
        ],
        correct: 3
      },
      {
        question:"A system developer is implementing a new sales system. The system developer is concerned that unauthorized individuals may be able to view sensitive customer financial data. Which family of nonfunctional requirements should be considered as part of the acceptance criteria?",
        answers: [
          "Integrity",
          "Availability", 
          "Nonrepudition", 
          "Confidentiality"
        ],
        correct: 3
      },
      {
        question:"A project manager is given the task to come up with nonfunctional acceptance criteria requirements for business owners as part of a project delivery. Which nonfunctional requirement should be applied to the acceptance criteria?",
        answers: [
          "Give search options to users	",
          "Evaluate test execution results", 
          "Divide users into groups and give them separate rights", 
          "Develop software that keeps downward compatibility intact"
        ],
        correct: 1
      },
      {
        question:"A user was given a task to identify a nonfunctional acceptance criteria. Which nonfunctional requirement should be applied to the acceptance criteria?",
        answers: [
          "Encryption used during data transfer	",
          "Review of the most recent test results	", 
          "Software developed keeping downward compatibility intact", 
          "Users divided into groups and the groups given separate rights"
        ],
        correct: 1
      },
      {
        question:"Which technique can be used by an attacker to compromise password security when a password such as '123456' is used by an organization?",
        answers: [
          "Denial-of-service attack",
          "Brute-force attack", 
          "Blind SQL injection", 
          "Blind XPath injection"
        ],
        correct: 1
      },
      {
        question:"Which type of password attack tests for every possible value of a parameter?",
        answers: [
          "Phishing",
          "Brute force", 
          "DNS poisoning", 
          "Cache poisoning"
        ],
        correct: 1
      },
      {
        question:"Which type of attack allows the complete disclosure or destruction of all data on a system and allows attackers to spoof identity, tamper with existing data, and cause repudiation issues such as voiding transactions or changing balances?",
        answers: [
          "SQL injection",
          "Code injection", 
          "Command injection", 
          "Special element injection"
        ],
        correct: 0
      },
      {
        question:"Which threat uses malware that tricks users into believing that there is no way out for them except to pay to get rid of a nuisance?",
        answers: [
          "Script kiddies",
          "Insider threats", 
          "Ransomware", 
          "Bitcoin malware"
        ],
        correct: 2
      },
      {
        question:"Which type of application attack is used to harvest and steal sensitive information?",
        answers: [
          "Whaling",
          "Remote access tool", 
          "Malicious file execution", 
          "Advanced persistent threat"
        ],
        correct: 1
      },
      {
        question:"Which type of application attack is commonly waged through the use of rootkits?",
        answers: [
          "Backdoor",
          "Time of check", 
          "Rainbow table", 
          "Escalation of privilege"
        ],
        correct: 3
      },
      {
        question:"Which attack aims to make web service unavailable or unusable?",
        answers: [
          "Spoofing",
          "Tampering", 
          "Repudiation", 
          "Denial-of-service"
        ],
        correct: 3
      },
      {
        question:"A company is developing a new software application that requires users to log in using a username and password. The company needs to implement a security control that is effective at preventing spoofing during the log-in process. Which security control is effective at preventing this threat action?",
        answers: [
          "Integrity",
          "Authorization", 
          "Authentication", 
          "Confidentiality"
        ],
        correct: 2
      },
      {
        question:"A company is developing a new database application. The company needs to implement a security control that is effective at preventing tampering. Which security control is effective at preventing this threat action?",
        answers: [
          "Integrity",
          "Authorization", 
          "Authentication", 
          "Confidentiality"
        ],
        correct: 0
      },
      {
        question:"A bank is developing a new checking account application for customers and needs to implement a security control that is effective at preventing an elevation of privilege attack. Which security control is effective at preventing this threat action?",
        answers: [
          "Integrity",
          "Authorization", 
          "Authentication", 
          "Confidentiality"
        ],
        correct: 1
      },
      {
        question:"A database has a table called “orders_table” which has columns: order_no, last_name, first_name, ship_city, credit_card. A hacker wants to perform the following SQL injection code to attack this table. SELECT * FROM orders_table WHERE order_no= ' ' OR '1'='1';   Which software testing technique is the most effective approach to identify this attack?",
        answers: [
          "Fuzz testing",
          "Input validation", 
          "Dynamic code analysis", 
          "Vulnerablilty scanning probe"
        ],
        correct: 1
      },
      {
        question:"Which software security testing technique can be categorized as white box?",
        answers: [
          "Byte code analysis",
          "Binary code analysis", 
          "Source code analysis", 
          "Dynamic code analysis"
        ],
        correct: 2
      },
      {
        question:"Which software testing approach can be used against an attacker who manipulates input strings in banking software to gain access to another individual's overdrawn account in order to withdraw funds?",
        answers: [
          "Fuzz testing",
          "Dynamic testing", 
          "Misuse case testing", 
          "Application interface testing"
        ],
        correct: 2
      },
      {
        question:"Which security testing technique allows the evaluators to circumvent the security features of a system?",
        answers: [
          "Fuzz testing",
          "Penetration testing", 
          "Black box debugging", 
          "Vulnerability scanning"
        ],
        correct: 1
      },
      {
        question:"Which software control test executes an application and then uses data that is designed to evaluate whether the values returned by the application match a specified range of criteria?",
        answers: [
          "Static test",
          "White box test", 
          "Manual code review", 
          "Reasonableness check"
        ],
        correct: 3
      },
      {
        question:"Which item is a phase of the change management process?",
        answers: [
          "Budget planning",
          "Communication planning", 
          "Assessment management", 
          "Project time management"
        ],
        correct: 1
      },
      {
        question:"Which part of the change management process addresses the needs to identify, understand, and help leaders manage opposition throughout the organization?",
        answers: [
          "Training development",
          "Resistance management", 
          "Communication planning", 
          "Employee corrective action"
        ],
        correct: 1
      },
      {
        question:"Which component of the change management process allows developers to prioritize tasks?",
        answers: [
          "Change control",
          "Release control", 
          "Request control", 
          "Configuration control"
        ],
        correct: 2
      },
      {
        question:"Which component of the change management process involves new system deployment testing where the new system and the old system are operating at the same time?",
        answers: [
          "Parallel run",
          "Direct cutover", 
          "Phased approach", 
          "Backout procedure"
        ],
        correct: 0
      },
      {
        question:"Which technique documents incident response times agreed upon by both a provider and a customer?",
        answers: [
          "Capacity plan",
          "Service-level agreement", 
          "Change management plan", 
          "Configuration management system"
        ],
        correct: 1
      },
      {
        question:"Which element is commonly addressed in a service-level agreement (SLA)?",
        answers: [
          "Virus protection",
          "Service availability", 
          "Patch management", 
          "Equipment and media disposal"
        ],
        correct: 1
      },
      {
        question:"The ASF threat list describes a risk that may occur when a software developer forgets to set an expiration for a cookie. Which countermeasure addresses this vulnerability?",
        answers: [
          "User and session management",
          "Authentication and authorization", 
          "Data protection in storage and transit", 
          "Error handling and exception management"
        ],
        correct: 0
      },
      {
        question:"An undocumented command sequence is allowing unauthorized access to a software system. What type of software defect allows this vulnerability?",
        answers: [
          "Backdoor",
          "Rootkit attack", 
          "Buffer overflow", 
          "Cross-site scripting"
        ],
        correct: 0
      },
      {
        question:"A small organization experiences an XSS attack on their web application. What type of vulnerability has occurred?",
        answers: [
          "SQL injection",
          "SQL intrusion", 
          "Cross-site scripting", 
          "Cross-site request forgery"
        ],
        correct: 2
      },
      {
        question:"What type of software threat occurs when password resets reveal password hints and valid usernames, according to the Application Security Frame (ASF)?",
        answers: [
          "Authorization",
          "Authentication", 
          "User and session management", 
          "Data protection in storage and transit"
        ],
        correct: 1
      },
      {
        question:"What type of software threat occurs when output encoding is skipped, according to the Application Security Frame (ASF)?",
        answers: [
          "Authorization",
          "Authentication", 
          "User and session management", 
          "Data and parameter validation"
        ],
        correct: 3
      },
      {
        question:"Which form of malicious software hides in the lower levels of an operating system with privileged access permissions and opens a backdoor on the system?",
        answers: [
          "Trojan",
          "Rootkit", 
          "Keylogger", 
          "Ransomware"
        ],
        correct: 1
      },
      {
        question:"A security administrator wants to prevent web-based code that has full access to a Windows operating system when executing on user systems. Which technique should remediate this vulnerability?",
        answers: [
          "Prohibiting downloads of Java applets",
          "Prohibiting downloads of ActiveX content", 
          "Clearing the Domain Name System (DNS) cache", 
          "Clearing the Address Resolution Protocol (ARP) cache"
        ],
        correct: 1
      },
      {
        question:"A system administrator wants to use physical controls to prevent unauthorized access to information that belongs to users at a different security level. Which strategy would prevent this problem?",
        answers: [
          "Layering",
          "Abstraction", 
          "Process isolation", 
          "Hardware segmentation"
        ],
        correct: 3
      },
      {
        question:"A video company has installed new software. The developers need to establish a defense against zero-day attacks. What is the best way to manage this vulnerability?",
        answers: [
          "Apply threat modeling",
          "Use a strong password", 
          "Install the latest patches", 
          "Create another user log-in"
        ],
        correct: 2
      },
      {
        question:"Which type of attack would a hacker use to exploit a vulnerability that allows access to be increased to the administrator level?",
        answers: [
          "Rootkit",
          "Whaling", 
          "Waterhole", 
          "Dictionary"
        ],
        correct: 0
      },
      {
        question:"Which type of attack involves exploiting a social engineering vulnerability over voice communications?",
        answers: [
          "Rootkit",
          "Vishing", 
          "Waterhole", 
          "Dictionary"
        ],
        correct: 1
      },
      {
        question:"Which method provides line-of-code-level detection that enables development teams to remediate vulnerabilities quickly?",
        answers: [
          "Dynamic Cone Pen Testing (DCPT)",
          "Static Application Security Testing (SAST)", 
          "Common Weaknesses Enumeration (CWE)", 
          "Common Vulnerabilities and Exposures (CVE)"
        ],
        correct: 1
      },
      {
        question:"Which technique should be used to detect a software vulnerability that causes extra characters to appear in data fields of a front-facing web application?",
        answers: [
          "Static analysis",
          "Dynamic analysis", 
          "Binary code analysis", 
          "Property-based testing"
        ],
        correct: 0
      },
      {
        question:"What is a known SDL metric used to measure protection against vulnerabilities?",
        answers: [
          "The number of files or objects",
          "A findings summary report", 
          "The number of security defects found through static analysis tools", 
          "The progress against privacy requirements provided in earlier phases"
        ],
        correct: 2
      }
    ]
  }
}
