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
      }
  ]);
  }
}
