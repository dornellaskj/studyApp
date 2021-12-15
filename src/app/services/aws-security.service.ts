import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwsSecurityService {

  constructor() { }
  // {
  //   question:"aaa",
  //   answers: [
  //     "aaa",
  //     "aaa", 
  //     "aaa", 
  //     "aaa"
  //   ],
  //   correct: 0
  // },
  getQuestions() {
    return [
      {
        question:"You launched an EC2 instance in the default VPC. The instance state shows it is running, but you are unable to access the instance. What is most likely the starting point to fix the problem?",
        answers: [
          "Outbound rules for instance security group",
          "Inbound rules for instance security group",
          "Network access control list for subnet of instance", 
          "Route table for VPC"
        ],
        correct: 1
      },
      {
        question:"What are the elements of a security group rule?",
        answers: [
          "Destination and target",
          "Type, port range, and time of day enforced", 
          "Protocol, port range, and source or destination", 
          "Allow or deny, rule number, and source or destination"
        ],
        correct: 2
      },
      {
        question:"Why might you specify individual IP addresses as a source for an inbound rule of a security group?",
        answers: [
          "To allow remote access to an instance via SSH or RDP",
          "When running a public HTTP web server", 
          "For demo purposes only"
        ],
        correct: 0
      },
      {
        question:"An application is running on port 8080 of your EC2 instance, but you are unable to access it from machines outside of the VPC. What is the solution to allow access outside of the VPC?",
        answers: [
          "Create an outbound security group rule for port 8080.",
          "Remove any security group rules blocking port 8080.", 
          "Create both inbound and outbound security group rules for port 8080.", 
          "Create an inbound security group rule for port 8080."
        ],
        correct: 3
      },
      {
        question:"You have zero (0) outbound rules in your security group. What effect does this have on EC2 instances that belong to this security group?",
        answers: [
          "The instance can access any outside destination",
          "Other machines will not get a response from applications running on the instance", 
          "The instance is unable to access any outside destination", 
          "You will not be able to SSH or RDP into the instance"
        ],
        correct: 2
      },
      {
        question:"How can you ensure that the external IP of an EC2 instance will not change when you stop and start it?",
        answers: [
          "Start the instance within one hour of stopping it",
          "Allocate and associate an Elastic IP to the instance", 
          "Select the appropriate option to assign an external IP when the instance is launched", 
          "Make sure you have at least one extra Elastic IP allocated to your account"
        ],
        correct: 1
      },
      {
        question:"When can you allow an EC2 instance to have an external IP?",
        answers: [
          "Any time the instance is running",
          "On instance launch", 
          "Any time the instance is stopped"
        ],
        correct: 1
      },
      {
        question:"You have two different subnets, A and B, in the same VPC. You want to ensure that all machines launched in subnet B can access machines in subnet A. What should you specify as an allowed source in the security group for machines in subnet A?",
        answers: [
          "The security group of subnet B",
          "Each individual IP address in subnet B", 
          "The CIDR block of subnet B"
        ],
        correct: 2
      },
      {
        question:"You tested an EC2 instance in your own AWS account yesterday and stopped it. You started it again this morning. It shows as running but you cannot access it. What is the most likely explanation?",
        answers: [
          "The IP on the machine you use to access the instance changed",
          "The external IP address of the instance changed when it started up today", 
          "A deny rule was created, excluding your IP from accessing the instance", 
          "The inbound rules of the security group for the instance changed"
        ],
        correct: 1
      },
      {
        question:"When does the internal IP address of an EC2 instance change?",
        answers: [
          "Whenever the instance is stopped",
          "Whenever the instance is stopped or restarted", 
          "It does not change for the life of the instance", 
          "Only if the subnet runs out of addresses"
        ],
        correct: 2
      },
    
    ];
  }
}
