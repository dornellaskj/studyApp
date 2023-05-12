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
     }
  ]);
  }
}

