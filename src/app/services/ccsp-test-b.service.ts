import { Injectable } from '@angular/core';
import { UtilitiesService } from'./utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CcspTestBService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions(
      [
        {
            "answers": [
                "802.11X",
                "Security Assertion Markup Language (SAML) 2.0",
                "X.509 certificates",
                "The Diffie-Hellman process"
            ],
            "question": "Sophia, a security analyst, wants to authenticate a connection and create a shared secret for the duration of the session by using TLS. Which of the following will he use to complete the task?",
            "correct": 2
        },
        {
            "answers": [
                "3",
                "4",
                "1",
                "2"
            ],
            "question": "In terms of the number of security functions offered, which is the highest Federal Information Processing Standard (FIPS) 140-2 security level a cryptographic module can achieve in certification?",
            "correct": 1
        },
        {
            "answers": [
                "The term is not used only by (ISC)2.",
                "It's not actually a cycle.",
                "Not all phases relate to how data is involved in the cloud.",
                "Not all phases are secure."
            ],
            "question": "Why is the term (ISC)2 Cloud Secure Data Lifecycle actually somewhat inaccurate?",
            "correct": 1
        },
        {
            "answers": [
                "Content filtering",
                "Command execution",
                "Port forwarding",
                "Physical log-on"
            ],
            "question": "Secure Shell (SSH) tunneling can include which of the following services?",
            "correct": 2
        },
        {
            "answers": [
                "Agile business intelligence",
                "Real-time analytics",
                "Big data",
                "Agile analytics"
            ],
            "question": "Which of the following is a data discovery approach used by e-commerce retailers to discern and predict shoppers' needs?",
            "correct": 1
        },
        {
            "answers": [
                "Data classification/categorization issues",
                "Prediction of physical device theft",
                "External hacking detection",
                "Social engineering attacks"
            ],
            "question": "Event monitoring tools like security information and event management (SIEM)/security information management (SIM)/security event management (SEM) can aid in which of the following efforts?",
            "correct": 2
        },
        {
            "answers": [
                "Infringing",
                "Data dispersion",
                "Cryptoshredding",
                "Voiding"
            ],
            "question": "What is a form of cloud data protection where data is spread across multiple storage devices/locations, similar to RAID in the legacy environment?",
            "correct": 1
        },
        {
            "answers": [
                "HTTPS and REST",
                "REST and SOAP",
                "XML and SOAP",
                "REST and XML"
            ],
            "question": "What are the two main types of APIs used with cloud-based systems and applications?",
            "correct": 1
        },
        {
            "answers": [
                "Adequate physical protections in the data center",
                "Whether necessary security controls are in place and functioning properly",
                "Lack of user training and awareness",
                "Potential criminal activity before it occurs"
            ],
            "question": "What can be revealed by an audit of a baseline virtual image, used in a cloud environment?",
            "correct": 1
        },
        {
            "answers": [
                "The National Security Agency (NSA)",
                "The European Union Agency for Network and Information Security (ENISA)",
                "Independent (private) laboratories",
                "The National Institute of Standards and Technology (NIST)"
            ],
            "question": "Who performs the review process for hardware security modules (HSMs) in accordance with the Federal Information Processing Standard (FIPS) 140-2?",
            "correct": 2
        },
        {
            "answers": [
                "The cloud customer",
                "The cloud provider",
                "The regulator(s)",
                "The Internet service provider (ISP)"
            ],
            "question": "Who will determine whether your organization's cloud migration is satisfactory from a compliance perspective?",
            "correct": 2
        },
        {
            "answers": [
                "Availability",
                "All of the triad",
                "Confidentiality",
                "Integrity"
            ],
            "question": "The Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing. According to the CSA, service traffic hijacking can affect which portion of the CIA triad?",
            "correct": 1
        },
        {
            "answers": [
                "Either hot aisle or cold aisle",
                "Free flow",
                "Cold aisle",
                "Hot aisle"
            ],
            "question": "You are designing a private cloud data center for an insurance underwriter, to be located  in a major metropolitan area. Which of the following airflow management schemes is preferable?",
            "correct": 0
        },
        {
            "answers": [
                "72",
                "80",
                "93",
                "32"
            ],
            "question": "According to the American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for internal environmental conditions within a data center, which of the following temperature settings would be considered high?",
            "correct": 2
        },
        {
            "answers": [
                "Loss of utility power",
                "Physical security breaches",
                "Man-in-the-middle attacks",
                "Financial upheaval"
            ],
            "question": "Which of the following risks exists in the traditional environment but is dramatically increased by moving into the cloud?",
            "correct": 2
        },
        {
            "answers": [
                "Community",
                "Public",
                "Private",
                "Hydrogenous"
            ],
            "question": "You are the IT security subject matter expert for a hobbyist collective that researches and archives old music. Your collective is set up in such a way that the members own various pieces of the network themselves, pool resources and data, and communicate and share files via the Internet. This is an example of what cloud model?",
            "correct": 0
        },
        {
            "answers": [
                "There are no regulators for cloud operations.",
                "Getting physical access can be difficult.",
                "Data in the cloud can't be audited.",
                "Controls in the cloud can't be audited."
            ],
            "question": "Of the following options, which is a reason cloud data center audits are often less easy to verify than traditional audits?",
            "correct": 1
        },
        {
            "answers": [
                "optimum performance and security provision",
                "user requirements and management requests",
                "regulatory mandates",
                "business needs and acceptable risk"
            ],
            "question": "Access should be based on ________________.",
            "correct": 3
        },
        {
            "answers": [
                "Database activity monitor (DAM)",
                "Application programming interface (API) gateway",
                "Extensible Markup Language (XML) gateway",
                "Web application firewall (WAF)"
            ],
            "question": "Juan, a network administrator, wants to deploy a set of microservices to clients instead of building one monolithic application. Which of the following will he use to coordinate client requests?",
            "correct": 1
        },
        {
            "answers": [
                "Copyright",
                "Trade secret",
                "Patent",
                "Trademark"
            ],
            "question": "Laura, an IT security analyst, works for an organization that researches and archives old music. Her collective exchanges music files in two forms: images of written sheet music and electronic copies of recordings. Both of these are protected by what intellectual property legal constructs?",
            "correct": 0
        },
        {
            "answers": [
                "Cryptoparsing",
                "Cryptosporidium",
                "Cryptoshredding",
                "Data dispersion"
            ],
            "question": "Which of the following should occur during the final phase of the Cloud Secure Data Lifecycle?",
            "correct": 2
        },
        {
            "answers": [
                "3",
                "4",
                "2",
                "1"
            ],
            "question": "The Cloud Security Alliance (CSA) Security, Trust, and Assurance Registry (STAR) program includes a level of certification for cloud providers that acquire third-party assessments of their environment and controls. Which STAR level is this?",
            "correct": 2
        },
        {
            "answers": [
                "It allows for processing of encrypted material without decrypting it first.",
                "It helps in planning security controls for the data.",
                "It helps in management of keys in cryptography.",
                "It restricts permissions for modifying and processing the data."
            ],
            "question": "Which of the following statements are true of the archive phase?\n\n\nEach correct answer represents a complete solution. Choose two.",
            "correct": 2
        },
        {
            "answers": [
                "ISO 27002",
                "PCI DSS",
                "NIST SP 800-37",
                "HIPAA"
            ],
            "question": "Which standard contains guidance for selecting, implementing, and managing information security controls mapped to an information security management system (ISMS) framework?",
            "correct": 0
        },
        {
            "answers": [
                "Risk avoidance",
                "Risk acceptance",
                "Risk mitigation",
                "Risk transference"
            ],
            "question": "Ron, a security analyst, found an unknown design flaw in a product. He notices that correcting the flaw would be cost-prohibitive and would only affect a very small number of customers. Rather than recalling the product, he decided to simply leave the product as it is. This is best described as what type of risk response technique?",
            "correct": 1
        },
        {
            "answers": [
                "DNS",
                "CDN",
                "MX",
                "DLP"
            ],
            "question": "Roma, a cloud administrator, wants to increase the scalability and decrease the latency of a website or mobile application in response to traffic spikes. She is facing problems in accelerating the downloading of web pages, images, videos, and other content. What should Roma use to fix this?",
            "correct": 1
        },
        {
            "answers": [
                "Interoperability",
                "Broad network access",
                "Portability",
                "Reversibility"
            ],
            "question": "Which concept describes the ease of moving data from one cloud provider to another?",
            "correct": 2
        },
        {
            "answers": [
                "If it's software-based and your production environment is in a platform as a service (PaaS) model",
                "If it affects all guest instances on any given host device",
                "If you purchased it from a vendor other than the cloud provider",
                "If it's hardware-based and your production environment is in an infrastructure as a service (IaaS) model"
            ],
            "question": "You are the security manager of a small firm that has just purchased an egress monitoring solution to implement in your cloud-based production environment. In which of the following cases would you not have to get permission from the cloud provider to install and implement the tool?",
            "correct": 0
        },
        {
            "answers": [
                "Companies that provide services",
                "U.S. federal government",
                "Privately held companies",
                "Nonprofit organizations"
            ],
            "question": "The Statement on Standards for Attestation Engagements 18 (SSAE 18) Service Organization Control (SOC) reports are audit tools promulgated by the American Institute of Certified Public Accountants (AICPA). What kind of entities were SOC reports designed to audit?",
            "correct": 0
        },
        {
            "answers": [
                "SQL injection",
                "Cross-site scripting",
                "Insecure direct-object reference",
                "Social engineering"
            ],
            "question": "Your organization is using database activity monitors (DAMs) to reduce the potential success of which of the following attacks?",
            "correct": 0
        },
        {
            "answers": [
                "asymmetric, asymmetric",
                "symmetric, asymmetric",
                "asymmetric, symmetric",
                "symmetric, symmetric"
            ],
            "question": "Transport Layer Security (TLS) is a session encryption tool that uses _________________ encryption to create a ______________ session key.",
            "correct": 2
        },
        {
            "answers": [
                "Policy revision",
                "Logical design",
                "Physical design",
                "Audit"
            ],
            "question": "What aspect of data center planning occurs first?",
            "correct": 1
        },
        {
            "answers": [
                "System design",
                "Security controls",
                "Costs",
                "Operating efficiency"
            ],
            "question": "Which of the following would be covered by an external audit and not by an internal audit?",
            "correct": 1
        },
        {
            "answers": [
                "Host escape",
                "Guest escape",
                "Lack of control",
                "Provider exit"
            ],
            "question": "What is the term that describes the situation when a malicious user or attacker can exit the restrictions of VM and access another VM residing on the same host?",
            "correct": 1
        },
        {
            "answers": [
                "Recovery time objective",
                "Maximum allowable downtime",
                "Mean time to failure",
                "Recovery point objective"
            ],
            "question": "You are considering cloud data replication strategies (i.e., whether you are making backups at the block, file, or database level). Which element of your organization's BC/DR plan will be most affected by your choice?",
            "correct": 3
        },
        {
            "answers": [
                "IaaS",
                "NaaS",
                "SaaS",
                "PaaS"
            ],
            "question": "In the ______ cloud model, the provider is responsible for system maintenance, and the customer only supplies and processes data to and in the system.",
            "correct": 2
        },
        {
            "answers": [
                "under-floor",
                "external ambient",
                "return air",
                "server inlet"
            ],
            "question": "Setting thermostat controls by measuring the ________________ temperature will result in the highest energy costs.",
            "correct": 2
        },
        {
            "answers": [
                "Use plugin media.",
                "Use strong cryptography.",
                "Use favorable contract language.",
                "Use proprietary data formats."
            ],
            "question": "What is probably the optimum way to avoid vendor lock-in?",
            "correct": 2
        },
        {
            "answers": [
                "Asymmetric keys should be passed out of the band.",
                "Losing the keys is equivalent to the gaining of data.",
                "It is good practice to introduce pseudorandom numbers when generating keys.",
                "Public keys should never be shared with anyone."
            ],
            "question": "As in a traditional IT environment, proper key management is crucial in the cloud. Which of the following principles is true regarding key management?",
            "correct": 2
        },
        {
            "answers": [
                "Penetration testing",
                "Runtime application self-protection",
                "Dynamic application security testing",
                "Static application security testing"
            ],
            "question": "Management has requested that security testing be done against their live cloud-based applications, with the testers not having internal knowledge of the system. Not attempting to actually breach systems or inject data is also a top requirement. Which of the following would be the appropriate approach to take?",
            "correct": 2
        },
        {
            "answers": [
                "Design",
                "Develop",
                "Detect",
                "Define"
            ],
            "question": "Regardless of which model the organization uses for system development, in which phase of the software development lifecycle (SDLC) will user input be requested and considered?",
            "correct": 3
        },
        {
            "answers": [
                "3",
                "1",
                "7",
                "2"
            ],
            "question": "A WAF operates at which of the following layers of the Open Systems Interconnection (OSI) model?",
            "correct": 2
        },
        {
            "answers": [
                "Transposition",
                "Parity bits",
                "Deltas",
                "Inversion"
            ],
            "question": "Erasure coding, in the cloud, is similar to what element of RAID implementations in a traditional IT environment?",
            "correct": 1
        },
        {
            "answers": [
                "Biometrics, smart cards, and strong passwords",
                "Smart cards, usernames, and PIN",
                "Usernames, strong passwords, and PIN",
                "Smart cards, usernames, and strong passwords"
            ],
            "question": "Mark, a security analyst, is tasked to implement multi-factor authentication in a company. Which of the following is the best implementation that he should deploy?",
            "correct": 0
        },
        {
            "answers": [
                "Health Industry Portability and Accountability Act (HIPPA)",
                "Gramm–Leach–Bliley Act (GLBA)",
                "Sarbanes–Oxley Act (SOX)",
                "Payment Card Industry (PCI)"
            ],
            "question": "Bob is designing a data center to support his organization, a financial services firm. Bob's data center will have to be approved by regulators using a framework under which law?",
            "correct": 1
        },
        {
            "answers": [
                "CSRF",
                "Ransomware",
                "XSS",
                "SQL injection"
            ],
            "question": "An attacker exploits vulnerabilities in dynamically generated Webpages to inject a client-side script into Webpages viewed by other users. Which of the following Web application attacks is the attacker performing?",
            "correct": 2
        },
        {
            "answers": [
                "Public-key infrastructure (PKI)",
                "Federation",
                "Repudiation",
                "Portability"
            ],
            "question": "You work for a government research facility. Your organization often shares data with other government research organizations. You would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations. Instead of replicating the data stores of each organization at every other organization (which is one way of accomplishing this goal), you instead want every user to have access to each organization's specific storage resources. What is the term for this kind of arrangement?",
            "correct": 1
        },
        {
            "answers": [
                "Quarterly",
                "Annually",
                "Continually",
                "Weekly"
            ],
            "question": "How often should cable management efforts take place?",
            "correct": 2
        },
        {
            "answers": [
                "An hour",
                "10 minutes",
                "Long enough to perform graceful shutdown of data center systems",
                "12 hours"
            ],
            "question": "How long should the uninterruptible power supply (UPS) provide power to the systems in the data center?",
            "correct": 2
        },
        {
            "answers": [
                "Failsafe or “last person out” switches",
                "Occupant's knowledge ",
                "Filters",
                "Water cooling"
            ],
            "question": "Gaseous fire suppression systems that function by displacing oxygen need to be installed in conjunction with which of the following?",
            "correct": 0
        },
        {
            "answers": [
                "Reduces cash flow risks",
                "Increases profit",
                "Reduces tax exposure",
                "Reduces the overall cost"
            ],
            "question": "What is the business advantage of shifting from capital expenditure in an on-premises environment to the operating expenditures of a cloud environment?",
            "correct": 0
        },
        {
            "answers": [
                "Key length variances don't provide any actual additional security.",
                "It would cause additional processing overhead and time delay.",
                "The data subjects might be upset by this.",
                "It might result in vendor lockout."
            ],
            "question": "Encryption is an essential tool for affording security to cloud-based operations. While it is possible to encrypt every system, piece of data, and transaction that takes place on the cloud, why might that not be the optimum choice for an organization?",
            "correct": 1
        },
        {
            "answers": [
                "Identity validation/access permission",
                "User access/privileged access",
                "Inverse incantation/obverse instantiation",
                "Code verification/code implementation"
            ],
            "question": "What is the major difference between authentication and authorization?",
            "correct": 0
        },
        {
            "answers": [
                "Redundancy",
                "Pay-per-use",
                "Self-service",
                "Scalability"
            ],
            "question": "Which of these characteristics of a virtualized network adds risks to the cloud environment?",
            "correct": 3
        },
        {
            "answers": [
                "logging",
                "high-speed processing",
                "performance-enhancing",
                "cross-platform functionality"
            ],
            "question": "The logical design of a cloud environment can enhance the security offered in that environment. For instance, in a software as a service (SaaS) cloud, the provider can have ____________ capabilities into the application itself.",
            "correct": 0
        },
        {
            "answers": [
                "the traffic must be encrypted",
                "the communications must go through a gateway",
                "the external endpoint must be in receive mode",
                "a repeater must be used"
            ],
            "question": "In order for communications from inside a virtual local area network (VLAN) to reach endpoints outside the VLAN, ________________.",
            "correct": 1
        },
        {
            "answers": [
                "Public",
                "Hybrid",
                "Community",
                "Private"
            ],
            "question": "Your company does not have a well-trained, experienced IT staff and is reluctant to spend more money on training personnel (in recent company history, personnel have received training and then immediately quit the company to work for competitors). If senior management considers cloud migration, which deployment model would probably best suit their needs?",
            "correct": 0
        },
        {
            "answers": [
                "Using an automated teller machine (ATM) to get cash with your credit or debit card",
                "Using a password and personal identification number (PIN) to log into a website",
                "Presenting a voice sample and fingerprint to access a secure facility",
                "Displaying a birth certificate and a credit card"
            ],
            "question": "Which of the following constitutes a multifactor authentication process or procedure?",
            "correct": 0
        },
        {
            "answers": [
                "The ability of users to gain administrative access rights without proper permission",
                "The ability of an unauthorized user to pretend to be an authorized user",
                "The ability of a participant in a transaction to refute that they've taken part in the transaction",
                "The ability of internal personnel to trigger business continuity/disaster recovery activities"
            ],
            "question": "Which of the following is not checked when using the STRIDE threat model?",
            "correct": 3
        },
        {
            "answers": [
                "Cross-site scripting",
                "Identity federation",
                "Single sign-on",
                "Insecure direct identifiers"
            ],
            "question": "A user signs on to a cloud-based social media platform. In another browser tab, the user finds an article worth posting to the social media platform. The user clicks on the platform's icon listed on the article's website, and the article is automatically posted to the user's account on the social media platform. This is an example of what?",
            "correct": 1
        },
        {
            "answers": [
                "social engineering",
                "using automated agents to perform dynamic testing",
                "having the developers review the code",
                "having the developers perform dynamic testing"
            ],
            "question": "The employment of users in dynamic software testing should be augmented by ______________.",
            "correct": 1
        },
        {
            "answers": [
                "SOC 2, Type 2",
                "SOC 3",
                "SOC 1",
                "SOC 2, Type 1"
            ],
            "question": "You are an IT security professional working for an organization that is considering migrating from your on-premises environment into the cloud. Assuming some have passed SSAE 18 audits and some haven't, which SOC report might be best to use for your initial review of several different cloud providers in order to narrow down the field of potential services in a fast, easy way?",
            "correct": 1
        },
        {
            "answers": [
                "The server inlets",
                "Underfloor plenums",
                "HVAC intakes",
                "The outside world"
            ],
            "question": "Heating, ventilation, and air conditioning (HVAC) systems cool the data center by pushing warm air into which of the following?",
            "correct": 3
        },
        {
            "answers": [
                "500,000 euros",
                "US$100,000",
                "20,000,000 euros",
                "1,000,000 euros"
            ],
            "question": "Administrative penalties for violating the General Data Protection Regulation (GDPR) can range up to ______________.",
            "correct": 2
        },
        {
            "answers": [
                "Walk-through",
                "Failover",
                "Benchmark",
                "Penetration"
            ],
            "question": "Which testing validates a system's ability to be able to allocate extra resources and to move operations to back-up systems during the server failure due to one or the other reasons?",
            "correct": 1
        },
        {
            "answers": [
                "Physical loss or theft of a device",
                "Malicious cloud administrators accessing the data",
                "Virtual machine snapshots stolen from storage",
                "Disgruntled users"
            ],
            "question": "Volume storage encryption in an infrastructure as a service (IaaS) arrangement will protect against data loss due to which of the following activities?\n",
            "correct": 2
        },
        {
            "answers": [
                "Interoperability",
                "Portability",
                "Stability",
                "Security"
            ],
            "question": "You are the security subject matter expert (SME) for an organization considering a transition from a traditional IT enterprise environment into a hosted cloud provider's data center. One of the challenges you're facing is whether your current applications in the on-premises environment will function properly with the provider's hosted systems and tools. Which of the following issues is explained in the scenario?",
            "correct": 0
        },
        {
            "answers": [
                "User training",
                "Input validation/bounds checking",
                "Physical locks",
                "Hardening the OS"
            ],
            "question": "The Open Web Application Security Project (OWASP) Top Ten list usually includes “injection.” In most cases, what is the method for reducing the risk of an injection attack?",
            "correct": 1
        },
        {
            "answers": [
                "Perform a black box assessment.",
                "Conduct a tabletop testing.",
                "Hire an external red team audit.",
                "Recreate the previous breach."
            ],
            "question": "A company is concerned about how its employees would perform their tasks in a given BC/DR scenario. Which of the following methods should be performed by the company to achieve this goal while minimizing disruption?",
            "correct": 1
        },
        {
            "answers": [
                " Customization",
                "Auditing",
                "Physical security",
                "Training"
            ],
            "question": "Using a virtual machine baseline image could be very useful for which of the following options?",
            "correct": 1
        },
        {
            "answers": [
                "functional requirement",
                "nonfunctional requirement",
                "third-party function",
                "regulatory issue"
            ],
            "question": "You are the IT security manager for a video game software development company. For your company, minimizing security flaws in the delivered product is probably a ____________________.",
            "correct": 1
        },
        {
            "answers": [
                "Include a CAPTCHA code as part of the user resource request process.",
                "Don't allow links to or from other websites.",
                "Have users remove all browsers from their devices.",
                "Train users to detect forged HTTP requests."
            ],
            "question": "Which of these is a technique to reduce the potential for a CSRF in the OWASP Top Ten list?",
            "correct": 0
        },
        {
            "answers": [
                "Higher likelihood of inadvertent disclosure",
                "Raised incidence of physical theft",
                "Flawed management decisions based on edited displays",
                "Increased chance of external penetration"
            ],
            "question": "What is the risk to the organization posed by dashboards that display data discovery results?",
            "correct": 2
        },
        {
            "answers": [
                "The National Institute of Standards and Technology (NIST)",
                "International Information System Security Certification Consortium, or (ISC)2",
                "The International Standards Organization (ISO)",
                "The U.S. Office of Management and Budget (OMB)"
            ],
            "question": "Who publishes the list of cryptographic modules validated according to the Federal Information Processing Standard (FIPS) 140-2?",
            "correct": 0
        },
        {
            "answers": [
                "SYN-ACK",
                "RAID",
                "BIOS",
                "DDoS"
            ],
            "question": "Bit-splitting, also known as data dispersion, might be thought of as _________ in the cloud.",
            "correct": 1
        },
        {
            "answers": [
                "Ephermal storage",
                "Object storage",
                "Short-term storage",
                "Logical unit number (LUN)"
            ],
            "question": "Which of the following terms describes a cloud storage area that uses a hierarchy?",
            "correct": 1
        },
        {
            "answers": [
                "GLBA",
                "FERPA",
                "SOX",
                "HIPAA"
            ],
            "question": "Maxi is the chief information security officer at a major non-profit hospital group. Which of the following regulations most directly covers the way that her organization handles medical records?",
            "correct": 3
        },
        {
            "answers": [
                "The company operates proprietary software.",
                "The company is seeking to enhance its business continuity and disaster recovery (BC/DR) capabilities.",
                "The company hopes to reduce energy costs related to operation of a data center.",
                "The company wants to reduce overhead costs."
            ],
            "question": "A company is considering a cloud migration to a platform as a service (PaaS) environment. Which of the following factors might make the company less likely to choose the cloud environment?",
            "correct": 0
        },
        {
            "answers": [
                "sensitive data that may leave the organization's control",
                "all data within the organization's control",
                "data being processed by the organization's users",
                "data that could be intercepted while out of the organization's control"
            ],
            "question": "Data loss prevention or data leak protection (DLP)  solutions are implemented in the hopes of securing _________________.",
            "correct": 0
        },
        {
            "answers": [
                "Data at rest",
                "Data in motion",
                "Data in use",
                "Data of relief"
            ],
            "question": "The cloud security professional should be aware that encryption would be necessary for which of the following aspects of a cloud deployment?",
            "correct": 2
        },
        {
            "answers": [
                "Pure risks",
                "Absolute risks",
                "Secondary risks",
                "Residual risks"
            ],
            "question": "For giving response to risks, a program manager identifies and directs actions to reduce the negative consequences of the risks. However, he finds some of the risks that are expected to remain after planned responses have been taken. What is this group of risks called?",
            "correct": 3
        },
        {
            "answers": [
                "SOX",
                "HIPAA",
                "NIST 800-53",
                "GLBA"
            ],
            "question": "Which U.S. federal law affects banking and insurance companies?",
            "correct": 3
        },
        {
            "answers": [
                "The incident response team",
                "The accounting department",
                "The security manager",
                "The user's manager"
            ],
            "question": "Who should be involved in review and maintenance of user accounts/access?",
            "correct": 3
        },
        {
            "answers": [
                "IDS",
                "SIEM",
                "Log manager",
                "Firewall"
            ],
            "question": "Snow, a data administrator, is looking for a solution to the centralized storage and analysis of security log information. Which of the following will she use?",
            "correct": 1
        },
        {
            "answers": [
                "The billing department should get only a masked version of the customer's credit card number.",
                "The shipping department should get only a masked version of the customer's address.",
                "The customer service department should get only a masked version of the customer's SS number.",
                "The HR department should get only a masked version of the employee's driver's license number."
            ],
            "question": "Which of the following is a good business case for the use of data masking?",
            "correct": 2
        },
        {
            "answers": [
                "Cloud reseller",
                "Cloud database",
                "Cloud customer",
                "Cloud provider"
            ],
            "question": "You are the IT director for an automotive parts supply distribution service. Your company wants to operate a production environment in the cloud. In reviewing provider options, management considers an offer from Cloud Services Corp., who has contracts with several cloud providers and data centers and has offered to tailor a package of services for your company's needs. In this case, Cloud Services Corp. is considered as which of the following?",
            "correct": 0
        },
        {
            "answers": [
                "Building a completely new data center",
                "Leasing a data center that is currently owned by another firm",
                "Renting private cloud space in a Tier 2 data center",
                "Staying with the current data center"
            ],
            "question": "You are the security manager for a small surgical center. Your organization is reviewing upgrade options for its current, on-premises data center. In order to meet your needs, which one of the following options would you recommend to senior management?",
            "correct": 0
        },
        {
            "answers": [
                "The cloud provider",
                "The end user",
                "The regulator(s)",
                "The cloud customer"
            ],
            "question": "In a public cloud services arrangement, who creates governance that will determine which controls are selected for the data center and how they are deployed?",
            "correct": 0
        },
        {
            "answers": [
                "Users enhance their productivity however they can.",
                "Hackers are constantly infiltrating all APIs.",
                "APIs can't ever be secure.",
                "Users are constantly trying to break the security of your environment."
            ],
            "question": "Your organization's users are using unapproved APIs, especially in a BYOD environment. Which of the following reasons is responsible for this?",
            "correct": 0
        },
        {
            "answers": [
                "Due care",
                "Reciprocity",
                "Liability",
                "Due diligence"
            ],
            "question": "_______________ is the legal concept whereby a cloud customer is held to a reasonable expectation for providing security of its users' and clients' private data.",
            "correct": 0
        },
        {
            "answers": [
                "IaaS",
                "IPSec",
                "GRE",
                "XML"
            ],
            "question": "Which technology is most associated with tunneling?",
            "correct": 2
        },
        {
            "answers": [
                "marketing material",
                "plans and policies",
                "personally identifiable information (PII)",
                "intellectual property"
            ],
            "question": "Digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM) can be used to protect all sorts of sensitive data but are usually particularly designed to secure ______________.",
            "correct": 3
        },
        {
            "answers": [
                "Municipal codes",
                "The size of the plot",
                "Utility availability",
                "Staffing"
            ],
            "question": "When building a new data center within an urban environment, which of the following is probably the most restrictive aspect?",
            "correct": 0
        },
        {
            "answers": [
                "The level of sensitivity of data that can be used to protect",
                "The amount of physical protection provided by the product, in terms of tamper resistance",
                "The geographic locations in which the product is allowed",
                "The size of the IT environment the product can be used to protect"
            ],
            "question": "What distinguishes the Federal Information Processing Standard (FIPS) 140-2 security levels for cryptographic modules?",
            "correct": 1
        },
        {
            "answers": [
                "Didactic alignment",
                "Inverse postulation",
                "Homomorphic encryption",
                "Obverse reinstantiation"
            ],
            "question": "Which of the following is a theoretical technology that is intended to allow encrypted material to be processed and manipulated without decrypting it first?",
            "correct": 2
        },
        {
            "answers": [
                "1",
                "2",
                "4",
                "3"
            ],
            "question": "Bob is designing a data center to support his organization, a financial services firm. What Uptime Institute tier rating should Bob try to attain in order to meet his company's needs without adding extraneous costs?",
            "correct": 3
        },
        {
            "answers": [
                "VM",
                "hypervisor",
                "administrator",
                "router"
            ],
            "question": "Orchestrating resource calls is the job of the ________.",
            "correct": 1
        },
        {
            "answers": [
                "repudiation",
                "escalation of privilege",
                "inversion",
                "spoofing"
            ],
            "question": "The possibility that a user could gain access or control of an application so as to take on administrator or management capabilities is called _________.",
            "correct": 1
        },
        {
            "answers": [
                "They have invested heavily in the secure KVM market.",
                "Managed cloud providers often manufacture their own devices as well.",
                "Cloud data centers need very few of these devices.",
                "They have plenty of revenue and can afford it."
            ],
            "question": "Modern managed cloud service providers will often use secured keyboard/video/mouse (KVM) devices within their data centers. These devices are extremely expensive compared to their non-secured counterparts. Which of the following is one of the reasons cloud service providers do this?",
            "correct": 2
        },
        {
            "answers": [
                "Databases",
                "Volume storage",
                "Content delivery network (CDN)",
                "Object storage"
            ],
            "question": "What is a form of cloud storage where data is stored in a logical storage area assigned to the user but not necessarily physically attached or even geographically proximate to the compute node the user is utilizing?",
            "correct": 1
        },
        {
            "answers": [
                "Audit",
                "Regulator",
                "Training",
                "Service-level agreement (SLA)"
            ],
            "question": "Which mechanism best aids to ensure that the cloud customer receives dependable, consistent performance in the cloud environment?",
            "correct": 3
        },
        {
            "answers": [
                "In the operating system on which the application is run",
                "In the application accessing the database",
                "In the volume where the database resides",
                "Within the database accessed by the application"
            ],
            "question": "In application-level encryption, where does the encryption engine reside?",
            "correct": 1
        },
        {
            "answers": [
                "System administrators",
                "Data owners",
                "The cloud provider",
                "Senior management"
            ],
            "question": "Who should determine which users have access to which specific objects?",
            "correct": 1
        },
        {
            "answers": [
                "Monitoring inbound traffic",
                "Preventing distributed denial of service (DDoS) attacks",
                "Segmenting networks",
                "Monitoring outbound traffic"
            ],
            "question": "What is perhaps the main way in which software-defined networking (SDN) solutions facilitate security in the cloud environment?",
            "correct": 2
        },
        {
            "answers": [
                "Because it resides on the bootable software",
                "Because it runs on the top of the OS on a host device",
                "Because it has direct access to physical hardware",
                "Because it provides information related to the types of security controls on the instance"
            ],
            "question": "Why is Type 2 hypervisor most preferred by the attackers to breach the content of a workstation?",
            "correct": 1
        },
        {
            "answers": [
                "Encryption has to be maintained.",
                "Open but unassigned accounts are vulnerabilities.",
                "Extra accounts cost so much extra money.",
                "User tracking is essential to performance."
            ],
            "question": "Why is the deprovisioning element of the identification component of identity and access management (IAM) so important?",
            "correct": 1
        },
        {
            "answers": [
                "Authorization",
                "Identification",
                "Authentication",
                "Federation"
            ],
            "question": "What is the process of granting access to resources?",
            "correct": 0
        },
        {
            "answers": [
                "Copyright",
                "Trademark",
                "Patent\n",
                "Trade secret"
            ],
            "question": "Max is the co-founder of a manufacturing firm. Together with his partner, Joe, he has developed a special type of oil that will dramatically improve the manufacturing process. To keep the formula secret, Max and Joe plan to make large quantities of the oil by themselves in the plant after the other workers have left. They want to protect this formula for as long as possible. What type of intellectual property protection best suits their needs?",
            "correct": 3
        },
        {
            "answers": [
                "Gramm-Leach-Bliley Act (GLBA)",
                "Health Information Portability and Accountability Act (HIPAA)",
                "Payment Card Industry Data Security Standard (PCI DSS)",
                "Family and Medical Leave Act (FMLA)"
            ],
            "question": "A group of clinics decides to create an identification federation for their users (medical providers and clinicians). In this federation, all of the participating organizations would need to be in compliance with which U.S. federal regulation?",
            "correct": 1
        },
        {
            "answers": [
                "SaaS",
                "Hybrid",
                "PaaS",
                "IaaS"
            ],
            "question": "Your company wants to install its own software solutions in a managed environment to decrease the cost of purchasing and maintaining the hardware of a data center. You should most likely be considering which offerings?",
            "correct": 2
        },
        {
            "answers": [
                "RAID is a category of disk drive that employs two or more drives to store data redundantly.",
                "RAID drives automatically drop the last four digits of a file name if the file has a double file name extension, thereby preventing programs with a .exe extension from executing.",
                "RAID drives automatically disable greynet applications when they are downloaded.",
                "RAID drives are immune to SQL injection."
            ],
            "question": "Jacob is the network administrator for his company. The company has a large amount of data that is not being read or updated. Jacob stores this type of information on RAID drives. What could be the reason behind this?",
            "correct": 0
        },
        {
            "answers": [
                "biometric recognition",
                "log file generation",
                "hackback capabilities",
                "anti-tampering mechanisms"
            ],
            "question": "Virtual machine (VM) configuration management (CM) tools should probably include ______________________.",
            "correct": 1
        },
        {
            "answers": [
                "Encryption for data at rest and in motion",
                "Identity and access management (IAM) capability",
                "Field validation",
                "Distributed denial of service (DDoS) resistance"
            ],
            "question": "Designers making applications for the cloud have to take into consideration risks and operational constraints that did not exist or were not as pronounced in the traditional environment. Which of the following is an element cloud application designers may have to consider incorporating in software for the cloud that may not have been as important in the traditional environment?",
            "correct": 0
        },
        {
            "answers": [
                "Enhancing the user experience",
                "Encryption",
                "Compliance with PCI DSS",
                "Giving management oversight to e-commerce functions"
            ],
            "question": "What can tokenization be used for?",
            "correct": 2
        },
        {
            "answers": [
                "Communications tapping of their offices",
                "Physical surveillance of their property and personnel",
                "Code signing",
                "Subverting insiders"
            ],
            "question": "Your development team hired an external game development lab to work on part of the game engine. A few weeks before the initial release of your game, the company that owns the lab publishes a strikingly similar game, with many of the features and elements that appear in your work. Which of the following methods could be used to determine if your ownership rights were violated?",
            "correct": 2
        },
        {
            "answers": [
                "Collecting multiple data streams from your log files",
                "Simplifying regulatory compliance",
                "Enforcing contract terms between your organization and the cloud provider",
                "Ensuring that the baseline configuration is applied to all systems"
            ],
            "question": "You are the security policy lead for your organization, which is considering migrating from your on-premises, traditional IT environment into the cloud. You are reviewing the Cloud Security Alliance Cloud Controls Matrix (CSA CCM) as a tool for your organization. Which of the following benefits will the CSA CCM offer your organization?",
            "correct": 1
        },
        {
            "answers": [
                "Content delivery network",
                "Volume storage",
                "Object-based storage",
                "Database"
            ],
            "question": "Which of the following acts as a form of data caching to copy data which is commonly used by or requested by users?",
            "correct": 0
        },
        {
            "answers": [
                "Archive",
                "Deploy",
                "Use",
                "Store"
            ],
            "question": "According to the (ISC)2 Cloud Secure Data Lifecycle, which phase comes soon after (or at the same time as) the Create phase?",
            "correct": 3
        },
        {
            "answers": [
                "Object storage",
                "CDN",
                "Databases",
                "Volume storage"
            ],
            "question": "What is a form of cloud storage where data is stored as objects, arranged in a hierarchal structure, like a file tree?",
            "correct": 0
        },
        {
            "answers": [
                "Sarbanes-Oxley Act (SOX)",
                "Family Educational Rights and Privacy Act (FERPA)",
                "Payment Card Industry Data Security Standards (PCI DSS)",
                "Health Information Portability and Accountability Act (HIPAA)"
            ],
            "question": "You're a sophomore at a small, private medical teaching college in the midwestern United States. You make your tuition payments directly from your bank account via a debit card. Which of the following laws and standards will not be applicable to you, your personal data, or the data you work with as a student?",
            "correct": 0
        },
        {
            "answers": [
                "RA",
                "Key escrow",
                "PKI",
                "CA"
            ],
            "question": "Rex has implemented asymmetric key cryptography for the emails of his company. He is concerned that users may lose their private keys and will not be able to decrypt their messages. Which of the following is the best solution to this problem?",
            "correct": 1
        },
        {
            "answers": [
                "Department of Trade",
                "Department of Commerce",
                "Department of State",
                "Department of Interior"
            ],
            "question": "In the United States, who manages the Privacy Shield program for voluntary compliance with European Union (EU) data privacy laws?",
            "correct": 1
        },
        {
            "answers": [
                "PaaS, community",
                "IaaS, private",
                "PaaS, hybrid",
                "SaaS, hybrid"
            ],
            "question": "If a company wanted to retain some of its own internal traditional hardware but use the cloud as a means of performing software testing functions, which service and deployment models should it probably use?",
            "correct": 2
        },
        {
            "answers": [
                "Trade secret",
                "Patent",
                "Trademark",
                "Copyright"
            ],
            "question": "You are the IT security manager for a video game software development company. Which type of intellectual property protection will your company likely rely upon for legally enforcing your rights?",
            "correct": 3
        },
        {
            "answers": [
                "Run the application in an emulator.",
                "Make sure the application is fully updated and patched according to all vendor specifications.",
                "Remove the application from the organization's production environment and replace it with something else.",
                "Negotiate and conduct a trial run in the cloud environment for that application before permanently migrating."
            ],
            "question": "Which of the following is perhaps the best method for reducing the risk of a specific application not delivering the proper level of functionality and performance when it is moved from the traditional environment into the cloud?",
            "correct": 3
        },
        {
            "answers": [
                "Run the application in an emulator.",
                "Make sure the application is fully updated and patched according to all vendor specifications.",
                "Remove the application from the organization's production environment and replace it with something else.",
                "Negotiate and conduct a trial run in the cloud environment for that application before permanently migrating."
            ],
            "question": "Which of the following is perhaps the best method for reducing the risk of a specific application not delivering the proper level of functionality and performance when it is moved from the traditional environment into the cloud?",
            "correct": 3
        }
    ]
    );
  }
}
