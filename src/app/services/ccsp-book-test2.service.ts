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
        "correct":0,
          "answers": [
              "Package a single application per container.",
              "Use default installs wherever possible.",
              "Retain all normal tools and utilities.",
              "Avoid tagging to reduce complexity."
          ],
          "question": "Will wants to use containerized applications in his cloud-hosted environment. Which of the following is a best practice he should use as he builds them?"
      },
      {
        "correct":1,
          "answers": [
              "ISO/IEC 20000:1",
              "ISO/IEC 27017",
              "PCI DSS",
              "GDPR"
          ],
          "question": "Jason wants to adopt a cloud service security standard. Which of the following is specifically designed to cover cloud service providers?"
      },
      {
        "correct":0,
          "answers": [
              "PCI DSS",
              "FedRAMP",
              "COBIT",
              "ITIL"
          ],
          "question": "Helen's organization operates an e-commerce website housed by a cloud service provider. Which of the following compliance standards is she likely to have to comply with?"
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
        "correct":2,
          "answers": [
              "Functional testing",
              "Black-box testing",
              "Nonfunctional testing",
              "White-box testing"
          ],
          "question": "Yasmine is validating her software's performance under load, including testing for higher numbers of users than her organization expects to ever use the application. What type of testing is she conducting?"
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
              "Application-based code generation",
              "Hardware token–based code generation",
              "SMS-based code delivery",
              "USB hardware tokens"
          ],
          "question": "Charleen wants to implement multifactor authentication for her organization. Which of the following MFA options is considered the least secure?"
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
        "correct":1,
          "answers": [
              "Zero trust",
              "Geofencing",
              "Traffic inspection",
              "Network security groups"
          ],
          "question": "Felix wants to ensure that members of his organization only access management consoles while they are in approved locations. Which of the following network security capabilities will best allow him to accomplish that task?"
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
        "correct":0,
          "answers": [
              "CPU utilization",
              "Fan speeds",
              "System temperature",
              "System voltages"
          ],
          "question": "Casey is transitioning from an on-premises datacenter to a cloud datacenter. What hardware monitoring will she still be able to access in her new environment?"
      },
      {
        "correct":0,
          "answers": [
              "The customer",
              "The provider",
              "The regulator",
              "Both the customer and provider"
          ],
          "question": "Kirk is adopting a platform as a service tool for his organization. Who is responsible for application and data security in PaaS environments?"
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
        "correct":0,
          "answers": [
              "IaaS",
              "PaaS",
              "SaaS",
              "CaaS"
          ],
          "question": "What term is used to describe a cloud service provider that allows customers to create virtual machines, define their own networking using virtual networks, and use storage and other services to create and manage their own infrastructure?"
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
        "correct":1,
          "answers": [
              "A SOC 1 Type 1",
              "A SOC 2 Type 1",
              "A SOC 1 Type 2",
              "A SOC 2 Type 2"
          ],
          "question": "Hui wants to conduct a point in time SOC audit that covers her organization's security practices. What type of SOC audit should she select?"
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
        "correct":1,
          "answers": [
              "Obtain input from all relevant stakeholders.",
              "Change organizational culture for the cloud.",
              "Follow the chain of command.",
              "Meet external requirements."
          ],
          "question": "Jack is considering a cloud service policy as part of his organization's move to the cloud. Which of the following is not a common principle to follow when building a cloud service policy?"
      },
      {
        "correct":0,
          "answers": [
              "Privacy issues",
              "Data breaches",
              "System outages",
              "Denial-of-service attacks"
          ],
          "question": "Lucca wants to define technical risks to his cloud environment. Which of the following is not a technical risk for his cloud services?"
      },
      {
        "correct":1,
          "answers": [
              "It runs in the cloud.",
              "It runs on top of an existing operating system.",
              "It is installed on a bare-metal system.",
              "It cannot run inside of a virtualization system."
          ],
          "question": "What defines a Type 2 hypervisor?"
      },
      {
        "correct":0,
          "answers": [
              "Object",
              "Block",
              "Native",
              "Network file"
          ],
          "question": "Amazon's S3 relies on collections of objects in buckets and is accessible via REST APIs. What common type of cloud storage is Amazon's S3?"
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
              "Meet compliance requirements for your regions.",
              "Use a layered security approach.",
              "Emphasize manual monitoring.",
              "Automate deployment of sensitive tasks."
          ],
          "question": "Google's Cloud Architecture Framework suggests a number of common security design practices. Which of the following is not a common cloud IaaS design security practice?"
      },
      {
        "correct":1,
          "answers": [
              "Requirements gathering",
              "Reverse engineering",
              "Implementation",
              "Maintenance"
          ],
          "question": "Olivia is using a waterfall SLDC. Which of the following is not a phase in typical waterfall-based SDLCs?"
      },
      {
        "correct":1,
          "answers": [
              "TPM",
              "Cloud HSM",
              "PKI",
              "SAS 70"
          ],
          "question": "Michelle wants to store and manage cryptographic keys for her cloud environment. What solution should she require her cloud IaaS provider to have if she is selecting a new provider?"
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
              "QSA",
              "NDA",
              "MSA",
              "SLA"
          ],
          "question": "Gurvinder want to ensure that his cloud environment is available and reliable. What type of agreement should he ensure his organization receives from the cloud vendor?"
      },
      {
        "correct":2,
          "answers": [
              "It ensures only authenticated users can access data.",
              "It protects data both in transit and at rest.",
              "It allows you to secure data in use, even while being processed.",
              "It destroys data before it can be accessed by unauthorized parties."
          ],
          "question": "Ben is exploring new security options for his organization and wants to learn about confidential computing. Which of the following best describes what confidential computing does?"
      },
      {
        "correct":0,
          "answers": [
              "IDS",
              "Network security group",
              "IPS",
              "Firewall"
          ],
          "question": "Susan wants to detect and alert on potential malicious traffic, but she does not want to risk causing service outages due to false positives. What technology should she deploy?"
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
        "correct":0,
          "answers": [
              "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
              "Security, Testing, Reconnaissance, Investigation, Data Security, Escalation",
              "Security, Testing, Repudiation, Information Disclosure, Data Security, Escalation",
              "Spoofing, Tampering, Reconnaissance, Incident Response, Deletion, Evidence"
          ],
          "question": "What does the acronym STRIDE stand for?"
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
        "correct":1,
          "answers": [
              "Static testing",
              "Software composition analysis",
              "Interactive security testing",
              "Fuzzing"
          ],
          "question": "What security testing model is used to verify the components that make up open source software packages?"
      },
      {
        "correct":2,
          "answers": [
              "A full list of compromised systems and services",
              "A list of impacted customers",
              "Disclosure of any relevant information based on their partnership agreement",
              "Disclosure of other impacted partners"
          ],
          "question": "Chris has been notified by a partner about a recent breach of their cloud-hosted environment. What should Chris ask for from the partner organization?"
      },
      {
        "correct":2,
          "answers": [
              "Inherent risk",
              "Opportunity risk",
              "Residual risk",
              "Controlled risk"
          ],
          "question": "Gary is assessing risks and wants to describe how vendors are handling their risks. What term should he use to describe the risk remaining after the vendor has implemented their controls?"
      },
      {
        "correct":1,
          "answers": [
              "APIs",
              "Virtualization",
              "Segmentation",
              "SLAs"
          ],
          "question": "Jaime wants to explain the technology that allows cloud vendors to sell access to portions of their underlying hardware in the form of compute. What building block technology provides the foundation for this?"
      },
      {
        "correct":0,
          "answers": [
              "Use TLS for all communications.",
              "Use AES-256 encryption for all stored data.",
              "Require all connections be done via UDP.",
              "Require a three-way handshake for all data connections."
          ],
          "question": "Yuri wants to avoid the OWASP Top 10 application security risks. What should he do to help prevent cryptographic failures for data in transit?"
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
        "correct":2,
          "answers": [
              "An SOC 1 Type 2",
              "An SOC 2 Type 2",
              "An SOC 3 Type 2",
              "An SOC 4 Type 2"
          ],
          "question": "Hillary wants to publish an SSAE-18 SOC report to her website for public use. What type of SOC report should she provide if she wants to provide information about her organization's controls over time?"
      },
      {
        "correct":1,
          "answers": [
              "EBCDIC",
              "FIPS 140-2",
              "SecureCERT",
              "AESCert"
          ],
          "question": "Christina wants to ensure that her vendor is using appropriate, strong encryption technology. What standard could she ask her vendor to meet to ensure this?"
      },
      {
        "correct":0,
          "answers": [
              "Automation of security processes",
              "Creation of major releases on a yearly cycle",
              "Testing for security in production",
              "Static code review"
          ],
          "question": "Jerome wants to implement DevOps for his organization and is considering how security should be designed in. Which practice is best suited to a DevOps CI/CD environment?"
      },
      {
        "correct":1,
          "answers": [
              "Cybersecurity risks",
              "eDiscovery",
              "Data security",
              "Copyright infringement"
          ],
          "question": "Michelle wants to consider the legal risks relevant to her cloud environment. What risk should she highlight if she is concerned about how her organization will handle responses to lawsuits?"
      },
      {
        "correct":2,
          "answers": [
              "Their public IP address",
              "Their private IP address",
              "Tags",
              "Usernames"
          ],
          "question": "Amanda wants to ensure that she can identify systems that performed actions in her cloud environment. What information is most critical to log to ensure she can properly identify ephemeral systems?"
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
        "correct":0,
          "answers": [
              "SAML",
              "RDP",
              "LDAP",
              "FedID"
          ],
          "question": "Ramon wants to use a cloud identity provider for his organization. Which of the following options is most likely to be supported by cloud identity providers?"
      },
      {
        "correct":0,
          "answers": [
              "An SOC 2 Type 2",
              "An SOC 2 Type 1",
              "An SOC 1 Type 2",
              "An SOC 1 Type 1"
          ],
          "question": "Hyun wants to assess whether the cloud providers his organization is considering adopting have appropriate security-focused risk management methods in place. What type of audit artifact should he request to obtain the most information about controls and practices?"
      },
      {
        "correct":2,
          "answers": [
              "Greater confidentiality",
              "Fewer vulnerabilities",
              "High availability",
              "Shorter patching windows"
          ],
          "question": "Kayla deploys multiple small instances with a load balancer in front of them as part of her cloud environment. What benefit is she most likely to receive from this?"
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
              "Use multifactor authentication.",
              "Use dynamic secrets.",
              "Use strong passwords.",
              "Use certificates and passphrases."
          ],
          "question": "Henry wants to reduce the risk of secrets being exposed in the event of a breach. What practice should he adopt to help prevent an attacker with access to application source code or the running application from using the secrets they can recover for future access?"
      },
      {
        "correct":0,
          "answers": [
              "Ephemeral block storage",
              "Long-term",
              "Object",
              "Container"
          ],
          "question": "Jim has mounted a local C: drive for his Windows instance in his cloud service provider's IaaS environment. What type of storage is he most likely using?"
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
        "correct":3,
          "answers": [
              "Data migration",
              "Data mining",
              "Data consolidation",
              "Data mapping"
          ],
          "question": "Emily needs to identify the data elements in an existing customer database that match customers in a newly acquired customer database. What process will Emily need to engage in to accomplish this?"
      },
      {
        "correct":0,
          "answers": [
              "AES-256",
              "MD5",
              "SHA-1",
              "CRC"
          ],
          "question": "Wayne's organization considers their data to be highly sensitive and wants to ensure that the cloud provider itself cannot access the data while it is stored on the provider's large-scale bulk storage. What type of encryption should he select to accomplish this in a secure manner?"
      },
      {
        "correct":2,
          "answers": [
              "Building redundant infrastructure",
              "Rapid application development",
              "Testing malicious software",
              "Performing FIPS 140-2 testing"
          ],
          "question": "What is operating system–level sandboxing most frequently used for?"
      },
      {
        "correct":0,
          "answers": [
              "Flexibility and easier operational support",
              "Lowered risk of unauthorized disclosure",
              "Simpler control structure",
              "Guaranteed confidentiality"
          ],
          "question": "The North American Electric Reliability Corporation Critical Infrastructure Protection (NERC/CIP) points to what it calls “mutually managed encryption” as a useful model for cloud environments where the cloud service provider and registered entity (covered by NERC/CIP's requirements) share access and management of encryption keys. What advantage does this type of shared responsibility provide?"
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
        "correct":0,
          "answers": [
              "Create a snapshot of the running instance and make bit-for-bit copies of any mounted volumes.",
              "Shut down the instance and tag it for forensic investigation.",
              "Shut down the instance and then create a snapshot for forensic investigation.",
              "Use the cloud provider's forensic response team and validate their process."
          ],
          "question": "Stacey wants to preserve forensics artifacts from a running instance in her cloud environment. What two key steps should she take to ensure she can perform forensic analysis?"
      },
      {
        "correct":2,
          "answers": [
              "Using multifactor authentication",
              "Conducting regular vulnerability scanning",
              "Create and use configuration baselines",
              "Using default settings to ensure proper configuration"
          ],
          "question": "Damian knows that misconfiguration is one of the common cloud threats and wants to decrease the chances of a misconfiguration causing significant issues for his organization. What practice is most likely to help his entire organization avoid misconfiguration issues?"
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
              "Interactive application security testing",
              "Software composition analysis",
              "Manual static testing",
              "Automated static testing"
          ],
          "question": "Naomi wants to understand what open source components are part of the containerization tool she is considering adopting. What testing process should she use to understand potential risks of the software based on its components?"
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
        "correct":3,
          "answers": [
              "Federation",
              "MFA",
              "IAM",
              "SSO"
          ],
          "question": "The company that Eric works for uses an authentication process that allows Eric to log in once and then use a variety of systems and services the organization provides. What technology is the company using?"
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
        "correct":1,
          "answers": [
              "OLA",
              "Configuration baseline",
              "DR/BC plan",
              "ITIL-based configuration item (CI)"
          ],
          "question": "Chuck wants to conduct a gap analysis for the security controls in his cloud environment. What artifact will he need first?"
      },
      {
        "correct":3,
          "answers": [
              "Automated QA testing tools",
              "Fuzzing",
              "Manual QA testing",
              "Software composition analysis"
          ],
          "question": "Annie wants to test software as part of her quality assurance efforts. What type of quality assurance testing will provide the greatest insight into the quality of the software being produced?"
      },
      {
        "correct":0,
          "answers": [
              "A token",
              "A password",
              "A password and a URL",
              "A sessionID"
          ],
          "question": "Dave logs into a service using a federated identity. What does the identity provider send to his browser to present to the service provider?"
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
        "correct":0,
          "answers": [
              "MFA tokens",
              "API keys",
              "Passwords",
              "Certificates"
          ],
          "question": "Which of the following is not typically stored in cloud secrets management tools?"
      },
      {
        "correct":1,
          "answers": [
              "On central file servers",
              "On endpoint devices as a client",
              "At the network border",
              "At the network core"
          ],
          "question": "Gary's organization uses a combination of cloud infrastructure and organizationally issued laptops to allow their remote workforce to access organizational data anywhere. What DLP deployment option will help Gary protect data in use by staff?"
      },
      {
        "correct":0,
          "answers": [
              "Create",
              "Use",
              "Share",
              "Destroy"
          ],
          "question": "Lucca wants to apply data classification to his organization's data. What phase of the data lifecycle should he ensure tags are applied at?"
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
        "correct":3,
          "answers": [
              "Storage aggregation",
              "Virtualization",
              "Containerization",
              "Tenant partitioning"
          ],
          "question": "Nick operates a service that hosts e-commerce websites. His infrastructure runs in AWS, and each customer is allocated their own S3 storage bucket. What type of logical design is Nick using?"
      },
      {
        "correct":0,
          "answers": [
              "Business logic risk",
              "SQL injection flaws",
              "Cross-site scripting flaws",
              "Vulnerable components"
          ],
          "question": "Katie's organization creates their software in an environment hosted in the Azure cloud. They use a continuous integration/continuous delivery (CI/CD) process that focuses on automated testing and deployment. What risk is most likely to make it through an automated security testing process?"
      },
      {
        "correct":0,
          "answers": [
              "Chain of custody",
              "Forensic proof",
              "Data logging",
              "Investigation notes"
          ],
          "question": "Thulani keeps documentation for her forensic activities and writes down how data was acquired, as well as where the data is stored, who has access to it, and any transfers of the data or media. What is Thulani documenting?"
      },
      {
        "correct":0,
          "answers": [
              "There are different privacy laws in the U.S. and the EU, creating compliance concerns.",
              "The EU does not allow U.S. data to be imported to EU servers.",
              "The U.S. does not allow EU data to be imported to U.S. servers.",
              "U.S. and EU privacy laws have the same penalties, but they are significant and can be costly."
          ],
          "question": "Derek operates cloud-hosted environments in both the U.S. and the European Union (EU). His organization captures customer data in both locations, and he wants to use that data as a central, shared resource for his company. What concern should he raise about this potential use of the data?"
      },
      {
        "correct":2,
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
        "correct":1,
          "answers": [
              "Private cloud",
              "Hybrid cloud",
              "Multicloud",
              "Community cloud"
          ],
          "question": "Sara wants to operate some of her infrastructure in a datacenter that she controls and some in third-party cloud-hosted environments. What type of cloud deployment model best describes this?"
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
        "correct":0,
          "answers": [
              "Cryptographic shredding",
              "Zero wiping",
              "Deletion",
              "Random data-based wiping"
          ],
          "question": "Wesley wants to ensure that sensitive data used by his organization cannot be accessed or recovered by third parties. Once his organization stops using data stored in the cloud, what deletion process should he recommend they use?"
      },
      {
        "correct":0,
          "answers": [
              "Infrastructure as code",
              "Dynamic scaling architecture",
              "Containerization-based",
              "Software as a cloud"
          ],
          "question": "Mark uses Terraform to design and deploy his infrastructure by creating code and configuration files that define what will be deployed and how it will be set up. What is this type of strategy called?"
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
        "correct":0,
          "answers": [
              "Abuse case testing",
              "Interactive application security testing",
              "User acceptance testing",
              "Static testing"
          ],
          "question": "Ashley's testing process involves approaching software testing like an attacker would. She will attempt to compromise or misuse the software, and report on its responses and any issues she identifies. What type of testing is Ashely conducting?"
      },
      {
        "correct":0,
          "answers": [
              "ISO 27001",
              "SOC 1",
              "GDPR",
              "HIPAA"
          ],
          "question": "Lisa wants to advise her organization on a standard that they can adopt that defines information security controls. What standard should she recommend that will be broadly accepted by auditors?"
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
        "correct":3,
          "answers": [
              "Masking",
              "Hashing",
              "Anonymization",
              "Tokenization"
          ],
          "question": "Specific customer data in Gina's database has been replaced with alternate values that allow Gina to look up the original information from another database without exposing the actual data in the database she is using. Each unique data element is given a replacement value that is consistent any time that data element is used. What type of technique is in use in Gina's database?"
      },
      {
        "correct":1,
          "answers": [
              "Statute-based retention",
              "Legal hold",
              "DR/BC requirements",
              "Legislative hold"
          ],
          "question": "Amanda's company is being sued, and has received a letter from opposing counsel requiring them to retain information related to the lawsuit. What is this called?"
      },
      {
        "correct":1,
          "answers": [
              "The certificate will no longer work to encrypt data.",
              "The certificate will be placed on a certificate revocation list.",
              "A message about the revocation will be sent to all users of the certificate.",
              "The CA will set the certificate's expiration date to the revocation date."
          ],
          "question": "Freya wants to revoke a certificate used by her organization. What will happen when she revokes the certificate via her certificate authority?"
      },
      {
        "correct":0,
          "answers": [
              "Structured data",
              "Semi-structured data",
              "Unstructured data",
              "Consolidated data"
          ],
          "question": "Bart wants to perform data discovery on information stored in a SQL database that his company uses for customer information. What type of data is this?"
      },
      {
        "correct":3,
          "answers": [
              "A WAF",
              "A SIEM",
              "IDS",
              "AI"
          ],
          "question": "Patricia wants to analyze the data from her IPS for unexpected behavior. If she wants to use a known baseline, then analyze IPS data for potential malicious activity in an automated way that includes the ability to adapt to changes in attack behavior using information it gathers, what technology should she select?"
      },
      {
        "correct":1,
          "answers": [
              "Follow OWASP-defined best practices.",
              "Engage external counsel with appropriate expertise.",
              "Identify an appropriate NIST standard to follow.",
              "Carefully review the laws and design the new policy based on them."
          ],
          "question": "Kathleen is concerned about country-specific privacy regulations because her organization is opening a location in a new country. What should she advise her organization's leadership to do?"
      },
      {
        "correct":3,
          "answers": [
              "Business requirements",
              "Legal requirements",
              "Regulatory requirements",
              "Data integrity requirements"
          ],
          "question": "Which of the following is not a typical driver for data retention policies?"
      },
      {
        "correct":0,
          "answers": [
              "An API gateway",
              "An API firewall",
              "An API load balancer",
              "An API engine"
          ],
          "question": "Parker is concerned about customers abusing his organization's APIs and wants to control the volume of requests they are allowed to send. Which of the following solutions is best suited to meet his needs?"
      },
      {
        "correct":1,
          "answers": [
              "Interoperability",
              "Vendor lock-in",
              "API contention",
              "Code escrow"
          ],
          "question": "Ron has implemented his IaaS design using an infrastructure as code model. His team has leveraged native APIs and functions within the IaaS environment and uses many of the vendor's specialized capabilities. What issue may arise for Ron if the vendor begins to significantly increase prices?"
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
              "Use software composition analysis tools.",
              "Engage a penetration tester.",
              "Perform static code review.",
              "Set up automatic updates."
          ],
          "question": "Jonah wants to address the OWASP Top 10 vulnerable and outdated components issue for his organization. What can he do to most effectively help identify them for his open source tools?"
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
              "The forensic copy process will take far longer than normal.",
              "There is not a physical disk that Henry can access, and a snapshot is the closest equivalent to a forensic copy that he can provide.",
              "The forensic copy cannot be verified because the disk will change during the process.",
              "Cloud providers do not allow forensic copies of systems in their environments, and only logs will be available."
          ],
          "question": "The law enforcement officer that Henry is working with on a digital forensics effort has asked Henry for a forensic copy of the hard drive for a cloud-hosted desktop as a service system. What should Henry explain to the officer about the differences between cloud-hosted and physical systems?"
      },
      {
        "correct":3,
          "answers": [
              "Design of security controls",
              "Security testing",
              "Management of security incidents",
              "Security review"
          ],
          "question": "ITIL v4 identifies four information management subprocesses related to information security management. What ITIL v4 subprocess includes audits?"
      },
      {
        "correct":2,
          "answers": [
              "Replace the network interface card.",
              "Request that the cloud provider upgrade the network card.",
              "Increase the instance's network bandwidth.",
              "Change the network interface speed setting inside the instance's operating system."
          ],
          "question": "Diana wants to increase the bandwidth available to her cloud infrastructure as a service-hosted system. What would she need to do to increase the speed at which her instance is connecting to the provider's network?"
      },
      {
        "correct":3,
          "answers": [
              "Reclassify",
              "Back up",
              "Manage",
              "Destroy"
          ],
          "question": "What step occurs at point X in the following diagram as part of the cloud secure data lifecycle?"
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
        "correct":3,
          "answers": [
              "Interviews",
              "Questionnaires",
              "Workshops",
              "Reverse engineering"
          ],
          "question": "Renee wants to gather requirements as part of her Agile SDLC. Which of the following is not a common requirements-gathering process for Agile teams?"
      },
      {
        "correct":1,
          "answers": [
              "MITRE's ATT&CK",
              "The OWASP Top 10",
              "The SANS Blue Book",
              "NIST's CMDB"
          ],
          "question": "Christina wants to train developers in her organization on common issues in web application development for the cloud. What tool can she use to base her training on?"
      },
      {
        "correct":3,
          "answers": [
              "Cloud service provider",
              "Regulator",
              "Cloud service broker",
              "Cloud steward"
          ],
          "question": "Emily's company aggregates cloud service contracts for multiple customers to allow for a better discount rate. They also provide integration services for their customers. What role is Emily's company playing?"
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
        "correct":3,
          "answers": [
              "ISO/IEC 27018",
              "Generally Accepted Privacy Principles (GAPP)",
              "FERPA",
              "GDPR"
          ],
          "question": "What privacy regulation will impact Susan's organization as they begin to operate in France?"
      },
      {
        "correct":2,
          "answers": [
              "Backup clients on the guest OS",
              "Copies of the underlying guest OS disks",
              "Snapshots through the VM host",
              "Snapshots through the guest OS"
          ],
          "question": "Fiona wants to back up virtual machines hosted in her on-premises datacenter. What technique is typically used to back up guest operating systems?"
      },
      {
        "correct":1,
          "answers": [
              "Engage external auditors to audit the cloud provider.",
              "Contact the cloud service provider to obtain the required audit artifacts.",
              "Engage internal auditors to audit the cloud provider.",
              "Contact the cloud service provider and provide the required audit artifacts to them."
          ],
          "question": "Olivia's industry requires yearly audits of their business, and she knows that she needs to provide audit artifacts to the auditors about her cloud-hosted services. What should Olivia do to meet her audit requirements?"
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
      },
      {
        "correct":0,
          "answers": [
              "Type 1",
              "Type 2",
              "Type 3",
              "Type 4"
          ],
          "question": "What type of hypervisor is most commonly used to host cloud IaaS services?"
      },
      {
        "correct":2,
          "answers": [
              "Buy a datacenter.",
              "Build a datacenter.",
              "Rent space in a datacenter facility.",
              "Build a datacenter in an existing building."
          ],
          "question": "Sean's company has grown its IT infrastructure and no longer considers the converted closet that its servers have been hosted in sufficient to the organization's needs. If Sean wants to meet an Uptime Institute Level 3 rating, what option will most efficiently and effectively meet his needs?"
      },
      {
        "correct":2,
          "answers": [
              "Access to inexpensive power is not a major driver in datacenter placement.",
              "Datacenters are placed without regard to weather-based threats.",
              "Customers are not allowed physical access to machines.",
              "Redundant design is not critical due to the number of datacenters."
          ],
          "question": "Which of the following is true of most cloud service providers datacenters?"
      },
      {
        "correct":1,
          "answers": [
              "",
              "Hashing",
              "Masking",
              "Randomization",
              "De-identification"
          ],
          "question": "Maria logs into her company's service portal and looks at a customer's information. In the credit card field she sees the credit card listed in a format that reads:XXXX-XXXX-XXXX-1980What type of data security technique is in use?"
      }
  ]);
  }
}
