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
    },
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
    }
  ]);
  }
}