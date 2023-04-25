import { Injectable } from'@angular/core';
import { UtilitiesService } from'./utilities.service';


@Injectable({
  providedIn:'root'
})
export class CcspAssService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions([
      {
          "answers": [
              "Patch",
              "Privilege",
              "Asset",
              "Change"
          ],
          "question": "Allen needs to evaluate, test, and deploy software updates. Which of the following management techniques will she use?",
          "correct": 0
      },
      {
          "answers": [
              "OAuth",
              "WS-Federation",
              "OpenID Connect",
              "SAML"
          ],
          "question": "Which federation standard allows developers to authenticate their users across websites and applications without having to manage usernames and passwords?",
          "correct": 2
      },
      {
          "answers": [
              "The depth of underground storage bunkers used for archiving.",
              "The names of specific personnel tasked with restoring data in the event of data loss in the operational environment.",
              "The name(s) of regulators approving the policy.",
              "How long the data must be kept before destruction."
          ],
          "question": "Data archiving and retention policies should include which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "General Data Protection Regulation (GDPR)",
              "ISO 27001",
              "Cloud Security Alliance Cloud Controls Matrix (CSA CCM)",
              "Federal Information Processing Standard (FIPS) 140-2"
          ],
          "question": "Which of the following is a tool that can be used to perform security control audits?",
          "correct": 2
      },
      {
          "answers": [
              "Newer, upgraded devices",
              "Use of the cloud",
              "Enhanced security protocols",
              "User consent and action"
          ],
          "question": "Joseph is asked to deploy digital rights management (DRM) tools in a bring-your-own-device (BYOD) environment. Which of the following will Joseph require?",
          "correct": 3
      },
      {
          "answers": [
              "The cloud provider",
              "The customer's regulator",
              "Depends on the contract",
              "The cloud customer"
          ],
          "question": "Who is responsible for performing archiving activities in a managed cloud environment?",
          "correct": 2
      },
      {
          "answers": [
              "Cloud access security broker",
              "Sandbox",
              "Data sovereignty",
              "Single tenancy "
          ],
          "question": "Mark, a security administrator, observes multiple service interruptions caused by a data center design. He decided to migrate the company away from its data center and successfully completed the migration of all data center servers and services to a cloud provider. He is still concerned with the availability requirements of critical company applications. Which of the following should Mark implement next?",
          "correct": 0
      },
      {
          "answers": [
              "Avoidance",
              "Transference",
              "Mitigation",
              "Acceptance"
          ],
          "question": "A company is considering services it can successfully provide to its customers. One of the services, however, is deemed to be difficult to offer with a high degree of certainty of success. The company has decided not to offer the service because of the risk in offering the service and failing. Which risk management technique is used in this scenario?",
          "correct": 0
      },
      {
          "answers": [
              "Total",
              "Inexpensive",
              "Active",
              "Comprehensive"
          ],
          "question": "Penetration testing is which form of security assessment?",
          "correct": 2
      },
      {
          "answers": [
              "Detection systems",
              "Inward-facing connections",
              "Network schematics",
              "Production data"
          ],
          "question": "Which of the following should honeypots contain?",
          "correct": 0
      },
      {
          "answers": [
              "2",
              "3",
              "4",
              "1"
          ],
          "question": "When a company is first starting and has no defined processes and little documentation, it can be said to be at level ________________ of the Capability Maturity Model (CMM).",
          "correct": 3
      },
      {
          "answers": [
              "Cryptoshredding",
              "Degaussing",
              "Physical destruction of resources that store the data-shredding",
              "Legal order issued by the prevailing jurisdiction where the data is geographically situated"
          ],
          "question": "Which of the following is the best and only completely secure method of data destruction?",
          "correct": 2
      },
      {
          "answers": [
              "Virtualization",
              "Policy",
              "Audit scope",
              "Gap analysis"
          ],
          "question": "Which of the following provides an organization with a static point of reference from which to begin work in defining its strategic goals and objectives regarding risk remediation and control implementation?",
          "correct": 3
      },
      {
          "answers": [
              "Four",
              "Three",
              "One",
              "Two"
          ],
          "question": "How many database(s) does tokenization requires?",
          "correct": 3
      },
      {
          "answers": [
              "Define",
              "Test",
              "Develop",
              "Design"
          ],
          "question": "At which phase of the software development lifecycle (SDLC) should security personnel first be involved?",
          "correct": 0
      },
      {
          "answers": [
              "Remote access",
              "Multitenancy",
              "Pooled resources",
              "Virtualization"
          ],
          "question": "Which of the following aspects of cloud computing can enhance the customer's business continuity and disaster recovery (BC/DR) efforts?",
          "correct": 0
      },
      {
          "answers": [
              "Automated patching is slow and inefficient.",
              "Patches can come loaded with malware, in a Trojan horse attack.",
              "Users can be leveraged by intruders.",
              "A patch may not be applicable to a given environment."
          ],
          "question": "Which of the following is a risk associated with automated patching?",
          "correct": 3
      },
      {
          "answers": [
              "PII",
              "PHI",
              "GDPR",
              "PCI-DSS"
          ],
          "question": "Frank, the CEO of an organization, has set up a team to periodically evaluate regulatory compliance along with associated documentation. His team implemented a policy that focuses on protecting the information that uniquely recognized an individual person, either on its own or in conjunction with other information. Which of the following types of regulated information is this?",
          "correct": 0
      },
      {
          "answers": [
              "SQL injection",
              "Insecure direct object reference",
              "Buffer overflow",
              "Denial of service"
          ],
          "question": "Alice is staging an attack against Bob's website. She is able to introduce a string of command code into a database Bob is running, simply by entering the command string into a data field. This is an example of which type of attack?",
          "correct": 0
      },
      {
          "answers": [
              "Public awareness, snapshot and image availability, and sprawl",
              "Loss of governance, snapshot and image security, and sprawl",
              "Loss of data",
              "Increased cost, snapshot and image security, and sprawl"
          ],
          "question": "Which of the following are risks associated with virtualization?",
          "correct": 1
      },
      {
          "answers": [
              "Underwriters Laboratories (UL)",
              "Federal Information Processing Standard (FIPS) 140-2",
              "Payment Card Industry (PCI) Data Security Standard (DSS)",
              "Common Criteria"
          ],
          "question": "Which IT product review framework is intended to determine the accuracy of vendor claims regarding the security functions of the product?",
          "correct": 3
      },
      {
          "answers": [
              "Data-driven workflows",
              "Customer satisfaction",
              "Capital expenditures for IT",
              "Operational expenditures for IT"
          ],
          "question": "Migrating to a cloud environment will reduce an organization's dependence on which of the following?",
          "correct": 2
      },
      {
          "answers": [
              "CAMP",
              "BIA",
              "ANF",
              "CMB"
          ],
          "question": "Which of the following is composed of representatives from all stakeholders within an organization for reviewing change and exception requests?",
          "correct": 3
      },
      {
          "answers": [
              "Increased susceptibility of virtual systems to malware",
              "Electromagnetic pulse",
              "The ease of transporting stolen virtual machine images",
              "Internal threats interrupting service through physical accidents (spilling drinks, tripping over cables, etc.)"
          ],
          "question": "Which of the following is a risk posed by the use of virtualization?",
          "correct": 2
      },
      {
          "answers": [
              "data breach",
              "shadow IT",
              "insider threat",
              "intrusions"
          ],
          "question": "You are the security manager for a mid-sized nonprofit organization. Your organization has decided to use the software as a service (SaaS) public cloud provider for its production environment. A service contract audit reveals that while your organization has budgeted for 76 user accounts, there are currently 89 active user accounts. Your organization is paying the contract price, plus a per-account fee for every account over the contracted number. This is an example of costs incurred by ________________.",
          "correct": 1
      },
      {
          "answers": [
              "Track all incoming access requests that require at least database(s).",
              "Move data across jurisdictional boundaries.",
              "Remove all access to unauthorized parties.",
              "Ensure that an unauthorized user only gets a useless fragment of data."
          ],
          "question": "Teressa works as a security administrator at XYZ. She was asked to use the bit-splitting technique to provide security against data breaches. Which of the following will she perform?",
          "correct": 3
      },
      {
          "answers": [
              "COBIT",
              "NIST 800-37",
              "GDPR",
              "ITIL"
          ],
          "question": "ISO 31000 is most similar to which of the following regulations, standards, guidelines, and frameworks?",
          "correct": 1
      },
      {
          "answers": [
              "Cross-site scripting",
              "Insecure cryptographic storage",
              "Security misconfiguration",
              "Broken authentication/session management"
          ],
          "question": "Mark is staging an attack against Laura's website by embedding a link on her site that will execute malicious code on a visitor's machine if the visitor clicks on the link. This is an example of which type of attack?",
          "correct": 0
      },
      {
          "answers": [
              "Administrative and technical",
              "Provider and customer",
              "Internal and managed",
              "Physical and logical"
          ],
          "question": "If you are working in a cloud or traditional environment, which of the following access controls are important to implement? ",
          "correct": 3
      },
      {
          "answers": [
              "Black-box",
              "Red-box",
              "Blue-box",
              "White-box"
          ],
          "question": "Leo receives system architecture diagrams and an XML-based API description as part of her testing preparation. Which type of test will he conduct?",
          "correct": 3
      },
      {
          "answers": [
              "Multilevel aggregation",
              "Automatic expiration",
              "Broad spectrum",
              "Enhanced detail"
          ],
          "question": "Which of the following characteristics is associated with digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM)?",
          "correct": 1
      },
      {
          "answers": [
              "signal modulation",
              "isolation",
              "motif",
              "multitenancy"
          ],
          "question": "In order to ensure proper ______________ in a secure cloud network environment, consider the use of Domain Name System Security Extensions (DNSSEC), Internet Protocol Security (IPSec), and Transport Layer Security (TLS).",
          "correct": 1
      },
      {
          "answers": [
              "Most of the data is subterranean.",
              "The hardware belongs to the provider.",
              "Cloud data doesn't have substance.",
              "Regulations prevent it."
          ],
          "question": "Why is data destruction in the cloud difficult?",
          "correct": 1
      },
      {
          "answers": [
              "one level below the sensitivity level of the systems from which it was collected",
              "with encryption in transit, at rest, and in use",
              "according to National Institute of Standards and Technology (NIST) guidelines",
              "at least at the same sensitivity level as the systems from which it was collected"
          ],
          "question": "Log data should be protected _________________.",
          "correct": 3
      },
      {
          "answers": [
              "It costs more to conduct a test at the same location as the primary workplace.",
              "You don't want to waste a travel budget on what is only a test.",
              "There won't be enough room for everyone to sit in the primary facility.",
              "The risk of negative impact to both production and backup is too high."
          ],
          "question": "There are two reasons to conduct a test of the organization's recovery from backup in an environment other than the primary production environment. Which of the following is one of them?",
          "correct": 3
      },
      {
          "answers": [
              "Append each object with sufficient metadata to properly categorize and classify based on asset value and sensitivity.",
              "Check access each time a direct object reference is called by an untrusted source.",
              "Perform user security training.",
              "Install high-luminosity interior lighting throughout the facility."
          ],
          "question": "Taylor, a security analyst, observes that the OWASP Top Ten list often includes “insecure direct object references.” Which of these is a method to counter the risks of insecure direct object references?",
          "correct": 1
      },
      {
          "answers": [
              "Data processors",
              "Data controllers and processors",
              "Data subjects",
              "Data controllers"
          ],
          "question": "The European Union (EU) General Data Protection Regulation (GDPR) addresses performance by which of the following?",
          "correct": 1
      },
      {
          "answers": [
              "Versioning",
              "Patching",
              "Threat modeling",
              "Secure destruction"
          ],
          "question": "You are the security manager for a software company that uses a platform as a service (PaaS) in a public cloud service. Your company's general counsel informs you that they have received a letter from a former employee who is filing a lawsuit against your company. What is one of the common practices used in your industry that will have to be halted until the resolution of the case?",
          "correct": 3
      },
      {
          "answers": [
              "International Organization for Standardization (ISO)",
              "National Institute of Standards and Technology (NIST)",
              "European Union Agency for Network and Information Security (ENISA)",
              "Payment Card Industry (PCI)"
          ],
          "question": "Which of the following entities publishes a cloud-centric set of risk-benefit recommendations that includes a “Top 8” list of security risks an organization might face during a cloud migration, based on likelihood and impact?",
          "correct": 2
      },
      {
          "answers": [
              "Location of the data center",
              "Type of personnel security controls for network administrators",
              "Physical security barriers on the perimeter of the data center campus",
              "Amount of data uploaded/downloaded during a pay period"
          ],
          "question": "Which of the following would make a good provision to include in the service-level agreement (SLA) between cloud customer and provider?",
          "correct": 3
      },
      {
          "answers": [
              "That any conflicts arising from the contract be settled within a particular jurisdiction",
              "That the provider host the customer's data only within specific jurisdictions",
              "That the provider deliver excellent uptime",
              "The specific amount of data that can be uploaded to the cloud environment in any given month"
          ],
          "question": "Which of the following is appropriate to include in a service-level agreement (SLA)?",
          "correct": 3
      },
      {
          "answers": [
              "Only data extracted from the hardware",
              "Hardware",
              "Electronic data",
              "Electronic data and the hardware on which it resides"
          ],
          "question": "When you are targeting a cloud customer, a court grants an order allowing a law enforcement entity to seize which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "Broken authentication",
              "Sensitive data exposure",
              "Cross-site scripting",
              "Injection"
          ],
          "question": "Which of the following vulnerabilities occurs when an application allows untrusted data to be sent to a web browser without proper validation or escaping?",
          "correct": 2
      },
      {
          "answers": [
              "Drives and disks must be demagnetized for true secure destruction.",
              "Deletion usually only removes pointers or indicators of file location.",
              "Only administrators should be allowed to delete files or objects.",
              "Physical destruction is the only acceptable method of secure sanitization."
          ],
          "question": "You have deleted a file and found that it is insufficient for secure sanitization purposes. Which of the following reason is responsible for this?",
          "correct": 1
      },
      {
          "answers": [
              "Moderator",
              "Tester",
              "Programmer",
              "Secretary "
          ],
          "question": "Which role acts as monitors of the response activity, provides scenario inputs to heighten realism, and documents performance and any plan shortcomings?",
          "correct": 0
      },
      {
          "answers": [
              "Strong physical protections",
              "Agile business intelligence",
              "Interoperable export formats",
              "Egress monitoring solutions"
          ],
          "question": "Which of the following can enhance data portability?",
          "correct": 2
      },
      {
          "answers": [
              "Select an appropriate recovery time objective (RTO).",
              "Make sure any alternate provider can support the application needs of the organization.",
              "Ensure that contact information for all first responder agencies are correct and up-to-date at all times.",
              "Regularly review all regulatory directives for disaster response."
          ],
          "question": "You are working as a cloud customer at XYZ. What should you do to ensure that disaster recovery activities don't exceed the maximum allowable downtime (MAD)?",
          "correct": 0
      },
      {
          "answers": [
              "Order of volatility",
              "Data ownership",
              "Legal hold",
              "Chain of custody"
          ],
          "question": "Juan works in an investigation department. He gathers evidence that can be used in court to convict persons of crimes. Which of the following is used to address the reliability and credibility of evidence?",
          "correct": 3
      },
      {
          "answers": [
              "Natural disasters",
              "Distributed denial of service (DDoS) attacks",
              "Insider threat",
              "Virtual sprawl"
          ],
          "question": "Juan works as a security administrator at the XYZ organization. Which of the following is a management risk that Juan's organization will have to address while migrating to the cloud?",
          "correct": 3
      },
      {
          "answers": [
              "Virtualization",
              "Emulation",
              "Secure remote access",
              "Crypto-shredding"
          ],
          "question": "Managed cloud services exist because the service is less expensive for each customer than creating the same services for themselves in a traditional environment. What is the technology that creates most of the cost savings in the cloud environment?",
          "correct": 0
      },
      {
          "answers": [
              "The cloud customer",
              "The user",
              "The subject",
              "The cloud provider"
          ],
          "question": "Who is ultimately responsible for a data breach that includes personally identifiable information (PII), in the event of negligence on the part of the cloud provider?",
          "correct": 0
      },
      {
          "answers": [
              "Consensus Assessment Initiative Questionnaire (CAIQ)",
              "Service Organization Control (SOC) 2, Type 2 audit report",
              "National Institute of Standards and Technology (NIST) 800-37 Risk Management Framework (RMF) audit",
              "ISO 27001 information security management system (ISMS) review"
          ],
          "question": "Ryan works as a cloud service provider opts to join the Cloud Security Alliance Security, Trust, and Assurance Registry (CSA STAR) program registry. Which of the following he must complete?",
          "correct": 0
      },
      {
          "answers": [
              "SSO",
              "Biometric",
              "Mutual",
              "File"
          ],
          "question": "A user has entered a user name and password at the beginning of a session and accesses multiple applications. He does not need to re-authenticate for accessing each application. Which of the following authentication processes is the user using?",
          "correct": 0
      },
      {
          "answers": [
              "Software development lifecycle (SDLC)",
              "Honeypots",
              "Identity management",
              "Data classification"
          ],
          "question": "What functional process can aid business continuity and disaster recovery (BC/DR) efforts?",
          "correct": 3
      },
      {
          "answers": [
              "amount of usage demanded",
              "total number of nodes in the cluster",
              "physical backplane connecting it",
              "performance and capacity in each node"
          ],
          "question": "A loosely coupled storage cluster will have performance and capacity limitations based on the ____________________.",
          "correct": 3
      },
      {
          "answers": [
              "U.S. State Department",
              "Federal Trade Commission (FTC)",
              "Federal Communication Commission (FCC)",
              "Fish and Wildlife Service"
          ],
          "question": "In order for American companies to process personal data belonging to the European Union (EU) citizens, they must comply with the Privacy Shield program. The program is administered by the U.S. Department of Transportation and the _______________.",
          "correct": 1
      },
      {
          "answers": [
              "The certifying authority",
              "The server",
              "The client",
              "The Internet service provider (ISP)"
          ],
          "question": "Mark, a security analyst, is using the Transport Layer Security (TLS) protocol to create a secure communications channel over public media (such as the Internet). In a typical TLS session, who initiates the protocol?",
          "correct": 2
      },
      {
          "answers": [
              "Private cloud",
              "Community cloud",
              "Public cloud",
              "Hybrid cloud"
          ],
          "question": "You are the data manager for a retail company; you anticipate a much higher volume of sales activity in the final quarter of each calendar year than the other quarters. In order to handle these increased transactions, and to accommodate the temporary sales personnel you will hire for only that time period, you consider augmenting your internal, on-premises production environment with a cloud capability for a specific duration, and will return to operating fully on-premises after the period of increased activity. Which deployment model best describes this type of arrangement?",
          "correct": 3
      },
      {
          "answers": [
              "National Institute of Standards and Technology (NIST) Special Publication (SP) 800-37",
              "ISO 27018",
              "Payment Card Industry",
              "Personal Information Protection and Electronic Documents Act"
          ],
          "question": "What was the first international privacy standard specifically for cloud providers?",
          "correct": 1
      },
      {
          "answers": [
              "Loss of market share",
              "Prosecution ",
              "Malware contamination",
              "Excessive fees for SLA violations"
          ],
          "question": "Taylor works as a cloud customer at XYZ. She is risking which of the following while performing a penetration test without the provider's permission?",
          "correct": 1
      },
      {
          "answers": [
              "Encrypt all archived data to ensure that it can't be exposed while at rest in the long term.",
              "Train all personnel on BC/DR actions they should take to preserve health and human safety.",
              "Periodically restore from backups.",
              "Perform an integrity check on archived data to ensure that the backup process is not corrupting the data."
          ],
          "question": "Which of these is a vital action to determine whether the business continuity and disaster recovery (BC/DR) effort have a chance of being successful?",
          "correct": 2
      },
      {
          "answers": [
              "ISO 27002",
              "NIST SP 800-37",
              "ENISA",
              "FedRAMP"
          ],
          "question": "Which of the following dictates the requirements for U.S. federal agencies operating in a cloud environment?",
          "correct": 3
      },
      {
          "answers": [
              "Qualitative",
              "Informal",
              "Pro formal",
              "Quantitative"
          ],
          "question": "Juan is the security officer for a small nonprofit organization. He is tasked with performing a risk assessment for his organization; he has one month to complete it. The IT personnel he works with have been with the organization for many years and have built the systems and infrastructure from the ground up. They have little training and experience in the field of risk. Which type of risk assessment would Juan choose to conduct?",
          "correct": 0
      },
      {
          "answers": [
              "Payment Card Industry Data Security Standard (PCI DSS)",
              "Applicable laws and regulations",
              "National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53",
              "The managed services contract and SLA"
          ],
          "question": "Where should the cloud provider's data discovery requirements be listed?",
          "correct": 3
      },
      {
          "answers": [
              "Web application firewall (WAF)",
              "Database activity monitor (DAM)",
              "Single sign-on (SSO)",
              "Extensible Markup Language (XML) gateway"
          ],
          "question": "You are asked to perform content inspection of Secure File Transfer Protocol (SFTP) communications. Which of the following tools will you use?",
          "correct": 3
      },
      {
          "answers": [
              "Type 1, because it has a greater attack surface",
              "Type 1, because it is more straightforward",
              "Type 2, because it has a greater attack surface",
              "Type 2, because it is less protected"
          ],
          "question": "Which kind of hypervisor is the preferred target of attackers, and why?",
          "correct": 2
      },
      {
          "answers": [
              "The Internet service provider (ISP)",
              "The cloud customer",
              "The broker",
              "The cloud provider"
          ],
          "question": "In a centralized broker identity federation, which entity typically creates and sends the Security Assertion Markup Language (SAML) token?",
          "correct": 2
      },
      {
          "answers": [
              "Granting privileged access only on a temporary basis",
              "Enhanced logging of administrative activity",
              "Two-person control",
              "Assigning permanent administrators to select customer accounts"
          ],
          "question": "Administrators and engineers who work for cloud service providers will have a significant amount of control over multiple customer environments and therefore pose a severe risk. Which of the following is not a technique used to mitigate this level of increased risk from privileged users in the cloud data center?",
          "correct": 3
      },
      {
          "answers": [
              "WEP",
              "SSL",
              "EFS",
              "MS-CHAP v2"
          ],
          "question": "Max works as a network administrator for an organization. He wants the clients and servers in his organization to communicate in a way that prevents eavesdropping and tampering of data on the Internet. Which of the following will he use to accomplish the task?",
          "correct": 1
      },
      {
          "answers": [
              "Employ regular performance monitoring in the cloud environment to ensure that the cloud provider is meeting the service level agreement (SLA) targets.",
              "Implement strong multifactor authentication on all user-owned devices.",
              "Encrypt all routers between mobile users and the cloud.",
              "Use additional anti-malware detection capabilities on both user devices and the environment to which they connect."
          ],
          "question": "You are the security manager for an online retail sales company with 100 employees and a production environment hosted in a platform as a service (PaaS) model with a major cloud provider. According to your company policies, personnel are allowed to work equally from the company offices and their own homes or other locations, using their personal IT devices. The policies also allow users to select which application programming interfaces (APIs) they install and use on their own devices in order to access and manipulate company data. Of the following, what is a security control you'd like to implement to offset the risk(s) incurred by this practice?",
          "correct": 3
      },
      {
          "answers": [
              "Capturing and storing an image of the baseline",
              "Using a baseline from another industry member so as not to engage in repetitious efforts",
              "Having the baseline vetted by an objective third party",
              "Keeping a copy of upcoming suggested modifications to the baseline"
          ],
          "question": "Which of the following is essential for getting full security value from your system baseline?",
          "correct": 0
      },
      {
          "answers": [
              "Confidentiality",
              "Integrity",
              "Availability",
              "None of these"
          ],
          "question": "The cloud computing characteristic of elasticity promotes which aspect of the CIA triad?",
          "correct": 3
      },
      {
          "answers": [
              "General Data Protection Regulation (GDPR)",
              "American Institute of Certified Public Accountants (AICPA)",
              "National Institute of Standards and Technology (NIST)",
              "European Network and Information Security Agency (ENISA)"
          ],
          "question": "What is the entity that created the Statement on Standards for Attestation Engagements (SSAE) auditing standard and certifies auditors for that standard?",
          "correct": 1
      },
      {
          "answers": [
              "Dual-homed gateway",
              "Single-tier packet filter",
              "Screened host firewall",
              "Web application firewall"
          ],
          "question": "You work as a network administrator for a company. Your company asks you to analyze the OSI layer 7 traffic between a web client and a web server. Which of the following will you use to accomplish this?",
          "correct": 3
      },
      {
          "answers": [
              "multitenancy",
              "remote access",
              "physical distance",
              "virtualization"
          ],
          "question": "Data transformation in a cloud environment should be of great concern to organizations considering cloud migration because ______________ could affect data classification processes and implementations.",
          "correct": 3
      },
      {
          "answers": [
              "Vulnerability scanning",
              "Multitenancy",
              "Content filtering",
              "Sandboxing"
          ],
          "question": "You suspect a program that contains malware on a cloud server. You want to test the program by safely executing it in an isolated environment. Which of the following techniques will you use?",
          "correct": 3
      },
      {
          "answers": [
              "a runtime state",
              "the production environment",
              "the cloud",
              "an IaaS configuration"
          ],
          "question": "Dynamic application security testing (DAST) checks software functionality in ___________.",
          "correct": 0
      },
      {
          "answers": [
              "Log collection",
              "Responding to alerts",
              "Detecting and alerts",
              "Mathematical normalization of different logs"
          ],
          "question": "A security information and event management (SIEM) system does not eliminate the need for human participation in which of the following?",
          "correct": 1
      },
      {
          "answers": [
              "RAID",
              "DNS",
              "CDN",
              "SAN"
          ],
          "question": "Which of the following is a group of devices connected to a network that provides storage space to users?",
          "correct": 3
      },
      {
          "answers": [
              "Any patches suggested or required by vendors to maintain compliance with service contracts must be made immediately, regardless of internal process restrictions.",
              "Patching doesn't need to be performed as a distinct effort; patching can go through the normal change request process like all other modifications.",
              "The configuration or change management committee or board may grant blanket approval for patches (at a certain impact level) without the need to go through the formal change process.",
              "Any patches suggested by third parties should not be considered as they may invalidate service contracts or warranties and negatively affect the organization's security posture."
          ],
          "question": "Patching can be viewed as a configuration modification and therefore subject to the organization's configuration management program and methods. What may also be an aspect of patching in terms of configuration management?",
          "correct": 2
      },
      {
          "answers": [
              "The cloud customer",
              "The cloud provider",
              "The regulator",
              "The individual"
          ],
          "question": "In a personally identifiable information (PII) context, who is the controller?",
          "correct": 0
      },
      {
          "answers": [
              "Physical",
              "Competing",
              "Technical",
              "Administrative"
          ],
          "question": "Firewalls, data loss prevention or data leak protection (DLP), digital rights management (DRM) solutions, and security information and event management (SIEM) products are all examples of which of the following controls?",
          "correct": 2
      },
      {
          "answers": [
              "Attestation",
              "SSO ",
              "SPML",
              "OAuth"
          ],
          "question": "Which of the following is an authorization standard that allows users to authorize access to a third-party resource without providing them with the user credentials?",
          "correct": 3
      },
      {
          "answers": [
              "The internal audit body",
              "Only certified, trained log review professionals with a great deal of experience with the logging tool",
              "Someone with knowledge of the operation and a security background",
              "External audit providers"
          ],
          "question": "Who should be performing log review?",
          "correct": 2
      },
      {
          "answers": [
              "Content filters",
              "Attack signatures",
              "Behavioral outliers",
              "Biometric templates"
          ],
          "question": "You are in charge of cloud migration for your organization. You anticipate attack traffic from various sources, each using a variety of both automated and manual intrusion techniques. In order to deter novel attacks used only against your organization, you would be wise to employ firewalls that use which of the following to detect threats?",
          "correct": 2
      },
      {
          "answers": [
              "$24 million",
              "$10 million",
              "1",
              "12"
          ],
          "question": "You are a consultant, performing an external security review on a large manufacturing firm. You determine that its newest assembly plant, which cost $24 million, could be completely destroyed by a fire but that a fire suppression system could effectively protect the plant. The fire suppression system costs $15 million. An insurance policy that would cover the full replacement cost of the plant costs $1 million per month. What is the annual rate of occurrence (ARO) in this scenario?",
          "correct": 2
      },
      {
          "answers": [
              "Multitenancy",
              "Metered self-service",
              "Virtualization",
              "Scalability"
          ],
          "question": "Which of the following common aspects of cloud computing can aid in audit efforts?",
          "correct": 2
      },
      {
          "answers": [
              "An external audit body other than the original auditor",
              "The auditor",
              "The security office",
              "A department other than the audit target"
          ],
          "question": "Who should perform the gap analysis following an audit?",
          "correct": 3
      },
      {
          "answers": [
              "1",
              "2",
              "4",
              "3"
          ],
          "question": "What is the highest level of the Cloud Security Alliance Security, Trust, and Assurance Registry (CSA STAR) certification program for cloud service providers?",
          "correct": 3
      },
      {
          "answers": [
              "HIPAA",
              "GLBA",
              "SOX",
              "PCI DSS"
          ],
          "question": "Your company is processing and handling credit card information. Which of the following areas of policy compliance does your company need to address?",
          "correct": 3
      },
      {
          "answers": [
              "Vulnerability",
              "Confidentiality",
              "Usability",
              "Availability"
          ],
          "question": "Jane, an employee, oversees finding a new web hosting provider and has noticed that the potential choices list an uptime of 99.999 percent. Which term best describes this?",
          "correct": 3
      },
      {
          "answers": [
              "Insider threat",
              "Unencrypted packets",
              "Distributed denial of service (DDoS)",
              "Multitenancy"
          ],
          "question": "Full isolation of user activity, processes, and virtual network segments in a cloud environment is incredibly important because of risks due to which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "National Institute of Standards and Technology (NIST) 800-37",
              "ISO 27002",
              "ISO 27001",
              "Statement on Standards for Attestation Engagements (SSAE) 18"
          ],
          "question": "Which of the following standards addresses a company's entire security program, involving all aspects of various security disciplines?",
          "correct": 2
      },
      {
          "answers": [
              "Financial reporting",
              "Sales projections",
              "Previous customer satisfaction",
              "Process definition"
          ],
          "question": "A cloud provider's Service Organization Control (SOC) 1 report may not be useful to customers interested in determining the provider's security posture because the SOC 1 report contains only information about which of the following?",
          "correct": 0
      },
      {
          "answers": [
              "only in the traditional environment",
              "for high-risk operations and data that is particularly sensitive",
              "in every IT transaction",
              "when remote users are logging into the cloud environment"
          ],
          "question": "Typically, multifactor authentication should be used ______________.",
          "correct": 1
      },
      {
          "answers": [
              "Using a thumbprint and voice recognition software for access control",
              "Having a login that requires both a password and a personal identification number (PIN)",
              "Signing a personal check",
              "Presenting a credit card along with a Social Security card"
          ],
          "question": "Which of the following is an example of true multifactor authentication?",
          "correct": 2
      },
      {
          "answers": [
              "SOC 1",
              "SOC 3",
              "SOC 2",
              "SAS-70"
          ],
          "question": "A cloud provider is looking to provide a higher level of assurance to current and potential cloud customers about the design and effectiveness of their security controls. Which of the following audit reports would the cloud provider choose as the most appropriate to accomplish this goal?",
          "correct": 1
      },
      {
          "answers": [
              "two",
              "four",
              "three",
              "one"
          ],
          "question": "Cryptoshredding requires at least ______________ cryptosystem(s).",
          "correct": 0
      },
      {
          "answers": [
              "It is difficult to find and contract with multiple utility providers of the same type (electric, water, etc.).",
              "Cloud data centers can become a single point of failure.",
              "Live virtual machines in the production environment are moved from one host to another in the clear.",
              "Modern service level-agreement (SLA) demands are stringent and very hard to meet."
          ],
          "question": "Which of the following is a risk that stems from a virtualized environment?",
          "correct": 2
      },
      {
          "answers": [
              "FTP",
              "ANF",
              "ONF",
              "TTF"
          ],
          "question": "Under ISO 27034, every application within a given organization will have an attendant set of controls assigned to it; the controls for a given application are listed in the _____________.",
          "correct": 1
      },
      {
          "answers": [
              "Internet Engineering Task Force (IETF)",
              "National Institute of Standards and Technology (NIST)",
              "International Organization for Standardization (ISO)/ International Electrotechnical Commission (IEC)",
              "Internet Assigned Numbers Authority (IANA)"
          ],
          "question": "Which of the following is an international organization of network designers and architects who work together in establishing standards and protocols for the Internet?",
          "correct": 0
      },
      {
          "answers": [
              "ISO 27001",
              "Federal Risk and Authorization Management Program (FedRAMP)",
              "European Union Agency for Network and Information Security (ENISA)",
              "Cloud Security Alliance (CSA) Cloud Controls Matrix (CCM)"
          ],
          "question": "Which of the following tools incorporates and references the requirements listed in all the others?",
          "correct": 3
      },
      {
          "answers": [
              "Senior management",
              "Federal regulators",
              "Your Internet service provider (ISP)",
              "The cloud provider"
          ],
          "question": "In a cloud context, who determines the risk appetite of your organization?",
          "correct": 0
      },
      {
          "answers": [
              "Limited vendors make acquisition and support challenging.",
              "It may require trust in additional third parties beyond the primary cloud service provider.",
              "There may be a cause for management concern that the technology will violate internal policy.",
              "Users will have far greater difficulty understanding the implementation."
          ],
          "question": "Which of the following is a possible negative aspect of bit-splitting?",
          "correct": 1
      },
      {
          "answers": [
              "Community cloud",
              "Public cloud",
              "Hybrid cloud",
              "Private cloud"
          ],
          "question": "You are the security manager for a small European appliance rental company. The senior management of your company is considering cloud migration for the production environment, which handles marketing, billing, and logistics. Which cloud deployment model should you be most likely to recommend?",
          "correct": 3
      },
      {
          "answers": [
              "Certification laboratories",
              "Module users",
              "Module vendors",
              "The U.S. government"
          ],
          "question": "Who pays for cryptographic modules to be certified in accordance with Federal Information Processing Standard (FIPS) 140-2 criteria?",
          "correct": 2
      },
      {
          "answers": [
              "QaS",
              "QoS",
              "OLA",
              "ASP"
          ],
          "question": "Joy is working with various networking technologies such as Frame Relay, ATM, and Ethernet, the capability of the network to provide better service to selected traffic. Which of the following is he using?",
          "correct": 1
      },
      {
          "answers": [
              "Data subjects",
              "Data processors",
              "Data regulators",
              "Data owners"
          ],
          "question": "You want access to specific data sets. Who among the following will grant the access?",
          "correct": 3
      },
      {
          "answers": [
              "The prevalent use of encryption in all data life-cycle phases",
              "Additional regulatory mandates",
              "Drastic increase of risk due to distributed denial of service (DDoS) attacks",
              "The massive additional hacking threat, especially from foreign sources"
          ],
          "question": "Software developers should receive cloud-specific training that highlights the challenges involved with having a production environment that operates in the cloud. Which of the following represents one of these challenges?",
          "correct": 0
      },
      {
          "answers": [
              "Argentina",
              "Japan",
              "Israel",
              "United States"
          ],
          "question": "If your organization collects/creates privacy data associated with the European Union (EU) citizens and you operate in the cloud, you must prevent your provider from storing/ moving/processing that data where?",
          "correct": 3
      },
      {
          "answers": [
              "Religious court",
              "Criminal court",
              "Civil court",
              "Tribal court"
          ],
          "question": "In which court must the defendant be determined to have acted in a certain fashion according to the preponderance of the evidence?",
          "correct": 2
      },
      {
          "answers": [
              "A human right",
              "A passing fad",
              "A legal obligation",
              "A business expense"
          ],
          "question": "The European Union (EU), with its implementation of privacy directives and regulations, treats individual privacy as which of the following?",
          "correct": 0
      },
      {
          "answers": [
              "Egress monitoring solutions",
              "Digital rights management (DRM)",
              "Internet Small Computer System Interface (iSCSI)",
              "Fibre Channel over Ethernet (FCoE)"
          ],
          "question": "Which of the following tools might be useful in data discovery efforts that are based on content analysis?",
          "correct": 0
      },
      {
          "answers": [
              "Regulator involvement changes the attack surface.",
              "Advanced notice removes the element of surprise.",
              "Attackers don't use remote access for cloud activity.",
              "When cloud customers use malware, it's not the same as when attackers use malware."
          ],
          "question": "When a customer performs a penetration test in the cloud, why isn't the test an optimum simulation of attack conditions?",
          "correct": 1
      },
      {
          "answers": [
              "Case of infringing on the rights of the provider",
              "Risk",
              "Threat",
              "Hybrid cloud deployment model"
          ],
          "question": "Jacob works as a cloud customer at XYZ. He is encrypting cloud data where he retains control of the encryption keys, and the cloud provider only processes and stores the data. This can be considered as which of the following?",
          "correct": 3
      },
      {
          "answers": [
              "The jurisdiction where the attack takes place",
              "The target of the attack",
              "The source location of the attack",
              "The type of threat vector"
          ],
          "question": "Which of the following has the most effect on exposure factor (EF)?",
          "correct": 3
      },
      {
          "answers": [
              "Secure Sockets Layer (SSL)",
              "MD5",
              "Advanced Encryption Standard (AES)",
              "Blowfish"
          ],
          "question": "Taylor, a security administrator, wants to encrypt information and is currently the standard for the U.S. government in protecting sensitive and secret documents. Which of the following is a symmetric block type of cipher will Taylor use?",
          "correct": 2
      },
      {
          "answers": [
              "The cost/benefit measure of closing the organization's relocation site (hot site/warm site) and using the cloud for disaster recovery instead",
              "Cloud provider offers to provide engineering assistance during the migration",
              "Rate sheets comparing a cloud provider to other cloud providers",
              "SLA satisfaction surveys from other (current and past) cloud customers"
          ],
          "question": "Your organization is deciding whether to migrate from a traditional environment to a particular cloud provider. Which of the following would probably best aid in your organization's decision?",
          "correct": 3
      },
      {
          "answers": [
              "The BC/DR provider becomes the new normal production environment.",
              "All data is lost irretrievably.",
              "Regulators will find the organization in violation of compliance guidance.",
              "Both providers are affected by the emergency, extending the time before return to normal can occur."
          ],
          "question": "Returning to normal operations is a phase in BC/DR activity when the emergency is over, and regular production can resume. Which of the following can sometimes be the result when the organization uses two different cloud providers for the production and BC/DR environments?",
          "correct": 0
      },
      {
          "answers": [
              "Your organization is subject to the vulnerability the patch addresses.",
              "Your end clients will no longer trust your organization, and this will hurt your revenue flow.",
              "The cloud provider may sue your organization for breach of contract.",
              "The cloud provider will suspend your access for violating its terms of service."
          ],
          "question": "You are the security manager for an organization that uses the cloud for its production environment. According to your contract with the cloud provider, your organization is responsible for patching. A new patch is issued by one of your vendors. You decide not to apply it immediately for fear of interoperability problems. What additional risks are you accepting?",
          "correct": 0
      },
      {
          "answers": [
              "Service Organization Control (SOC) 2, Type 2 report matrix",
              "ISO 27001 certification requirements",
              "statement on Auditing Standards (SAS) 70 standard",
              "statement on Standards for Attestation Engagements (SSAE) 18 standard"
          ],
          "question": "An audit against the ____________ will demonstrate that an organization has a holistic, comprehensive security program.",
          "correct": 1
      },
      {
          "answers": [
              "The regulator",
              "The cloud provider",
              "The cloud customer",
              "The end-user/client"
          ],
          "question": "Your organization has set up an IaaS arrangement. Who accepts responsibility for securing cloud-based applications?",
          "correct": 2
      },
      {
          "answers": [
              "Destroying",
              "Storing",
              "Viewing",
              "Printing"
          ],
          "question": "In personally identifiable information (PII) context, which of the following is not normally considered “processing”?",
          "correct": 2
      },
      {
          "answers": [
              "Enterprise networking model",
              "Legacy networking model",
              "Converged networking model",
              "Software-defined networking model"
          ],
          "question": "Which type of networking model is optimized for cloud deployments in which the underlying storage and IP networks are combined so as to maximize the benefits of a cloud workload?",
          "correct": 2
      },
      {
          "answers": [
              "National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53",
              "The Federal Information Systems Management Act (FISMA)",
              "The General Data Protection Regulation (GDPR)",
              "Belgian law"
          ],
          "question": "You are the security director for an online retailer in Belgium. In February 2019, an audit reveals that your company may have been responsible for exposing personal data belonging to some of your customers over the previous month. Which law is applicable in this instance?",
          "correct": 2
      },
      {
          "answers": [
              "National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53",
              "The Federal Information Systems Management Act (FISMA)",
              "The General Data Protection Regulation (GDPR)",
              "Belgian law"
          ],
          "question": "You are the security director for an online retailer in Belgium. In February 2019, an audit reveals that your company may have been responsible for exposing personal data belonging to some of your customers over the previous month. Which law is applicable in this instance?",
          "correct": 2
      }
  ]);
  }
}
