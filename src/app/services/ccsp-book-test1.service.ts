import { Injectable } from '@angular/core';
import { UtilitiesService } from'./utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CcspBookTest1Service {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions([
      {
        "correct":2,
          "answers": [
              "Tier 1",
              "Tier 2",
              "Tier 3",
              "Tier 4"
          ],
          "question": "You are selecting a datacenter environment to host a cloud application run by your organization. Your primary requirement is that the datacenter must require no shutdowns for equipment maintenance. What is the lowest level of datacenter that would be acceptable under the Uptime Institute tier system?"
      },
      {
        "correct":1,
          "answers": [
              "The cloud provider",
              "The cloud customer",
              "The regulator",
              "The end user/client"
          ],
          "question": "In an infrastructure as a service (IaaS) arrangement, who accepts responsibility for securing cloud-based applications?"
      },
      {
        "correct":2,
          "answers": [
              "Dynamic application security testing (DAST)",
              "Static application security testing (SAST)",
              "Software composition analysis (SCA)",
              "Interactive application security testing (IAST)"
          ],
          "question": "Brenda's company employs a number of application developers who create software to meet many different business needs. She is embarking on a project to validate the use of verified open source software and is concerned about the unknowing use of software libraries by those developers. Which of the following technologies will best assist with identifying these uses?"
      },
      {
        "correct":2,
          "answers": [
              "Host intrusion detection systems (HIDS)",
              "Hardware security modules (HSM)",
              "Network intrusion detection systems (NIDS)",
              "Virtual private networks (VPNs)"
          ],
          "question": "________ are software or devices that monitor networks for malicious activities or policy violations and produce electronic alerts and/or reports to a management station."
      },
      {
        "correct":0,
          "answers": [
              "Only employees of Carla's company with the appropriate security training and access rights.",
              "Employees of Carla's company and customers with virtual machines running on that specific hypervisor.",
              "Employees of Carla's company and customers with appropriate security training.",
              "None of these groups should have hypervisor access."
          ],
          "question": "Carla works for an infrastructure as a service (IaaS) provider. She is analyzing the security settings for the hypervisors used in a multitenant environment. Who should have access to modify settings on those hypervisors?"
      },
      {
        "correct":0,
          "answers": [
              "Public cloud",
              "Private cloud",
              "Community cloud",
              "Shared cloud"
          ],
          "question": "In which cloud computing model does a customer share computing infrastructure with other customers of the cloud vendor where one customer may not know the other's identity?"
      },
      {
        "correct":2,
          "answers": [
              "",
              "Public-key infrastructure (PKI)",
              "Portability",
              "Federation",
              "Repudiation"
          ],
          "question": "You work for a government research facility. Your organization often shares data with other government research organizations. You would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations. Instead of replicating the data stores of each organization at every other organization (which is one way of accomplishing this goal), you instead want every user to have access to each organization's specific storage resources.What is the term for this kind of arrangement?"
      },
      {
        "correct":0,
          "answers": [
              "DLP",
              "CASB",
              "IPS",
              "NGFW"
          ],
          "question": "Paul's organization maintains protected health information that is regulated under HIPAA. He would like to add a new security control capable of detecting when employees attempt to remove this sensitive information from his organization's systems and networks, either intentionally or unintentionally. What security control would best meet his needs?"
      },
      {
        "correct":2,
          "answers": [
              "Broad network access",
              "Metered service",
              "Off-site storage",
              "On-demand self-service"
          ],
          "question": "Which of the following is not an essential element defining cloud computing?"
      },
      {
        "correct":3,
          "answers": [
              "Checklist review",
              "Full interruption test",
              "Parallel test",
              "Tabletop exercise"
          ],
          "question": "Justin recently participated in a disaster recovery plan test where the team sat together and discussed the response to a scenario but did not actually activate any disaster recovery controls. What type of test did he participate in?"
      },
      {
        "correct":2,
          "answers": [
              "ISO 27001",
              "ISO 27002",
              "ISO 27017",
              "ISO 27701"
          ],
          "question": "Tonya is employed by a cloud service provider and is responsible for evaluating the provider's security program. What ISO standard can best help her ensure that her organization has a robust set of security controls in place?"
      },
      {
        "correct":0,
          "answers": [
              "The data is safe only if data from the tokenization process was secure.",
              "The data is safe only if the cryptographic keys were not exposed.",
              "The data is safe only if a strong hash function was used in the tokenization process.",
              "The data is not safe and should be considered breached."
          ],
          "question": "Katie's organization recently suffered a data breach and exposed a database containing student records. The records contained no identifying information other than tokenized student ID numbers. Which of the following statements most accurately represents how Katie should feel about the exposure of these records?"
      },
      {
        "correct":1,
          "answers": [
              "Ensure that all entrances are secured with biometric-based locks.",
              "Purchase uninterruptible power supplies (UPSs) from different vendors.",
              "Include financial background checks in all personnel reviews for administrators.",
              "Make sure all raised floors have at least 24 inches of clearance."
          ],
          "question": "Bob is designing a datacenter to support his organization, a financial services firm. Which of the following actions would best enhance Bob's efforts to create resiliency in the datacenter?"
      },
      {
        "correct":3,
          "answers": [
              "EAL1",
              "EAL2",
              "EAL3",
              "EAL4"
          ],
          "question": "Under the Common Criteria, which one of the following EAL levels indicates that a system has been methodically designed, tested, and reviewed?"
      },
      {
        "correct":0,
          "answers": [
              "Honeypot",
              "HIDS",
              "Virtual application",
              "Sandbox"
          ],
          "question": "A(n) ______________ consists of a computer, data, or a network site that appears to be part of a network but is actually isolated and monitored. It also appears to contain data or resources of value that are in fact fake."
      },
      {
        "correct":3,
          "answers": [
              "Secure sockets layer (SSL)",
              "DNS Security Extensions (DNSSEC)",
              "Internet Protocol Secure (IPsec)",
              "Transport layer security (TLS)"
          ],
          "question": "Rusty is evaluating the security of a web-based SaaS application and wants to verify that the site provides strong encryption between the web server and the client. What is the most common way to achieve this goal?"
      },
      {
        "correct":1,
          "answers": [
              "SOC 1",
              "SOC 2",
              "SOC 3",
              "SOC 4"
          ],
          "question": "You operate a cloud service and would like a report that confirms the effectiveness of your security controls and provides significant detail of control gaps that you can use for remediation. What type of audit should you conduct?"
      },
      {
        "correct":3,
          "answers": [
              "Customers",
              "Regulators",
              "Partners",
              "All of the above"
          ],
          "question": "Adam's organization recently experienced a security breach that affected customer data. Which one of the following stakeholder groups might Adam be required to inform?"
      },
      {
        "correct":2,
          "answers": [
              "Rate limiting",
              "Access control",
              "Content filtering",
              "Logging"
          ],
          "question": "An application programming interface (API) gateway can typically offer all of the following capabilities except _________________."
      },
      {
        "correct":0,
          "answers": [
              "GPS",
              "IP address correlation",
              "User attestation",
              "MAC address correlation"
          ],
          "question": "When logging information about an internet user's location, what source provides the most accurate physical location data?"
      },
      {
        "correct":0,
          "answers": [
              "Hardware security module",
              "Secure BIOS",
              "Hardware token",
              "Host intrusion detection system"
          ],
          "question": "What type of device is designed to safely store and manage encryption keys?"
      },
      {
        "correct":1,
          "answers": [
              "The server",
              "The client",
              "The certifying authority",
              "The internet service provider (ISP)"
          ],
          "question": "The Transport Layer Security (TLS) protocol creates a secure communications channel over public media (such as the internet). In a typical TLS session, who initiates the protocol?"
      },
      {
        "correct":0,
          "answers": [
              " For questions 24-26, please refer to the following scenario:",
              "",
              "Darcy is an information security risk analyst for Roscommon Cloud Solutions. She is currently trying to decide whether the company should purchase an upgraded fire suppression system for their primary datacenter. The datacenter facility has a replacement cost of $2 million.",
              "",
              "After consulting with actuaries, datacenter managers, and fire subject matter experts, Darcy determined that a typical fire would likely require the replacement of all equipment inside the building but not cause significant structural damage. Together, they estimated that recovering from the fire would cost $750,000. They also determined that the company can expect a fire of this magnitude once every 50 years."
          ],
          "question": "In what cloud computing service model is the customer responsible for installing and maintaining the operating system?IaaSPaaSSaaSFaaS"
      },
      {
        "correct":3,
          "answers": [
              "7.5 percent",
              "15.0 percent",
              "27.5 percent",
              "37.5 percent"
          ],
          "question": "Based on the information in this scenario, what is the exposure factor for the effect of a fire on the Roscommon Cloud Solutions datacenter?"
      },
      {
        "correct":2,
          "answers": [
              "0.002",
              "0.005",
              "0.02",
              "0.05"
          ],
          "question": "Based on the information in this scenario, what is the annualized rate of occurrence for a fire at the Roscommon Cloud Solutions datacenter?"
      },
      {
        "correct":0,
          "answers": [
              "$15,000",
              "$25,000",
              "$75,000",
              "$750,000"
          ],
          "question": "Based on the information in this scenario, what is the annualized loss expectancy for a fire at the Roscommon Cloud Solutions datacenter?"
      },
      {
        "correct":1,
          "answers": [
              "Identifying relevant records",
              "Coordinating multiple providers that might have relevant records",
              "Obtaining provider cooperation",
              "Determining when eDiscovery is necessary"
          ],
          "question": "What is the most significant barrier to eDiscovery efforts in organizations that make heavy use of many different cloud services?"
      },
      {
        "correct":2,
          "answers": [
              "Tagging",
              "Data labeling",
              "Encryption",
              "Provisioning"
          ],
          "question": "David's organization is preparing to adopt an information rights management tool. What IRM capability focuses on securing data sent by the system while it is in transit over a network?"
      },
      {
        "correct":0,
          "answers": [
              "The idea of identifying specific points of vulnerability and then implementing countermeasures to protect or thwart those points from successful exploitation",
              "The idea of finding points and then implementing countermeasures to protect or thwart those points from successful exploitation",
              "The idea of identifying specific vulnerabilities and then patching them to protect or thwart them from successful exploitation",
              "The idea of identifying specific intrusion points and implementing countermeasures to protect or thwart those points from successful intrusion"
          ],
          "question": "Which of the following best describes threat modeling?"
      },
      {
        "correct":1,
          "answers": [
              "Static electricity damaging equipment",
              "Fires in power supplies",
              "Corrosion of equipment",
              "Moisture buildup"
          ],
          "question": "Gary is concerned that the environmental controls in his organization's datacenter may not be effectively controlling humidity. Which of the following circumstances would not commonly result from humidity issues? (Choose all that apply.)"
      },
      {
        "correct":3,
          "answers": [
              "Pattern matching",
              "Metadata",
              "Content strings",
              "Tokenization"
          ],
          "question": "Which of the following mechanisms cannot be used by a data loss prevention (DLP) solution to detect the presence of data?"
      },
      {
        "correct":0,
          "answers": [
              "Hashing",
              "Masking",
              "Anonymization",
              "Shuffling"
          ],
          "question": "Gabriel's organization maintains a system of voting records. The system uses SHA3 to obscure the contents of sensitive records. What data obfuscation technique is this system using?"
      },
      {
        "correct":3,
          "answers": [
              "Service Organization Control (SOC) 1",
              "SOC 2, Type 1",
              "SOC 2, Type 2",
              "SOC 3"
          ],
          "question": "Which Statement on Standards for Attestation Engagements (SSAE) 18 report is purposefully designed for public release (for instance, to be posted on a company's website)?"
      },
      {
        "correct":1,
          "answers": [
              "It can be regarded as something public-facing.",
              "It must be on a distinct, isolated management network (virtual local area network [VLAN]).",
              "It connects physically to a dedicated storage area allocated to each customer.",
              "The responsibility for securely installing and updating it falls on the customer."
          ],
          "question": "Which of the following is a true statement about the virtualization management toolset?"
      },
      {
        "correct":1,
          "answers": [
              "IaaS",
              "PaaS",
              "SaaS",
              "SECaaS"
          ],
          "question": "You are the IT director for a small contracting firm. Your company is considering migrating to a cloud production environment. Which service model would best fit your needs if you wanted an option that reduced the chance of vendor lock-in but also did not require the highest degree of administration by your own personnel?"
      },
      {
        "correct":1,
          "answers": [
              "Broad network access",
              "Rapid elasticity",
              "Metered service",
              "Resource pooling"
          ],
          "question": "You are the data manager for a retail company; you anticipate a much higher volume of sales activity in the final quarter of each calendar year than the other quarters. In order to handle these increased transactions, and to accommodate the temporary sales personnel you will hire for only that time period, you consider augmenting your internal, on-premises production environment with a cloud capability for a specific duration, and will return to operating fully on-premises after the period of increased activity. Which facet of cloud computing is most important for making this possible?"
      },
      {
        "correct":1,
          "answers": [
              "The data custodian",
              "The data owner",
              "The data processor",
              "The data user"
          ],
          "question": "Which one of the following individuals is typically responsible for making high-level data classification decisions for an organization?"
      },
      {
        "correct":1,
          "answers": [
              "SQL injection",
              "Cross-site scripting",
              "Cross-site request forgery",
              "Server-side request forgery"
          ],
          "question": "Brad is assisting with the implementation of a cloud-based SaaS solution where users can post content that is viewed by other users. He is concerned that users might store executable content on the site that then might be executed automatically by the browsers of other site visitors. What type of vulnerability would permit this attack?"
      },
      {
        "correct":2,
          "answers": [
              "",
              "Change the control set so that you use only security products not offered by the cloud provider.",
              "Change the control set so that you use only security products offered by the cloud provider.",
              "Wait three weeks for additional data before making a final decision.",
              "Move back to an on-premises environment as soon as possible to avoid additional wasted funds and effort."
          ],
          "question": "You are the security manager for an online marketing company. Your company has recently migrated to a cloud production environment and has deployed a number of new cloud-based protection mechanisms offered by both third parties and the cloud provider, including data loss prevention (DLP) and security information and event management (SIEM) solutions.After one week of operation, your security team reports an inordinate amount of time responding to potential incidents that have turned out to only be false-positive reports. Management is concerned that the cloud migration was a bad idea and that it is too costly in terms of misspent security efforts. What do you recommend?"
      },
      {
        "correct":0,
          "answers": [
              "Customers",
              "Vendors",
              "Partners",
              "Regulators"
          ],
          "question": "Which one of the following stakeholders is most likely to demand communication about service outages for a cloud service provider?"
      },
      {
        "correct":3,
          "answers": [
              "Physical design phase",
              "User story",
              "Agile phase",
              "Logical design phase"
          ],
          "question": "Which is the part of the SDLC in which all functional features of the system chosen for development in analysis are described independently of any computer platform?"
      },
      {
        "correct":3,
          "answers": [
              "Family Educational Rights and Privacy Act (FERPA)",
              "Family and Medical Leave Act (FMLA)",
              "Payment Card Industry Data Security Standard (PCI DSS)",
              "Health Insurance Portability and Accountability Act (HIPAA)"
          ],
          "question": "A group of clinics decides to create an identification federation for their users (medical providers and clinicians). In this federation, all of the participating organizations would need to be in compliance with what U.S. federal regulation?"
      },
      {
        "correct":3,
          "answers": [
              "Private cloud",
              "Community cloud",
              "Public cloud",
              "Hybrid cloud"
          ],
          "question": "You are the data manager for a retail company; you anticipate a much higher volume of sales activity in the final quarter of each calendar year than the other quarters. In order to handle these increased transactions, and to accommodate the temporary sales personnel you will hire for only that time period, you consider augmenting your internal, on-premises production environment with a cloud capability for a specific duration, and will return to operating fully on-premises after the period of increased activity. Which deployment model best describes this type of arrangement?"
      },
      {
        "correct":2,
          "answers": [
              "XML",
              "SAML",
              "URIs",
              "TLS"
          ],
          "question": "How does representational state transfer (REST) make web service requests?"
      },
      {
        "correct":0,
          "answers": [
              "ITIL",
              "ISO",
              "HIPAA",
              "GLBA"
          ],
          "question": "Which of the following best describes a set of practices that focus on aligning IT services with business needs?"
      },
      {
        "correct":1,
          "answers": [
              "Object storage",
              "Block storage",
              "Ephemeral storage",
              "Archival storage"
          ],
          "question": "What type of cloud storage is typically used to provide disk volumes for use with virtual server instances that will store important long-term data?"
      },
      {
        "correct":2,
          "answers": [
              "MSA",
              "BPA",
              "SOW",
              "MOU"
          ],
          "question": "Lisa is working to develop a long-term relationship with a consulting firm that will assist in her organization's cloud migration. She has a contract in place that governs the terms of many different projects and would like to create a document that will describe one specific new project. What type of document should she create?"
      },
      {
        "correct":2,
          "answers": [
              "Distributed denial of service (DDoS)",
              "Unencrypted packets",
              "Multitenancy",
              "Insider threat"
          ],
          "question": "Full isolation of user activity, processes, and virtual network segments in a cloud environment is incredibly important because of risks due to _________________."
      },
      {
        "correct":0,
          "answers": [
              "The relying party is the service provider and they would consume the tokens generated by the identity provider.",
              "The relying party is the service provider and they would consume the tokens generated by the customer.",
              "The relying party is the customer and they would consume the tokens generated by the identity provider.",
              "The relying party is the identity provider and they would consume the tokens generated by the service provider."
          ],
          "question": "In a federated environment, who is the relying party, and what do they do?"
      },
      {
        "correct":2,
          "answers": [
              "TLS",
              "IPsec",
              "Volume encryption",
              "VPN"
          ],
          "question": "Christine is concerned about the risk that another customer will be able to access sensitive data elements stored in her organization's database in a multitenant public cloud environment. What control would best mitigate this risk?"
      },
      {
        "correct":3,
          "answers": [
              "Wet pipe",
              "Dry pipe",
              "Preaction",
              "Inert gas"
          ],
          "question": "Which one of the following fire suppression systems is least likely to damage sensitive electronic equipment in a datacenter?"
      },
      {
        "correct":0,
          "answers": [
              "",
              "Portability",
              "Interoperability",
              "Resiliency",
              "Governance"
          ],
          "question": "You are the security manager for a data analysis company. Your senior management is considering a cloud migration in order to use the greater capabilities of a cloud provider to perform calculations and computations. Your company wants to ensure that neither the contractual nor the technical setup of the cloud service will affect your data sets in any way so that you are not locked into a single provider.Which of the following criteria will probably be most crucial for your choice of cloud providers?"
      },
      {
        "correct":0,
          "answers": [
              "FIPS 140-2",
              "PCI DSS",
              "ISO 27017",
              "Common Criteria"
          ],
          "question": "Which one of the following standards is most likely to contain detailed technical requirements for a hardware security module (HSM) used in a cloud environment?"
      },
      {
        "correct":1,
          "answers": [
              "Regulatory compliance",
              "Enhanced user experience",
              "Determination of service quality",
              "Security assurance"
          ],
          "question": "Which of the following is not a reason for conducting audits?"
      },
      {
        "correct":0,
          "answers": [
              "Customer satisfaction",
              "",
              " Questions 56-58 refer to the following scenario:",
              "",
              "Arlene ran a vulnerability scan of a VPN server used by contractors and employees to gain access to her organization's network. An external scan of the server found the vulnerability shown below:"
          ],
          "question": "Migrating to a cloud environment will reduce an organization's dependence on _________________.Capital expenditures for ITOperational expenditures for ITData-driven workflows"
      },
      {
        "correct":3,
          "answers": [
              "MD4",
              "MD5",
              "SHA-1",
              "SHA-256"
          ],
          "question": "Which one of the following hash algorithms would not trigger this vulnerability?"
      },
      {
        "correct":0,
          "answers": [
              "All users will be able to access the site, but some may see an error message.",
              "All users will be able to access the site.",
              "Some users will be unable to access the site.",
              "All users will be unable to access the site."
          ],
          "question": "What is the most likely result of failing to correct this vulnerability?"
      },
      {
        "correct":1,
          "answers": [
              "Reconfigure the VPN server to only use secure hash functions.",
              "Request a new certificate.",
              "Change the domain name of the server.",
              "Implement an intrusion prevention system."
          ],
          "question": "How can Arlene correct this vulnerability?"
      },
      {
        "correct":2,
          "answers": [
              "Server clustering",
              "Load balancing",
              "RAID",
              "Scheduled backups"
          ],
          "question": "You are also concerned about the availability of data stored on servers that support your organization's cloud services. You would like to add technology that would enable continued access to files located on the server even if a hard drive in a server fails. What integrity control allows you to add robustness without adding additional servers?"
      },
      {
        "correct":2,
          "answers": [
              "The average cost to repair a device that has failed or is in need of repair",
              "The average time it takes to return a defective device to the manufacturer",
              "The average time it takes to repair a device that has failed or is in need of repair",
              "The time it takes to repair a device that has failed or is in need of repair"
          ],
          "question": "MTTR is best described as which of the following?"
      },
      {
        "correct":1,
          "answers": [
              "Dynamic application security testing (DAST)",
              "Static application security testing (SAST)",
              "Secure coding",
              "OWASP"
          ],
          "question": "What is a set of technologies designed to analyze application source code and binaries for coding and design conditions that are indicative of security and vulnerabilities?"
      },
      {
        "correct":2,
          "answers": [
              "Unstructured data",
              "Semi-structured data",
              "Structured data",
              "Unorganized data"
          ],
          "question": "You are participating in a data discovery effort and begin to explore a relational database server. What type of data should you most likely expect to encounter?"
      },
      {
        "correct":0,
          "answers": [
              "Payload encryption",
              "Origin authority",
              "Data integrity",
              "Authenticated denial of existence"
          ],
          "question": "Domain Name System Security Extensions (DNSSEC) provides all of the following except _________________."
      },
      {
        "correct":2,
          "answers": [
              "Bob's public key",
              "Bob's private key",
              "Alice's private key",
              "Alice's public key"
          ],
          "question": "Alice received an encrypted message from Bob. Bob encrypted the message for confidentiality using an asymmetric encryption algorithm. What key should Alice use to decrypt the message?"
      },
      {
        "correct":3,
          "answers": [
              "Spoofing",
              "Repudiation",
              "Tampering",
              "Elevation of privilege"
          ],
          "question": "Bobbi is investigating a security incident and discovers that an attacker began with a normal user account but managed to exploit a system vulnerability to provide that account with administrative rights. What type of attack took place under the STRIDE threat model?"
      },
      {
        "correct":2,
          "answers": [
              "Type 1",
              "Type 3",
              "Type 2",
              "Type 4"
          ],
          "question": "Which type of hypervisor has an operating system installed on the hardware and then the virtual manager software installed on top of it?"
      },
      {
        "correct":2,
          "answers": [
              "FISMA",
              "HIPAA",
              "FedRAMP",
              "GLBA"
          ],
          "question": "The government-wide program that provides for a standardized approach to security assessments, authorization, and continuous monitoring of cloud products and services is called______________."
      },
      {
        "correct":3,
          "answers": [
              "The cloud provider",
              "Your internet service provider (ISP)",
              "Federal regulators",
              "Senior management"
          ],
          "question": "In a cloud context, who determines the risk appetite of your organization?"
      },
      {
        "correct":3,
          "answers": [
              "Create",
              "Archive",
              "Store",
              "Share"
          ],
          "question": "Yolanda is analyzing a business process that uses a cloud service to send invoices to clients. What phase of the cloud data lifecycle is most directly occurring?"
      },
      {
        "correct":3,
          "answers": [
              "Multifactor authentication",
              "Strong encryption",
              "Cryptographic hash",
              "Digital signature"
          ],
          "question": "Carla is completing an IT audit that involves very sensitive log records that may later be disputed. She would like to collect a copy of the log records now and then protect them with a technology that will provide nonrepudiation. Which one of the following technologies would best meet her needs?"
      },
      {
        "correct":1,
          "answers": [
              "",
              "Portability",
              "Interoperability",
              "Resiliency",
              "Governance"
          ],
          "question": "You are the security manager for a small application development company. Your company is considering the migration of your testing environment to the cloud. As part of your testing methodology, you use several third-party cloud testing vendors.Which of the following traits of cloud functionality is probably the most crucial in terms of deciding which cloud provider you will choose?"
      },
      {
        "correct":1,
          "answers": [
              "Metadata-based discovery",
              "Content-based discovery",
              "Classification-based discovery",
              "Label-based discovery"
          ],
          "question": "Luis is concerned about the proliferation of sensitive data in his organization and is searching for systems containing Social Security numbers. He uses a tool that detects any data matching the pattern “XXX-XX-XXXX” where each X is a digit. What type of data discovery is Luis performing?"
      },
      {
        "correct":1,
          "answers": [
              "",
              "Representational State Transfer (REST)",
              "Security Assertion Markup Language (SAML)",
              "Simple Object Access Protocol (SOAP)",
              "Hypertext Markup Language (HTML)"
          ],
          "question": "You work for a government research facility. Your organization often shares data with other government research organizations. You would like to create a single sign-on experience across the organizations, where users at each organization can sign in with the user ID/authentication issued by that organization, then access research data in all the other organizations. Instead of replicating the data stores of each organization at every other organization (which is one way of accomplishing this goal), you instead want every user to have access to each organization's specific storage resources.In order to pass the user IDs and authenticating credentials of each user among the organizations, what protocol, language, or technique will you most likely utilize?"
      },
      {
        "correct":0,
          "answers": [
              "10 minutes",
              "60 minutes",
              "3 hours",
              "12 hours"
          ],
          "question": "Warren is helping his organization build a new datacenter that will support a cloud service they provide to their customers. Which one of the following is a reasonable minimum amount of time to expect the uninterruptible power supply (UPS) to provide power to the systems in the datacenter?"
      },
      {
        "correct":0,
          "answers": [
              "Gary is responsible for managing a large data set from a university research project that is stored with a cloud service provider in their object storage mechanism.",
              "",
              "He is concerned about managing costs of the service but also wants to make sure that they do not violate any legal obligations.",
              "",
              "The policies governing this data set specify a retention period of five years but note that litigation holds may override this requirement. Researchers rarely access data after 90 days but occasionally have a need to review older data."
          ],
          "question": "The practice of using strong magnets to erase and scramble data on magnetic media is called ___________.DegaussingScrubbingCrypto-shreddingBit splitting Questions 76 and 77 refer to the following scenario:"
      },
      {
        "correct":0,
          "answers": [
              "Set a lifecycle policy that moves data to archival storage after 90 days and destroys it after five years.",
              "Set a lifecycle policy that moves data to archival storage after 90 days.",
              "Set a lifecycle policy that destroys data after five years.",
              "None of these actions are appropriate."
          ],
          "question": "Which one of the following actions should Gary take to minimize costs?"
      },
      {
        "correct":1,
          "answers": [
              "Suspend all data deletion.",
              "Suspend deletion of data from March 2022 only.",
              "Suspend all data archival.",
              "None of these actions are necessary."
          ],
          "question": "Gary receives a litigation hold notice for data related to tests performed in March 2022. What should he do?"
      },
      {
        "correct":0,
          "answers": [
              "The individual described by the personally identifiable information (PII)",
              "The entity that collects or creates the PII",
              "The entity that uses the PII on behalf of the controller",
              "The entity that regulates the PII"
          ],
          "question": "In regard to most privacy guidance, the data subject is _________________."
      },
      {
        "correct":3,
          "answers": [
              "Virtualization",
              "Emulation",
              "ASLR",
              "Sandboxing"
          ],
          "question": "Which term refers to a system's ability to cordon off or protect certain aspects of the compute environment such as processing, memory, and other resources needed in the compute transaction?"
      },
      {
        "correct":0,
          "answers": [
              "",
              "Simplifying regulatory compliance",
              "Collecting multiple data streams from your log files",
              "Ensuring that the baseline configuration is applied to all systems",
              "Enforcing contract terms between your organization and the cloud provider"
          ],
          "question": "You are the security policy lead for your organization, which is considering migrating from your on-premises, traditional IT environment into the cloud. You are reviewing the Cloud Security Alliance Cloud Controls Matrix (CSA CCM) as a tool for your organization.Which of the following benefits will the CSA CCM offer your organization?"
      },
      {
        "correct":0,
          "answers": [
              "NIST 800-37",
              "COBIT",
              "ITIL",
              "GDPR"
          ],
          "question": "ISO 31000 is most similar to which of the following regulations, standards, guidelines, and frameworks?"
      },
      {
        "correct":2,
          "answers": [
              "HSM",
              "PKI",
              "TPM",
              "IPS"
          ],
          "question": "Which one of the following technologies is typically contained within a computer and manages the encryption keys used for full-disk encryption?"
      },
      {
        "correct":1,
          "answers": [
              "Static testing",
              "Dynamic testing",
              "Code review",
              "Open source review"
          ],
          "question": "You are the IT security manager for a video game software development company. In order to test your products for security defects, your firm decides to use a small team of game testers recruited from a public pool of interested gamers who apply for a chance to take part. This is an example of _________________."
      },
      {
        "correct":2,
          "answers": [
              "Due diligence",
              "Separation of duties",
              "Due care",
              "Least privilege"
          ],
          "question": "Which one of the following principles imposes a standard of care upon an individual that is broad and equivalent to what one would expect from a reasonable person under the circumstances?"
      },
      {
        "correct":3,
          "answers": [
              "Local law enforcement response times",
              "Location adjacent to competitor's facilities",
              "Aircraft flight paths",
              "Utility infrastructure"
          ],
          "question": "Which one of the following is the most important security consideration when selecting a new computer facility?"
      },
      {
        "correct":2,
          "answers": [
              "Block storage",
              "Object storage",
              "Archival storage",
              "Raw storage"
          ],
          "question": "Which one of the following storage types is typically the most inexpensive class of storage?"
      },
      {
        "correct":1,
          "answers": [
              "Incident management",
              "Change management",
              "Availability management",
              "Service level management"
          ],
          "question": "Andy is concerned that his organization is not meeting uptime requirements to their cloud service customers. Which one of the following ITIL control categories is least directly impacted?"
      },
      {
        "correct":0,
          "answers": [
              "Technical",
              "Administrative",
              "Physical",
              "Competing"
          ],
          "question": "Firewalls, DLP (data loss prevention or data leak protection) and digital rights management (DRM) solutions, and security information and event management (SIEM) products are all examples of _________________ controls."
      },
      {
        "correct":2,
          "answers": [
              "Consolidation of security functions",
              "Integration of security tools",
              "Protection of intellectual property",
              "Documentation of security policies"
          ],
          "question": "Brenda's organization recently completed the acquisition of a competitor firm. Which one of the following tasks would be least likely to be part of the organizational processes addressed during the acquisition?"
      },
      {
        "correct":1,
          "answers": [
              "Tokenization",
              "Vendor lockout",
              "Vendor lock-in",
              "Masking"
          ],
          "question": "What is the term used to describe loss of access to data because the cloud provider has ceased operation?"
      },
      {
        "correct":2,
          "answers": [
              "Sensitivity",
              "Criticality",
              "Age",
              "Jurisdiction"
          ],
          "question": "Which one of the following is not commonly used as a criterion for data classification decisions?"
      },
      {
        "correct":2,
          "answers": [
              "Updating the OS baseline image according to a scheduled interval to include any necessary security patches and configuration modifications",
              "Starting with a clean installation (hardware or virtual) of the desired OS",
              "Including only the default account credentials and nothing customized",
              "Halting or removing all unnecessary services"
          ],
          "question": "All of the following are activities that should be performed when capturing and maintaining an accurate, secure system baseline except _________________."
      },
      {
        "correct":3,
          "answers": [
              "1 year",
              "5 years",
              "7 years",
              "Indefinite"
          ],
          "question": "Richard is a data custodian who recently received a litigation hold notice for a set of records he administers. How long should he set the retention period for the affected data?"
      },
      {
        "correct":2,
          "answers": [
              "Virtualization sandbox.",
              "Virtualization bridge.",
              "Virtualization tools.",
              "It is not advised to create a connection between the virtual guests and the hypervisor in order to preserve tenant isolation."
          ],
          "question": "What technology can serve as a connection between the virtual guest operating system and the hypervisor, improving the services provided to the guest?"
      },
      {
        "correct":0,
          "answers": [
              "Update the certificate's OCSP record.",
              "Add the certificate to the CRL.",
              "Change the public key.",
              "Change the private key."
          ],
          "question": "Matt needs to revoke a digital certificate that is used as part of his organization's information rights management (IRM) program. Which one of the following options would best meet this need?"
      },
      {
        "correct":3,
          "answers": [
              "Hybrid",
              "Private",
              "Public",
              "Community"
          ],
          "question": "You are the IT security subject matter expert for a hobbyist collective that researches and archives old music. Your collective is set up in such a way that the members own various pieces of the network themselves, pool resources and data, and communicate and share files via the internet. This is an example of what cloud model?"
      },
      {
        "correct":3,
          "answers": [
              "Availability management",
              "Service level management",
              "Configuration management",
              "Capacity management"
          ],
          "question": "What ITIL process ensures that IT resources are sufficient to meet current and future business demand?"
      },
      {
        "correct":1,
          "answers": [
              "Create, Store, Use, Archive, Share, Destroy",
              "Create, Store, Use, Share, Archive, Destroy",
              "Create, Use, Store, Share, Archive, Destroy",
              "Create, Archive, Store, Share, Use, Destroy"
          ],
          "question": "What is the correct order of the phases of the data lifecycle?"
      },
      {
        "correct":3,
          "answers": [
              "It will remain until Carolyn explicitly deletes it.",
              "It will be deleted if the server is rebooted.",
              "It will be deleted only if the server is stopped.",
              "It will be deleted only if the server is terminated."
          ],
          "question": "Carolyn is using ephemeral storage to process data in a machine learning application using a virtual server instance. Which one of the following best describes this storage?"
      },
      {
        "correct":2,
          "answers": [
              "",
              "Obfuscation",
              "Masking",
              "Tokenization",
              "Hashing"
          ],
          "question": "You are the security manager for a small retailer engaged in e-commerce. A large part of your sales is transacted through the use of credit and debit cards and you need to store these numbers for use in future transactions.You have determined that the costs of maintaining an encrypted storage capability in order to meet compliance requirements are prohibitive. What other technology can you use instead to meet those regulatory needs?"
      },
      {
        "correct":1,
          "answers": [
              "Restoring from backup tapes",
              "Implementing RAID",
              "Relocating to a cold site",
              "Restarting business operations"
          ],
          "question": "Which one of the following actions might be taken as part of a business continuity plan?"
      },
      {
        "correct":2,
          "answers": [
              "Health Industry Portability and Accountability Act (HIPAA)",
              "Payment Card Industry Data Security Standard (PCI DSS)",
              "Gramm-Leach-Bliley Act (GLBA)",
              "Sarbanes-Oxley Act (SOX)"
          ],
          "question": "Bob is designing a datacenter to support his organization, a financial services firm. Bob's datacenter will have to be approved by regulators using a framework under which law?"
      },
      {
        "correct":0,
          "answers": [
              "Interview videos",
              "Sales transactions",
              "Customer contact information",
              "Website visitor logs"
          ],
          "question": "Which one of the following is most likely to be stored as unstructured data?"
      },
      {
        "correct":3,
          "answers": [
              "MD5",
              "SSL",
              "Blowfish",
              "AES"
          ],
          "question": "_____________ is a symmetric block type of cipher used to encrypt information and is currently the standard for the U.S. government in protecting sensitive and secret documents."
      },
      {
        "correct":3,
          "answers": [
              "Risk mitigation",
              "Risk transference",
              "Risk avoidance",
              "Risk acceptance"
          ],
          "question": "Tom is conducting a business continuity planning effort for Orange Blossoms, a fruit orchard located in Central Florida. During the assessment process, the committee determined that there is a small risk of snow in the region but that the cost of implementing controls to reduce the impact of that risk is not warranted. They elect to not take any specific action in response to the risk. What risk management strategy is Orange Blossoms pursuing?"
      },
      {
        "correct":1,
          "answers": [
              "Cold site",
              "Warm site",
              "Mutual assistance agreement",
              "Hot site"
          ],
          "question": "Linda is selecting a disaster recovery facility for her organization, and she wants to retain independence from other organizations as much as possible. She would like to choose a facility that balances cost and recovery time, allowing activation in about one week after a disaster is declared. What type of facility should she choose?"
      },
      {
        "correct":0,
          "answers": [
              "Transfer",
              "Avoid",
              "Mitigate",
              "Accept"
          ],
          "question": "Helen's organization handles large quantities of highly sensitive information. To help address this risk, she purchased a cyber-liability insurance policy. What type of risk response action is Helen taking?"
      },
      {
        "correct":2,
          "answers": [
              "SQL injection",
              "Brute-force",
              "Cross-site scripting (XSS)",
              "Man-in-the-middle/on-path"
          ],
          "question": "Which type of attack occurs when an application receives untrusted data and then sends it to a web browser without proper validation?"
      },
      {
        "correct":3,
          "answers": [
              "ISO 27036",
              "ISO 27050",
              "COBIT",
              "FIPS 140-2"
          ],
          "question": "Which federal standard is for the accreditation and distinguishing of secure and well-architected cryptographic modules produced by private sector vendors who see to or are in the process of having their solutions and services certified by the U.S. government departments and regulated industries that collect, store, transfer, or share data that is deemed to be sensitive but not classified?"
      },
      {
        "correct":2,
          "answers": [
              "JSON",
              "XML",
              "SQL",
              "MongoDB"
          ],
          "question": "Which one of the following technologies is least commonly associated with semi-structured data?"
      },
      {
        "correct":1,
          "answers": [
              "Rapid transmission of internet Relay Chat (IRC) messages",
              "Creating a high number of partially open TCP connections",
              "Disabling the Domain Name Service (DNS) server",
              "Excessive list linking of users and files"
          ],
          "question": "Which of the following describes a SYN flood attack?"
      },
      {
        "correct":2,
          "answers": [
              "eDiscovery",
              "Probable cause",
              "Chain of custody",
              "The Doctrine of the Proper Law"
          ],
          "question": "What concept from the field of digital forensics requires that you document who handles evidence from the time of collection until the time of use in court?"
      },
      {
        "correct":2,
          "answers": [
              "Keep the website offline until the investigation is complete.",
              "Take the virtualization platform offline as evidence.",
              "Take a snapshot of the web server instance and use that for the investigation.",
              "No action is necessary."
          ],
          "question": "Chris is investigating a security incident where he believes that an attacker placed fraudulent orders using his organization's website. He believes that critical evidence may be stored in the website's logs and is concerned that those logs may be modified because the web server is still in production. The web server is hosted in a virtualized environment. What action should Chris take?"
      },
      {
        "correct":0,
          "answers": [
              "Symmetric key",
              "Asymmetric key pairs",
              "Hashing",
              "One asymmetric key pair"
          ],
          "question": "The Transport Layer Security (TLS) protocol creates a secure communications channel over public media (such as the internet). In a typical TLS session, what form of cryptography is used for the session key?"
      },
      {
        "correct":3,
          "answers": [
              "Define",
              "Test",
              "Develop",
              "Sanitize"
          ],
          "question": "Which of the following is not typically a phase in the software development life cycle (SDLC)?"
      },
      {
        "correct":2,
          "answers": [
              "Guest operating system",
              "Hypervisor",
              "Kernel",
              "Protection manager"
          ],
          "question": "What component of a virtualized environment is responsible for enforcing tenant isolation?"
      },
      {
        "correct":0,
          "answers": [
              "The cloud provider",
              "The cloud customer",
              "The regulator(s)",
              "The end user"
          ],
          "question": "In a public cloud services arrangement, who creates governance that will determine which controls are selected for the datacenter and how they are deployed?"
      },
      {
        "correct":3,
          "answers": [
              "ATASM",
              "PASTA",
              "DREAD",
              "SAFEcode"
          ],
          "question": "Which one of the following entities is dedicated to helping application developers improve software security?"
      },
      {
        "correct":1,
          "answers": [
              "Inherent risk",
              "Residual risk",
              "Control risk",
              "Mitigated risk"
          ],
          "question": "Gavin is creating a report to management on the results of his most recent risk assessment. In his report, he would like to identify the remaining level of risk to the organization after adopting security controls. What term best describes this current level of risk?"
      },
      {
        "correct":3,
          "answers": [
              "Firmware contents",
              "File stored in archival storage",
              "File stored on a server hard drive",
              "RAM contents"
          ],
          "question": "Tina is gathering evidence as part of a cybersecurity investigation. Which one of the following evidence types is most volatile?"
      },
      {
        "correct":2,
          "answers": [
              "Secure build",
              "Thorough documentation",
              "Working prototypes",
              "Proper planning"
          ],
          "question": "The Agile Manifesto for software development focuses largely on _________________."
      },
      {
        "correct":1,
          "answers": [
              "IaaS",
              "PaaS",
              "SaaS",
              "FaaS"
          ],
          "question": "You are the IT security manager for a video game software development company. In order to test the functionality of online multiplayer game content, your testing team wants to use a cloud service independent from the internal production environment. You suggest that a(n) _________________ service model will best meet this requirement."
      },
      {
        "correct":1,
          "answers": [
              "SOAP provides a much more lightweight solution.",
              "SOAP provides for stronger interoperability.",
              "SOAP is much more secure.",
              "SOAP is newer."
          ],
          "question": "Why is Simple Object Access Protocol (SOAP) used for accessing web services instead of the Distributed Component Object Model (DCOM) and the Common Object Request Broker Architecture (CORBA)?"
      },
      {
        "correct":0,
          "answers": [
              "BIA",
              "PCP",
              "BCD",
              "DR"
          ],
          "question": "____________ is an exercise designed to determine the impact of losing the support of or availability of any particular resource to an organization."
      },
      {
        "correct":0,
          "answers": [
              "An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers (e.g., business units)",
              "An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers hosted exclusively off-premises",
              "An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers (e.g., business units) hosted exclusively on-premises",
              "An infrastructure provisioned for exclusive use by a single organization consisting of multiple customers (e.g., business units) that is owned and managed by the organization"
          ],
          "question": "Which of the following best describes the characteristics of a private cloud?"
      }
  ]);
  }
}
