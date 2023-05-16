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
      }
  ]);
  }
}
