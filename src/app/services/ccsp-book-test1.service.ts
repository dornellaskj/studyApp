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
          "correct":1,
          "answers": [
              "Hybrid cloud",
              "Public cloud",
              "Private cloud",
              "Community cloud"
          ],
          "question": "Matthew is reviewing a new cloud service offering that his organization plans to adopt. In this offering, a cloud provider will create virtual server instances under the multitenancy model. Each server instance will be accessible only to Matthew's company. What cloud deployment model is being used?"
      },
      {
          "correct":0,
          "answers": [
              "Cryptographic erasure",
              "Physical destruction",
              "Degaussing",
              "Overwriting"
          ],
          "question": "Zeke is responsible for sanitizing a set of solid-state drives (SSDs) removed from servers in his organization's datacenter. The drives will be reused on a different project. Which one of the following sanitization techniques would be most effective?"
      },
      {
          "correct":0,
          "answers": [
              "Virtual machines",
              "Serverless computing",
              "Hypervisors",
              "Containers"
          ],
          "question": "Tina would like to use a technology that will allow her to bundle up workloads and easily move them between different operating systems. What technology would best meet this need?"
      },
      {
          "correct":1,
          "answers": [
              "Monitor services",
              "Prepare systems",
              "Perform business administration",
              "Handle problem reports"
          ],
          "question": "Under the cloud reference architecture, which one of the following activities is not generally part of the responsibilities of a customer?"
      },
      {
          "correct":2,
          "answers": [
              "Scalability",
              "On-demand self service",
              "Elasticity",
              "Broad network access"
          ],
          "question": "Seth is helping his organization move their web server cluster to a cloud provider. The goal of this move is to provide the cluster with the ability to grow and shrink based on changing demand. What characteristic of cloud computing is Seth hoping to achieve?"
      },
      {
          "correct":1,
          "answers": [
              "User identity",
              "IP address",
              "Geolocation",
              "Nature of requested access"
          ],
          "question": "Sherry is deploying a zero-trust network architecture for her organization. In this approach, which one of the following characteristics would be least important in validating a login attempt?"
      },
      {
          "correct":3,
          "answers": [
              "Geofencing",
              "Traffic inspection",
              "Network firewall",
              "Network security groups"
          ],
          "question": "Joe is using a virtual server instance running on a public cloud provider and would like to restrict the ports on that server accessible from the internet. What security control would best allow him to meet this need?"
      },
      {
          "correct":3,
          "answers": [
              "Disk failure",
              "User error",
              "Ransomware",
              "Virus"
          ],
          "question": "Which one of the following cybersecurity threats is least likely to directly affect an object storage service?"
      },
      {
          "correct":3,
          "answers": [
              "Nonrepudiation",
              "Authentication",
              "Integrity",
              "Confidentiality"
          ],
          "question": "Which one of the following cryptographic goals protects against the risks posed when a device is lost or stolen?"
      },
      {
          "correct":1,
          "answers": [
              "It has been functionally tested.",
              "It has been structurally tested.",
              "It has been formally verified, designed, and tested.",
              "It has been semi-formally designed and tested."
          ],
          "question": "Robert is reviewing a system that has been assigned the EAL2 evaluation assurance level under the Common Criteria. What is the highest level of assurance that he may have about the system?"
      },
      {
          "correct":3,
          "answers": [
              "Cloud access service broker",
              "Database",
              "Virtualization",
              "Orchestration"
          ],
          "question": "Jake would like to use a third-party platform to automatically move workloads between cloud service providers. What type of tool would best meet this need?"
      },
      {
          "correct":2,
          "answers": [
              "Cloud access service broker",
              "Cloud orchestration",
              "Cloud governance",
              "Cloud migration"
          ],
          "question": "What type of effort attempts to bring all of an organization's cloud activities under more centralized control?"
      },
      {
          "correct":3,
          "answers": [
              "It has been functionally tested.",
              "It has been methodically tested and checked.",
              "It has been methodically designed, tested, and reviewed.",
              "It has been formally verified, designed, and tested."
          ],
          "question": "Colin is reviewing a system that has been assigned the EAL7 evaluation assurance level under the Common Criteria. What is the highest level of assurance that he may have about the system?"
      },
      {
          "correct":2,
          "answers": [
              "Planning",
              "Definition",
              "Verification",
              "Accreditation"
          ],
          "question": "Which one of the following systems assurance processes provides an independent third-party evaluation of a system's controls that may be trusted by many different organizations?"
      },
      {
          "correct":2,
          "answers": [
              "ISO 27001",
              "ISO 27701",
              "ISO 27017",
              "ISO 17789"
          ],
          "question": "Gavin is looking for guidance on how his organization should approach the evaluation of cloud service providers. What ISO document can help him with this work?"
      },
      {
          "correct":3,
          "answers": [
              "SEC",
              "FDA",
              "FTC",
              "PCI SSC"
          ],
          "question": "Ed has a question about the applicability of PCI DSS requirements to his organization's credit card processing environment. What organization is the regulator in this case?"
      },
      {
          "correct":0,
          "answers": [
              "Reversibility",
              "Portability",
              "Regulatory",
              "Resiliency"
          ],
          "question": "Bianca is preparing for her organization's move to a cloud computing environment. She is concerned that issues may arise during the change and would like to ensure that they can revert back to their on-premises environment in the case of a problem. What consideration is Bianca concerned about?"
      },
      {
          "correct":1,
          "answers": [
              "SANS Institute",
              "FBI",
              "Cloud Security Alliance",
              "Microsoft"
          ],
          "question": "Which one of the following organizations is not known for producing cloud security guidance?"
      },
      {
          "correct":3,
          "answers": [
              "Elasticity",
              "On-demand self service",
              "Scalability",
              "Measured service"
          ],
          "question": "Vince is using a new cloud service provider and is charged for each CPU that he uses, every bit of data transferred over the network, and every GB of disk space allocated. What characteristic of cloud services does this describe?"
      },
      {
          "correct":3,
          "answers": [
              "Tabletop exercise",
              "Parallel test",
              "Full interruption test",
              "Checklist review"
          ],
          "question": "Glenda would like to conduct a disaster recovery test and is seeking a test that will allow a review of the plan with no disruption to normal information system activities and as minimal a commitment of time as possible. What type of test should she choose?"
      },
      {
          "correct":2,
          "answers": [
              "A cloud PaaS vendor",
              "A hosted datacenter provider",
              "A cloud IaaS vendor",
              "A datacenter vendor that provides rack, power, and remote hands services"
          ],
          "question": "Kristen wants to use multiple processing sites for her data, but does not want to pay for a full datacenter. Which of the following options would you recommend as her best option if she wants to be able to quickly migrate portions of her custom application environment to the facilities in multiple countries without having to wait to ship or acquire hardware?"
      },
      {
          "correct":0,
          "answers": [
              "TEE",
              "TPM",
              "HSM",
              "PKI"
          ],
          "question": "Which one of the following is a critical component for confidential computing environments?"
      },
      {
          "correct":2,
          "answers": [
              "FedRAMP",
              "NIST 800-53",
              "Common Criteria",
              "FIPS 140-2"
          ],
          "question": "Which one of the following programs provides a general certification process for computing hardware that might be used in a government environment?"
      },
      {
          "correct":1,
          "answers": [
              "Domain name (DN)",
              "Distinguished name (DN)",
              "Directory name (DN)",
              "Default name (DN)"
          ],
          "question": "In a Lightweight Directory Access Protocol (LDAP) environment, each entry in a directory server is identified by a ______________."
      },
      {
          "correct":1,
          "answers": [
              "Hot site",
              "Cloud site",
              "Cold site",
              "Warm site"
          ],
          "question": "Which one of the following disaster recovery approaches is generally the most cost-effective for an organization?"
      },
      {
        "correct":3,
         "answers": [
             "Structured data",
             "Semi-structured data",
             "RFC-defined data",
             "Unstructured data"
         ],
         "question": "An email is an example of what type of data?"
     },
     {
        "correct":1,
         "answers": [
             "Lack of data labeling",
             "Use of encryption for data in transit",
             "Improper data labeling",
             "Use of encryption for data at rest"
         ],
         "question": "Jacinda is planning to deploy a data loss prevention (DLP) system in her cloud environment. Which of the following challenges is most likely to impact the ability of her DLP system to determine whether sensitive data is being transmitted outside of her organization?"
     },
     {
        "correct":2,
         "answers": [
             "Unstructured data",
             "Restructured data",
             "Semi-structured data",
             "Structured data"
         ],
         "question": "An XML file is considered what type of data?"
     },
     {
        "correct":0,
         "answers": [
             "Its ability to be uniquely identified",
             "The length of the data",
             "The formatting of the data",
             "The ability to sort the data based on street number"
         ],
         "question": "Isaac is using a hash function for both integrity checking and to allow address data to be referenced without the actual data being exposed. Which of the following attributes of the data will be not be lost when the data is hashed?"
     },
     {
        "correct":1,
         "answers": [
             "Delete all data not in secure storage.",
             "Store data in more than one location or service.",
             "Avoid storing data in intact form, requiring data from more than one location to use a data set.",
             "Geographically separate data by at least 15 miles to ensure that a single natural disaster cannot destroy it."
         ],
         "question": "Amanda's operating procedures for secure data storage require her to ensure that she is using data dispersion techniques. What does Amanda need to do to be compliant with this requirement?"
     },
     {
        "correct":1,
         "answers": [
             "Long-term storage",
             "Ephemeral storage",
             "Raw storage",
             "Volume-based storage"
         ],
         "question": "Lisa runs Windows instances in her cloud-hosted environment. Each Windows instance is created with a C: drive that houses the operating system and application files. What type of storage best describes the C: drive for these Windows instances?"
     },
     {
        "correct":3,
         "answers": [
             "To allow for data dispersion",
             "To ensure the files are not copied",
             "To keep the files secure by encrypting them",
             "To support nonrepudiation"
         ],
         "question": "Gary is gathering data to support a legal case on behalf of his company. Why might he digitally sign files as they are collected and preserve them along with the data in a documented, validated way?"
     },
     {
        "correct":1,
         "answers": [
             "Ephemeral storage",
             "Raw storage",
             "Long-term storage",
             "Magneto-optical storage"
         ],
         "question": "Which storage type is most likely to have remnant data issues in an environment in which the storage is reused for other customers after it is reallocated if it is not crypto-shredded when it is deallocated and instead is zero-wiped?"
     },
     {
        "correct":1,
         "answers": [
             "Hashing",
             "Shuffling",
             "Randomization",
             "Masking"
         ],
         "question": "Charleen wants to use a data obfuscation method that allows realistic data to be used without the data being actual data associated with specific users or individuals. What data obfucation method should she use?"
     },
     {
        "correct":0,
         "answers": [
             "Keys must be stored in plaintext to allow for access.",
             "Keys must be protected in both volatile and persistent memory.",
             "Keys stored in databases should be encrypted using key encryption keys.",
             "Keys should be protected in storage to ensure that they are not modified or changed inadvertently."
         ],
         "question": "Henry wants to follow the OWASP guidelines for key storage. Which of the following is not a best practice for key storage?"
     },
     {
        "correct":1,
         "answers": [
             "Structured data",
             "Semi-structured data",
             "Unstructured data",
             "Labeled data"
         ],
         "question": "JSON is an example of what type of data?"
     },
     {
        "correct":3,
         "answers": [
             "Identifying classification levels",
             "Assigning responsibilities",
             "Defining roles",
             "Mapping data"
         ],
         "question": "Which of the following is not a common goal of data classification policies?"
     },
     {
        "correct":0,
         "answers": [
             "Data discovery to identify sensitive data",
             "Tokenization of the index values",
             "Hashing each item in the database",
             "Randomization of data in the database to prepare for tokenization"
         ],
         "question": "Once Charles has his two databases ready, what step comes next in the tokenization process?"
     },
     {
        "correct":0,
         "answers": [
             "Retention periods, regulatory compliance requirements, data classification, data deletion and lifespan, and archiving and retrieval procedures",
             "Retention periods, logging, data classification, data deletion processes, and compliance requirements",
             "Data classification requirements, regulatory compliance requirements, data creation and tagging requirements, and data retrieval procedures",
             "Regulatory and compliance requirements and mapping to retention periods for the organization, legal hold processes, and data deletion requirements"
         ],
         "question": "Olivia wants to write a data retention policy for her organization. Which list best describes common components of a retention policy?"
     },
     {
        "correct":2,
         "answers": [
             "Issue a new certificate using the same information as the original certificate.",
             "Attempt to access the data using her own certificate.",
             "Check the IRM's certificate revocation list.",
             "Delete the private keys for the original certificate."
         ],
         "question": "Hui wants to revoke a certificate issued by her information rights management (IRM) system. How can she verify that the certificate has been revoked?"
     },
     {
        "correct":3,
         "answers": [
             "Tagging",
             "Data labeling",
             "Encryption",
             "Provisioning"
         ],
         "question": "Frank's organization is preparing to adopt an information rights management tool. What IRM capability focuses on providing rights to individuals based on their roles to ensure appropriate data access?"
     },
     {
        "correct":2,
         "answers": [
             "Data dispersion makes it difficult to encrypt data.",
             "Geographic dispersion may impact performance.",
             "An outage at a provider may result in data not being available.",
             "Most cloud vendors do not offer support for dispersion."
         ],
         "question": "Jane is considering data dispersion as a security and availability strategy for her organization. What risk should she highlight as the most significant potential problem if her organization does adopt a multivendor approach to dispersion?"
     },
     {
        "correct":0,
         "answers": [
             "45 days",
             "6 months",
             "3 years",
             "7 years"
         ],
         "question": "Renee wants to set a retention period for log files in her data retention policy that minimizes the ongoing cost of retention. What retention period should she select for ephemeral logs that do not have a contractual or legal requirement for retention?"
     },
     {
        "correct":0,
         "answers": [
             "Service outages",
             "Credential theft",
             "Improper permissions",
             "Lack of encryption"
         ],
         "question": "Lincoln wants to identify threats to the availability of data stored in a long-term storage service like Amazon's Glacier. Which of the following threats should he identify as impacting availability?"
     },
     {
        "correct":2,
         "answers": [
             "Anonymization",
             "Masking",
             "Hashing",
             "Shuffling"
         ],
         "question": "Derek's organization uses a cryptographic one-way function applied to data in a database to allow it to be referenced without using the actual data. What anonymization technique are they using?"
     },
     {
        "correct":0,
         "answers": [
             "Long-term storage",
             "Ephemeral storage",
             "Raw storage",
             "Volume-based storage"
         ],
         "question": "Henry stores his cloud environment's log files in a filesystem designed for durability and performance for logs. What type of storage is he using?"
     },
     {
        "correct":1,
         "answers": [
             "Use a secrets manager for development, test, and production to keep secrets secure.",
             "Use standard test secrets and search for them.",
             "Use multiple detection utilities to reduce the chance of missing a secret.",
             "Use high entropy secrets to limit the possibility of guessed secrets."
         ],
         "question": "Alaina wants to implement secrets detection to help identify issues with secrets exposure. Which of the following techniques will most easily help her organization detect poor practices in internal test environments without undue risk?"
     },
     {
        "correct":1,
         "answers": [
             "Tagging",
             "Provisioning",
             "Labeling",
             "Data mapping"
         ],
         "question": "Wei's organization is implementing an information rights management system. What IRM process ensures that users receive the rights and privileges they need to access files protected by the IRM?"
     },
     {
        "correct":1,
         "answers": [
             "The cost of the storage",
             "Data access patterns",
             "The volume or amount of data",
             "The amount of time the data will be stored for"
         ],
         "question": "Dana is preparing to move her organization's data to cloud archival storage. Which of the following is the most important consideration related to performance for archival storage?"
     },
     {
        "correct":2,
         "answers": [
             "It can be un-hashed to reveal the original data.",
             "Tokenized data does not create a data breach concern.",
             "Tokenized data is only a concern if the database it is matched with is also exposed.",
             "Tokenized data could be decrypted if the encryption key for the tokens was also stolen."
         ],
         "question": "Elaine's organization has suffered a data breach, and tokenized data has been exposed. What concern should Elaine express about the tokenized data?"
     },
     {
        "correct":1,
         "answers": [
             "Immediately issue a new certificate and securely transmit it to the user.",
             "Immediately revoke the certificate and add it to the certificate revocation list.",
             "Search for all locations of the certificate to understand what impact its exposure may have.",
             "Interview the user or owner to identify why the certificate was exposed."
         ],
         "question": "Mike has become aware of a certificate's private key that has been exposed as part of an incident. What should Mike do first to limit the potential impact of the exposure?"
     },
     {
        "correct":0,
         "answers": [
             "Tag data with its sensitivity level.",
             "Apply a data lifecycle and delete unneeded data to reduce the data being monitored.",
             "Classify data based on a classification scheme.",
             "Use regular expressions to improve the pattern matching algorithm's success rate."
         ],
         "question": "Dan's DLP deployment has been experiencing false positives when keying on pattern matching, resulting in extra work for his organization's security team. What can he do to best improve the DLP's performance if the DLP is currently relying on pattern matching as the primary means of identifying sensitive information?"
     },
     {
        "correct":1,
         "answers": [
             "Check the cloud provider's logs for modifications to the machine.",
             "Check hashes of machine instances against a hash of the original.",
             "Check timestamps and dates for files on the machine against the original.",
             "Rebuild the machine and manually compare it against the original."
         ],
         "question": "As part of an incident response process, Jack wants to validate the integrity of system instances running in his cloud environment. What can he do to quickly and efficiently check that the virtual machine images have not been modified?"
     },
     {
        "correct":2,
         "answers": [
             "Create",
             "Store",
             "Share",
             "Destroy"
         ],
         "question": "Jacinda wants to implement an information rights management solution. What phase of the cloud data lifecycle will rely heavily on the IRM to ensure that privileges are appropriately managed?"
     },
     {
        "correct":2,
         "answers": [
             "Long-term storage",
             "Ephemeral storage",
             "Raw storage",
             "Volume-based storage"
         ],
         "question": "Gary's cloud provider gives him direct access to actual drives in servers as part of his hosting plan. What type of storage is Gary using when he installs operating systems and applications on those drives?"
     },
     {
        "correct":2,
         "answers": [
             "They will need to access the files only via local fileshares.",
             "They will need to use multifactor authentication for all file access.",
             "They will need to open the files using tools that support IRM.",
             "They will need to request access to each file before opening it."
         ],
         "question": "Maria has implemented an information rights management tool for her cloud-hosted SharePoint site. What requirement will her organization's SharePoint users need to meet to access controlled files?"
     },
     {
        "correct":1,
         "answers": [
             "Map data to compliance requirements.",
             "Extract and catalog metadata.",
             "Scan for sensitive data.",
             "Classify data."
         ],
         "question": "Angelo is implementing a data discovery process. Which of the following steps should he begin with to help speed up the discovery process?"
     },
     {
      "correct":3,
       "answers": [
           "Barry, as chief information officer",
           "Chief information security officer",
           "Disaster recovery team leader",
           "External consultant"
       ],
       "question": "Barry is the CIO of an organization that recently suffered a serious operational issue that required activation of the disaster recovery plan. He would like to conduct a lessons learned session to review the incident. Who would be the best facilitator for this session?"
    },
    {
        "correct":2,
        "answers": [
            "Basement",
            "First floor",
            "Second floor",
            "Third floor"
        ],
        "question": "Carlos is planning a design for a datacenter that will be constructed within a new four-story corporate headquarters. The building consists of a basement and three above-ground floors. What is the best location for the datacenter?"
    },
    {
        "correct":0,
        "answers": [
            "Due care",
            "Due diligence",
            "Separation of duties",
            "Informed consent"
        ],
        "question": "Chris is an information security professional for a major corporation and, as he is walking into the building, he notices that the door to a secure area has been left ajar. Physical security does not fall under his responsibility, but he takes immediate action by closing the door and informing the physical security team of his action. What principle is Chris demonstrating?"
    },
    {
        "correct":3,
        "answers": [
            "SIEM",
            "Log repositories",
            "IPS",
            "SOAR"
        ],
        "question": "Alyssa's team recently implemented a new system that gathers information from a variety of log sources, analyzes that information, and then triggers automated playbooks in response to security events. What term best describes this technology?"
    },
    {
        "correct":0,
        "answers": [
            "Implement a CDN.",
            "Increase the number of servers in the web application server cluster.",
            "Contract for DDoS mitigation services via the company's ISP.",
            "Increase the amount of bandwidth available from one or more ISPs."
        ],
        "question": "Cameron is worried about distributed denial-of-service (DDoS) attacks against his company's primary web application. Which of the following options will provide the most resilience against large-scale DDoS attacks?"
    },
    {
        "correct":1,
        "answers": [
            "Key management box (KMB)",
            "Hardware security module (HSM)",
            "Ticket-granting ticket (TGT)",
            "Trusted computing base (TCB)"
        ],
        "question": "Which of the following is a device specially designed to handle the management of cryptographic keys?"
    },
    {
        "correct":1,
        "answers": [
            "Having one point of egress for personnel",
            "Ensuring that redundant cabling/connectivity enters the facility from different sides of the building/property",
            "Ensuring that all parking areas are near generators so that personnel in high-traffic areas are always illuminated by emergency lighting, even when utility power is not available",
            "Ensuring that the foundation of the facility is rated to withstand earthquake tremors"
        ],
        "question": "Best practice for planning the physical resiliency for a cloud datacenter facility includes ___________________."
    },
    {
        "correct":3,
        "answers": [
            "Profit",
            "Performance",
            "Cost",
            "Opportunity"
        ],
        "question": "Risk should always be considered from a business perspective. When a risk is accepted, it should be balanced by a corresponding ___________________."
    },
    {
        "correct":2,
        "answers": [
            "99.422%",
            "99.671%",
            "99.741%",
            "99.995%"
        ],
        "question": "You are designing a cloud datacenter that is expected to meet Tier 2 status according to the Uptime Institute standards. What level of availability must you achieve to meet this standard?"
    },
    {
        "correct":3,
        "answers": [
            "File stores are always kept in plaintext in the cloud.",
            "There is no way to sanitize file storage space in the cloud.",
            "Virtualization prevents the use of application-based security controls.",
            "Virtual machines are stored as snapshotted files when not in use."
        ],
        "question": "Which one of the following statements about file storage security in the cloud is correct?"
    },
    {
        "correct":1,
        "answers": [
            "Uninterruptible power supplies",
            "Dual-power supplies in systems",
            "Backup generator",
            "Cooling"
        ],
        "question": "Which one of the following components is not necessary in a Tier 1 datacenter?"
    },
    {
        "correct":1,
        "answers": [
            "Cloud customer; ISP",
            "SDN controllers; SDN applications",
            "Cloud provider; ISP",
            "Router; host"
        ],
        "question": "In software-defined networking (SDN), the northbound interface (NBI) usually handles traffic between the ___________________ and the ___________________."
    },
    {
        "correct":2,
        "answers": [
            "Single sign-on",
            "Insecure direct identifiers",
            "Identity federation",
            "Cross-site scripting"
        ],
        "question": "A user signs on to a cloud-based social media platform. In another browser tab, the user finds an article worth posting to the social media platform. The user clicks on the platform's icon listed on the article's website, and the article is automatically posted to the user's account on the social media platform. This is an example of what?"
    },
    {
        "correct":1,
        "answers": [
            "Key management box (KMB)",
            "Hardware security module (HSM)",
            "Ticket-granting ticket (TGT)",
            "Trusted computing base (TCB)"
        ],
        "question": "Which of the following is a device specially purposed to handle the issuance, distribution, and storage of cryptographic keys?"
    },
    {
        "correct":2,
        "answers": [
            "Technical",
            "External",
            "Management",
            "Logical"
        ],
        "question": "Sprawl is mainly a(n) ___________________ problem."
    },
    {
        "correct":1,
        "answers": [
            "Have all participants conduct their individual activities via remote meeting technology.",
            "Task a moderator well versed in BC/DR actions to supervise and present scenarios to the participants, including randomized special events.",
            "Provide copies of the BC/DR policy to all participants.",
            "Allow all users in your organization to participate."
        ],
        "question": "You are in charge of creating the business continuity and disaster recovery (BC/DR) plan and procedures for your organization. You decide to have a tabletop test of the BC/DR activity. Which of the following will offer the best value during the test?"
    },
    {
        "correct":1,
        "answers": [
            "Enough personnel at the BC/DR recovery site to ensure proper operations",
            "Good cryptographic key management",
            "Access to the servers where the BC/DR backup is stored",
            "Forensic analysis capabilities"
        ],
        "question": "You are in charge of creating the business continuity and disaster recovery (BC/DR) plan and procedures for your organization. Your organization has its production environment hosted by a cloud provider, and you have appropriate protections in place. Which of the following is a significant consideration for your BC/DR backup?"
    },
    {
        "correct":0,
        "answers": [
            "Remote access for a customer to racked devices in the datacenter; electrical utilities; connectivity to an internet service provider (ISP)/the internet",
            "Application suitability; availability; connectivity",
            "Infrastructure as a service (IaaS); software as a service (SaaS); platform as a service (PaaS)",
            "Antimalware tools; controls against distributed denial-of-service (DDoS) attacks; physical/environmental security controls, including fire suppression"
        ],
        "question": "The minimum essential characteristics of a cloud datacenter are often referred to as “ping, power, pipe.” What does this term mean?"
    },
    {
        "correct":0,
        "answers": [
            "Failover cluster",
            "UPS",
            "Tape backup",
            "Cold site"
        ],
        "question": "Mary is reviewing the availability controls for the system architecture shown here. What technology is shown that provides fault tolerance for the database servers?"
    },
    {
        "correct":2,
        "answers": [
            "Virtual server instances",
            "FaaS",
            "Object storage",
            "Containers"
        ],
        "question": "Which one of the following services would be least likely described as providing computing capability?"
    },
    {
        "correct":3,
        "answers": [
            "Dedicated disks",
            "Block",
            "Encrypted",
            "Object"
        ],
        "question": "Melissa uses the snapshot capabilities of her cloud service provider to make backup copies of the disk volumes that support her virtual machines. What type of storage is most likely used to store these backups?"
    },
    {
        "correct":3,
        "answers": [
            "Application logs",
            "Security logs",
            "Netflow records",
            "Packet capture"
        ],
        "question": "Which one of the following audit mechanisms would be able to provide the most accurate reconstruction of user activity?"
    },
    {
        "correct":2,
        "answers": [
            "Not having essential BC/DR personnel available during a contingency",
            "Not including all BC/DR elements in the cloud contract",
            "Returning to normal operations too soon",
            "Telecommunications outages"
        ],
        "question": "Charles is the BC/DR program manager for a cloud service provider. He is assessing the risks facing his program. He believes that the organization has done adequate BC/DR planning but they have never actually activated the plan. Which of the following would most likely pose the most significant risk to the organization?"
    },
    {
        "correct":3,
        "answers": [
            "Network mapping",
            "Vulnerability scanning",
            "Reconnaissance",
            "Social engineering"
        ],
        "question": "Cloud providers will probably not allow ___________________ as part of a customer's penetration test."
    },
    {
        "correct":2,
         "answers": [
                 "User IDs",
                 "Authentication",
                 "Authorization",
                 "Identity proofing"
             ],
             "question": "Lin wants to allow her users to use existing credentials provided by a third-party identity provider when they access her service. What element will she have to provide from the following list?"
         },
         {
        "correct":3,
         "answers": [
                 "Reliability of applications built in the cloud",
                 "Scalability of applications built in the cloud",
                 "Redundancy of applications built in the cloud",
                 "Security of applications built in the cloud"
             ],
             "question": "Susan wants to avoid common pitfalls in cloud application development. Which of the following pitfalls is frequently associated with cloud environments?"
         },
         {
        "correct":1,
         "answers": [
                 "Brainstorming",
                 "Documentation review",
                 "User observation",
                 "Surveys"
             ],
             "question": "Ben wants to gather business requirements for his software development effort and is using an Agile methodology. Which of the following is not a common means of gathering user requirements in an Agile process?"
         },
         {
        "correct":0,
         "answers": [
                 "Define",
                 "Design",
                 "Development",
                 "Test"
             ],
             "question": "At which phase of the software development life cycle (SDLC) is user involvement most crucial?"
         },
         {
        "correct":0,
         "answers": [
                 "Analysis and requirements definition",
                 "Design",
                 "Implementation",
                 "Testing"
             ],
             "question": "Brian wants to ensure that he takes the OWASP Top 10 Cloud risks into account in his development process. He knows that regulatory compliance is on the list, and he wants to include it in the SDLC. During what phase of the SDLC would it make the most sense to consider regulatory compliance?"
         },
         {
        "correct":0,
         "answers": [
                 "Vulnerable and outdated components",
                 "Broken access control",
                 "Injection",
                 "Security misconfiguration"
             ],
             "question": "Dana's organization requires an SBOM for each application it deploys. What OWASP Top 10 item does an SBOM help to avoid?"
         },
         {
        "correct":1,
         "answers": [
                 "Design",
                 "Testing",
                 "Implementation",
                 "Deployment"
             ],
             "question": "What phase of the SDLC is IAST typically associated with?"
         },
         {
        "correct":1,
         "answers": [
                 "Use of unstructured data",
                 "Lack of authentication",
                 "Use of semi-structured data",
                 "Lack of encryption"
             ],
             "question": "Gary's cloud service provides customers with access to APIs. Which of the following is a common security flaw in APIs?"
         },
         {
        "correct":1,
         "answers": [
                 "A web application vulnerability scan",
                 "A software composition analysis",
                 "A vulnerability scan",
                 "A version number validation process"
             ],
             "question": "Lori wants to ensure that the included software components provided by her vendor are secure. What type of process should she use to conduct an assessment of those packages?"
         },
         {
        "correct":0,
         "answers": [
                 "Abuse case testing",
                 "Static testing",
                 "QA testing",
                 "SCA testing"
             ],
             "question": "Christine has documented a software testing user story that states: “As an attacker, I will upload malicious software as part of my form submission which will exploit the parsing software that reads user submissions.” What type of testing is Christine preparing for?"
         },
         {
        "correct":1,
         "answers": [
                 "To be used as a metric",
                 "To be used for auditing",
                 "To be used as guidance",
                 "To be used during procurement"
             ],
             "question": "OWASP'S Application Security Verification Standard (ASVS) has three primary usage models. Which of the following is not an intended usage model based on its design objectives?"
         },
         {
        "correct":0,
         "answers": [
                 "The OWASP Top 10",
                 "The NIST Dirty Dozen",
                 "The SANS Top 25",
                 "The MITRE ATT&CK-RS"
             ],
             "question": "Ian wants to use a cloud-specific list of application issues. Which of the following options should he choose?"
         },
         {
        "correct":1,
         "answers": [
                 "A DAM",
                 "A WAF",
                 "An XML firewall",
                 "An API gateway"
             ],
             "question": "Valerie's company has recently experienced successful SQL injection attacks against a third-party application they use. The vendor has not yet provided a patch for the SQL injection flaw, but Valerie needs to keep the application in production due to business requirements. What type of tool could Valerie put in place to protect against the SQL injection attacks on her web application?"
         },
         {
        "correct":1,
         "answers": [
                 "Packages",
                 "Containers",
                 "Virtual machines",
                 "Hypervisors"
             ],
             "question": "Jackie wants to allow applications to run using the libraries and other dependencies they need without having to have an independent operating system for each application. What technology should she use to allow her to easily move application packages between different operating systems?"
         },
         {
        "correct":2,
         "answers": [
                 "Use shared service accounts.",
                 "Use multifactor authentication.",
                 "Use dynamic secrets.",
                 "Use API keys."
             ],
             "question": "Megan wants to increase the auditability of the use of privileges in her infrastructure. Which of the following solutions will have the biggest positive impact on auditability?"
         },
         {
        "correct":0,
         "answers": [
                 "To control usage-based costs",
                 "To limit access based on service categories",
                 "To help limit the potential for sensitive data loss",
                 "To detect anomalous usage patterns"
             ],
             "question": "Aisha's organization has deployed a cloud application security broker. Which of the following is not a typical purpose for a CASB to be deployed?"
         },
         {
        "correct":2,
         "answers": [
                 "Identity and activity",
                 "Activity and data",
                 "Identity and service",
                 "Service and data"
             ],
             "question": "Ian is using a CASB to control usage of cloud services. He wants to ensure that users in his organization only use cloud services that are approved for their role. What two elements should he define in his rules to most effectively accomplish this?"
         },
         {
        "correct":0,
         "answers": [
                 "Attacks",
                 "Threats",
                 "Architecture",
                 "Mitigations"
             ],
             "question": "Jack wants to use the ATASM model. Which of the following is not one of the key elements of an ATASM assessment?"
         },
         {
        "correct":3,
         "answers": [
                 "Use an IPS and a scalable architecture.",
                 "Use a scalable architecture and set throttling limits and quotas.",
                 "Require authentication and use an IPS.",
                 "Require authentication and set throttling limits and quotas."
             ],
             "question": "Paula wants to avoid denial-of-service attacks against her APIs. What controls should she select to most effectively provide this type of security?"
         },
         {
        "correct":2,
         "answers": [
                 "Hardware tokens",
                 "Mobile applications",
                 "SMS factors",
                 "USB tokens"
             ],
             "question": "Olivia's organization wants to adopt multifactor authentication. Which of the following MFA models is considered less secure than the others?"
         },
         {
        "correct":2,
         "answers": [
                 "A DAM with OpenID support",
                 "A SAML compliant IDS",
                 "An XML firewall",
                 "A WAF"
             ],
             "question": "Kristen wants to filter her SAML traffic for potential attacks, including rate-limiting requests and validating content. Which of the following solutions is purpose-built for this type of security design?"
         },
         {
        "correct":1,
         "answers": [
                 "Hardware tokens",
                 "Biometric readers",
                 "Mobile applications",
                 "SMS factors"
             ],
             "question": "Angela wants to deploy multifactor authentication (MFA) for her organization and wants to integrate with her cloud provider. Which of the following MFA options is least likely to be easily supported by a cloud provider?"
         },
         {
        "correct":1,
         "answers": [
                 "Development efforts can move easily between phases to meet organizational needs.",
                 "The outcome of each phase serves as the input to the next phase.",
                 "Development efforts repeat in cycles until the development is complete.",
                 "The outcome of each phase determines whether the process moves forward or backward in the SDLC process."
             ],
             "question": "Annie's organization uses a waterfall methodology for its SDLC. What description best fits a waterfall methodology?"
         },
         {
        "correct":3,
         "answers": [
                 "Black box",
                 "Functional testing",
                 "White box",
                 "Nonfunctional testing"
             ],
             "question": "Stress testing is a form of what type of testing?"
         },
         {
        "correct":1,
         "answers": [
                 "The SHA2 hash",
                 "The cryptographic signature",
                 "The file size",
                 "The version number"
             ],
             "question": "Lisa wants to ensure that the open source software package she has downloaded is legitimate. The software download site provides an SHA2 hash, a cryptographic signature, a file size, and a version number. Which of these options provides the greatest level of certainty?"
         },
         {
        "correct":0,
         "answers": [
                 "IAST",
                 "Interactive DST",
                 "SCA",
                 "Structured DST"
             ],
             "question": "James has created monitoring instrumentation for his application and uses the instrumentation to assess performance as well as function during the QA stage of his SDLC. What type of software validation methodology is he using?"
         },
         {
        "correct":3,
         "answers": [
                 "Cloud provider native SSO",
                 "Active Directory",
                 "SAML",
                 "LDAP"
             ],
             "question": "Frankie wants to implement single sign-on for her organization. Which of the following options is not commonly supported for SSO in cloud environments?"
         },
         {
        "correct":2,
         "answers": [
                 "Set the operating system to prevent root logins.",
                 "Set a non-privileged user as the container owner.",
                 "Set a non-privileged user as the process owner.",
                 "Use multifactor authentication for the root user."
             ],
             "question": "Pete is reviewing his environment based on the OWASP Cloud Native Application Security Top 10. He knows that container configuration is a top concern and has identified that his containers currently run as root. How can he remediate this issue?"
         },
         {
        "correct":0,
         "answers": [
                 "Define",
                 "Design",
                 "Develop",
                 "Test"
             ],
             "question": "At which phase of the software development life cycle (SDLC) should security personnel first be involved?"
         },
         {
        "correct":3,
         "answers": [
                 "Planning",
                 "Building",
                 "Deployment",
                 "Testing"
             ],
             "question": "Henry uses an IAST process as part of his SLDC. What SDLC phase is IAST most likely to occur in?"
         },
         {
        "correct":2,
         "answers": [
                 "Use a common passphrase word list in an automated CI/CD pipeline.",
                 "Require password complexity.",
                 "Generate passphrases randomly.",
                 "Exclusively use shared passphrases."
             ],
             "question": "Malika wants to ensure that human error doesn't influence the security of secrets in her organization. Which of the following practices will most effectively prevent human-related issues from influencing her secrets security?"
         },
         {
        "correct":2,
         "answers": [
                 "Add software going through QA to his production environment to allow live testing.",
                 "Create a new environment for QA testing, then promote to production after testing.",
                 "Replicate the production environment for QA testing, then promote to production after testing.",
                 "Add software to the QA environment for testing, then allow production users to access QA with instrumentation in place."
             ],
             "question": "James uses a CI/CD pipeline at the core of his development process. What design pattern should he use to ensure his QA process doesn't impact production?"
         },
         {
        "correct":0,
         "answers": [
                 "ASVS",
                 "SAFECode",
                 "OWASP",
                 "SANS/CWE"
             ],
             "question": "Tara's organization uses a three-level application security verification standard, and requires that their most secure applications reach level 3 with in-depth validation and testing. What application security standard are they using?"
         },
         {
           "correct":2,
           "answers": [
               "Notification of breaches",
               "Regulatory compliance",
               "Managing expectations",
               "Problem management"
           ],
           "question": "Sally is building her organization's communication plans and knows that customers are an important group to include in the plan. What key function does proactive customer communication help with?"
       },
       {
           "correct":0,
           "answers": [
               "The number of business processes with continuity agreements",
               "The number of vulnerabilities found in installed software per period of time",
               "The number of patches installed per period of time",
               "The number of natural disasters in the local area in a year"
           ],
           "question": "James wants to establish key performance indicators for his service continuity management practice based on ITIL. Which of the following is a useful KPI for service continuity management?"
       },
       {
           "correct":0,
           "answers": [
               "Migrates the running virtual machines to other hardware",
               "Pauses all running VMs immediate",
               "Sends a notification to users, then pauses running VMs",
               "Marks the machine as unavailable for new VMs"
           ],
           "question": "Tim puts a server in his virtualization environment into maintenance mode. Which of the following events will occur?"
       },
       {
           "correct":2,
           "answers": [
               "Block inbound connections to TCP port 3389 on his firewall.",
               "Block outbound connections to TCP port 3389 on his firewall.",
               "Block inbound connections to TCP port 22 on his firewall.",
               "Block outbound connections to TCP port 22 on his firewall."
           ],
           "question": "Ujama wants to protect systems in his environment from being accessed via SSH. What should he do if he needs to leave the service available for local connections?"
       },
       {
           "correct":1,
           "answers": [
               "CRM",
               "CMDB",
               "Configuration item",
               "Change catalog"
           ],
           "question": "Ron wants to use a central system to store information about system and software configurations and their relationships. What tool is often used for this to support standards-based configuration management practices like those found in ITIL v4?"
       },
       {
           "correct":1,
           "answers": [
               "Maria's organization is responsible for patching and needs to set up a regular patch cycle.",
               "The vendor is responsible for patching and there is no patching that needs to be done by customers in a PaaS environment.",
               "Negotiations need to be done with the vendor to determine which organization is responsible for patch management.",
               "The contract will determine which organization is responsible for patch management."
           ],
           "question": "Maria's manager is concerned about patching for the underlying cloud environment that her platform as a service (PaaS) vendor provides. What should Maria tell her manager?"
       },
       {
           "correct":2,
           "answers": [
               "Designing services for availability, disaster recovery testing, determining availability targets",
               "Availability management, availability metrics, and availability improvement",
               "Designing services for availability, availability testing, and availability monitoring and reporting",
               "Availability planning, availability improvement, availability validation"
           ],
           "question": "ITIL v4 describes three subprocesses related to availability management. What are these three subprocesses?"
       },
       {
           "correct":0,
           "answers": [
               "Creating a baseline",
               "Deploying new assets",
               "Establishing a CMB",
               "Documenting deviations from the baseline"
           ],
           "question": "Megan is starting her organization's change management practices. She has conducted an asset inventory. What step is typically next in a change management process?"
       },
       {
           "correct":1,
           "answers": [
               "Manual static code review",
               "Automated code review",
               "Using a web application firewall",
               "Using an IPS"
           ],
           "question": "Theresa is building an automated CI/CD pipeline. She wants to ensure that code that passes through the pipeline is secure before it moves from staging to production. What is her best option if she wants to test the running application?"
       },
       {
           "correct":1,
           "answers": [
               "The customer",
               "Both the customer and the service provider",
               "The service provider",
               "Third-party incident responders"
           ],
           "question": "The Cloud Security Alliance's Cloud Incident Response (CIR) framework documents typical breakdowns for customer versus cloud provider responsibilities in incident response, including pointing to cloud providers as being responsible for almost all risks in an SaaS environment. In an IaaS environment, who is responsible for network risks?"
       },
       {
           "correct":3,
           "answers": [
               "The network routes between the datacenters",
               "Network throughput between the two datacenters",
               "The bandwidth between the two datacenters",
               "Network response time (latency) between the datacenters"
           ],
           "question": "Juanita is responsible for a web application that is split between an on-site application environment and a cloud-hosted database. Juanita knows the application performs thousands of small database queries for some transactions. What performance monitoring option is most important to her application's performance?"
       },
       {
           "correct":0,
           "answers": [
               "Customer KPI oversight",
               "Service capacity management",
               "Component capacity management",
               "Capacity management reporting"
           ],
           "question": "Ilya wants to use an ITIL v4–based practice for capacity and performance management. Which of the following is not a typical subprocess for capacity and performance management under ITIL?"
       },
       {
           "correct":1,
           "answers": [
               "Ensure that all virtual switches are not connected to the physical network",
               "Ensure that management systems are connected to a different physical network than the production systems",
               "Never connect a virtual switch to a physical host",
               "Connect physical devices only with virtual switches"
           ],
           "question": "In order to enhance virtual environment isolation and security, a best practice is to ___________________."
       },
       {
           "correct":1,
           "answers": [
               "Problem management",
               "Release management",
               "Change management",
               "IT asset management"
           ],
           "question": "Deployment management is a component of which service management practice in ITIL v4?"
       },
       {
           "correct":2,
           "answers": [
               "Carlos cannot track temperature and voltages for his virtual system, but he can track load using the underlying hardware.",
               "Carlos cannot track load, but he can track temperature and voltages for his virtual system and should use the underlying hardware for the VM.",
               "Carlos cannot track temperature and voltages for a virtual CPU, but he can track load via the operating system.",
               "Carlos cannot track load and voltages, but he can install a thermal sensor to track his virtual machine's temperature."
           ],
           "question": "Carlos wants to monitor CPU load, temperature, and voltages for his virtual machine. What should Carlos do to achieve this?"
       },
       {
           "correct":2,
           "answers": [
               "CSI manager",
               "Process architect",
               "Process owner",
               "Customer"
           ],
           "question": "Megan is responsible for ensuring that her organization's continual service improvement efforts are meeting their goals. What formal role does Megan hold under ITIL?"
       },
       {
           "correct":0,
           "answers": [
               "She can only scan her own internal systems.",
               "She will have to use the service provider's scanning tools.",
               "She can only scan her own external systems.",
               "She will need to schedule a time and date for the scans."
           ],
           "question": "Naomi wants to conduct a vulnerability scan of her cloud environment. What requirement is she likely to need to meet with her cloud service vendor for an IaaS environment?"
       },
       {
           "correct":2,
           "answers": [
               "Hardware HSM",
               "Cloud TPM",
               "Virtual TPM",
               "Cloud HSM"
           ],
           "question": "The operating system that Jack wants to install in his cloud environment requires a cryptographic store as part of the boot process to ensure that the hardware has been validated. Which of the following tools will allow him to meet this requirement?"
       },
       {
           "correct":2,
           "answers": [
               "Engaging third-party responders based on best practices",
               "Managing problem escalations",
               "Restoring a service as soon as possible after an incident",
               "Identifying incidents to allow response"
           ],
           "question": "What key function is described by ITIL's incident management practice?"
       },
       {
           "correct":3,
           "answers": [
               "Every problem is the result of an incident, but not all incidents are problems.",
               "Problems and incidents are distinct and unrelated.",
               "Problems are handled by support desks, and incidents are handled by security professionals.",
               "Every incident is the result of a problem, but not all problems are incidents."
           ],
           "question": "What description best explains the relationship between problems and incidents?"
       },
       {
           "correct":3,
           "answers": [
               "Availability of the service relative to SLAs for the service",
               "The number of service interruptions",
               "The duration of the service interruptions",
               "The number of individuals impacted by service interruptions"
           ],
           "question": "Olivia wants to establish key performance indicators compatible with ITIL for her availability management practice. Which of the following is not a useful availability KPI?"
       },
       {
           "correct":0,
           "answers": [
               "ISO 20000-1",
               "ISO 27001",
               "ITIL v4",
               "COBIT"
           ],
           "question": "Alaina wants to align her organization's service-level management to an ISO standard. Which ISO standard describes service management?"
       },
       {
           "correct":0,
           "answers": [
               "Using instances running on alternate CPU architectures",
               "Multiple system vendors for the same services",
               "Explicitly documented business continuity and disaster recovery (BC/DR) functions in the service-level agreement (SLA) or contract",
               "Failover capability back to the customer's on-premises environment"
           ],
           "question": "Methods for achieving high-availability cloud environments include all of the following except"
       },
       {
           "correct":3,
           "answers": [
               "SIEM",
               "NAS",
               "SCCM",
               "SOC"
           ],
           "question": "Derek wants to set up a 24×7 team to monitor for and respond to security incidents. What should he implement?"
       },
       {
           "correct":3,
           "answers": [
               "IaC decreases consistency.",
               "IaC is not easily updated.",
               "IaC decreases speed.",
               "IaC can cause errors to spread quickly."
           ],
           "question": "Mike's organization is considering adopting an infrastructure as code (IaC) strategy. What should Mike identify as a potential risk in an IaC environment?"
       },
       {
           "correct":3,
           "answers": [
               "Contact the provider and ask about appropriate scan windows.",
               "Request vulnerability scan data from the vendor.",
               "Scan the provider on a regular basis whenever she wants to.",
               "Consider asking the SaaS provider about their own patching and scanning practices."
           ],
           "question": "Selah wants to conduct a vulnerability scan of her SaaS provider's service as part of her ongoing security operations responsibility. What should she do?"
       },
       {
           "correct":3,
           "answers": [
               "Vulnerability management",
               "Threat management",
               "Incident response",
               "eDiscovery"
           ],
           "question": "Melissa is responsible for establishing an SOC in her organization. Which of the following services is not a typical SOC offering?"
       },
       {
           "correct":0,
           "answers": [
               "Establish, approve, and communicate an information security policy.",
               "Create and regularly update an information security policy.",
               "Adopt an ISO/IEC standard template-based information security policy.",
               "Undergo a third-party review of the organization's security policy."
           ],
           "question": "Hannah wants to align her information security management program to ISO/IEC 20000-1. According to the standard, what must be done with an information security policy?"
       },
       {
           "correct":1,
           "answers": [
               "Automatic instance management",
               "Distributed resource scheduling",
               "Round-robin load balancing",
               "Instance segregation"
           ],
           "question": "Mike's VMWare cluster moves virtual machines from heavily loaded hosts to hosts with lower loads. What technology is Mike using?"
       },
       {
           "correct":3,
           "answers": [
               "Powered-on time",
               "Drive temperature",
               "Drive health",
               "Used capacity"
           ],
           "question": "Which of the following is not commonly measured as part of a disk's hardware monitoring?"
       },
       {
           "correct":2,
           "answers": [
               "Maintenance of the service-level management framework",
               "Identification of service requirements",
               "Pricing structures and penalties",
               "Service-level monitoring and reporting"
           ],
           "question": "ITIL v4 defines four subprocesses for service-level management. Which of the following is not one of the four subprocesses?"
       },
       {
           "correct":3,
           "answers": [
               "Use a local virtual machine.",
               "Use a bastion host.",
               "Use a jumpbox.",
               "Use a virtual client."
           ],
           "question": "Michelle wants to run an application from low-trust devices. What type of cloud-based solution could help her run the application in a secure way?"
       },
       {
           "correct":1,
           "answers": [
               "Follow ISO standards to identify and preserve the data.",
               "Engage third-party forensic professionals.",
               "Follow his cloud provider's best practices to identify and preserve the data.",
               "Request that his cloud provider perform the forensic efforts."
           ],
           "question": "Jason's company operates their small business in a cloud-hosted environment. After a recent breach, Jason wants to conduct forensics. What should Jason do to ensure his organization conducts proper forensic capture in a cloud environment if he is not a forensic practitioner?"
       },
       {
           "correct":0,
           "answers": [
               "Geographic location",
               "Proximity to population centers",
               "Cost",
               "Security requirements"
           ],
           "question": "Which of the following factors would probably most affect the design of a cloud datacenter?"
       }
  ]);
  }
}
