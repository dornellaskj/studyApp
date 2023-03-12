import { Injectable } from '@angular/core';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CyberSecurityManagementService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions([
      {
        question:"Which security principle uses countermeasures such as encryption and data classification?",
        answers: [
          "Confidentiality",
          "Integrity", 
          "Availability", 
          "Accountability"
        ],
        correct: 0
      },
      {
        question:`A company is concerned about unauthorized alteration of data in a customer database.
        Which security principle is implicated?`,
        answers: [
          "Accountability",
          "Confidentiality", 
          "Availability", 
          "Integrity"
        ],
        correct: 3
      },
      {
        question:`Which integrity measure should be applied to enforce nonrepudiation of emails sent from internal users?`,
        answers: [
          "Use digital signatures on emails",
          "Ensure emails contain accurate data", 
          "Hold users accountable for emails", 
          "Scan attachments for viruses"
        ],
        correct: 0
      },
      {
        question:`A company is headquartered in a region that has frequent internet connectivity issues due to inclement weather. The company’s primary reporting servers are located in this office and are critical to the sales team in the field for accurate product pricing. Employees require 24/7 access to the most up-to-date information, as the data frequently changes.
 
        Which solution will ensure a higher availability of these servers outside this company?`,
        answers: [
          "Develop a mechanism to publish the necessary pricing information to a cloud location for sales teams to access anytime",
          "Open a direct virtual private network (VPN) access connection between the servers and the sales team’s computers", 
          "Implement a secondary internet connectivity solution at headquarters, which fails over when the primary connection is unavailable", 
          "Create a cloud-based web service that queries a cloud database and replicates the product pricing data periodically"
        ],
        correct: 2
      },
      {
        question:`Research department members encrypt their Office 365 files by using keys residing in an on-premises key store. Due to a failure of on-premises network connectivity, the files cannot be decrypted.
 
        What should be done to maintain the availability of these files without compromising their confidentiality and integrity?`,
        answers: [
          "Set up redundant internet connectivity",
          "Copy files to an on-premises file server", 
          "Maintain files in an unencrypted format", 
          "Maintain keys with Office 365 files"
        ],
        correct: 0
      },
      {
        question:`The management team of an organization creates a document stating employees who access the company’s enterprise resource planning (ERP) system must use a certain browser and are required to have antivirus installed on their machines.

        Which type of document is this?`,
        answers: [
          "Policy",
          "Procedure", 
          "Standard", 
          "Guideline"
        ],
        correct: 2
      },
      {
        question:`Which type of security documentation offers recommendations and suggestions on creating a strong password?`,
        answers: [
          "Guidelines",
          "Standards", 
          "Procedures", 
          "Policies"
        ],
        correct: 0
      },
      {
        question:`Which security concept includes the process of reviewing the activities of an identity?`,
        answers: [
          "Authentication",
          "Authorization", 
          "Identification", 
          "Accountability"
        ],
        correct: 3
      },
      {
        question:`Which security concept includes comparing a user’s fingerprint against authorized fingerprints stored in a database?`,
        answers: [
          "Accountability",
          "Identification", 
          "Authentication", 
          "Authorization"
        ],
        correct: 2
      },
      {
        question:`An information security manager has been asked to develop security policies and to deploy security solutions for an organization.

        Which security principles must be considered in addition to CIA triad principles?`,
        answers: [
          "Encryption",
          "AAA", 
          "Abstraction", 
          "Layering"
        ],
        correct: 1
      },
      {
        question:`A company plans to implement a new authentication system for customers accessing the company website. When customers log on, the website indicates that it sent a text message that includes a code to the customer’s mobile phone. To complete the log-on process, the customer is required to enter the appropriate code within five minutes.

        Which authentication mechanism is this system based on?`,
        answers: [
          "Time-based one-time password",
          "Hash-based one-time password", 
          "Synchronous dynamic password tokens", 
          "Asynchronous dynamic password tokens"
        ],
        correct: 0
      },
      {
        question:`Which security concept controls access to the network?`,
        answers: [
          "Provide individuals access after they supply a username and password",
          "Create audit logs that will monitor successful and failed log-in attempts", 
          "Allow individuals to perform tasks based on assigned rights and permissions", 
          "Create audit trails to manage and track user access to network resources"
        ],
        correct: 0
      },
      {
        question:`On an employee’s first day of work, she notices a large number of file shares available, most of which do not pertain to her position. The employee went to her manager about the level of access. The employee’s manager said she has the same level of access as her predecessor.

        Which principle does this level of access violate?`,
        answers: [
          "Role-based access",
          "Job rotation", 
          "Rule-based access", 
          "Least privilege"
        ],
        correct: 3
      },
      {
        question:`A company wants to enforce strict penalties on a former employee who uploaded sensitive company technical schematics onto a personal website.

        Which type of document will this company use to enforce penalties?`,
        answers: [
          "Nondisclosure agreement",
          "Employment agreement", 
          "Noncompete agreement", 
          "Personnel security agreement"
        ],
        correct: 0
      },
      {
        question:`A company has a data center estimated to be worth $10 million located in an area known for earthquakes. Based on the design of the building, if an earthquake strikes the data center it will cause a 50% loss.
 
        What is the single loss expectancy (SLE) of an earthquake striking the data center?`,
        answers: [
          "$1.25 million",
          "$5 million", 
          "$7.5 million", 
          "$50 million"
        ],
        correct: 1
      },
      {
        question:`A company conducts a quantitative risk analysis. The exposure factor (EF) is 25% and the single loss expectancy (SLE) is $100,000.

        What is the asset value?`,
        answers: [
          "$25,000",
          "$75,000", 
          "$125,000", 
          "$400,000"
        ],
        correct: 3
      },
      {
        question:`A server with critical data is valued at $8,000 and the exposure factor to a hack is 10%.

        What is the single loss expectancy (SLE)?`,
        answers: [
          "$720",
          "$800", 
          "$7,200", 
          "$80,000"
        ],
        correct: 1
      },
      {
        question:`A company discovers that employees are accessing restricted areas. To discourage employees, the security manager posts restricted access signs.
 
        What is this security manager’s risk response?`,
        answers: [
          "Acceptance",
          "Assignment", 
          "Avoidance", 
          "Deterrence"
        ],
        correct: 3
      },
      {
        question:`A company hires a consulting group to perform a security audit on its network. The audit finds that the email servers are vulnerable to SMTP relay attacks. The company decides to migrate email services to a cloud-based provider and decommission the email servers.

        Which strategic risk response is applied?`,
        answers: [
          "Avoidance",
          "Mitigation", 
          "Acceptance", 
          "Rejection"
        ],
        correct: 0
      },
      {
        question:`A private company identifies a risk with a high-value asset. A threat has been reported to be attacking only government entities. The company’s board of directors has concluded that the threat will likely never materialize for private companies, and that nothing should be done about it.

        What is the risk response?`,
        answers: [
          "Avoidance",
          "Deterrence", 
          "Rejection", 
          "Assignment"
        ],
        correct: 2
      },
      {
        question:`An employee manages a perimeter network in a retail company that sells health supplements. The company wants to establish an online presence.
 
        Which preventive control should this employee recommend for the perimeter network?`,
        answers: [
          "A logging server",
          "Desktop antivirus software", 
          "An intrusion detection system", 
          "A firewall device"
        ],
        correct: 3
      },
      {
        question:`Which type of controls involves the use of software or hardware mechanisms and may include authentication methods, the use of encryption, firewalls, or intrusion detection systems?`,
        answers: [
          "Technical",
          "Administrative", 
          "Physical", 
          "Directive"
        ],
        correct: 0
      },
      {
        question:`Which host-based control should be implemented to ensure that infected web file downloads are isolated?`,
        answers: [
          "A firewall",
          "Anti-malware", 
          "Intrusion detection", 
          "A web-filtering client"
        ],
        correct: 1
      },
      {
        question:`What is the correct order of the steps in the risk assessment life cycle?`,
        answers: [
          `Security control selection
          Security control monitoring
          Security control implementation
          Information system authorization
          Security categorization
          Security control assessment`,
          `Security categorization
          Security control selection
          Security control implementation
          Security control assessment
          Information system authorization
          Security control monitoring`, 
          `Security categorization
          Security control selection
          Security control implementation
          Security control monitoring
          Security control assessment
          Information system authorization`, 
          `Security control selection
          Security control monitoring
          Security control implementation
          Security categorization
          Security control assessment
          Information system authorization`
        ],
        correct: 1
      },
      {
        question:`What is a risk management framework?`,
        answers: [
          "A document listing all assessed risks",
          "A guideline or recipe for how risk is to be assessed, resolved, and monitored", 
          "An architectural document showing all security controls in an organization", 
          "Physical borders protecting business-critical systems"
        ],
        correct: 1
      },
      {
        question:`Which data classification would cause serious damage to the mission of an organization, is less damaging than its highest classification, and is the label used by most organizations for the classification of PII and PHI data?`,
        answers: [
          "Public",
          "Sensitive", 
          "Confidential", 
          "Private"
        ],
        correct: 3
      },
      {
        question:`The document policy of an organization is that there is no negative impact if documents are released outside the organization.
 
        What is the data classification of the documents?`,
        answers: [
          "Confidential",
          "Sensitive", 
          "Public", 
          "Private"
        ],
        correct: 2
      },
      {
        question:`State law requires that offices retain medical records for six years.

        What should the personnel in a medical office do with unneeded patient records before those six years have passed?`,
        answers: [
          "Archive",
          "Degauss", 
          "Encrypt", 
          "Transfer"
        ],
        correct: 0
      },
      {
        question:`A company stores sensitive data on backup tapes. The data must be secured from unauthorized access.

        How should the backup tapes be secured to minimize unauthorized access?`,
        answers: [
          "Encrypt data, and then store it in a safe location",
          "Digitally sign data, and then store it in a data center", 
          "Encode the data, and then store it in an office", 
          "Mask the data, and then store it in a vault"
        ],
        correct: 0
      },
      {
        question:`A firm supplies workers’ compensation claims (which include supporting personal data) to an outsourced claims investigator. The claims investigator is responsible for packaging the claim data supplied by the firm into a claim file, validating the supplied data, obtaining additional data where warranted, and then recommending a final claim disposition to the firm.
 
        Which role is this claims provider fulfilling under the General Data Protection Regulation (GDPR)?`,
        answers: [
          "Asset owner",
          "Business owner", 
          "Data owner", 
          "Data processor"
        ],
        correct: 3
      },
      {
        question:`A company uses a document management system to classify documents created by employees. Ownership of the document management system belongs to the chief information officer (CIO).
 
        The department managers classify documents that were created by employees in their department as business-critical and sensitive.
         
        The information security officer (ISO) maintains the system security plan for the documents created and used by the corresponding department, and the system administrator (SA) ensures that the system is deployed based on the security requirements.
         
        Who is the owner of the data in this company?`,
        answers: [
          "The employee",
          "The department managers", 
          "The information security officer", 
          "The system administrator"
        ],
        correct: 1
      },
      {
        question:`In an organization, the information security management department (ISMD) standardized data classification levels, identifying safeguards and controls for every level. The ISMD started to ask business units (BUs) to classify data.
 
        Why is the ISMD asking BUs to classify data before implementing the controls and safeguards?`,
        answers: [
          "Because the ISMD is the data owner",
          "Because BUs are data owners", 
          "Because BUs own the budget", 
          "Because the ISMD owns the budget"
        ],
        correct: 1
      },
      {
        question:`An employee using a public key infrastructure (PKI) receives an unsigned email from a coworker.

        Which category of the STRIDE threat model is applicable to this scenario? `,
        answers: [
          "Spoofing",
          "Tampering", 
          "Repudiation", 
          "Elevation of privilege"
        ],
        correct: 2
      },
      {
        question:`Which process identifies factors that could damage or disclose data, evaluates those factors considering data value and countermeasure cost, and implements cost-effective solutions?`,
        answers: [
          "Risk management",
          "Asset valuation", 
          "Vulnerability identification", 
          "Impact assessment"
        ],
        correct: 0
      },
      {
        question:`What is the purpose of threat modeling tools?`,
        answers: [
          "To identify employees who could be potential insider threats",
          "To consider the range of compromise concerns and focus on the end result of an attack", 
          "To identify all the technologies involved in a threat", 
          "To consider hardware and software tools that provide strong resilience to attackers"
        ],
        correct: 1
      },
      {
        question:`Which type of access control do smart cards for employees represent?`,
        answers: [
          "Logical",
          "Administrative", 
          "Directive", 
          "Recovery"
        ],
        correct: 0
      },
      {
        question:`A company has created a honeypot on the network with fake data.

        Which type of access control is this honeypot?`,
        answers: [
          "Detective",
          "Corrective", 
          "Recovery", 
          "Directive"
        ],
        correct: 0
      },
      {
        question:`All of an organization’s offices have cable laptop locks to secure a laptop when the user walks away.

        Which access control type are these locks?`,
        answers: [
          "Physical",
          "Logical", 
          "Directive", 
          "Corrective"
        ],
        correct: 0
      },
      {
        question:`What is an example of an administrative access control?`,
        answers: [
          "Security badges",
          "Background checks", 
          "Access control lists", 
          "Encryption"
        ],
        correct: 1
      },
      {
        question:`Which identity technology is an open request for comments (RFC) standard that provides access delegation of online websites?`,
        answers: [
          "Extensible authentication protocol (EAP) ",
          "Service provisioning markup language (SPML)", 
          "OpenID identity provider", 
          "Open Authentication (OAuth) 2.0"
        ],
        correct: 3
      },
      {
        question:`Which identity management solution allows multiple organizations to share identities based on a common method?`,
        answers: [
          "Lightweight directory access protocol (LDAP)",
          "Kerberos authentication protocol", 
          "Public key infrastructure (PKI)", 
          "Federated identity management (FIM)"
        ],
        correct: 3
      },
      {
        question:`An organization deploys multifactored authentication. One of the required factors is a username and password.

        What is the purpose of this username?`,
        answers: [
          "Identification",
          "Authentication", 
          "Authorization", 
          "Accountability"
        ],
        correct: 0
      },
      {
        question:`A company receives numerous complaints from employees about the high number of usernames and passwords each employee must maintain.
 
        Which solution would allow employees to store usernames and passwords?`,
        answers: [
          "A credential management system",
          "A centralized access control system", 
          "A key distribution center", 
          "A public key infrastructure"
        ],
        correct: 0
      },
      {
        question:`A company needs to improve the security of systems on the corporate network using multiple layers of access control to achieve the strongest level of security possible.

        Which access control methods should be implemented?`,
        answers: [
          "Administrative, technical, and physical",
          "Physical, attribute, and mandatory", 
          "Role-based, administrative , and rule-based", 
          "Administrative, rule-based, and discretionary"
        ],
        correct: 0
      },
      {
        question:`The vice president of a company distributes corporate policies by emailing employees links to the files. An IT professional needs to implement a solution that allows only the vice president to manage who can edit corporate policies.

        Which access control model should this professional implement?`,
        answers: [
          "Attribute-based",
          "Discretionary", 
          "Mandatory", 
          "Role-based"
        ],
        correct: 1
      },
      {
        question:`A company wants only members of its database administrator team to have administrative access to all SQL server databases.

        Which access control model should this company apply?`,
        answers: [
          "Attribute-based",
          "Discretionary", 
          "Mandatory", 
          "Role-based"
        ],
        correct: 3
      },
      {
        question:`A company develops project management software. The design requires the project manager to control access to the project files.

        Which access control model should this project manager use?`,
        answers: [
          "Attribute-based",
          "Discretionary", 
          "Role-based", 
          "Mandatory"
        ],
        correct: 1
      },
      {
        question:`A word-processing program uses document labels to determine which users can access files. For example, only members of the legal department can access files labeled legal.

        Which access control model is applied?`,
        answers: [
          "Mandatory",
          "Discretionary", 
          "Rule-based", 
          "Attribute-based"
        ],
        correct: 0
      },
      {
        question:`An attacker uses multiple websites to collect public information and pieces together a profile to be used for identity impersonation.

        Which type of attack is this?`,
        answers: [
          "Database aggregation",
          "Information theft", 
          "Access aggregation", 
          "Access theft"
        ],
        correct: 2
      },
      {
        question:`Which type of an attack involves an attacker looking at a victim’s computer screen to capture sensitive information?`,
        answers: [
          "Shoulder surfing",
          "Tailgating", 
          "Piggybacking", 
          "Screen scraping"
        ],
        correct: 0
      },
      {
        question:`Which type of attack exclusively uses the telephone system or VoIP to perform the attack?`,
        answers: [
          "Birthday",
          "Rainbow table", 
          "Dictionary", 
          "Vishing"
        ],
        correct: 4
      },
      {
        question:`Which type of attack is passive and noninvasive and intended to observe the operation of a device?`,
        answers: [
          "Social engineering",
          "Side channel", 
          "Rainbow table", 
          "Spear phishing"
        ],
        correct: 1
      },
      {
        question:`A company secures its network by closing specific ports on its firewalls.

        Which access control method is being applied?`,
        answers: [
          "Discretionary",
          "Mandatory", 
          "Role-based", 
          "Rule-based"
        ],
        correct: 3
      },
      {
        question:`An organization plans to design and implement a new IT architecture. The architecture should be flexible, and the access-control management system should use several different characteristics of users, the network, and devices on the network.

        Which access-control model can be used to implement the new architecture?`,
        answers: [
          "Rule-based",
          "Attribute-based", 
          "Discretionary", 
          "Mandatory"
        ],
        correct: 1
      },
      {
        question:`Which environment type allows a user to gain access to objects using classification labels in a compartmentalized environment?`,
        answers: [
          "Role-based access control",
          "Mandatory access control", 
          "Discretionary access control", 
          "Attribute-based access control"
        ],
        correct: 1
      },
      {
        question:`What is a characteristic of discretionary access controls?`,
        answers: [
          "Rules are based on attributes.",
          "Every object has an owner.", 
          "They are centrally administered.", 
          "Changes are global."
        ],
        correct: 1
      },
      {
        question:`Which security control is appropriate to protect database applications and associated data from creeping privileges?`,
        answers: [
          "Account review",
          "Account revocation", 
          "Provisioning", 
          "Deprovisioning"
        ],
        correct: 0
      },
      {
        question:`Which group of security controls is necessary to protect accounts against stolen credentials?`,
        answers: [
          "Password phrases",
          "Two-factor authentication", 
          "Personal identification numbers", 
          "Employee awareness training"
        ],
        correct: 1
      },
      {
        question:`Which group of security controls provides storage space for users to keep usernames and passwords stored when a single sign-on is not available?`,
        answers: [
          "OpenID",
          "Federated identity management (FIM)", 
          "OAuth 2.0", 
          "Credential management system"
        ],
        correct: 3
      },
      {
        question:`A company wants to provide authentication, authorization, and accounting (AAA) protocols for employees who use virtual private networks (VPNs).
 
        Which protocol provides this company with AAA?`,
        answers: [
          "Integrating identity services",
          "Federated identity management", 
          "RADIUS", 
          "OpenID"
        ],
        correct: 2
      },
      {
        question:`A company has an online log-on page for employees to access limited data while working remotely. The log-on is a username and password.

        Which access control would help prevent an attack on the log-on page given an attacker has unlimited time?`,
        answers: [
          "Strong password policy",
          "Account lockout", 
          "Last log-on notification", 
          "Password masking"
        ],
        correct: 1
      },
      {
        question:`Which security control should prevent unauthorized access from spoofing attacks?`,
        answers: [
          "Hash and salt passwords",
          "Use account lockout", 
          "Implement multifactor authentication", 
          "Enforce password complexity"
        ],
        correct: 2
      },
      {
        question:`Which security control should be employed to remedy access aggregation attacks?`,
        answers: [
          "Limiting physical access to systems",
          "Implementing account lockout", 
          "Applying need-to-know principle", 
          "Enforcing password hash and salt"
        ],
        correct: 2
      },
      {
        question:`Which security control can be applied to prevent eavesdropping attacks?`,
        answers: [
          "Firewall",
          "Encryption", 
          "Antivirus", 
          "Patching"
        ],
        correct: 1
      },
      {
        question:`Which security control should be employed as part of a comprehensive process to address the physical theft of virtual servers?`,
        answers: [
          "Limiting physical access to the hosting servers",
          "Enforcing account lockout on the virtual servers", 
          "Implementing need-to-know principles with authentication to physical servers", 
          "Enforcing hashing and salting of passwords to hosting servers"
        ],
        correct: 0
      },
      {
        question:`An organization stores hashed passwords using Secure Hash Algorithm 256 (SHA-256). The organization has concerns about data breaches that result from rainbow table attacks.
 
        Which security control should this organization implement?`,
        answers: [
          "Limiting physical access to company computers",
          "Enforcing account lockout", 
          "Implementing need-to-know principles", 
          "Enforcing salting before storing the data"
        ],
        correct: 3
      },
      {
        question:`Which framework achieves the needs of stakeholders and the goals of an enterprise?`,
        answers: [
          "The Open Group Architecture Framework (TOGAF)",
          "Control objectives for information and related technology (CoBIT)", 
          "Capability Maturity Model Integration (CMMI)", 
          "Information Technology Infrastructure Library (ITIL)"
        ],
        correct: 1
      },
      {
        question:`A company implements an information security management system (ISMS). The company uses the system to implement security controls and publish security policies. After an assessment, the company discovers that ISMS processes are unpredictable and changing in reaction to events.

        Which framework should this company implement to improve ISMS processes?`,
        answers: [
          "The Open Group Architecture Framework (TOGAF)",
          "Capability Maturity Model Integration (CMMI)", 
          "Payment card industry data security standard (PCI-DSS)", 
          "Committee of Sponsoring Organizations of the Treadway Commission (COSO)"
        ],
        correct: 1
      },
      {
        question:`Which description suggests that a process has reached the highest level of maturity possible under capability maturity model integration?`,
        answers: [
          "The process is managed using reliable metrics.",
          "The process is defined, documented, reviewed, and subject to improvement.", 
          "The process is optimized, with a focus on continuous improvement.", 
          "The process is repeatable, with repeatable results."
        ],
        correct: 2
      },
      {
        question:`Which framework is focused solely on process and process maturity and has five levels of maturity?`,
        answers: [
          "COBIT",
          "CMMI", 
          "COSO", 
          "ITIL"
        ],
        correct: 1
      }
      


    ]);
  }
}
