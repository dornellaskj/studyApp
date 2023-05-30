import { Injectable } from '@angular/core';
import { UtilitiesService } from'./utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CcspBookTest2Service {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions([
    {
        "correct":3,
        "answers": [
            "Customer access provision",
            "Management system control interface",
            "Storage controller access",
            "Customer production activities"
        ],
        "question": "Which of the following cloud datacenter functions do not have to be performed on isolated networks?"
    },
    {
        "correct":1,
        "answers": [
            "Logical connectivity",
            "Human interaction",
            "Electricity",
            "Facility space"
        ],
        "question": "When cloud computing professionals use the phrase ping, power, pipe, which of the following characteristics is not being described?"
    },
    {
        "correct":0,
        "answers": [
            "1",
            "3",
            "4",
            "8"
        ],
        "question": "You are the security manager for a small retail business involved mainly in direct e-commerce transactions with individual customers (members of the public). The bulk of your market is in Asia, but you do fulfill orders globally. Your company has its own datacenter located within its headquarters building in Hong Kong, but it also uses a public cloud environment for contingency backup and archiving purposes. Your cloud provider is changing its business model at the end of your contract term, and you have to find a new provider. In choosing providers, which tier of the Uptime Institute rating system should you be looking for, if minimizing cost is your ultimate goal?"
    },
    {
        "correct":0,
        "answers": [
            "Nonrepudiation",
            "Plausible deniability",
            "Data tampering by investigators",
            "Engaging with law enforcement"
        ],
        "question": "What does chain-of-custody documentation and tracking help with?"
    },
    {
        "correct":2,
        "answers": [
            "Access to clean water",
            "Broadband data connection",
            "Extended battery backup",
            "Physical access to the datacenter"
        ],
        "question": "When designing a cloud datacenter, which of the following aspects is not necessary to ensure continuity of operations during contingency operations?"
    },
    {
        "correct":2,
        "answers": [
            "ISO 27001",
            "ISO 27002",
            "ISO 27050",
            "ISO 27701"
        ],
        "question": "Cathy is developing an eDiscovery program to help her organization formalize its compliance with legal hold obligations. She would like to use an industry standard to guide her toward best practices. What standard should she consider using for this work?"
    },
    {
        "correct":2,
        "answers": [
            "Internal assessment",
            "External audit",
            "Internal audit",
            "External assessment"
        ],
        "question": "Nora is an employee of Acme Widgets and works on a team of auditors who examine the organization's financial controls. She is currently working on a project to evaluate whether payments to cloud providers are proper and will be reporting her results to management. What term best describes Nora's role in this project?"
    },
    {
        "correct":2,
        "answers": [
            "Notice",
            "Management",
            "Access",
            "Choice and Consent"
        ],
        "question": "Carla is assigned to manage her organization's privacy program and is working to communicate to customers about a change in the organization's privacy practices. She plans to send an email notifying customers of the change and allowing them to opt out of the use of their data. Which GAPP principle is not described in this scenario?"
    },
    {
        "correct":1,
        "answers": [
            "Be located in a country with a nationwide law that complies with the EU laws.",
            "Appeal to the EU High Court for permission.",
            "Create binding contractual language that complies with the EU laws.",
            "Join the Privacy Shield program in its own country."
        ],
        "question": "Which of the following is not a way in which an entity located outside the European Union (EU) can be allowed to gather and process privacy data belonging to EU citizens?"
    },
    {
        "correct":3,
        "answers": [
            "Statement on Auditing Standards (SAS) 70 standard",
            "Statement on Standards for Attestation Engagements (SSAE) 18 standard",
            "Service Organization Control (SOC) 2, Type 2 report matrix",
            "ISO 27001 certification requirements"
        ],
        "question": "An audit against the _________________ will demonstrate that an organization has a holistic, comprehensive program of internal security controls."
    },
    {
        "correct":0,
        "answers": [
            "Student identification number",
            "Social Security number",
            "Driver's license number",
            "Credit card number"
        ],
        "question": "Which one of the following elements of information is not considered a direct identifier that would trigger most United States (U.S.) state data breach laws?"
    },
    {
        "correct":0,
        "answers": [
            "ISO 27001",
            "ISO 27018",
            "ISO 27002",
            "GDPR"
        ],
        "question": "Which of the following was the first international standard addressing the privacy aspects of cloud computing for consumers?"
    },
    {
        "correct":2,
        "answers": [
            "PHI",
            "Proprietary data",
            "PII",
            "EDI"
        ],
        "question": "Gwen is a cybersecurity professional for a financial services firm that maintains records of their customers. These records include personal information about each customer, including the customer's name, Social Security number, date and place of birth, and mother's maiden name. What category best describes these records?"
    },
    {
        "correct":1,
        "answers": [
            "Vendor lock-in",
            "Vendor viability",
            "Vendor lockout",
            "Vendor diversity"
        ],
        "question": "Aaron is concerned about the possibility that a cloud vendor that his organization relies on may go out of business. What term best describes this risk?"
    },
    {
        "correct":0,
        "answers": [
            "Confidentiality of customer information",
            "Failover time",
            "Uptime",
            "Maximum consecutive downtime"
        ],
        "question": "Which one of the following issues is not normally addressed in a service-level agreement (SLA)?"
    },
    {
        "correct":1,
        "answers": [
            "Security team",
            "External auditor",
            "Government regulator",
            "IT leadership"
        ],
        "question": "Who would normally conduct a review of security controls under SSAE 18?"
    },
    {
        "correct":0,
        "answers": [
            "It mandates a specific control set.",
            "It is an attestation standard.",
            "It is used for external audits.",
            "It uses a framework, including SOC 1, SOC 2, and SOC 3 reports."
        ],
        "question": "Which of the following statements about SSAE-18 is not correct?"
    },
    {
        "correct":1,
        "answers": [
            "ECPA",
            "CALEA",
            "Privacy Act",
            "HITECH Act"
        ],
        "question": "Matt works for a telecommunications firm and was approached by a federal agent seeking assistance with wiretapping one of Matt's clients pursuant to a search warrant. Which one of the following laws requires that communications service providers cooperate with law enforcement requests?"
    },
    {
        "correct":0,
        "answers": [
            "FISMA",
            "PCI DSS",
            "HIPAA",
            "GISRA"
        ],
        "question": "Tim's organization recently received a contract to conduct sponsored research as a government contractor. What law now likely applies to the information systems involved in this contract?"
    },
    {
        "correct":3,
        "answers": [
            "BIA",
            "BPA",
            "PPA",
            "PIA"
        ],
        "question": "Katie is conducting a thorough review of all of the personally identifiable information (PII) used by her organization. What term best describes this assessment?"
    },
    {
        "correct":1,
        "answers": [
            "Uses of customer data",
            "Accuracy of financial statements",
            "Network firewall protections",
            "Endpoint security"
        ],
        "question": "Colin is conducting an audit of the internal information security management system (ISMS) of a cloud service provider. Which one of the following items would normally be outside the scope of this audit?"
    },
    {
        "correct":0,
        "answers": [
            "ISAE 3402",
            "ISAE 3410",
            "SSAE 16",
            "SSAE 18"
        ],
        "question": "Nitesh is conducting a global audit of a multinational cloud service provider and has a question about appropriate testing procedures. Which one of the following documents would be most applicable to his situation?"
    },
    {
        "correct":2,
        "answers": [
            "Binding corporate rules",
            "Privacy Shield",
            "Standard contractual clauses",
            "Safe harbor"
        ],
        "question": "Wanda is working with one of her organization's European Union business partners to facilitate the exchange of customer information. Wanda's organization is located in the United States. What would be the best method for Wanda to use to ensure GDPR compliance?"
    },
    {
        "correct":1,
        "answers": [
            "Accounting",
            "Privacy",
            "Cybersecurity",
            "eDiscovery"
        ],
        "question": "James has been asked to lead a review of his organization's compliance with GAPP principles. What area will most directly fall into the scope of his assessment?"
    },
    {
        "correct":1,
        "answers": [
            "Healthcare provider",
            "Health and fitness application developer",
            "Health information clearinghouse",
            "Health insurance plan"
        ],
        "question": "Which one of the following organizations would not be automatically subject to the privacy and security requirements of HIPAA if they engage in electronic transactions?"
    },
    {
        "correct":0,
        "answers": [
            "Due care",
            "Due diligence",
            "Liability",
            "Reciprocity"
        ],
        "question": "_________________ is the legal concept whereby a cloud customer is held to a reasonable expectation for providing security of its users' and clients' privacy data."
    },
    {
        "correct":2,
        "answers": [
            "HIPAA",
            "HITECH",
            "NERC/CIP",
            "PCI DSS"
        ],
        "question": "You are conducting a risk assessment for a cloud service provider that will be operating infrastructure for an electric utility. What regulatory framework is most relevant to this organization?"
    },
    {
        "correct":3,
        "answers": [
            "You (the compliance officer)",
            "The cloud provider's network security team",
            "Your company",
            "The database administrator"
        ],
        "question": "You are the compliance officer for a medical device manufacturing firm. Your company maintains a cloud-based list of patients currently fitted with your devices for long-term care and quality assurance purposes. The list is maintained in a database that cross-references details about the hardware and some billing data. In this situation, who is likely to be considered the data custodian, under many privacy regulations and laws?"
    },
    {
        "correct":1,
        "answers": [
            "Tort law",
            "Doctrine of Proper Law",
            "Common law",
            "Criminal law"
        ],
        "question": "When a conflict of laws occurs, ________________determines the jurisdiction in which the dispute will be heard."
    },
    {
        "correct":1,
        "answers": [
            "Tampering by an unauthorized third party at the vendor's site",
            "Interception of devices in transit",
            "Misconfiguration by an administrator after installation",
            "Tampering by an unauthorized third party at Greg's site"
        ],
        "question": "Greg is evaluating a new vendor that will be supplying networking gear to his organization. Due to the nature of his organization's work, Greg is concerned that an attacker might attempt a supply chain exploit. Assuming that both Greg's organization and the vendor operate under reasonable security procedures, which one of the following activities likely poses the greatest supply chain risk to the equipment?"
    },
    {
        "correct":0,
        "answers": [
            "SOC 1",
            "SSAE 16",
            "GAAP",
            "SOC 2"
        ],
        "question": "What is an accounting report on controls at a service organization that replaces older SAS 70 type reports?"
    },
    {
        "correct":2,
        "answers": [
            "Confirming accuracy of financial statements",
            "Certifying against an international standard",
            "Investigating employee malfeasance",
            "Complying with PCI DSS requirements"
        ],
        "question": "In which of the following cases would it be most appropriate to engage an internal auditor?"
    },
    {
        "correct":2,
        "answers": [
            "SOC 1",
            "SOC 2",
            "SOC 3",
            "SOC 4"
        ],
        "question": "You operate a cloud service and would like to provide potential customers with a report that confirms the effectiveness of your security controls and is appropriate for use by the general public. What type of audit should you conduct?"
    },
    {
        "correct":3,
        "answers": [
            "Depreciated value",
            "Original cost",
            "Estimation",
            "Replacement cost"
        ],
        "question": "You would like to ensure that your organization's insurance policy covers the damage resulting from a security incident sufficiently to allow you to resume operations. What asset valuation technique should you use?"
    },
    {
        "correct":1,
        "answers": [
            "Contractual terms",
            "Escrow",
            "SLA",
            "Litigation"
        ],
        "question": "You are concerned that you may no longer have access to necessary source code if a cloud vendor ceases operations. What security control would best protect against this risk?"
    },
    {
        "correct":1,
        "answers": [
            "ITIL",
            "ISO 27002",
            "CMM",
            "PMBOK Guide"
        ],
        "question": "Ben is seeking a control objective framework that is widely accepted around the world and focuses specifically on information security controls. Which one of the following frameworks would best meet his needs?"
    },
    {
        "correct":3,
        "answers": [
            "Data owner",
            "Data custodian",
            "Data processor",
            "Data steward"
        ],
        "question": "What term is used to describe an individual within an organization who has been delegated day-to-day responsibility for decision-making about a category of information?"
    },
    {
        "correct":1,
        "answers": [
            "0.0025",
            "0.005",
            "0.01",
            "0.015"
        ],
        "question": "Based on the information in this scenario, what is the annualized rate of occurrence for a tornado at Atwood Landing's datacenter?"
    },
    {
        "correct":3,
        "answers": [
            "Jim must comply with the information in this document.",
            "The document contains information about forensic examinations.",
            "Jim should read the document thoroughly.",
            "The document is likely based on industry best practices."
        ],
        "question": "Jim starts a new job as a system engineer, and he is reviewing a team document titled “Forensic Response Guidelines for Cloud Services.” Which one of the following statements is not true?"
    },
    {
        "correct":2,
        "answers": [
            "GLBA",
            "HIPAA/HITECH",
            "FERPA",
            "GDPR"
        ],
        "question": "Which one of the following laws does not contain breach notification requirements?"
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
            "ITIL",
            "ISO",
            "HIPAA",
            "GLBA"
        ],
        "question": "Which of the following best describes a set of practices that focus on aligning IT services with business needs?"
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
            "Multifactor authentication",
            "Strong encryption",
            "Cryptographic hash",
            "Digital signature"
        ],
        "question": "Carla is completing an IT audit that involves very sensitive log records that may later be disputed. She would like to collect a copy of the log records now and then protect them with a technology that will provide nonrepudiation. Which one of the following technologies would best meet her needs?"
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
            "Incident management",
            "Change management",
            "Availability management",
            "Service level management"
        ],
        "question": "Andy is concerned that his organization is not meeting uptime requirements to their cloud service customers. Which one of the following ITIL control categories is least directly impacted?"
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
            "SOAP provides a much more lightweight solution.",
            "SOAP provides for stronger interoperability.",
            "SOAP is much more secure.",
            "SOAP is newer."
        ],
        "question": "Why is Simple Object Access Protocol (SOAP) used for accessing web services instead of the Distributed Component Object Model (DCOM) and the Common Object Request Broker Architecture (CORBA)?"
    },
    {
        "correct":2,
        "answers": [
            "Attempt to reboot the failed system.",
            "Shut down the failed system and send an alert.",
            "Restart the VMs hosted on that system on other cluster nodes.",
            "Migrate the hosts from the failed system to its backup mirror."
        ],
        "question": "Juanita has configured her virtualization cluster for high availability mode. The virtualization management plane detects that one of her servers has failed and is no longer sending heartbeat information. What will the cluster do if the node cannot be restarted?"
    },
    {
        "correct":3,
        "answers": [
            "Automatically install patches using built-in OS tools.",
            "Use a patching script developed by the organization.",
            "Set up automatic updates for all applications and the OS.",
            "Use the cloud provider's patching tools and patch baselines."
        ],
        "question": "Ilya wants to ensure that systems in his cloud environment are properly patched. Which of the following options will give him the most flexibility and control over patching, including when patches are installed and what patches are installed if his organization has a strong emphasis on using prebuilt tools?"
    },
    {
        "correct":1,
        "answers": [
            "Ensure the cloud provider regularly rotates keys for the logs.",
            "Use customer-managed encryption keys for logs.",
            "Use provider-managed encryption keys for logs.",
            "Avoid encrypting logs to ensure they remain accessible."
        ],
        "question": "Adam's organization uses Google cloud services and he wants to ensure that his organization's logs are secure. What best practice should he recommend to his organization to ensure that the logs are secure at rest?"
    },
    {
        "correct":2,
        "answers": [
            "Unstructured data",
            "Structured data",
            "Semi-structured data",
            "Partially structured data"
        ],
        "question": "Email and web pages are both examples of what type of data?"
    },
    {
        "correct":0,
        "answers": [
            "Configure DR in another region.",
            "Configure DR in another availability zone.",
            "Deploy redundant systems in her current availability zone.",
            "Deploy redundant systems in her current region."
        ],
        "question": "Valerie, an Amazon AWS user, is concerned about potential outages that might impact her current US-East region. What risk mitigation strategy should she take to ensure her organization can handle a region-wide outage?"
    },
    {
        "correct":2,
        "answers": [
            "A generator",
            "Purchasing power from two different providers",
            "UPS",
            "PDUs"
        ],
        "question": "Alaina wants to protect her on-premises datacenter from power issues. Which of the following options is best suited to handling brownouts?"
    },
    {
        "correct":3,
        "answers": [
            "Randomization",
            "Data masking",
            "Hashing",
            "Anonymization"
        ],
        "question": "When Susan logs into her organization's service portal, she sees customer data that has names and addresses removed. What data obfuscation technique is her organization using?"
    },
    {
        "correct":3,
        "answers": [
            "Logs from DNS servers",
            "Billing records",
            "API logs",
            "Web server logs"
        ],
        "question": "The Cloud Security Alliance notes that specific log types may only be available to cloud service providers when conducting forensic investigations. Which of the following log types will not typically be under service provider control in an IaaS environment?"
    },
    {
        "correct":3,
        "answers": [
            "System architect",
            "Availability tester",
            "Risk manager",
            "Availability manager"
        ],
        "question": "ITIL v4 defines one primary responsibility for availability. What role is key to availability efforts in ITIL?"
    },
    {
        "correct":2,
        "answers": [
            "Use the vendor's best practices definitions for cloud architect rights.",
            "Use only built-in roles.",
            "Define a custom role.",
            "Use multifactor authentication to map roles as needed."
        ],
        "question": "Wayne's organization employs cloud architects who have broad responsibility for the implementation and oversight of their cloud environment. He wants to provide the architects with appropriate rights in his environment. What should he do to provide them with the proper rights?"
    },
    {
        "correct":0,
        "answers": [
            "Identifying the cost of privacy efforts",
            "Ensuring that the organization meets legal and policy-based privacy requirements",
            "Identifying the risks of privacy breaches",
            "Identifying privacy controls"
        ],
        "question": "Which of the following is not a typical goal of a privacy impact assessment (PIA)?"
    },
    {
        "correct":0,
        "answers": [
            "Include the data labels in file metadata.",
            "Include the data labels in the filename.",
            "Include the data labels as s second file sent with the first.",
            "Include the data labels as part of a cryptographic wrapper."
        ],
        "question": "Mike wants to ensure that his data labeling travels with the data as it is used in his organization. What is the most effective and feasible option to ensure this?"
    },
    {
        "correct":2,
        "answers": [
            "Customers",
            "Partners",
            "Regulators",
            "Law enforcement"
        ],
        "question": "After a breach has been discovered, what group is most likely to have a legally required time frame to be notified about the breach?"
    },
    {
        "correct":2,
        "answers": [
            "Each customer uses a dedicated CPU per instance.",
            "Each customer uses a dedicated core per instance.",
            "Computation time is virtualized and allocated based on performance.",
            "Computation time is virtualized and allocated based on time."
        ],
        "question": "What is the most common method for allocation of compute power in cloud IaaS environments?"
    },
    {
        "correct":3,
        "answers": [
            "Contact points",
            "A description of the service",
            "Dependencies on other services",
            "Risk ratings"
        ],
        "question": "Which of the following elements is not a typical service catalog component as defined by ISO/IEC 20000-1?"
    },
    {
        "correct":2,
        "answers": [
            "IaaS",
            "PaaS",
            "SaaS",
            "DaaS"
        ],
        "question": "Brian's organization uses Google Workspace. What type of cloud service are they using?"
    },
    {
        "correct":3,
        "answers": [
            "OLA",
            "Service-level management",
            "SLA",
            "Indemnification"
        ],
        "question": "Rick wants to ensure that his organization will not be held accountable if something goes wrong that his PaaS provider is responsible for. What should he require in his cloud contract?"
    },
    {
        "correct":0,
        "answers": [
            "Implement a DLP system.",
            "Use tags to manage data lifecycles.",
            "Use tags to help IDS detection.",
            "Implement a honeypot to capture tags."
        ],
        "question": "Justin's IRM system deployment uses tagging to document data sensitivity. How can he use tagging later to most effectively decrease the chance of a data breach?"
    },
    {
        "correct":2,
        "answers": [
            "Setting up a backup VPC in another region",
            "Configuring backups to another cloud provider",
            "Deploying instances to multiple availability zones",
            "Ensuring staff are not all working the same location"
        ],
        "question": "Rene is designing her cloud environment to ensure business continuity. Which of the following design elements is best suited to ensuring business continuity?"
    },
    {
        "correct":1,
        "answers": [
            "User access logs",
            "Packet capture",
            "Specialized cloud service logs",
            "Configuration review"
        ],
        "question": "Lisa wants to audit actions taken in her cloud environment. Which of the following mechanisms is typically not permitted when dealing with cloud service management backplanes?"
    },
    {
        "correct":0,
        "answers": [
            "Static code analysis",
            "Vulnerability scanning",
            "Dynamic testing",
            "Software composition analysis"
        ],
        "question": "Jason wants to detect common vulnerabilities during his software development life cycle. What type of assessment is most likely to identify business logic issues?"
    },
    {
        "correct":1,
        "answers": [
            "SLA",
            "SOW",
            "NDA",
            "SOP"
        ],
        "question": "What document is typically created after a master service agreement (MSA) to determine what tasks a business will actually perform?"
    },
    {
        "correct":3,
        "answers": [
            "A client/server infrastructure",
            "Collaboration",
            "A service provider",
            "Federation"
        ],
        "question": "Christina wants to use Google as an identity provider, allowing her organization to simply determine what rights account holders would have while allowing Google to perform authentication and identity management for her. What is this type of relationship called?"
    },
    {
        "correct":1,
        "answers": [
            "The cost of licensing",
            "The license type",
            "The length of the license period",
            "Changes to the license for the deployed software"
        ],
        "question": "Selah has deployed open source software in her cloud environment and wants to validate the licensing for the software. What concern is most frequently involved in open source software licensing?"
    },
    {
        "correct":1,
        "answers": [
            "Configuration design, configuration control, configuration deletion",
            "Configuration identification, configuration control, configuration verification and audit",
            "Configuration identification, configuration management, configuration modification",
            "Configuration design, configuration modification, configuration documentation"
        ],
        "question": "ITIL v4 includes three major tasks for configuration management. Which of the following lists correctly identifies those tasks?"
    },
    {
        "correct":2,
        "answers": [
            "Automated QA testing tools",
            "Fuzzing",
            "Manual QA testing",
            "Software composition analysis"
        ],
        "question": "Annie wants to test software as part of her quality assurance efforts. What type of quality assurance testing will provide the greatest insight into the quality of the software being produced?"
    },
    {
        "correct":2,
        "answers": [
            "A recovery time objective",
            "A snapshot window",
            "A recovery point objective",
            "A snapshot duration"
        ],
        "question": "Theresa's organization has determined that a maximum of 30 minutes of data is acceptable as a data loss in the event of a major disaster. What term is used to describe this type of definition?"
    },
    {
        "correct":3,
        "answers": [
            "Cost of the risk management program",
            "The number of risks identified",
            "The number of risks that have occurred",
            "The rate of risk occurrence per day"
        ],
        "question": "Alaina wants to establish metrics for her risk management program. Which of the following isn't a metric that will help her manage her program effectively?"
    },
    {
        "correct":1,
        "answers": [
            "Performance management",
            "Cost management",
            "Continuity management",
            "Security management"
        ],
        "question": "What is the primary driver in cloud IaaS environments for storage capacity monitoring?"
    },
    {
        "correct":2,
        "answers": [
            "Accessing audit trails in customer-managed environments",
            "Determining appropriate audit targets",
            "Understanding the scope of the cloud environment",
            "Gathering information about controls from provider audit artifacts"
        ],
        "question": "Lisa is auditing her customer's cloud-hosted services. She has been asked to perform an external audit of all the cloud services in use. What is the largest challenge she is likely to face?"
    },
    {
        "correct":1,
        "answers": [
            "Not needing to handle patching",
            "Broad privileges available via IAM",
            "Ephemeral infrastructure",
            "High levels of instrumentation"
        ],
        "question": "Susan knows that serverless technology provides a number of security benefits for her organization. Which of the following isn't a common benefit of serverless computing?"
    },
    {
        "correct":1,
        "answers": [
            "Using SSH keys",
            "Enabling password complexity requirements",
            "Changing the default SSH port number",
            "Limiting which users can log in via SSH"
        ],
        "question": "Ibrahim wants to securely configure SSH. Which of the following is not a common best practice for modern SSH environments?"
    },
    {
        "correct":3,
        "answers": [
            "ISO/IEC 270001",
            "ISO/IEC 853-1",
            "ISC/IEC 28000:2022",
            "ISO/IEC 22301:2019"
        ],
        "question": "What ISO/IEC standard defines business continuity plans, systems, and processes?"
    },
    {
        "correct":3,
        "answers": [
            "UDP ports 21 and 22",
            "TCP ports 80 and 443",
            "TCP ports 3389 and 4780",
            "UDP ports 67 and 68"
        ],
        "question": "What ports and protocol does DHCP operate on?"
    },
    {
        "correct":2,
        "answers": [
            "Transfer to removable media",
            "Manual copying",
            "API-based",
            "Printed copies"
        ],
        "question": "Isabelle wants to retrieve forensic data from her cloud provider's native logging facility. What technique is most likely to be supported for this type of data access?"
    },
    {
        "correct":3,
        "answers": [
            "Dedicated TPM",
            "Cloud HSM",
            "Cloud TPM",
            "Dedicated HSM"
        ],
        "question": "Diana wants to have the highest level of security possible for her secret keys stored in her cloud environment. What solution should she choose if her cloud service provider has it available?"
    },
    {
        "correct":1,
        "answers": [
            "CAB review.",
            "Create the RFC.",
            "Change authorization.",
            "Deployment."
        ],
        "question": "What step is typically first in an ITIL-based change management process?"
    },
    {
        "correct":2,
        "answers": [
            "Data mapping",
            "Data cloning",
            "Data dispersion",
            "Data modeling"
        ],
        "question": "Rick's company spreads its data across multiple cloud vendors to help ensure that a data loss event or disaster at a single provider doesn't cause the organization to lose the data. What technique is Rick's company using?"
    },
    {
        "correct":0,
        "answers": [
            "Data owner",
            "Data custodian",
            "Data processor",
            "Data steward"
        ],
        "question": "Megan is accountable for the financial data in her organization, and she delegates responsibility for data-related actions to others in her organization. What role does she play?"
    },
    {
        "correct":0,
        "answers": [
            "There is no vendor for many open source packages.",
            "Open source software cannot undergo static code review.",
            "Open source software vendors do not offer software support contracts.",
            "Risk information about historical issues is not available."
        ],
        "question": "What makes vendor risk assessment difficult for open source software?"
    },
    {
        "correct":1,
        "answers": [
            "All impacted customers must be notified.",
            "Data breaches must be reported in annual and quarterly reports.",
            "Law enforcement must be informed as soon as the breach is discovered.",
            "Breach disclosure is required in local news media."
        ],
        "question": "What requirement for data breach reporting does the Sarbanes–Oxley Act place on organizations that must comply with it?"
    },
    {
        "correct":0,
        "answers": [
            "CVE",
            "VulnRank",
            "CPE",
            "MITRE"
        ],
        "question": "Mike wants to use a standards-based rating system to identify, define, and catalog vulnerabilities. Which of the following options should he choose?"
    },
    {
        "correct":0,
        "answers": [
            "Release closure",
            "Release deployment",
            "Release build",
            "Release documentation"
        ],
        "question": "What happens at the end of the release management process flow according to ITIL?"
    }
  ]);
  }
}

