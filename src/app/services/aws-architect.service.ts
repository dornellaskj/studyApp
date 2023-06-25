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
      // {
      //   question:"",
      //   answers: [
      //     "",
      //     "", 
      //     "", 
      //     ""
      //   ],
      //   correct: 
      // },
      // {
      //   question:"",
      //   answers: [
      //     "",
      //     "", 
      //     "", 
      //     ""
      //   ],
      //   correct: 
      // },

  ]);
  }
}
