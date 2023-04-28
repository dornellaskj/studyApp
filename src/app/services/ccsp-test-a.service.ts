import { Injectable } from '@angular/core';
import { UtilitiesService } from'./utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CcspTestAService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
  return this.utilitiesService.randomizeQuestions([
    {
        "answers": [
            "Design",
            "Develop",
            "Test",
            "Define"
        ],
        "question": "At which phase of the software development lifecycle (SDLC) is user involvement most crucial?",
        "correct": 3
    },
    {
        "answers": [
            "The bank branch being used by the privileged user",
            "Specific senders/recipients",
            "Too little money in the account",
            "Too much money in the account"
        ],
        "question": "If personal financial account reviews are performed as an additional review control for privileged users, which of the following characteristics is least likely to be a useful indicator for review purposes?",
        "correct": 0
    },
    {
        "answers": [
            "UTM",
            "Hypervisor",
            "NTP",
            "Hyperthreading"
        ],
        "question": "Which is a hardware virtualization technique that allows multiple guest operating systems to run on a single host system at the same time?",
        "correct": 1
    },
    {
        "answers": [
            "PCIDSS",
            "ANF",
            "PHI",
            "PII"
        ],
        "question": "Which of the following is defined by the Health Insurance Portability and Accountability Act (HIPAA) and must be protected by an organization under the jurisdiction of this law?",
        "correct": 2
    },
    {
        "answers": [
            "2",
            "8",
            "6",
            "4"
        ],
        "question": "A virtual NIC exists at which of the following layers of the OSI model?",
        "correct": 0
    },
    {
        "answers": [
            "Long-term",
            "Nefarious",
            "Database",
            "Ephemeral"
        ],
        "question": "What type of data storage is often used in platform as a service (PaaS) arrangements?",
        "correct": 2
    },
    {
        "answers": [
            "Hardening all outward-facing firewalls in order to make them resistant to attack",
            "Using distinct ports and port groups for various virtual local area networks (VLANs) on a virtual switch rather than running them through the same port",
            "Running Internet Small Computer Systems Interface (iSCSI) traffic unencrypted in order to have it observed and monitored by a network intrusion detection system (NIDS)",
            "Adding a host-based intrusion detection system (HIDS) to all virtual guests"
        ],
        "question": "Security best practices in a virtualized network environment would include which of the following?",
        "correct": 1
    },
    {
        "answers": [
            "Hardware monitoring",
            "Dynamicoptimization",
            "Network monitoring",
            "OS logging"
        ],
        "question": "Which of the following ensures that resources are not over-utilized or underutilized in a cloud environment?",
        "correct": 1
    },
    {
        "answers": [
            "Sensitive But Unclassified (SBU)",
            "Sensitive Compartmentalized Information (SCI)",
            "Top Secret",
            "Secret"
        ],
        "question": "For U.S. government agencies, what level of data sensitivity/classification may be processed by cryptographic modules certified according to the Federal Information Processing Standard (FIPS) 140-2 criteria?",
        "correct": 0
    },
    {
        "answers": [
            "Industry standards",
            "Regulatory dictates",
            "Vendor guidance",
            "Internal guidance"
        ],
        "question": "When you're using a storage protocol that involves a storage controller, it is very important that the controller is configured in accordance with which of the following?",
        "correct": 2
    },
    {
        "answers": [
            "Tier 3",
            "Tier 4",
            "Tier 1",
            "Tier 2"
        ],
        "question": "Which UI standard Tier will work perfectly without any downtime of critical operations even after the loss of any single system, component, or distribution element?",
        "correct": 1
    },
    {
        "answers": [
            "Hashing",
            "Encryption",
            "Distributed denial of service (DDoS) protections",
            "Constant data mirroring"
        ],
        "question": "Joseph is working as a security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). His cloud provider is changing its business model at the end of his contract term, and he has to find a new provider. In choosing providers, which of the following functionalities will Joseph consider absolutely essential?",
        "correct": 1
    },
    {
        "answers": [
            "25",
            "5",
            "0",
            "1"
        ],
        "question": "Any organization that complies with ISO 27034 will have a maximum of how many Organizational Normative Framework(s) (ONF)(s)?",
        "correct": 3
    },
    {
        "answers": [
            "Private",
            "Community",
            "Public",
            "Hybrid"
        ],
        "question": "A medical company wants to take advantage of a complex application but wants to realize the cost savings by accessing a shared instance of the application hosted in the cloud. Because of regulatory requirements, what type of cloud delivery model would you recommend to use?",
        "correct": 1
    },
    {
        "answers": [
            "LDAP",
            "AADT",
            "IPSec",
            "SSL"
        ],
        "question": "Which of the following protocols is most applicable to the identification process aspect of identity and access management (IAM)?",
        "correct": 0
    },
    {
        "answers": [
            "It can harm the environment.",
            "It poses a threat to health and human safety when deployed.",
            "It does not adequately suppress fires.",
            "It causes undue damage to electronic systems."
        ],
        "question": "Halon is now illegal to use for data center fire suppression. What is the reason it was outlawed?",
        "correct": 0
    },
    {
        "answers": [
            "3",
            "2",
            "1",
            "4"
        ],
        "question": "You are the privacy data officer for a large hospital and trauma center. You are called on to give your opinion of the hospital's plans to migrate all IT functions to a cloud service. Which of the following Uptime Institute tier-level ratings would you insist be included for any data center offered by potential providers?",
        "correct": 3
    },
    {
        "answers": [
            "discretionary",
            "role-based",
            "rule-based",
            "user-based"
        ],
        "question": "Access control to virtualization management tools should be ____________.",
        "correct": 1
    },
    {
        "answers": [
            "Confidentiality",
            "Integrity",
            "Scalability",
            "Availability"
        ],
        "question": "An attacker performs a man-in-the-middle attack by intercepting the data in transit, altering it, and sending it on the way. Which of the following has the attacker compromised during the attack?",
        "correct": 1
    },
    {
        "answers": [
            "Some current programmers don't write code line by line and instead use code component libraries",
            "Users are not clear in defining their requirements at the outset of the software development lifecycle (SDLC)",
            "Coding languages have not been secure for 20 years",
            "Young programmers are not nearly as disciplined in their coding practices as older programmers"
        ],
        "question": "Which of the following reasons is responsible that some current software developers are not aware of security problems within the programs they're creating?",
        "correct": 0
    },
    {
        "answers": [
            "Personally identifiable information (PII)",
            "Trademark",
            "Patent",
            "Copyright"
        ],
        "question": "Digital rights management (DRM) solutions often protect unauthorized distribution of what type of intellectual property?",
        "correct": 3
    },
    {
        "answers": [
            "privacy data breach",
            "vendor lock-in",
            "vendor lock-out",
            "privacy data disclosure"
        ],
        "question": "Lack of industry-wide standards for cloud computing creates a potential for _____________.",
        "correct": 1
    },
    {
        "answers": [
            "Business drivers",
            "Industry standards",
            "Regulator mandate",
            "User input"
        ],
        "question": "Which of these determines the critical assets, recovery time objective (RTO), and recovery point objective (RPO) for BC/DR purposes?",
        "correct": 0
    },
    {
        "answers": [
            "Archive",
            "Share",
            "Use",
            "Store"
        ],
        "question": "In which phase of the cloud secure data lifecycle does data leave the production environment and go into long-term storage?",
        "correct": 0
    },
    {
        "answers": [
            "Define",
            "Store",
            "Create",
            "Use"
        ],
        "question": "According to the (ISC)2 Cloud Secure Data Lifecycle, in which phase should the process of categorization/classification of data occur?",
        "correct": 2
    },
    {
        "answers": [
            "Organisation for Economic Cooperation and Development (OECD)",
            "Federal Information Security Management Act (FISMA)",
            "Federal Risk and Authorization Management Program (FedRAMP)",
            "General Data Protection Regulation (GDPR)"
        ],
        "question": "U.S. federal entities are required to use cloud data centers within the borders of the United States only. Which law, standard, or requirement mandates this?",
        "correct": 2
    },
    {
        "answers": [
            "Near a coast",
            "In a rural environment",
            "In an urban setting",
            "At the border of different counties, regions, or states"
        ],
        "question": "You are designing a Tier 4 data center for a large hospital. In order to plan for the possibility of losing utility power, in addition to having sufficient generators, where you should plan to locate the data center?",
        "correct": 3
    },
    {
        "answers": [
            "Software outcomes",
            "User performance",
            "System durability",
            "Source code"
        ],
        "question": "What do testers examine in static application security testing (SAST)?",
        "correct": 3
    },
    {
        "answers": [
            "It can be regarded as something public-facing.",
            "It must be on a distinct, isolated management network (virtual local area network [VLAN]).",
            "The responsibility for securely installing and updating it falls on the customer.",
            "It connects physically to the specific storage area allocated to a given customer."
        ],
        "question": "Which of the following is a true statement about the virtualization management toolset?",
        "correct": 1
    },
    {
        "answers": [
            "Authorization",
            "Accountability",
            "Identification",
            "Authentication"
        ],
        "question": "Julia, a network administrator, implements identity and access management (IAM) in order to control access between subjects and objects. What is the ultimate purpose of this effort?",
        "correct": 1
    },
    {
        "answers": [
            "Natural disasters",
            "Distributed denial of service (DDoS) attacks",
            "Multitenancy",
            "Internal threats"
        ],
        "question": "Which of the following poses a risk in the cloud, not affecting the traditional, on-premises IT environment?",
        "correct": 2
    },
    {
        "answers": [
            "Automated vulnerability scan on system startup",
            "Write protection",
            "Access control list (ACL) of authorized personnel",
            "GPS tracking/locator"
        ],
        "question": "Which of the following controls would be useful to build into a virtual machine baseline image for a cloud environment?",
        "correct": 0
    },
    {
        "answers": [
            "metered service",
            "portability",
            "resource pooling",
            "scalability"
        ],
        "question": "You are the IT director for an automotive parts supply distribution service; your company wants to operate a production environment in the cloud. Management has expressed a concern that any cloud provider the company chooses will have your company at a disadvantage—that your company will be at great risk because the provider will have your data and operational capability, and that the provider could hold the data “hostage” in order to raise the price of the service dramatically at the end of the contract term. To address management's concerns, you should try to find a cloud offering that places a great deal of emphasis on the ____________ trait of cloud computing.",
        "correct": 1
    },
    {
        "answers": [
            "Vendor lock-out",
            "Due care",
            "Third-party dependencies",
            "Regulatory oversight"
        ],
        "question": "In performing vendor management and selection, a potential cloud customer, might ask, “Does it seem as if this vendor is subject to any pending acquisitions or mergers?” In gathering data to answer this question, what are you trying to avoid?",
        "correct": 0
    },
    {
        "answers": [
            "More logs can be reviewed, at faster speeds",
            "Greater physical security",
            "Cost savings",
            "Psychological deterrence"
        ],
        "question": "Which of the following is one of the benefits of event monitoring tools (security information and event management [SIEM]/security information management [SIM]/ security event management [SEM])?",
        "correct": 0
    },
    {
        "answers": [
            "MTTR",
            "RPO",
            "RTO",
            "SLA"
        ],
        "question": "Patrick, a cloud administrator, is looking at business requirements that specify the preceding backup data available at the disaster recovery site must not be more than 24 hours old. Which of the following metrics correctly relates to these requirements?",
        "correct": 1
    },
    {
        "answers": [
            "Loss of data to widespread phishing attacks",
            "Loss of data to law enforcement seizure of neighboring assets",
            "Loss of data to widespread insider threat",
            "Loss of availability due to widespread distributed denial of service (DDoS) attacks"
        ],
        "question": "Which of the following is a risk that stems from a pooled-resources environment?",
        "correct": 1
    },
    {
        "answers": [
            "OLA",
            "SLA",
            "Contract",
            "Copyright"
        ],
        "question": "Which of the following is an agreement between parties to engage in some specified activity, usually for mutual benefit?",
        "correct": 2
    },
    {
        "answers": [
            "Policies",
            "Marketing material",
            "Intellectual property",
            "Plans"
        ],
        "question": "Digital rights management (DRM) solutions (sometimes referred to as information rights management, or IRM) can be used to protect all sorts of sensitive data but are usually particularly designed to secure which of the following?",
        "correct": 2
    },
    {
        "answers": [
            "Not securing the data in the traditional environment",
            "Sending the data outside the traditional environment for collaborative purposes",
            "Inviting external personnel into the traditional workspace in order to enhance collaboration",
            "Disclosing the data publicly"
        ],
        "question": "When considering the option to migrate from an on-premises environment to a hosted cloud service, an organization should weigh the risks of allowing external entities to access the cloud data for collaborative purposes against which of the following?",
        "correct": 1
    },
    {
        "answers": [
            "Negates the need for insurance",
            "Brings down the organization's stock price",
            "Is a risk to health and human safety",
            "Can lead to customer dissatisfaction"
        ],
        "question": "Juan, a security analyst, observes that the cloud environment that lacks security controls is vulnerable to exploitation, data loss, and interruptions. Conversely, excessive use of security controls causes which of the following?",
        "correct": 3
    },
    {
        "answers": [
            "What the price of the tool was.",
            "How the solution works.",
            "The production impact it will have on the environment.",
            "The additional risks of external attack associated with using the tool."
        ],
        "question": "Before implementing the egress monitoring solution in your cloud-based production environment, what should you explain to senior management?",
        "correct": 2
    },
    {
        "answers": [
            "HDD",
            "SSD",
            "Drobo",
            "NAS"
        ],
        "question": "Jennifer has configured a storage infrastructure where the file server sitting on an Ethernet-based LAN hosts shared directories, and files are sent over the network rather than blocks of data. What type of storage configuration is this?",
        "correct": 3
    },
    {
        "answers": [
            "Dollar values",
            "Security controls",
            "Policies",
            "Metadata"
        ],
        "question": "Which of the following needs to be assigned to each data classification/category?",
        "correct": 1
    },
    {
        "answers": [
            "vendor lock-in",
            "favorable contract terms",
            "strong negotiation",
            "infrastructure as a service (IaaS)"
        ],
        "question": "Joseph works in a company, which is considering migrating its production environment to the cloud. In reviewing the proposed contract, you notice that it includes a clause that requires an additional fee, equal to six monthly payments (equal to half the term of the contract) for ending the contract at any point prior to the scheduled date. This is best described as an example of __________________.",
        "correct": 0
    },
    {
        "answers": [
            "Greater management insight into productivity",
            "Near-term data recovery",
            "Enhanced database mechanisms",
            "New data-driven business workflows"
        ],
        "question": "Data archiving can also provide what production capability?",
        "correct": 1
    },
    {
        "answers": [
            "Access",
            "Identifying information",
            "Numeric values",
            "Cryptographic keys"
        ],
        "question": "Anonymization is the process of removing which of the following from data sets?",
        "correct": 1
    },
    {
        "answers": [
            "Injury and illness prevention",
            "Succession planning",
            "Business continuity",
            "Change management"
        ],
        "question": "The companies that had staff in New York on September 11, 2001, lost power as the result of the terrorist attacks on the World Trade Center. One of the companies was able to activate their emergency response plan, including automated backup of data and employee egress. This is an example of which of the following?",
        "correct": 2
    },
    {
        "answers": [
            "privileged access",
            "malware libraries",
            "forensic analysis",
            "signatures"
        ],
        "question": "Vulnerability scans are dependent on _____________ in order to function.",
        "correct": 3
    },
    {
        "answers": [
            "Peer review",
            "An alternate data center",
            "An infusion of capital",
            "Sufficient redundancy"
        ],
        "question": "Susan is asked to update virtual machine management tools. Which of the following does she require?",
        "correct": 3
    },
    {
        "answers": [
            "Regulatory",
            "Performance",
            "Privacy",
            "Resiliency"
        ],
        "question": "You are the security subject matter expert (SME) for an organization considering a transition from a traditional IT enterprise environment into a hosted cloud provider's data center. One of the challenges you're facing is whether the cloud provider will be able to comply with the existing legislative and contractual frameworks your organization is required to follow. This is an example of which issue?",
        "correct": 0
    },
    {
        "answers": [
            "Control",
            "Copyright",
            "Policy",
            "Guideline"
        ],
        "question": "Which of the following provides a voice and expression to the strategic goals and objectives of management?",
        "correct": 2
    },
    {
        "answers": [
            "A method that identifies who a user is and what he is allowed to access each time he attempts to access a resource",
            "A framework for users from outside organizations to be verified and validated as authorized users inside an organization",
            "A method that serves as the enforcement arm of authentication and authorization",
            "Any member of the federation that shares resources based on authenticated identities"
        ],
        "question": "What is the relying party?",
        "correct": 3
    },
    {
        "answers": [
            "Simple Mail Transfer Protocol (SMTP)",
            "Internet Control Message Protocol (ICMP)",
            "Hypertext Transfer Protocol (HTTP)",
            "Malicious"
        ],
        "question": "A web application firewall (WAF) can understand and act on which of the following traffic?",
        "correct": 2
    },
    {
        "answers": [
            "Prevailing law of that jurisdiction",
            "Expert opinion",
            "Vendor guidance",
            "Industry standards"
        ],
        "question": "Pete, a security administrator, wants to deploy a specific brand of virtualization toolset. According to which of the following, it is important to configure beforehand?",
        "correct": 2
    },
    {
        "answers": [
            "Cross-certification",
            "Proxy",
            "Regulated",
            "Single sign-on"
        ],
        "question": "A group of clinics decides to create an identification federation for their users. If they opt to hire a third party to review each organization, for compliance with security governance and standards they all find acceptable, what is this federation model called?",
        "correct": 1
    },
    {
        "answers": [
            "File-level encryption",
            "Object-level encryption",
            "Application-level encryption",
            "Transparent encryption"
        ],
        "question": "Which of the following database encryption techniques can be used to encrypt specific tables within the database?",
        "correct": 3
    },
    {
        "answers": [
            "7",
            "2",
            "3",
            "9"
        ],
        "question": "A DAM tool usually operates at which layer of the Open Systems Interconnection (OSI) model?",
        "correct": 0
    },
    {
        "answers": [
            "Electric grid",
            "UPS",
            "Surge protector",
            "Generator"
        ],
        "question": "Anna, a security administrator, wants to have a backup plan in case power is lost for more than a few hours. Which of the following should she implement?",
        "correct": 3
    },
    {
        "answers": [
            "Private",
            "Hybrid",
            "Community",
            "Public"
        ],
        "question": "Your company operates in a highly competitive market, with extremely high-value data assets. Senior management wants to migrate to a cloud environment but is concerned that providers will not meet the company's security needs. Which deployment model would probably best suit the company's needs?",
        "correct": 0
    },
    {
        "answers": [
            "Recovery point objective",
            "Mean time to failure",
            "Maximum allowable downtime",
            "Recovery time objective"
        ],
        "question": "When considering cloud data replication strategies (i.e., whether you are making backups at the block, file, or database level), which element of your organization's BC/DR plan will be most affected by your choice?",
        "correct": 0
    },
    {
        "answers": [
            "Social engineering",
            "Physical intrusion",
            "Inference attacks",
            "Unauthorized data disclosure"
        ],
        "question": "What could be the result of the failure of the cloud provider to secure the hypervisor in such a way that one user on a virtual machine can see the resource calls of another user's virtual machine?",
        "correct": 2
    },
    {
        "answers": [
            "File-level encryption",
            "Secure Sockets Layer (SSL)",
            "Application-level encryption",
            "Transparent encryption"
        ],
        "question": "Which of the following are database encryption options that could be used in a platform as a service (PaaS) implementation?",
        "correct": 3
    },
    {
        "answers": [
            "Conforming with federal law",
            "Demonstrating due diligence",
            "Maintaining customer satisfaction",
            "Staying one step ahead of aggressors"
        ],
        "question": "What is the importance of adhering to vendor guidance in configuration settings?",
        "correct": 1
    },
    {
        "answers": [
            "running malware for analysis purposes",
            "creating secure subnets of the production environment",
            "allowing secure remote access for users who need resources in the cloud environment",
            "optimizing the production environment by moving processes that are not frequently used into the sandbox"
        ],
        "question": "Sandboxing can often be used for ______________.",
        "correct": 0
    },
    {
        "answers": [
            "PaaS environment",
            "IaaS environment",
            "Private cloud",
            "Public cloud"
        ],
        "question": "Where is isolation failure probably least likely to pose a significant risk?",
        "correct": 2
    },
    {
        "answers": [
            "White-box",
            "Black-box",
            "Parched field",
            "Gray-box"
        ],
        "question": "Dynamic application security testing (DAST) is considered which of the following forms of testing?",
        "correct": 1
    },
    {
        "answers": [
            "illegal under the GDPR because it is electronic and needs to be in hard copy",
            "legal under the GDPR",
            "illegal under the GDPR because it doesn't ask the nationality of the visitor",
            "illegal under the GDPR because it doesn't allow service if the visitor refuses"
        ],
        "question": "You work for a European government agency providing tax counseling services to taxpayers. On your website home page, you include a banner with the following text: “As a visitor to this website, I agree that any information I disclose to the Tax Counseling Agency can be used for any and all purposes under the General Data Protection Regulation (GDPR).” This is followed by a button that says, “I Agree”: users have to click the button, or they are taken to a page that says, “Goodbye. Thank you for visiting the Tax Counseling Agency, and have a nice day.” This method of collecting personal information is ___________.",
        "correct": 3
    },
    {
        "answers": [
            "Content delivery network (CDN)",
            "Databases",
            "Data warehousing",
            "Volume storage"
        ],
        "question": "Which of the following data storage types is most associated with software as a service (SaaS)?",
        "correct": 0
    },
    {
        "answers": [
            "Qualitative risk analysis",
            "Risk appetite",
            "Business impact analysis",
            "Quantitative risk analysis"
        ],
        "question": "What artifact—which should already exist within the organization—can be used to determine the critical assets necessary to protect in the BC/DR activity?",
        "correct": 2
    },
    {
        "answers": [
            "Dangerous option, Reproducibility, Exploitability, Amenability, and Discoverability",
            "Damage potential, Reproducibility, Exportability, Affected sentiments, and Discoverability",
            "Damage potential, Republic Voting, Exploitability, Affected users, and Discoverability",
            "Damage potential, Reproducibility, Exploitability, Affected users, and Discoverability"
        ],
        "question": "Many organizations, for example, Microsoft, use the DREAD model for threat modeling. What does DREAD stand for?",
        "correct": 3
    },
    {
        "answers": [
            "32",
            "93",
            "80",
            "72"
        ],
        "question": "The American Society of Heating, Refrigeration, and Air Conditioning Engineers (ASHRAE) guidelines for internal environmental conditions within a data center suggest that a temperature setting of ____________ degrees Fahrenheit would be too low.",
        "correct": 0
    },
    {
        "answers": [
            "Integral field",
            "Ionization",
            "Photoelectric",
            "Electron pulse"
        ],
        "question": " There are two general types of smoke detectors. Which type uses a small portion of radioactive material?",
        "correct": 1
    },
    {
        "answers": [
            "Reward the users who committed the infractions, for aiding the company even when they were violating the policy.",
            "Replace all the personnel that violated the policy, and have the new personnel use the new policy from their start of hire.",
            "Restrict user access to possible APIs.",
            "Augment the current set of security controls used by the company in order to offset risks posed by the anticipated use of even more APIs from unknown sources."
        ],
        "question": "You are the security manager for an online retail sales company with 100 employees and a production environment hosted in a platform as a service (PaaS) model with a major cloud provider. According to your company policies, personnel are allowed to work equally from the company offices and their own homes or other locations, using their personal IT devices. The policies also dictate which application programming interfaces (APIs) can be utilized to access and manipulate company data and the process for getting an API added to the list of approved programs. You conduct an approved scan of the company data set in the cloud, with the provider's permission. This allows you to catalog all APIs that have accessed and manipulated company data through authorized user accounts in the last month. The scan reveals that 300 different APIs were used by authorized personnel. Of these, 30 had been approved by the company and were on the list. As a subject matter expert, what should you also recommend to the chief executive officer (CEO)?",
        "correct": 3
    },
    {
        "answers": [
            "Audit purposes.",
            "The risk of transferring data from one customer to another is significant.",
            "The risk of devices leaving the cloud data center is significant.",
            "It makes physical inventories much easier to maintain."
        ],
        "question": "Modern managed cloud service providers will often use secure keyboard/video/mouse (KVM) devices within their data centers. These devices are extremely expensive compared to their non-secure counterparts. Which of the following is one of the reasons cloud service providers do this?",
        "correct": 1
    },
    {
        "answers": [
            "Perform emergency egress training for all personnel.",
            "Require data owners, stewards, and custodians to properly classify and label data at the time of creation or collection.",
            "Display security guidance in a variety of formats, including a web page, banner, posters, and hard-copy material.",
            "Require senior management to participate in all security functions, including initial, recurring, and refresher training."
        ],
        "question": "Which of the following activities can enhance the usefulness and abilities of a data loss prevention or data leak protection (DLP) solution?",
        "correct": 1
    },
    {
        "answers": [
            "Rules against training users",
            "Geographical dispersion",
            "Prohibitions on port scanning and penetration testing",
            "Laws that prevent them from doing so"
        ],
        "question": "You are a cloud customer at XYZ. Which of the following can hamper the ability of yours to protect the assets in a managed services arrangement?",
        "correct": 2
    },
    {
        "answers": [
            "Logical unit number (LUN)",
            "Volume storage",
            "Object storage",
            "Block storage"
        ],
        "question": "Typically, which form of cloud storage is used in the near term for snapshotted virtual machine (VM) images?",
        "correct": 2
    },
    {
        "answers": [
            "A directive is put in place by statute; a regulation is put in place by precedent.",
            "A directive is enforced by the member states; a regulation is enforced by an international body.",
            "A directive allows member states to create their own laws; a regulation is applied to all member states.",
            "A directive is for local laws; a regulation is for laws dealing with matters outside the EU."
        ],
        "question": "Under European Union law, what is the difference between a directive and a regulation?",
        "correct": 2
    },
    {
        "answers": [
            "correcting accidental errors",
            "ensuring profitability",
            "increasing performance",
            "motivating users"
        ],
        "question": "In addition to having it for business continuity and disaster recovery (BC/DR) purposes, data archiving might also be useful for _____________.",
        "correct": 0
    },
    {
        "answers": [
            "They have multitenancy.",
            "They rely on virtualization.",
            "They are often used for software development.",
            "They are scalable."
        ],
        "question": "Why are platform as a service (PaaS) environments at a higher likelihood of suffering backdoor vulnerabilities?",
        "correct": 2
    },
    {
        "answers": [
            "mysql -u [bmalisow] -p [database1]",
            "bmalisow@abc.com",
            "www.abc.com/authoraccounts/benmalisow",
            "10 ? \"abcaccounts\"; 20 goto 10"
        ],
        "question": "The OWASP Top Ten list often includes “insecure direct object references.” Which of these is an example of an insecure direct object reference?",
        "correct": 2
    },
    {
        "answers": [
            "Pooled resources",
            "Metered service",
            "Scalability",
            "Remote access"
        ],
        "question": "According to the CSA, which aspect of cloud computing makes it particularly susceptible to account/service traffic hijacking?",
        "correct": 3
    },
    {
        "answers": [
            "Allowing a customer service representative limited access to account data",
            "Creating a test environment for a new application",
            "Notifying shareholders",
            "Providing detailed reports to regulators"
        ],
        "question": "For which use case would it probably be best to use static masking?",
        "correct": 1
    },
    {
        "answers": [
            "Cross-certification federation",
            "Security Assertion Markup Language (SAML)",
            "Third-party certification federation",
            "JavaScript Object Notation (JSON)"
        ],
        "question": "Your hobbyist collective wants to create a single sign-on experience for all members of the collective, where assurance and trust in the various members are created by having each member review all the others' policies, governance, procedures, and controls before allowing them to participate. This is an example of what kind of arrangement?",
        "correct": 0
    },
    {
        "answers": [
            "SaaS",
            "PaaS",
            "IaaS",
            "QaaS"
        ],
        "question": "In what cloud computing service model is the customer responsible for installing and maintaining the operating system?",
        "correct": 2
    },
    {
        "answers": [
            "Vendor incapacity",
            "Vendor lock-in",
            "Vendor lock-out",
            "Unscaled"
        ],
        "question": "A cloud customer that does not perform sufficient due diligence can suffer harm if the cloud provider they've selected goes out of business. What do we call this problem?",
        "correct": 2
    },
    {
        "answers": [
            "Authentication-access-authorization",
            "Authorization-authentication-access",
            "Access-authorization-authentication",
            "Authentication-authorization-access"
        ],
        "question": "What is the usual order of an access management process?",
        "correct": 3
    },
    {
        "answers": [
            "preserving metadata tags",
            "preserving and maintaining the data",
            "assigning labels",
            "allowing sufficient access to large volumes of data"
        ],
        "question": "Cloud customers performing data discovery efforts will have to ensure that the cloud provider attends to all of the following requirements except ___________.",
        "correct": 2
    },
    {
        "answers": [
            "Cloud equipment is resistant to audit.",
            "Auditors don't like the cloud.",
            "Cryptography is present.",
            "They often rely on data the provider chooses to disclose."
        ],
        "question": "Of the following options, which is a reason cloud data center audits are often less easy to verify than traditional audits?",
        "correct": 3
    },
    {
        "answers": [
            "statute",
            "regulation",
            "contract",
            "the cloud provider's policy"
        ],
        "question": "The destruction of a cloud customer's data can be required by all of the following except __________.",
        "correct": 3
    },
    {
        "answers": [
            "LMS",
            "ZBB",
            "GAAP",
            "FLSA"
        ],
        "question": "In 1939, the American Institute of Certified Professional Accountants (AICPA) established a committee to develop accounting standards and reports for the private sector. This committee developed ______ for use by accounting professionals.",
        "correct": 2
    },
    {
        "answers": [
            "Getting signed user agreements from all users",
            "Ensuring that all your customers install the tool",
            "Adoption of the tool in all routers between your users and the cloud provider",
            "Installation of the solution on all assets in the cloud data center"
        ],
        "question": "In order to get truly holistic coverage of an egress monitoring solution to implement in your cloud-based production environment, which of the following must you include as a step in the deployment process?",
        "correct": 0
    },
    {
        "answers": [
            "Documentation",
            "Encryption",
            "Host-based intrusion detection system (HIDS)",
            "Personnel training"
        ],
        "question": "Which of the following is essential in order to understand, optimize, and re-create your secure baseline?",
        "correct": 0
    },
    {
        "answers": [
            "Surveyhiscompany's departments about the data under their control.",
            "Adjust the hypervisors.",
            "Harden allhisrouters.",
            "Reconstruct his firewalls."
        ],
        "question": "Joseph, a security manager, works in a small firm that has just purchased an egress monitoring solution to implement in his cloud-based production environment. Which of these activities should Joseph perform before deploying the tool?",
        "correct": 0
    },
    {
        "answers": [
            "Broad network access",
            "Metered service",
            "On-demand self-service",
            "Off-site storage"
        ],
        "question": "Which of the following is not an essential element of defining cloud computing?",
        "correct": 3
    },
    {
        "answers": [
            "Real-time analytics",
            "Agile analytics/business intelligence",
            "Obverse polyglotism",
            "Big data"
        ],
        "question": "Which of the following is a data discovery approach that offers insight to trends of trends, using both historical and predictive approaches?",
        "correct": 1
    },
    {
        "answers": [
            "Annually",
            "More often than regular user account reviews",
            "Monthly",
            "Twice a year"
        ],
        "question": "How often should the accounts of privileged users be reviewed?",
        "correct": 1
    },
    {
        "answers": [
            "There will be a deleterious impact on production upon installing the tool.",
            "Data will remain in one place or form in the cloud.",
            "The cloud environment will include redundant and resilient architecture.",
            "You might have sufficient proper administrative rights in the cloud infrastructure."
        ],
        "question": "While purchasing an egress monitoring solution to implement in your cloud-based production environment, you need to determine that which of the following aspects of cloud computing may make proper deployment of the tool difficult or costly?",
        "correct": 0
    },
    {
        "answers": [
            "Software developers are the mainstay of every cloud environment.",
            "Many modern software developers don't understand how the code underlying the libraries they use actually works.",
            "Security controls cannot be added to software after the fact and must be included from the very first steps of software development.",
            "You can't have a cloud environment without software developers."
        ],
        "question": "Why is cloud security training particularly important for software developers?",
        "correct": 1
    },
    {
        "answers": [
            "Date",
            "Upgrade",
            "Patch",
            "Update"
        ],
        "question": "Which of the following is the replacement of older elements for new ones?",
        "correct": 1
    },
    {
        "answers": [
            "Social engineering, Tampering, Repudiation, Information disclosure, Denial of service, Escalation of privilege",
            "Spoofing, Tampering, Ransomware, Information disclosure, Denial of service, Elevation of privilege",
            "Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege",
            "Spoofing, Tampering, Replay, Information disclosure, Denial of service, Elevation of privilege"
        ],
        "question": "The acronym STRIDE stands for which of the following?",
        "correct": 2
    },
    {
        "answers": [
            "There are extra controls on privileged user accounts.",
            "Privileged users can cause more damage to the organization.",
            "Privileged users have more encryption keys.",
            "Regular users are more trustworthy."
        ],
        "question": "Privileged user (administrators, managers, and so forth) accounts need to be reviewed more closely than basic user accounts. Why is this?",
        "correct": 1
    },
    {
        "answers": [
            "Design",
            "Development",
            "Testing",
            "Definition"
        ],
        "question": "In which SDLC phase are the activities such as penetration testing and vulnerability scanning against the application performed?",
        "correct": 2
    },
    {
        "answers": [
            "General Data Protection Regulation (GDPR)",
            "None of these",
            "National Institute of Standards and Technology (NIST) Special Publication (SP) 800-53",
            "Federal Information Systems Management Act (FISMA)"
        ],
        "question": "Which of the following are the American standards and laws, respectively, and are not applicable to companies in the EU?",
        "correct": 3
    },
    {
        "answers": [
            "High-speed network connectivity",
            "Regulatory compliance",
            "Vendor lock-in",
            "Backdoor"
        ],
        "question": "Your organization is developing software for wide use by the public. You have decided to test it in a cloud environment, in a platform as a service (PaaS) model. Which of the following should be of particular concern to your organization for this situation?",
        "correct": 3
    },
    {
        "answers": [
            "Connect physical devices only with virtual switches.",
            "Never connect a virtual switch to a physical host.",
            "Ensure that all virtual switches are not connected to the physical network.",
            "Ensure that management systems are connected to a different physical network than the production systems."
        ],
        "question": "Laura, a security manager, is asked to enhance virtual environment isolation and security. Which of the following is the best practice that Laura will use?",
        "correct": 3
    },
    {
        "answers": [
            "Do not use custom authentication schemes.",
            "Use X.400 protocol standards.",
            "Ensure that strong input validation is in place.",
            "Implement widespread training programs."
        ],
        "question": "According to the OWASP Top Ten list, which of the following is a good method for reducing the risk of broken authentication and session management?",
        "correct": 0
    },
    {
        "answers": [
            "Ensuring that someone cannot turn off auditing capabilities while performing a function",
            "Preventing any party that participates in a transaction from claiming that it did not",
            "Prohibiting certain parties from a private conversation",
            "Ensuring that a transaction is completed before saving the results"
        ],
        "question": "What does nonrepudiation mean?",
        "correct": 1
    },
    {
        "answers": [
            "The cloud customer",
            "Regulators",
            "National Institute of Standards and Technology (NIST)",
            "The cloud provider"
        ],
        "question": "Who will determine data classifications for the cloud customer?",
        "correct": 0
    },
    {
        "answers": [
            "Pervasive denial of service (PDoS)",
            "Invasive denial of service (IDoS)",
            "Distributed denial of service (DDoS)",
            "Massive denial of service (MDoS)"
        ],
        "question": "Cloud Security Alliance (CSA) publishes the Notorious Nine, a list of common threats to organizations participating in cloud computing. According to CSA, what do we call the denial of service (DoS) attacks staged from multiple machines against a specific target?",
        "correct": 2
    },
    {
        "answers": [
            "Removing default accounts",
            "Maintaining a strict license catalog",
            "Removing unused services and libraries",
            "Patching and updating as necessary"
        ],
        "question": "Because most cloud environments rely heavily on virtualization, it is important to lock down or harden the virtualization software, or any software involved in virtualization. Which of the following is not an element of hardening software?",
        "correct": 1
    },
    {
        "answers": [
            "Access control methodology",
            "Security control against the data breach",
            "Availability for data lost accidentally",
            "Physical security enforcement"
        ],
        "question": "In addition to BC/DR, what other benefit can your data archive/backup provide?",
        "correct": 2
    },
    {
        "answers": [
            "Fifth",
            "First",
            "Second",
            "Fourth"
        ],
        "question": "At what phase of the Cloud Secure Data Lifecycle does data enter long-term storage?",
        "correct": 0
    },
    {
        "answers": [
            "Content analysis",
            "Labels",
            "Metadata",
            "Data hover"
        ],
        "question": "Which of the following data discovery techniques involves using extra information automatically appended/included with the intended data when the data is created?",
        "correct": 2
    },
    {
        "answers": [
            "as a way to distract attackers",
            "inadvertently or on purpose",
            "in lieu of other security controls",
            "as a means to counter DOS attacks"
        ],
        "question": "Backdoors are sometimes left in software by developers ___________.",
        "correct": 1
    },
    {
        "answers": [
            "Disposal",
            "Define",
            "Design",
            "Test"
        ],
        "question": "Which phase of the software development lifecycle (SDLC) is most likely to involve cryptoshredding?",
        "correct": 0
    },
    {
        "answers": [
            "Have total Faraday properties.",
            "Be made of composites and not metal.",
            "Terminate a connection before creating a new connection.",
            "Not be portable."
        ],
        "question": "A truly air-gapped machine selector will do which of the following?",
        "correct": 2
    },
    {
        "answers": [
            "Preventing all malware infection potential",
            "Ensuring that the racks and utilities can endure an earthquake",
            "Offering digital rights management (DRM) capabilities",
            "Insuring against seasonal floods"
        ],
        "question": "You are tasked with managing a cloud data center in California. Your customers are mostly from the entertainment industry, and you are offering both platform as a service (PaaS) and software as a service (SaaS) capabilities. From a physical design standpoint, you are probably going to be most concerned with which of the following?",
        "correct": 1
    },
    {
        "answers": [
            "They are never trained on testing procedures.",
            "They have a vested interest in having the software perform well.",
            "They are notoriously bad, as a group, at testing.",
            "They work for the same department as the testing personnel."
        ],
        "question": "Why do developers have an inherent conflict of interest in testing software they've created?",
        "correct": 1
    },
    {
        "answers": [
            "Never",
            "Weekly",
            "Only when the contract stipulates that requirement",
            "Always"
        ],
        "question": "When should cloud providers allow platform as a service (PaaS) customers shell access to the servers running their instances?",
        "correct": 0
    },
    {
        "answers": [
            "SOC 1",
            "SOC 2",
            "SOC 3",
            "SOC 4"
        ],
        "question": "Which of the following reports is a detailed type of report that provides data about controls for trust services and contains highly sensitive data for an organization?",
        "correct": 1
    },
    {
        "answers": [
            "Structured",
            "Object",
            "Volume",
            "Unstructured"
        ],
        "question": "Which type of storage with IaaS will be maintained by the cloud provider and referenced with a key value?",
        "correct": 1
    },
    {
        "answers": [
            "corrective",
            "preventive",
            "deterrent",
            "administrative"
        ],
        "question": "A host-based firewall in a virtualized cloud environment might have aspects of all the following types of controls except _________________.",
        "correct": 2
    },
    {
        "answers": [
            "A cloud access security broker (CASB)",
            "The cloud provider",
            "The various members of the collective",
            "The third party"
        ],
        "question": "Mark works as an IT security subject matter expert. If he creates a federated identity management structure for all the participants in the collective using a third-party certification model, who would be the federated service provider(s) in that structure?",
        "correct": 2
    },
    {
        "answers": [
            "A cloud access security broker (CASB)",
            "The cloud provider",
            "The various members of the collective",
            "The third party"
        ],
        "question": "Mark works as an IT security subject matter expert. If he creates a federated identity management structure for all the participants in the collective using a third-party certification model, who would be the federated service provider(s) in that structure?",
        "correct": 2
    }
  ]);
  }
}
