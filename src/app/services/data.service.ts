import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
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
        question:"A companion document to the CC. It focuses on the actions evaluators must take to determine that CC requirements for a TOE are present.",
        answers: [
          "Common Evaluation Methodology (CEM)"
        ],
        correct: 0
      },
      {
        question:"The growing demand for InfoSec specialists is occurring predominantly in which of the following types of organizations?",
        answers: [
          "Government",
          "Corporations", 
          "Not-for-profit foundations", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"What is meant by the phrase 'the umbrella of information security'?",
        answers: [
          "When it rains, it pours.",
          "IS incorporates many different pursuits and disciplines.", 
          "Just as it is bad luck to open an umbrella indoors, it is bad luck not to have an information security policy.", 
          "IS policies, like umbrellas, should never be loaned to others because they are easily lost or misused."
        ],
        correct: 1
      },
      {
        question:"Which of the following roles helps development teams meet security requirements?",
        answers: [
          "Policymakers",
          "Compliance officers", 
          "Security consultants", 
          "Security architects"
        ],
        correct: 2
      },
      {
        question:"Who is responsible for ensuring that systems are auditable and protected from excessive privileges?",
        answers: [
          "Compliance officers",
          "Access coordinators", 
          "Security administrators", 
          "Policymakers"
        ],
        correct: 2
      },
      {
        question:"Which of the following roles is responsible for ensuring that third-party suppliers and outsourced functions remain in security compliance?",
        answers: [
          "Compliance officers",
          "Vendor managers", 
          "Security architects", 
          "Access coordinators"
        ],
        correct: 1
      },
      {
        question:"Defense in depth is needed to ensure that which three mandatory activities are present in a security system?",
        answers: [
          "Prevention, response, and prosecution",
          "Response, collection of evidence, and prosecution", 
          "Prevention, detection, and response", 
          "Prevention, response, and management"
        ],
        correct: 2
      },
      {
        question:"Question :Which of the following best represents the two types of IT security requirements?",
        answers: [
          "Functional and logical",
          "Logical and physical", 
          "Functional and assurance", 
          "Functional and physical"
        ],
        correct: 2
      },
      {
        question:"Which of the following statements is true?",
        answers: [
          "Security assurance requirements describe how to test the system.",
          "Security assurance requirements describe how to program the system.", 
          "Security assurance requirements describe to what degree the testing of the system is conducted.", 
          "Security assurance requirements describe implementation considerations."
        ],
        correct: 2
      },
      {
        question:"Which of the following terms best describes the probability that a threat to an information system will materialize?",
        answers: [
          "Threat",
          "Vulnerability", 
          "Hole", 
          "Risk"
        ],
        correct: 3
      },
      {
        question:"Which of the following terms best describes the absence or weakness in a system that may possibly be exploited?",
        answers: [
          "Vulnerability",
          "Threat", 
          "Risk", 
          "Exposure"
        ],
        correct: 0
      },
      {
        question:"Which of the following terms best describes a cookbook on how to take advantage of a vulnerability?",
        answers: [
          "Risk",
          "Exploit", 
          "Threat", 
          "Program"
        ],
        correct: 0
      },
      {
        question:"Security functional requirements describe which of the following?",
        answers: [
          "What a security system should do by design",
          "What controls a security system must implement", 
          "Quality assurance description and testing approach", 
          "How to implement the system"
        ],
        correct: 0
      },
      {
        question:"Question :Which of the following represents the three types of security controls?",
        answers: [
          "People, functions, and technology",
          "People, process, and technology", 
          "Technology, roles, and separation of duties", 
          "Separation of duties, processes, and people"
        ],
        correct: 1
      },
      {
        question:"Which of the following statements is true?",
        answers: [
          "Process controls for IT security include assignment of roles for least privilege.",
          "Process controls for IT security include separation of duties.", 
          "Process controls for IT security include documented procedures.", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"ISC2 was formed for which of the following purposes?",
        answers: [
          "Maintaining a Common Body of Knowledge for information security",
          "Certifying industry professionals and practitioners in an international IS standard", 
          "Ensuring that credentials are maintained, primarily through continuing education", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"Which of the following statements best describes the information security Common Body of Knowledge?",
        answers: [
          "The information security Common Body of Knowledge is a compilation and distillation of all security information collected internationally of relevance to information security professionals.",
          "The information security Common Body of Knowledge is a volume of books published by the ISC2.", 
          "The information security Common Body of Knowledge is a reference list of books and other publications put together by practitioners in information security.", 
          "The information security Common Body of Knowledge is an encyclopedia of information security principles, best practices, and regulations."
        ],
        correct: 0
      },
      {
        question:"How many domains are contained within the CBK?",
        answers: [
          "5 domains",
          "8 domains", 
          "7 domains", 
          "3 domains"
        ],
        correct: 0
      },
      {
        question:"The Information Security Governance and Risk Management domain includes which of the following?",
        answers: [
          "Identification of security products",
          "Documented policies, standards, procedures, and guidelines", 
          "Management of risk to corporate assets", 
          "b and c"
        ],
        correct: 3
      },
      {
        question:"The Security Architecture and Design domain includes which of the following?",
        answers: [
          "Concepts and principles for secure operations",
          "Concepts and principles for secure programs", 
          "Concepts and principles for secure designs of computing resources", 
          "Concepts and principles for secure application development"
        ],
        correct: 2
      },
      {
        question:"The Operations Security domain includes which of the following?",
        answers: [
          "Mechanisms for secure access to a data center",
          "Identification of controls over hardware, media, and personnel", 
          "Help-desk support for security incidents", 
          "Consulting on IT projects"
        ],
        correct: 1
      },
      {
        question:"The Business Continuity and Disaster Recovery Planning domain includes which of the following?",
        answers: [
          "Plans for recovering business operations in the event of loss of access by personnel",
          "Management practices to determine software security risks", 
          "Documented plans for interacting with law enforcement", 
          "Maintenance of current versions of all software in use by the organization"
        ],
        correct: 0
      },
      {
        question:"The Law, Regulations, Investigations, and Compliance domain includes which of the following?",
        answers: [
          "Teams of lawyers to determine the legality of security decisions",
          "Private law enforcement personnel", 
          "Methods to investigate computer crime incidents", 
          "A council to determine the ethical behavior of security personnel"
        ],
        correct: 2
      },
      {
        question:"The Access Control domain includes which of the following?",
        answers: [
          "A collection of mechanisms to create secure architectures for asset protection",
          "Instructions on how to install perimeter door security", 
          "A methodology for applications development", 
          "A methodology for secure data center operations"
        ],
        correct: 0
      },
      {
        question:"The Cryptography domain includes which of the following?",
        answers: [
          "Principles, means, and methods to disguise information to ensure confidentiality, integrity, and authenticity",
          "Tools and techniques to intercept competitive secrets", 
          "Procedures on how to protect Internet communications", 
          "Procedures on how to discover cryptographic keys"
        ],
        correct: 0
      },
      {
        question:"The Telecommunications and Network Security domain includes which of the following?",
        answers: [
          "Technology, principles, and best practices to secure telephone networks",
          "Technology, principles, and best practices to secure corporate networks", 
          "Technology, principles, and best practices to secure Internet-attached networks", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"People more interested in certifying themselves as security experts in a business context should consider preparing for which of the following certifications?",
        answers: [
          "GIAC",
          "CISA", 
          "ISSAP", 
          "SSCP"
        ],
        correct: 1
      },
      {
        question:"People more interested in certifying themselves as security technical practitioners should consider preparing for which of the following certifications?",
        answers: [
          "CISM and GIAC",
          "GIAC and CEH", 
          "CISSP and CISM", 
          "SSCP and CISA"
        ],
        correct: 1
      },
      {
        question:"The growth in the security profession is driven by which of the following?",
        answers: [
          "New technology",
          "Growth of the Internet", 
          "Demands by industry and government for scarce resources", 
          "Overseas hackers"
        ],
        correct: 3
      },
      {
        question:"The formal study of information security has accelerated primarily for what reason?",
        answers: [
          "Common breaches of computer systems",
          "The formation of the U.S. Department of Homeland Security", 
          "Object-oriented programming", 
          "Increasingly interconnected global networks"
        ],
        correct: 3
      },
      {
        question:"A program for information security should include which of the following elements?",
        answers: [
          "Security policies and procedures",
          "Intentional attacks only", 
          "Unintentional attacks only", 
          "None of these"
        ],
        correct: 0
      },
      {
        question:"Which of the following would make an individual seeking a career in information security more marketable?",
        answers: [
          "CISSP certification",
          "GIAC certification", 
          "Evaluating virus-protection software on a home computer", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"Which of the following topics are part of an information security practice?",
        answers: [
          "Laws and ethical practices",
          "Access controls", 
          "Security architecture", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"Which college curriculum is more appropriate for a career in information security?",
        answers: [
          "Business administration",
          "Computer information sciences", 
          "All of these"
        ],
        correct: 0
      },
      {
        question:"Question :Information security is primarily a discipline to manage the behavior of _____.",
        answers: [
          "Technology",
          "People", 
          "Processes", 
          "Organizations"
        ],
        correct: 1
      },
      {
        question:"Careers in information security are booming because of which of the following factors?",
        answers: [
          "Threats of cyberterrorism",
          "Government regulations", 
          "Growth of the Internet", 
          "All of these"
        ],
        correct: 3
      },
      {
        question:"Which of the following best represents the three objectives of information security?",
        answers: [
          "Confidentiality, integrity, and availability",
          "Resilience, privacy, and safety", 
          "Confidentiality, secrecy, and privacy", 
          "Safety, access control, and secrecy"
        ],
        correct: 0
      },
      {
        question:"Which of the following statements is true of a career in information security?",
        answers: [
          "A career in information security is a highly complex but narrow discipline.",
          "A career in information security will eventually disappear with improvements in IS tools.", 
          "A career in information security is limited by the programming languages the candidate knows.", 
          "A career in information security has a better job growth outlook than other areas within IT."
        ],
        correct: 3
      },
      {
        question:"The organization applies comprehensive hardening to all its computer assets. Due to the high cost of accomplishing this, the security manager decides to withhold any further spending on IT security for the remainder of the year. The manager believes that because of the complexity and secrecy of the organization’s security configuration, these computer assets are relatively safe. What falacy has he just implemented?",
        answers: ["Network segmentation","Security through obscurity", "Least privilege", "Security hardening"],
        correct: 1
      },
      {
        question:"The company receives notification from its security monitoring service that an unauthorized physical breach of its datacenter occurred. The perpetrator was able to guess the correct code to the keypad device that controls access. What could have prevented this?",
        answers: [
          "Single sign-on authentication",
          "Multifactor authentication", 
          "Discretionary access control", 
          "Mandatory access control"
        ],
        correct: 1
      },
      {
        question:"The company identifies a risk with an asset that has relatively low value. The cost to secure the asset is $2 million. An insurance company will insure the loss of the asset for $150,000 a year. The company decides not to take any action to protect the asset.",
        answers: [
          "Mitigation",
          "Acceptance", 
          "Deterrence", 
          "Assignment"
        ],
        correct: 1
      },
      {
        question:"Which type of system controls preserves the state of the system before a crash and prevents further damage or unauthorized access to a system?",
        answers: [
          "Fail-secure",
          "Fail-open", 
          "Fail-freeze", 
          "Fail-close"
        ],
        correct: 0
      },
      {
        question:"A software development company follows a process where software is moved from the development environment, to the testing environment for quality assurance, and then on to production. Which individual should be restricted from migrating the software to the production environment?",
        answers: [
          "System administrator",
          "Security architect", 
          "Project manager", 
          "Lead programmer"
        ],
        correct: 3
      },
      {
        question:"After an audit of user access, a CIO is concerned about improperly granted permissions. Which type of user access should the CIO be most concerned with?",
        answers: [
          "Elevated",
          "Standard", 
          "Guest", 
          "Read-only"
        ],
        correct: 0
      },
      {
        question:"Which attack uses common words and phrases to guess passwords?",
        answers: [
          "Dictionary",
          "Trojan horse", 
          "Rainbow table", 
          "Injection"
        ],
        correct: 0
      },
      {
        question:"What is a disadvantage of discretionary access control (DAC)?",
        answers: [
          "Empowers owners to decide access levels",
          "Determines access by need to know", 
          "Controls access through a single sign-on", 
          "Allows security administrators to decide access levels"
        ],
        correct: 0
      },
      {
        question:"Which password problem persists when accessing information and systems even with a strong password management and creation policy?",
        answers: [
          "Passwords are very insecure.",
          "Passwords are repudiable.", 
          "Passwords are easy to crack.", 
          "Passwords are hard to share."
        ],
        correct: 1
      },
      {
        question:"Which regulation requires corporate executives to review and modernize their company’s financial reporting systems?",
        answers: [
          "Fair Credit Reporting Act (FCRA)",
          "General Data Protection Regulation (GDPR)", 
          "Sarbanes–Oxley Act (SOX)", 
          "Gramm–Leach–Bliley Act (GBLA)"
        ],
        correct: 2
      },
      {
        question:"Which law protects the confidentiality of patient records?",
        answers: [
          "Family Medical Leave Act (FMLA)",
          "Health Insurance Portability and Accountability Act (HIPAA)", 
          "General Data Protection Regulation (GDPR)", 
          "Patient Privacy and Protection Act (PPPA)"
        ],
        correct: 1
      },
      {
        question:"A company has had problems with attackers hacking user accounts using a variety of password-guessing techniques. Which type of policy change should the company institute to reduce the effectiveness of this type of hacking?",
        answers: [
          "Account provisioning",
          "Acceptable use", 
          "Separation of duties", 
          "Account lock-out"
        ],
        correct: 3
      },
      {
        question:"An organization wants to update its policies that govern email acceptable use, internet acceptable use, laptop security, and wireless security. Which type of policies should the organization update to accomplish this?",
        answers: [
          "Programme–level",
          "Programme–framework", 
          "Issue-specific ", 
          "System-specific"
        ],
        correct: 2
      },
      {
        question:"Which type of documents do organizations use to explain step-by-step instructions?",
        answers: [
          "Procedures",
          "Guidelines", 
          "Baselines", 
          "Standards"
        ],
        correct: 0
      },
      {
        question:"Which two passwords are the weakest?",
        answers: [
          "Pa$$w0Rd%^78",
          "Love@$MySon80", 
          "C@1Il@VEm1", 
          "Password1234",
          "a and c",
          "b and d"
        ],
        correct: 5
      },
      {
        question:"Which two secure methods should be used to keep track of passwords?",
        answers: [
          "Encrypt text files of them on the user’s workstation",
          "Store them on a sticky note in a convenient spot", 
          "Share them with a trusted manager or coworker", 
          "Organization-approved password storage software",
          "a and c",
          "b and d",
          "a and d"
        ],
        correct: 6
      },
      {
        question:"Which groups typically report to the chief security officer (CSO)? ",
        answers: [
          "Security engineering and operations",
          "Physical and software security", 
          "Audit and incident response", 
          "Facilities and information technology functions"
        ],
        correct: 0
      },
      {
        question:"A company is considering which controls to buy to protect an asset. What should the price of the controls be in relation to the cost of the asset?",
        answers: [
          "Less than the annual loss expectancy",
          "More than the annual loss expectancy", 
          "Equal to the cost of the asset", 
          "More than the cost of the asset"
        ],
        correct: 0
      },
      {
        question:"How many keys are used in asymmetric encryption?",
        answers: [
          "No keys are used to encrypt and decrypt a message.",
          "One key is used to encrypt and decrypt a message.", 
          "Two keys are used to encrypt and decrypt a message.", 
          "Three keys are used to encrypt and decrypt a message."
        ],
        correct: 2
      },
      {
        question:"Which protocol is a variant of a standard web transfer protocol that adds a layer of security on the data in transit using a secure socket layer?",
        answers: [
          "HTTPS",
          "HTTP", 
          "FTP", 
          "SFTP"
        ],
        correct: 0
      },
      {
        question:"Which description characterizes symmetric cryptography?",
        answers: [
          "The same key is used to lock and unlock the cipher.",
          "Two separate but unrelated keys are used to unlock the cipher.", 
          "Two separate and related keys are used to unlock the cipher.", 
          "Keys are unnecessary when using symmetric cryptography to unlock a cipher."
        ],
        correct: 0
      },
      {
        question:"An employee uses a secure hashing algorithm for message integrity. The employee sends a plain text message with the embedded hash to a colleague. A rogue device receives and retransmits the message to its destination. Once received and checked by the intended recipient, the hashes do not match. Which STRIDE concept has been violated?",
        answers: [
          "Tampering",
          "Repudiation", 
          "Elevation of privilege", 
          "Denial-of-service"
        ],
        correct: 0
      },
      {
        question:"An attacker accesses private emails between the company’s CISO and board members. The attacker then publishes the emails online. Which type of an attack is this, according to the STRIDE model?",
        answers: [
          "Repudiation",
          "Information disclosure", 
          "Elevation of privilege", 
          "Tampering"
        ],
        correct: 1
      },
      {
        question:"A security guard at the front desk of a building checks every employee’s name badge with their photo before they are allowed in the building. Which two factors have been checked to verify identity?",
        answers: [
          "Something you have, something you are",
          "Something you have, something you know", 
          "Something you know, where you are at", 
          "Where you are at, something you are"
        ],
        correct: 0
      },
      {
        question:"A system data owner needs to give access to a new employee, so the owner formally requests that the system administrator create an account and permit the new employee to use systems necessary to the job. Which type of control does the system administrator use to grant these permissions?",
        answers: [
          "Physical ",
          "Protocol", 
          "Access", 
          "Firewall"
        ],
        correct: 2
      },
      {
        question:"The chief information security officer (CISO) for an organization knows that the organization’s datacenter lacks the physical controls needed to adequately control access to sensitive corporate systems. The CEO, CIO, and CFO feel that the current physical access is within a tolerable risk level, and they agree not to pay for upgrades to the facility. Which risk management strategy has the senior leadership decided to employ?",
        answers: [
          "Deterrence",
          "Assignment", 
          "Acceptance", 
          "Avoidance"
        ],
        correct: 2
      },
      {
        question:"Which phase of the software development life cycle follows system design?",
        answers: [
          "System requirements",
          "Testing", 
          "Deployment", 
          "Development"
        ],
        correct: 3
      },
      {
        question:"Which question relates to the functional aspect of computer security?",
        answers: [
          "Does the system do the right things in the right way?",
          "Does the security staff do the right job in the right way?", 
          "Does the system do the right things in the wrong way?", 
          "Does the security staff do the right job in the wrong way?"
        ],
        correct: 0
      },
      {
        question:"Which leg of the CIA triad is addressed when a business contracts with a cloud vendor to backup its information?",
        answers: [
          "Information",
          "Availability", 
          "Integrity", 
          "Confidentiality "
        ],
        correct: 1
      },
      {
        question:"Which action is an example of a loss of information integrity based on the CIA triad?",
        answers: [
          "A system administrator uses another administrator’s password without request.",
          "A security engineer accidentally scrambles information in a database.", 
          "A help desk employee verifies customers’ identities before changing passwords.", 
          "A help desk employee refuses to share an employee’s information with a partner."
        ],
        correct: 1
      },
      {
        question:"What is included in quantitative risk analysis?",
        answers: [
          "Risk ranking",
          "Risk mitigation", 
          "Risk transfer", 
          "Risk insurance"
        ],
        correct: 0
      },
      {
        question:"What is a fundamentally objective concept in determining risk?",
        answers: [
          "Risk acceptance",
          "Risk recovery", 
          "Resource availability", 
          "Resource costs"
        ],
        correct: 3
      },
      {
        question:"Which domain of the (ISC)² Common Body of Knowledge addresses procedures and tools that eliminate or reduce the capability to exploit critical information?",
        answers: [
          "Physical (Enviromental) Security",
          "Access Control", 
          "Operations Security", 
          "Cryptography"
        ],
        correct: 2
      },
      {
        question:"Which domain of the (ISC)² Common Body of Knowledge addresses identification, authentication, authorization, and logging and monitoring techniques and technologies?",
        answers: [
          "Access Control",
          "Operations Security", 
          "Cryptography", 
          "Software Development Security"
        ],
        correct: 0
      },
      {
        question:"Which type of policy establishes a security plan, assigns management responsibilities, and states an organization’s computer security objectives?",
        answers: [
          "Framework-level",
          "Program-level ", 
          "System-specific", 
          "Issue-specific "
        ],
        correct: 1
      },
      {
        question:"A company consults a best practices manual from its vendor while deploying a new IT system. Which type of document does this exemplify?",
        answers: [
          "Procedures",
          "Guidelines", 
          "Policies", 
          "Standards"
        ],
        correct: 1
      },
      {
        question:"Which type of technology are DropBox, Skype, and Office 365 examples of?",
        answers: [
          "Local area network",
          "Wireless", 
          "Wide area network", 
          "Cloud computing"
        ],
        correct: 3
      },
      {
        question:"An organization has all of its offices in several different buildings that are situated on a large city block. Which type of network is specifically suited to connect these offices to the organization’s network?",
        answers: [
          "Wireless",
          "Campus", 
          "Metropolitan", 
          "Wide"
        ],
        correct: 1
      },
      {
        question:"A new bookkeeper receives an email claiming to come from an online banking site. The bookkeeper clicks on an embedded link and enters some of the company’s banking information into the cybercriminal’s website. Which security method can deter this type of attack in the future?",
        answers: [
          "Employee security training",
          "Principle of least privilege", 
          "Change management", 
          "Separation of duties"
        ],
        correct: 0
      },
      {
        question:"A network security engineer is tasked with preparing audit reports for the auditor. The internal auditor sends the reports to the external auditor who discovers that fraud was committed and that the network security engineer has falsified the reports. Which security principle should be used to stop this type of fraud from happening?",
        answers: [
          "Separation of duties",
          "Least privilege", 
          "Network segmentation", 
          "Defense in depth"
        ],
        correct: 0
      },
      {
        question:"An employee has worked for the same organization for years and still has access to legal files even though this employee now works in accounting. Which principle has been violated?",
        answers: [
          "Least privilege",
          "Network segmentation", 
          "Separation of duties", 
          "Defense in depth"
        ],
        correct: 0
      },
      {
        question:"A sales specialist is a normal user of a corporate network. The corporate network uses subjects, objects, and labels to grant users access. Which access control methodology is the corporation using?",
        answers: [
          "Least privilege",
          "Discretionary", 
          "Role-based", 
          "Mandatory"
        ],
        correct: 3
      },
      {
        question:"Which description is an example of three-factor authentication?",
        answers: [
          "A user has three physical devices such as a token, a smart card, and a USB flash drive.",
          "A user must enter a strong password, enter a mantrap, and then reenter the password.", 
          "Unique information related to the user is necessary in addition to a strong password.", 
          "Unique information related to the user is added to the two-factor authentication process."
        ],
        correct: 3
      },
      {
        question:"What is considered a valid method for testing an organization’s disaster recovery plan, according to the Certified Information Systems Security Professional (CISSP)?",
        answers: [
          "Checklist",
          "Register list", 
          "Vulnerability testing", 
          "Penetration testing"
        ],
        correct: 0
      },
      {
        question:"Which type of disaster recovery site is the most expensive to maintain but the quickest to recover to?",
        answers: [
          "Hot",
          "Warm", 
          "Cold ", 
          "Joint"
        ],
        correct: 0
      },
      {
        question:"Who directs policies and procedures that are designed to protect information resources in an organization?",
        answers: [
          "Technical information manager",
          "Custodians of information resources", 
          "Owners of information resources", 
          "Information resources security officer"
        ],
        correct: 3
      },
      {
        question:"Which topics should be included in employee security training program?",
        answers: [
          "Phishing, social engineering, defensive driving, BYOD",
          "Social justice, social networking, 401k training, phishing", 
          "Social engineering, shoulder surfing, phishing, malware", 
          "Acceptable use, phishing, employee benefits, BYOD"
        ],
        correct: 2
      },
      {
        question:"What is a threat to business operations?",
        answers: [
          "Recently installed off-the-shelf software with known vulnerabilities ",
          "Employees who refuse to password protect their computer", 
          "Sophisticated hacking tools purchased by a disgruntled employee", 
          "A network administrator who puts off patching server software"
        ],
        correct: 2
      },
      {
        question:"Which statement describes a threat?",
        answers: [
          "Spear phishing attack",
          "Unpatched operating system", 
          "Misconfigured email server", 
          "Employee filing for bankruptcy"
        ],
        correct: 0
      },
      {
        question:"Which type of threat can take the form of executable code, scripts, active content, or other software?",
        answers: [
          "Malware",
          "SQL injection", 
          "Unpatched OS", 
          "Brute force"
        ],
        correct: 0
      },
      {
        question:"What makes a company’s IT systems more prone to a successful attack?",
        answers: [
          "Angry customers",
          "Vulnerabilities", 
          "Hackers", 
          "Fired employees"
        ],
        correct: 1
      },
      {
        question:"Which type of control reduces the effect of an attack?",
        answers: [
          "Deterrent",
          "Preventative ", 
          "Corrective", 
          "Detective"
        ],
        correct: 2
      },
      {
        question:"Which security control should be included in a risk management policy?",
        answers: [
          "Implementation guidelines",
          "Technical specification", 
          "Exception process", 
          "Workflow process"
        ],
        correct: 2
      },
      {
        question:"Which physical security threat consists of the collapse of a building due to weather or moving objects?",
        answers: [
          "Structural failure",
          "Earth movement", 
          "Flooding", 
          "Severe wind event"
        ],
        correct: 0
      },
      {
        question:"A company wants to use an inexpensive form of biometrics to authenticate employee identity to gain entrance into the corporate headquarters. What is the least expensive and most reliable type of biometric authentication?",
        answers: [
          "Retina scanning",
          "Voice prints", 
          "Fingerprint recognition", 
          "Signature dynamics"
        ],
        correct: 2
      },
      {
        question:"Which two types of defenses are perimeter controls? ",
        answers: [
          "Fences",
          "Switches", 
          "Firewalls", 
          "Mantraps",
          "a and c",
          "a and d",
          "b and c"
        ],
        correct: 5
      }
    ]
  }
}
