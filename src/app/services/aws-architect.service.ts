import { Injectable } from'@angular/core';
import { UtilitiesService } from'./utilities.service';


@Injectable({
  providedIn:'root'
})
export class AwsArchitectService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions([
      {
        question:"Which of the below are factors that have helped make public cloud so powerful?",
        answers: [
          "The ease of trying new solutions, Pay-as-you-go approach for pricing",
          "No special skills required", 
          "Traditional methods that are used for on-premise infrastructure always work just as well in cloud"
        ],
        correct: 0
      },
      {
        question:"Your company has launched a new app. To access the app files, the development team needs access to a bucket that is located within your team's AWS account. The development team is using a different account and requires programmatic and console level access to your team's S3 bucket. How would you share this bucket with the development team's account?",
        answers: [
          "Setting up a Resource Based Access Control List (ACL)",
          "Setting up a cross account IAM Role", 
          "Setting up a resource-based policy", 
          "Setting up a shared IAM policy"
        ],
        correct: 1
      },
      {
        question:"The use of a cluster placement group is ideal",
        answers: [
          "When you need to distribute content on a CDN network.",
          "When you need to deploy EC2 instances that require high disk IO.", 
          "Your fleet of EC2 instances requires high network throughput and low latency within a single availability zone.", 
          "Your fleet of EC2 Instances requires low latency and high network throughput across multiple availability zones."
        ],
        correct: 2
      },
      {
        question:"Will an Amazon EBS root volume persist independently from the life of the terminated EC2 instance to which it was previously attached? In other words, if I terminated an EC2 instance, would that EBS root volume persist?",
        answers: [
          "No - It will always be deleted immediately on termination",
          "Yes - It will always persist until deleted manually", 
          "No - Unless 'Delete on Termination' is unchecked for the root volume", 
          "Yes - But only for certain instance types"
        ],
        correct: 2
      },
      {
        question:"Which of the following provide the least expensive EBS options?",
        answers: [
          "Provisioned IOPS (io1)",
          "Throughput Optimized (st1), Cold (sc1)", 
          "General Purpose (gp2)", 
          "SSD"
        ],
        correct: 1
      },
      {
        question:"Which of the following is most suitable for OLAP (Online Analytical Processing)?",
        answers: [
          "Redshift",
          "DynamoDB", 
          "RDS", 
          "ElastiCache"
        ],
        correct: 0
      },
      {
        question:"DB security groups are used with DB instances that are not in a VPC and on the EC2-Classic platform. When you create a DB security group, you need to specify a destination port number.",
        answers: [
          "False",
          "True"
        ],
        correct: 0
      },
      {
        question:"In RDS, what is the maximum value I can set for my backup retention period?",
        answers: [
          "15 Days",
          "30 Days", 
          "35 Days", 
          "45 Days"
        ],
        correct: 2
      },
      {
        question:"Which of the following DynamoDB features are chargeable, when using a single region?",
        answers: [
          "Storage of Data, and Read and Write Capacity",
          "Local secondary indexes", 
          "Incoming Data Transfer"
        ],
        correct: 0
      },
      {
        question:"Which of the following data formats does Amazon Athena NOT support?",
        answers: [
          "JSON",
          "Apache Parquet", 
          "Apache ORC", 
          "XML"
        ],
        correct: 3
      },
      {
        question:"If you are using Amazon RDS Provisioned IOPS storage with a Microsoft SQL Server database engine, what is the maximum size RDS volume you can have by default?",
        answers: [
          "32TB",
          "1TB", 
          "16TB", 
          "6TB"
        ],
        correct: 2
      },
      {
        question:"RDS Reserved instances are available for multi-AZ deployments.",
        answers: [
          "True",
          "False"
        ],
        correct: 0
      },
      {
        question:"Which of the following is NOT a feature supported by DynamoDB?",
        answers: [
          "Data reads that are either eventually consistent or strongly consistent",
          "The ability to perform operations by using a user-defined primary key", 
          "The primary key can be either a single-attribute or a composite partition-sort key", 
          "Amazon DynamoDB supports MongoDB workloads."
        ],
        correct: 3
      },
      {
        question:"When you create a custom VPC, which of the following are created automatically?",
        answers: [
          "Network Access Control List (ACL), Route Table, Internet Gateway",
          "Network Access Control List (ACL), Route Table, Security Group", 
          "Network Access Control List (ACL), Route Table, Subnets", 
          "Network Access Control List (ACL), Route Table, NAT Gateway"
        ],
        correct: 1
      },
      {
        question:"A VPN connection consists of which of the following components?",
        answers: [
          "Customer Gateway, Virtual Private Gateway",
          "Customer Gateway, Direct Connect Gateway", 
          "Virtual Private Gateway, Direct Connect Gateway"
        ],
        correct: 0
      },
      {
        question:"You have created a new VPC and launched an EC2 instance into a public subnet. However, you did not assign a public IP to the instance during its creation. What is the easiest way to make your instance reachable from the internet?",
        answers: [
          "Associate the Private IP of your instance to the Public IP of the Internet Gateway.",
          "Nothing by default all instances deployed into any Public Subnet will automatically receive a Public IP.", 
          "Create an Elastic IP and new Network Interface. Associate the Elastic IP to the new Network Interface, and the new Network Interface to your instance.", 
          "Create an Elastic IP address and associate it with your EC2 instance."
        ],
        correct: 3
      },
      {
        question:"Which of these is NOT a component of the AWS Global Accelerator service?",
        answers: [
          "Listeners",
          "Endpoint Groups", 
          "CloudFront", 
          "Static IP Address"
        ],
        correct: 2
      },
      {
        question:"A subnet can span multiple Availability Zones.",
        answers: [
          "True",
          "False"
        ],
        correct: 1
      },
      {
        question:"At which of the following levels can VPC Flow Logs be created?",
        answers: [
          "VPC Level, Network Interface Level, Security Group Level",
          "VPC Level, Network Interface Level, Subnet Level", 
          "VPC Level, Network Interface Level, Account Level"
        ],
        correct: 1
      },
      {
        question:"What is the advantage of running your AWS VPN connection through your Direct Connect connection over using the ordinary Internet?",
        answers: [
          "Improved security, Faster performance",
          "Can use Transit Gateway to service multiple accounts/VPCs, Faster performance", 
          "No data transfer charges when using Direct Connect, Faster performance"
        ],
        correct: 0
      },
      {
        question:"What is Amazon Kinesis Data Streams?",
        answers: [
          "A service for analyzing data, creating dashboards and storing data in S3.",
          "A service for generating streaming data", 
          "A service on AWS that ingests and stores data streams for processing.", 
          "A service for loading streaming data into data stores."
        ],
        correct: 2
      },
      {
        question:"What happens when you create a topic on Amazon SNS?",
        answers: [
          "An Amazon Resource Name is created.",
          "You cannot create a topic on SNS.", 
          "Nothing, as topics are specific to Amazon SQS.", 
          "The topic will terminate your EC2 instances that aren't identified by tags."
        ],
        correct: 0
      },
      {
        question:"What are the key components of Kinesis Data Firehose?",
        answers: [
          "Producers, records of data and consumers",
          "Delivery streams, shards, data stores and consumers.", 
          "Producers, shards and consumers", 
          "Delivery streams, records of data and destinations."
        ],
        correct: 3
      },
      {
        question:"You have discovered duplicate messages being processed in your SQS queue. How do you resolve this?",
        answers: [
          "Decrease the visibility timeout of your queue, so that messages do not become visible once obtained by a consumer.",
          "Enable Short polling so that messages are processed faster.", 
          "Increase the visibility timeout of your queue, so that messages do not become visible once obtained by a consumer.", 
          "Enable Long polling so that messages are deleted from the queue when processed."
        ],
        correct: 2
      },
      {
        question:"In which direction(s) does Lambda scale automatically?",
        answers: [
          "Out",
          "Up and Out", 
          "None - Lambda does not scale automatically", 
          "Up"
        ],
        correct: 0
      },
      {
        question:"Which of these options best describes the AWS compute services that could be used for multi-threaded processing?",
        answers: [
          "EC2, ECS, & Lambda.",
          "Only a EC2 'Bare Steel' server.", 
          "ECS, and EC2.", 
          "None of the above."
        ],
        correct: 0
      },
      {
        question:"Which of the following services can invoke a Lambda function synchronously (with functionality built-in with the invoking service)?",
        answers: [
          "Kinesis Data Firehose, S3, API Gateway",
          "Kinesis Data Firehose, Amazon Lex, API Gateway", 
          "Kinesis Data Firehose, S3, EC2", 
          "IAM, Amazon Lex, API Gateway"
        ],
        correct: 1
      },
      {
        question:"Lambda pricing is NOT based on which of these measurements after the free tier?",
        answers: [
          "The number of requests for each time the lambda executes in response to an event notification, or invoke call.",
          "The amount of memory assigned.", 
          "The amount of CPU you choose.", 
          "Duration of each request (in ms)."
        ],
        correct: 2
      },
      {
        question:"Your company provides an online image recognition service and uses SQS to decouple system components. Your EC2 instances poll the image queue as often as possible to keep end-to-end throughput as high as possible, but you realize that all this polling is resulting in both a large number of CPU cycles and skyrocketing costs. How can you reduce cost without compromising service?",
        answers: [
          "Enable short polling by setting the ReceiveMessageWaitTimeSeconds to a number > 0.",
          "Enable long polling by setting the ReceiveMessageWaitTimeSeconds to a number > 0.", 
          "Enable long polling by setting the ReceiveMessageWaitTimeMinutes to a number > 0.", 
          "Enable short polling by setting the ReceiveMessageWaitTimeMinutes to a number > 0."
        ],
        correct: 1
      },
      {
        question:"You run a meme creation website that stores the original images in S3 and each meme's metadata in DynamoDB. You need to decide upon a low-cost storage option for the memes, which won't be accessed on a regular basis, but require rapid access when needed. If a meme object is unavailable or lost, a Lambda function will automatically recreate it but at a $10 licensing cost per creation. There is a very large number of files. Which storage solution should you use to store the memes in the most cost-effective way?",
        answers: [
          "S3 - RRS",
          "S3", 
          "S3 - OneZone-IA", 
          "S3 - IA"
        ],
        correct: 3
      },
      {
        question:"What is the maximum VisibilityTimeout of an SQS message in a FIFO queue?",
        answers: [
          "14 days",
          "1 hour", 
          "1 day", 
          "12 hours"
        ],
        correct: 3
      },
      {
        question:"Which of the following Amazon S3 Storage Classes offer 99.999999999% (11 x 9s) durability?",
        answers: [
          "Standard, Glacier, Reduced Redundancy Storage",
          "Reduced Redundancy Storage, Standard, One Zone-Infrequent Access", 
          "Standard, Standard-Infrequent Access, One Zone-Infrequent Access", 
          "Standard-Infrequent Access, One Zone-Infrequent Access, Reduced Redundancy Storage"
        ],
        correct: 2
      },
      {
        question:"You are reviewing Change Control requests and you note that there is a proposed change designed to reduce errors due to SQS Eventual Consistency by updating the 'DelaySeconds' attribute. What does this mean?",
        answers: [
          "When the consumer instance polls for new work, the consumer instance will wait a certain time until it has a full workload before closing the connection.",
          "When a new message is added to the SQS queue, it will be hidden from consumer instances for a fixed period.", 
          "While processing a message, a consumer instance can amend the message visibility counter by a fixed amount.", 
          "When the consumer instance polls for new work, the SQS service will allow it to wait a certain time for a message to be available before closing the connection."
        ],
        correct: 1
      },
      {
        question:"Your company likes the idea of storing files on AWS. Your company would like to store common/recently used files locally, while storing long-term colder data in AWS. Which Storage Gateway configuration would you use to achieve both of these ends?",
        answers: [
          "File Gateway, Volume Gateway - Stored volumes",
          "File Gateway, Volume Gateway - Snapshot volumes", 
          "File Gateway, Volume Gateway - Cached volumes", 
          "File Gateway, Tape Gateway"
        ],
        correct: 2
      },
      {
        question:"Amazon ElastiCache can fulfill a number of roles. Choose the operations from the following list which can NOT be implemented using ElastiCache for Redis.",
        answers: [
          "Multithreaded architecture",
          "Pub/Sub", 
          "Sorted Sets", 
          "In-Memory Data Store"
        ],
        correct: 0
      },
      {
        question:"You are reviewing Change Control requests, and you note that there is a change designed to reduce costs by updating the Amazon SQS 'WaitTimeSeconds' attribute. What does this mean?",
        answers: [
          "While processing a message, a consumer instance can amend the message visibility counter by a fixed amount.",
          "When a consumer instance retrieves a message, that message will be hidden in the queue for a fixed period.", 
          "When the consumer instance polls for new work, the SQS service will allow it to wait a certain time for one or more messages to be available before closing the connection.", 
          "When the consumer instance polls for new work, the consumer instance will wait a certain time until it has a full workload before closing the connection."
        ],
        correct: 2
      },
      {
        question:"The AWS team in a large company is spending a lot of time monitoring EC2 instances and maintenance when the instances report health check failures. How can you most efficiently automate this monitoring and repair?",
        answers: [
          "Create a cron job which monitors the instances periodically and starts a new instance if a health check has failed.",
          "Create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically reboots the instance if a health check fails.", 
          "Create a Lambda function which can be triggered by a failed instance health check. Have the Lambda function destroy the instance and spin up a new instance.", 
          "Create a Lambda function which can be triggered by a failed instance health check. Have the Lambda function deploy a CloudFormation template which can perform the creation of a new instance."
        ],
        correct: 1
      },
      {
        question:"You are working for a large financial institution and preparing for disaster recovery and upcoming DR drills. A key component in the DR plan will be the database instances and their data. An aggressive Recovery Time Objective (RTO) dictates that the database needs to be synchronously replicated. Which configuration can meet this requirement?",
        answers: [
          "Amazon RDS Multi-Region Deployments (Aurora)",
          "Amazon RDS Multi-AZ Deployments (Non-Aurora)", 
          "AWS Lambda to trigger a CloudFormation template launch in another Region", 
          "Amazon RDS read replicas"
        ],
        correct: 1
      },
      {
        question:"You have just been hired by a large organization which uses many different AWS services in their environment. Some of the services which handle data include: RDS, Redshift, ElastiCache, DynamoDB, S3, and Glacier. You have been instructed to configure a web application using stateless web servers. Which service can you NOT use to handle session state data?",
        answers: [
          "Amazon ElastiCache",
          "Amazon DynamoDB", 
          "Amazon RDS", 
          "Amazon Redshift"
        ],
        correct: 3
      },
      {
        question:"Your organization uses AWS CodeDeploy for deployments. Now you are starting a project on the AWS Lambda platform. For your deployments, you’ve been given a requirement of performing blue-green deployments. When you perform deployments, you want to split traffic, sending a small percentage of the traffic to the new version of your application. Which deployment configuration will allow this splitting of traffic?",
        answers: [
          "Canary",
          "Linear", 
          "All at Once", 
          "Weighted routing"
        ],
        correct: 0
      },
      {
        question:"Your company security team has planned to do penetration testing on EC2 instances. Which policy will provide information on performing penetration testing on your EC2 instances?",
        answers: [
          "JSON Policy",
          "Customer Service Policy for Penetration Testing", 
          "AWS Terms and Conditions Policy", 
          "IAM Policy"
        ],
        correct: 1
      },
      {
        question:"An online media company has created an application which provides analytical data to its clients. The application is hosted on EC2 instances in an Auto Scaling Group. You have been brought on as a consultant and add an Application Load Balancer to front the Auto Scaling Group and distribute the load between the instances. The VPC which houses this architecture is running IPv4 and IPv6. The last thing you need to do to complete the configuration is point the domain name to the Application Load Balancer. Using Route 53, which record type at the zone apex can you use to point the DNS name of the Application Load Balancer? ",
        answers: [
          "Alias with an AAAA type record set",
          "Alias with a CNAME record set.", 
          "Alias with an MX type record set."
        ],
        correct: 0
      },
      {
        question:"Your team has provisioned Auto Scaling groups in a single Region. The Auto Scaling groups, at max capacity, would total 40 EC2 On-Demand Instances between them. However, you notice that the Auto Scaling groups will only scale out to a portion of that number of instances at any one time. What could be the problem?",
        answers: [
          "The associated load balancer can serve only 20 instances at one time.",
          "There is a vCPU-based On-Demand Instance limit per Region.", 
          "You can have only 20 instances per Region. This is a hard limit.", 
          "You can have only 20 instances per Availability Zone."
        ],
        correct: 1
      },
      {
        question:"A small startup company has begun using AWS for all of its IT infrastructure. The company has one AWS Solutions Architect and the demands for their time are overwhelming. The software team has been given permission to deploy their Python and PHP applications on their own. They would like to deploy these applications without having to worry about the underlying infrastructure. Which AWS service would they use for deployments?",
        answers: [
          "Elastic Beanstalk",
          "CloudFormation", 
          "CodeDeploy", 
          "CloudFront"
        ],
        correct: 0
      },
      {
        question:"A professional baseball league has chosen to use a key-value and document database for storage, processing, and data delivery. Many of the data requirements involve high-speed processing of data such as a Doppler radar system which samples the position of the baseball 2000 times per second. Which AWS data storage can meet these requirements?",
        answers: [
          "DynamoDB",
          "RDS", 
          "Redshift", 
          "S3"
        ],
        correct: 0
      },
      {
        question:"You are managing S3 buckets in your organization. This management of S3 extends to Amazon Glacier. For auditing purposes you would like to be informed if an object is restored to S3 from Glacier. What is the most efficient way you can do this?",
        answers: [
          "Create an SNS notification for any upload to S3",
          "Create a Lambda function which is triggered by restoration of object from Glacier to S3", 
          "Configure S3 notifications for restore operations from Glacier", 
          "Create a CloudWatch Event for uploads to S3"
        ],
        correct: 2
      },
      {
        question:"You are consulting for a state agency focused on the state lottery. You have been given a task to have 2,000,000 bar codes created as quickly as possible. This will require EC2 instances and an average CPU utilization of 70% for each of them. So you plan to spin up 10 EC2 instances to create the bar codes. You estimate that the instances will complete the job from around 11pm to 1am. You don’t want the instances sitting idle for up to 9 hours until the next morning. What can you do to terminate these instances when they are done?",
        answers: [
          "Write a cron job which queries the instance status. If a certain status is met, have the cron job kick off CloudFormation to terminate the existing instance, and create a new instance from a template.",
          "Write a cron job which queries the instance status. Also write a Lambda function which can be triggered upon a certain status and terminate the instance.", 
          "You can create a CloudWatch alarm that is triggered when the average CPU utilization percentage has been lower than 10 percent for 4 hours, and terminates the instance.", 
          "Write a Python script which queries the instance status. Also write a Lambda function which can be triggered upon a certain status and terminate the instance."
        ],
        correct: 2
      },
      {
        question:"You have joined a newly formed software company as a Solutions Architect. It is a small company, and you are the only employee with AWS experience. The owner has asked for your recommendations to ensure that the AWS resources are deployed to proactively remain within budget. Which AWS service can you use to help ensure you don’t have cost overruns for your AWS resources?",
        answers: [
          "AWS Budgets",
          "Inspector", 
          "Billing and Cost Management", 
          "Cost Explorer"
        ],
        correct: 0
      },
      {
        question:"You are managing data storage for your company, and there are many EBS volumes. Your management team has given you some new requirements. Certain metrics on the EBS volumes need to be monitored, and the database team needs to be notified by email when certain metric thresholds are exceeded. Which AWS services can be configured to meet these requirements?",
        answers: [
          "CloudWatch, SNS",
          "SWF, SNS", 
          "SES, SNS", 
          "SQS, SNS"
        ],
        correct: 0
      },
      {
        question:"After an IT Steering Committee meeting, you have been put in charge of configuring a hybrid environment for the company’s compute resources. You weigh the pros and cons of various technologies based on the requirements you are given. The main requirements to drive this selection are overall cost considerations and the ability to reuse existing internet connections. Which technology best meets these requirements?",
        answers: [
          "AWS Direct Gateway",
          "AWS Direct Connect", 
          "AWS Managed VPN", 
          "VPC Peering"
        ],
        correct: 2
      },

  ]);
  }
}
