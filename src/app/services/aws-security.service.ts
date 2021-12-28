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
      {
          question:"For which of the following scenarios does AWS Cognito best fit?",
          answers: [
            "External users accessing AWS services by means of web application",
            "SAML Federated Identity", 
            "Multiple AWS accounts that need to share resources", 
            "AWS account integrated with on-premises Active Directory"
          ],
          correct: 0
        },
        {
          question:"As IT administrator of your company's AWS account, you are asked to ensure that all actions performed by people accessing AWS resources are tracked and the resulting logs are securely stored. Which combination of services would you use to satisfy the requirement?",
          answers: [
            "CloudTrail and EC2",
            "CloudTrail and S3 Glacier", 
            "CloudTrail and S3", 
            "CloudTrail and CloudWatch"
          ],
          correct: 2
        },
        {
          question:"Which of the following statements is true about IAM credential report?",
          answers: [
            "A credential report lists all users in your account and the status of their credentials.",
            "A credential report is a tool that automatically provides remediation in case of a compromised password.", 
            "A credential report only contains information related to AWS access keys and AWS secure access keys.", 
            "A credential report is a tool to apply password policy to IAM users credentials."
          ],
          correct: 0
        },
        {
          question:"Whats is true about AWS IAM policy evaluation?",
          answers: [
            "Implicit deny overrides explicit allow",
            "Explicit deny overrides explicit allow", 
            "Explicit allow is the default behavior", 
            "Implicit allow is the default behavior"
          ],
          correct: 1
        },
        {
          question:"What statement is true about CloudTrail?",
          answers: [
            "Monitored events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.",
            "Cloudtrail data events include datap-plane events that take place within DynamoDB, lambda, and S3.", 
            "CloudTrail store logs as HTML files in EFS storage.", 
            "CloudTrail is not able to track actions performed by means of the AWS dashboard."
          ],
          correct: 0
        },
        {
          question:"Which of the following statements is true about IAM?",
          answers: [
            "It enables you to manage access to AWS services and resources",
            "It enables authorization only", 
            "It enables authorization and authentication for local users", 
            "It enables authentication only"
          ],
          correct: 0
        },
        {
          question:"Which of the following statements is true about IAM users and groups?",
          answers: [
            "Users and groups are global objects",
            "Users and groups are local to a current AWS region", 
            "Users and groups are local to a current AWS availability zone", 
            "Users are local IAM objects, while groups are IAM global objects"
          ],
          correct: 0
        },
        {
          question:"You are the Administrator of an AWS account. The CEO asks that everyone sign in to their AWS account with a strong authentication method. Which of the following would you implement?",
          answers: [
            "Enable MFA for all users that need access via the dashboard.",
            "Roll out a custom solution. Enable MFA for the root user only.", 
            "Enable MFA for all users.", 
            "Enable MFA for all users that need access via programmatic access."
          ],
          correct: 2
        },
        {
          question:"Which statement is true about IAM policy documents?",
          answers: [
            "Effect, action and resource are mandatory parameters",
            "An IAM policy document must contain a single statement", 
            "Effect, condition and resource are mandatory parameters", 
            "An IAM policy document is written in XML format"
          ],
          correct: 2
        },
        {
          question:"Which of the following statements is correct about AWS Cognito?",
          answers: [
            "Identity pools are user directories, while user pools enable you to grant your users access to other AWS services",
            "Identity pools are populated with users authenticated by external Identity Providers.", 
            "A fully working AWSCognito instance consists of a user pool and an identity pool.", 
            "User pools are user directories, while identity pools enable you to grant your users access to other AWS services."
          ],
          correct: 3
        },
    ];
  }
}
