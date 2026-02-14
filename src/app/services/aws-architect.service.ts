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
//       {
//   "question": "Which AWS support plan offers a Technical Account Manager (TAM)?",
//   "answers": [
//     "Business",
//     "Developer",
//     "Enterprise",
//     "Basic"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following is NOT an advantage of cloud computing?",
//   "answers": [
//     "Go global in hours",
//     "Increase speed and agility",
//     "Trade capital expense for variable expense",
//     "Benefit from massive economies of scale"
//   ],
//   "correct": 0
// },
// {
//   "question": "One advantage of cloud computing is that we trade ______ expense for ______ expense.",
//   "answers": [
//     "Capital, Variable",
//     "Variable, Capital",
//     "Operational, Capital",
//     "Capital, Operational"
//   ],
//   "correct": 0
// },
// {
//   "question": "Which of the following is not a primary benefit of cloud computing compared to on-premises infrastructure?",
//   "answers": [
//     "Pay for racking, stacking, and powering servers",
//     "Benefit from massive economies of scale",
//     "Increase speed and agility",
//     "Trade capital expense for variable expense",
//     "Eliminate guessing on your infrastructure capacity needs"
//   ],
//   "correct": 0
// },
// {
//   "question": "To receive the discounted rate associated with Reserved Instances, you must make a full upfront payment for the term.",
//   "answers": [
//     "True",
//     "False"
//   ],
//   "correct": 1
// },
// {
//   "question": "What is the most significant benefit of using AWS Organizations?",
//   "answers": [
//     "Provides the ability to create groups of accounts and attach policies to a group",
//     "Simplifies automating account creation and management using APIs",
//     "Provides the ability to create an unlimited number of nested organizational units (OUs)",
//     "Replaces IAM policies with SCPs, which are simpler to manage",
//     "Prevents restrictions from being placed on the root user of the management account"
//   ],
//   "correct": 0
// },
// {
//   "question": "AWS offers some services at no charge, such as IAM, VPC, CloudFormation, Auto Scaling, and Elastic Beanstalk.",
//   "answers": [
//     "False",
//     "True"
//   ],
//   "correct": 1
// },
// {
//   "question": "Unlimited services are available with the AWS Free Tier for 12 months after account creation.",
//   "answers": [
//     "True",
//     "False"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does AWS CAF refer to in cloud computing?",
//   "answers": [
//     "A methodology for migrating on-premises applications to the cloud",
//     "A certification program for cloud architects and engineers",
//     "A framework for securing cloud-based applications against cyber threats",
//     "A set of best practices and guidelines for planning and executing cloud adoption strategies"
//   ],
//   "correct": 3
// },
// {
//   "question": "What distinguishes IaaS from PaaS?",
//   "answers": [
//     "IaaS provides ready-to-use software applications, while PaaS offers virtualized computing resources",
//     "IaaS abstracts hardware, while PaaS abstracts hardware and the operating system to provide a development platform",
//     "IaaS offers a fully managed environment for applications, while PaaS offers basic networking and storage",
//     "IaaS provides a platform for deploying applications, while PaaS provides virtualized compute resources"
//   ],
//   "correct": 1
// },
// {
//   "question": "What is an AWS Availability Zone composed of?",
//   "answers": [
//     "A global network of edge locations",
//     "Multiple data centers within a region",
//     "A single POP used for caching content",
//     "A single data center serving one region"
//   ],
//   "correct": 1
// },
// {
//   "question": "What is the primary purpose of AWS Edge Locations?",
//   "answers": [
//     "To host full AWS regions in major cities",
//     "To store encryption keys for CloudFront",
//     "To cache web content closer to users",
//     "To provide compute resources close to mobile carriers"
//   ],
//   "correct": 2
// },
// {
//   "question": "What do AWS Local Zones provide?",
//   "answers": [
//     "Compute and storage resources closer to users",
//     "Centralized IAM policy enforcement",
//     "A global CDN for caching content",
//     "Ultra low latency for 5G devices"
//   ],
//   "correct": 0
// },
// {
//   "question": "What is the purpose of AWS Wavelength Zones?",
//   "answers": [
//     "To provide compute resources in rural areas",
//     "To optimize mobile deployments over 5G networks",
//     "To manage IAM roles for mobile carriers",
//     "To store encryption keys for mobile devices"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does IAM primarily control?",
//   "answers": [
//     "The deployment of CloudFront distributions",
//     "Network routing between AWS regions",
//     "Who gets access to what in AWS",
//     "The encryption of all S3 buckets"
//   ],
//   "correct": 2
// },
// {
//   "question": "What is an IAM Role used for?",
//   "answers": [
//     "Managing CloudFront edge caches",
//     "Encrypting data in transit",
//     "Grouping users for billing purposes",
//     "Granting a set of permissions to users or services"
//   ],
//   "correct": 3
// },
// {
//   "question": "What does the CIA Triad represent?",
//   "answers": [
//     "Cloudfront, IAM, Artifact",
//     "Confidentiality, Integrity, Availability",
//     "Compliance, Identity, Access",
//     "Configuration, Inspection, Auditing"
//   ],
//   "correct": 1
// },
// {
//   "question": "What do Service Control Policies (SCPs) do?",
//   "answers": [
//     "Encrypt data across multiple regions",
//     "Manage CloudFront distributions",
//     "Grant permissions to IAM users",
//     "Set maximum permissions for accounts"
//   ],
//   "correct": 3
// },
// {
//   "question": "What does AWS KMS manage?",
//   "answers": [
//     "Encryption keys for data",
//     "IAM users and groups",
//     "CloudFront edge caches",
//     "S3 bucket lifecycle policies"
//   ],
//   "correct": 0
// },
// {
//   "question": "What does AWS Secrets Manager help with?",
//   "answers": [
//     "Managing IAM roles",
//     "Encrypting S3 buckets",
//     "Rotating and retrieving credentials and API keys",
//     "Scanning EC2 instances for vulnerabilities"
//   ],
//   "correct": 2
// },
// {
//   "question": "What does AWS Shield protect against?",
//   "answers": [
//     "Unauthorized IAM access",
//     "Misconfigured S3 buckets",
//     "DDoS attacks",
//     "Malware infections"
//   ],
//   "correct": 2
// },
// {
//   "question": "What does AWS WAF do?",
//   "answers": [
//     "Protects against common web exploits",
//     "Caches content at edge locations",
//     "Encrypts data at rest",
//     "Manages IAM policies"
//   ],
//   "correct": 0
// },
// {
//   "question": "What is AWS Firewall Manager used for?",
//   "answers": [
//     "Managing WAF rules across multiple accounts",
//     "Scanning EC2 instances for vulnerabilities",
//     "Encrypting data across regions",
//     "Managing IAM roles and groups"
//   ],
//   "correct": 0
// },
// {
//   "question": "What does Amazon Macie do?",
//   "answers": [
//     "Audits AWS resource configurations",
//     "Detects DDoS attacks",
//     "Discovers and protects sensitive data in S3 using ML",
//     "Manages IAM permissions"
//   ],
//   "correct": 2
// },
// {
//   "question": "What is AWS Config used for?",
//   "answers": [
//     "Encrypting S3 buckets",
//     "Auditing and evaluating AWS resource configurations",
//     "Managing CloudFront distributions",
//     "Scanning EC2 instances for vulnerabilities"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does AWS Artifact provide?",
//   "answers": [
//     "A vulnerability scanner for EC2",
//     "A tool for managing encryption keys",
//     "A dashboard for IAM permissions",
//     "Access to AWS compliance and security documentation"
//   ],
//   "correct": 3
// },
// {
//   "question": "What does AWS Audit Manager do?",
//   "answers": [
//     "Caches content at edge locations",
//     "Encrypts data across multiple regions",
//     "Manages IAM roles and groups",
//     "Continuously audits AWS usage for compliance"
//   ],
//   "correct": 3
// },
// {
//   "question": "What does Amazon Inspector evaluate?",
//   "answers": [
//     "Compute resources for vulnerabilities and exposure",
//     "CloudFront distributions for performance",
//     "IAM policies for misconfigurations",
//     "S3 buckets for sensitive data"
//   ],
//   "correct": 0
// },
// {
//   "question": "What does Amazon GuardDuty monitor?",
//   "answers": [
//     "CloudFront cache invalidations",
//     "Compromised accounts and unusual behavior",
//     "IAM role usage",
//     "S3 bucket lifecycle policies"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does AWS Security Hub do?",
//   "answers": [
//     "Encrypts all data in transit",
//     "Caches content at edge locations",
//     "Performs security best practice checks and enables remediation",
//     "Manages IAM users and groups"
//   ],
//   "correct": 2
// },
// {
//   "question": "How many total IP addresses are provided by a /16 CIDR block in AWS?",
//   "answers": [
//     "256",
//     "4,096",
//     "65,536",
//     "16,384"
//   ],
//   "correct": 2
// },
// {
//   "question": "What is the smallest subnet size allowed in AWS?",
//   "answers": [
//     "/30",
//     "/28",
//     "/24",
//     "/32"
//   ],
//   "correct": 1
// },
// {
//   "question": "How many total IP addresses exist in a /28 subnet?",
//   "answers": [
//     "8",
//     "16",
//     "32",
//     "64"
//   ],
//   "correct": 1
// },
// {
//   "question": "How many IP addresses does AWS reserve in every subnet?",
//   "answers": [
//     "3",
//     "4",
//     "5",
//     "2"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which IPs does AWS reserve in each subnet?",
//   "answers": [
//     "First 2 and last 2",
//     "First 4 and last 1",
//     "Only the first and last",
//     "Only the broadcast address"
//   ],
//   "correct": 1
// },
// {
//   "question": "What is a VPC in AWS?",
//   "answers": [
//     "A physical data center",
//     "A logically isolated virtual network",
//     "A DNS routing service",
//     "A global firewall"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does VPC peering allow?",
//   "answers": [
//     "Private communication between VPCs",
//     "Connecting VPCs to CloudFront",
//     "Encrypting all VPC traffic",
//     "Replacing Direct Connect"
//   ],
//   "correct": 0
// },
// {
//   "question": "What is the purpose of a transit gateway?",
//   "answers": [
//     "To manage IAM roles",
//     "To act as a hub for connecting multiple VPCs",
//     "To store DNS records",
//     "To encrypt S3 traffic"
//   ],
//   "correct": 1
// },
// {
//   "question": "What do security groups protect?",
//   "answers": [
//     "Entire VPCs",
//     "Subnets",
//     "Individual EC2 instances",
//     "Transit gateways"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which statement describes security groups?",
//   "answers": [
//     "They are stateless",
//     "They require explicit return rules",
//     "They are stateful and allow return traffic automatically",
//     "They apply only to subnets"
//   ],
//   "correct": 2
// },
// {
//   "question": "What do NACLs protect?",
//   "answers": [
//     "Individual EC2 instances",
//     "Subnets",
//     "VPC endpoints",
//     "Transit gateways"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which statement describes NACL behavior?",
//   "answers": [
//     "They are stateful",
//     "They automatically allow return traffic",
//     "They only support inbound rules",
//     "They are stateless and require explicit return rules"
//   ],
//   "correct": 3
// },
// {
//   "question": "What is AWS Direct Connect used for?",
//   "answers": [
//     "Connecting privately to AWS without using the public internet",
//     "Caching content at edge locations",
//     "Encrypting IAM credentials",
//     "Connecting VPCs to each other"
//   ],
//   "correct": 0
// },
// {
//   "question": "Which benefit does AWS Direct Connect provide?",
//   "answers": [
//     "Free data transfer",
//     "Lower latency and more consistent performance",
//     "Automatic VPC peering",
//     "Built-in firewalling"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does CloudFront primarily charge for?",
//   "answers": [
//     "Data transfer out and HTTP requests",
//     "Inbound data transfer",
//     "Number of EC2 instances",
//     "VPC peering connections"
//   ],
//   "correct": 0
// },
// {
//   "question": "What type of service is AWS CloudFront?",
//   "answers": [
//     "A private network link",
//     "A content delivery network",
//     "A subnet firewall",
//     "A VPC routing service"
//   ],
//   "correct": 1
// },
// {
//   "question": "What does a CIDR block define in a VPC?",
//   "answers": [
//     "The VPC’s IP address range",
//     "The number of EC2 instances allowed",
//     "The IAM permissions for the VPC",
//     "The DNS routing rules"
//   ],
//   "correct": 0
// },
// {
//   "question": "Which statement about VPC isolation is correct?",
//   "answers": [
//     "VPCs automatically peer with each other",
//     "VPCs are logically isolated from other customers",
//     "VPCs share routing tables by default",
//     "VPCs cannot contain multiple subnets"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which service enables hub-and-spoke network topologies?",
//   "answers": [
//     "CloudFront",
//     "Transit Gateway",
//     "Security Groups",
//     "NACLs"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service becomes part of the AWS network when connected?",
//   "answers": [
//     "VPC Peering",
//     "CloudFront",
//     "Direct Connect",
//     "Security Groups"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which option correctly orders AWS instance billing types from most expensive (#1) to least expensive (#4)?",
//   "answers": [
//     "1: On‑Demand, 2: PURI, 3: NURI, 4: AURI",
//     "1: On‑Demand, 3: NURI, 2: PURI, 4: AURI",
//     "1: PURI, 2: On‑Demand, 3: NURI, 4: AURI",
//     "1: NURI, 2: PURI, 3: On‑Demand, 4: AURI"
//   ],
//   "correct": 1
// },
// {
//   "question": "In AWS billing terminology, what does AURI stand for?",
//   "answers": [
//     "All Upfront Reserved Instance",
//     "Advanced Usage Rate Integration",
//     "Allocated Upfront Resource Index",
//     "Annual Usage Reservation Instance"
//   ],
//   "correct": 0
// },
// {
//   "question": "Within AWS Reserved Instance payment models, what does NURI represent?",
//   "answers": [
//     "Network Usage Reservation Instance",
//     "No Upfront Reserved Instance",
//     "Nominal Usage Rate Integration",
//     "Non‑Uniform Resource Instance"
//   ],
//   "correct": 1
// },
// {
//   "question": "In AWS pricing options, what does PURI stand for?",
//   "answers": [
//     "Provisioned Usage Rate Instance",
//     "Partial Upfront Reserved Instance",
//     "Periodic Upfront Resource Integration",
//     "Pre-Unified Reservation Index"
//   ],
//   "correct": 1
// },
// {
//     "question": "Which AWS service provides serverless compute for running containers without managing the underlying EC2 instances?",
//     "answers": [
//       "AWS Lambda",
//       "Amazon ECS on EC2",
//       "AWS Fargate",
//       "Amazon EKS"
//     ],
//     "correct": 2
//   },
//   {
//     "question": "Which AWS service is designed to offer low-cost, preconfigured cloud resources for simple applications and small deployments?",
//     "answers": [
//       "Amazon EC2",
//       "Amazon Lightsail",
//       "AWS Elastic Beanstalk",
//       "AWS Outposts"
//     ],
//     "correct": 1
//   },
//   {
//     "question": "Which AWS service is commonly used to orchestrate and chain multiple Lambda functions into a coordinated workflow?",
//     "answers": [
//       "Amazon EventBridge",
//       "AWS Step Functions",
//       "AWS Batch",
//       "Amazon SQS"
//     ],
//     "correct": 1
//   },
//   {
//     "question": "Which AWS service allows you to efficiently process hundreds to thousands of computing tasks simultaneously, automatically managing resource provisioning and scaling?",
//     "answers": [
//       "AWS Lambda",
//       "AWS Batch",
//       "AWS Fargate",
//       "Amazon EMR"
//     ],
//     "correct": 1
//   },
//   {
//   "question": "Which AWS Reserved Instance pricing model requires the full payment upfront?",
//   "answers": [
//     "AURI",
//     "PURI",
//     "NURI",
//     "FURI"
//   ],
//   "correct": 0
// },
// {
//   "question": "What is included in an Amazon Machine Image (AMI)?",
//   "answers": [
//     "A template for the root volume for the instance",
//     "Launch permissions that control which AWS accounts can use the AMI to launch instances",
//     "A block device mapping that specifies the volumes to attach to the instance when it's launched",
//     "All of the above"
//   ],
//   "correct": 3
// },
// {
//   "question": "If your project requires monthly reports that iterate through very large amounts of data, which Amazon EC2 purchasing option should you consider?",
//   "answers": [
//     "Spot Instances",
//     "Scheduled Reserved Instances",
//     "Dedicated Hosts",
//     "On-Demand Instances"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service is best suited for storing large volumes of static files, such as website assets, backups, and logs, in a scalable, highly available, and durable object storage format?",
//   "answers": [
//     "Amazon EBS",
//     "Amazon EFS",
//     "Amazon S3",
//     "Amazon DynamoDB"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following statements accurately describes the concept of versioning in Amazon S3?",
//   "answers": [
//     "Versioning in Amazon S3 allows you to encrypt the contents of your S3 buckets using server-side encryption.",
//     "Enabling versioning in an S3 bucket ensures that each object stored in the bucket has a unique identifier, allowing for efficient indexing and retrieval.",
//     "With versioning enabled, Amazon S3 automatically creates a new version of an object whenever it is updated or overwritten, preserving all previous versions of the object.",
//     "Versioning in Amazon S3 allows you to control access to your S3 buckets by defining granular permissions for individual objects based on user roles and policies."
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following AWS S3 storage classes is optimized for frequently accessed data with low latency requirements?",
//   "answers": [
//     "Amazon S3 Standard",
//     "Amazon S3 Standard-IA",
//     "Amazon S3 One Zone-IA",
//     "Amazon S3 Glacier"
//   ],
//   "correct": 0
// },
// {
//   "question": "Which of the following statements best describes the storage characteristics of Amazon S3 Glacier?",
//   "answers": [
//     "Optimized for frequently accessed data with low latency requirements.",
//     "Ideal for data that is accessed infrequently, but requires rapid access when needed.",
//     "Designed for long-term archive and backup data, with retrieval times ranging from minutes to hours.",
//     "Suitable for data that requires immediate access with high throughput and low cost."
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following statements best distinguishes between AWS Athena and AWS QuickSight?",
//   "answers": [
//     "Athena is a business intelligence tool used for creating visualizations and dashboards, while QuickSight is a serverless query service for analyzing data directly in Amazon S3 using standard SQL.",
//     "Athena is a fully managed, scalable, and cost-effective interactive query service that uses SQL to analyze data in Amazon S3, while QuickSight is a cloud-based business analytics service that enables users to build visualizations and perform ad-hoc analysis.",
//     "Athena is designed for real-time data processing and analysis, whereas QuickSight is optimized for batch processing and long-term data storage.",
//     "Athena is primarily used for data transformation and ETL tasks, while QuickSight is focused on real-time data visualization and reporting."
//   ],
//   "correct": 1
// },
// {
//   "question": "Which of the following statements best distinguishes between Amazon EBS and Instance Store?",
//   "answers": [
//     "EBS provides block-level storage that persists independently from the life of the instance, offering persistent storage that remains even if the instance is stopped or terminated, while Instance Store offers high-performance, low-latency storage directly attached to the EC2 instance but is ephemeral and will be lost if the instance is stopped or terminated.",
//     "EBS is designed for applications requiring low-latency access to data, while Instance Store is suitable for long-term storage of critical data and backups.",
//     "EBS volumes are physically attached to the host server, while Instance Store volumes are network-attached storage solutions.",
//     "EBS is a fully managed service with automated backups and snapshots, while Instance Store requires manual management and backup procedures."
//   ],
//   "correct": 0
// },
// {
//   "question": "Which of the following best describes a feature of AWS Elastic File System (EFS)?",
//   "answers": [
//     "AWS EFS is a scalable block storage service that allows you to create and manage virtual block storage volumes for EC2 instances.",
//     "AWS EFS is designed for infrequently accessed data and offers a cost-effective storage solution with long-term durability.",
//     "AWS EFS provides a fully managed, scalable file storage service that can be shared across multiple EC2 instances and on-premises servers using the NFSv4 protocol.",
//     "AWS EFS offers real-time data analytics and query capabilities directly on the storage layer, enabling organizations to gain insights from their data without the need for additional processing."
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following best describes Amazon S3?",
//   "answers": [
//     "A global, object-level storage service with virtually unlimited scalability and 11 nines of durability.",
//     "A block storage service that must be attached to an EC2 instance to function.",
//     "A shared file system that uses the NFS protocol to mount across multiple instances.",
//     "A hybrid storage service that provides low-latency access to on-premises applications."
//   ],
//   "correct": 0
// },
// {
//   "question": "Which S3 storage class is designed for objects that are accessed infrequently but still require rapid retrieval?",
//   "answers": [
//     "S3 Standard",
//     "S3 Standard-IA",
//     "S3 Glacier Deep Archive",
//     "S3 One Zone-IA"
//   ],
//   "correct": 1
// },
// {
//   "question": "What is a key characteristic of S3 Glacier storage classes?",
//   "answers": [
//     "They provide instant retrieval for all stored objects.",
//     "They are optimized for frequently accessed data.",
//     "They are designed for cold storage with retrieval times ranging from minutes to hours.",
//     "They automatically replicate data across multiple AWS Regions."
//   ],
//   "correct": 2
// },
// {
//   "question": "What is the purpose of S3 Lifecycle Policies?",
//   "answers": [
//     "To automatically replicate objects across Regions for disaster recovery.",
//     "To move objects between storage classes based on defined rules.",
//     "To encrypt objects using AWS-managed keys.",
//     "To analyze S3 access logs for compliance reporting."
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service uses machine learning to identify sensitive data stored in S3?",
//   "answers": [
//     "AWS GuardDuty",
//     "AWS Backup",
//     "Amazon Macie",
//     "Amazon Athena"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which AWS service would alert you if an unusually large amount of data is being moved from S3?",
//   "answers": [
//     "Amazon Macie",
//     "AWS GuardDuty",
//     "AWS Backup",
//     "Amazon QuickSight"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which service allows you to run SQL queries directly against data stored in S3?",
//   "answers": [
//     "Amazon Athena",
//     "Amazon QuickSight",
//     "AWS Backup",
//     "AWS Storage Gateway"
//   ],
//   "correct": 0
// },
// {
//   "question": "Which EBS volume type is recommended for large database workloads requiring sustained IOPS performance?",
//   "answers": [
//     "General Purpose SSD (gp3)",
//     "Provisioned IOPS SSD (io1/io2)",
//     "Throughput Optimized HDD (st1)",
//     "Cold HDD (sc1)"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which EBS-backed storage option is ephemeral and loses data when the instance stops or terminates?",
//   "answers": [
//     "EBS General Purpose SSD",
//     "EBS Provisioned IOPS SSD",
//     "Instance Store",
//     "EBS Throughput Optimized HDD"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following best describes Amazon EFS?",
//   "answers": [
//     "A scalable block storage service for EC2 instances.",
//     "A shared file system that mounts using the NFS protocol and can be accessed by multiple instances.",
//     "A cold storage service designed for long-term archival.",
//     "A hybrid storage service that provides low-latency access to on-premises applications."
//   ],
//   "correct": 1
// },
// {
//   "question": "What is the primary purpose of AWS Storage Gateway?",
//   "answers": [
//     "To provide a fully managed shared file system for EC2 instances.",
//     "To enable on-premises applications to use cloud storage with low-latency access.",
//     "To automatically back up AWS resources across Regions.",
//     "To analyze S3 data using SQL queries."
//   ],
//   "correct": 1
// },
// {
//   "question": "What does AWS Backup provide?",
//   "answers": [
//     "A centralized service for configuring and monitoring backups across AWS resources.",
//     "A machine learning–powered tool for identifying sensitive data in S3.",
//     "A hybrid storage solution for on-premises workloads.",
//     "A BI tool for visualizing S3 data."
//   ],
//   "correct": 0
// },
// {
//   "question": "A company stores large volumes of log files in S3 that are accessed frequently for the first week, then rarely afterward. They want to reduce storage costs without sacrificing quick retrieval when needed. Which S3 feature should they use?",
//   "answers": [
//     "Enable S3 Versioning to reduce storage costs over time.",
//     "Use S3 Lifecycle Policies to transition objects to Standard-IA after one week.",
//     "Move all objects to S3 Glacier Deep Archive immediately.",
//     "Use S3 Intelligent-Tiering to automatically detect access patterns."
//   ],
//   "correct": 1
// },
// {
//   "question": "Your security team needs to automatically detect sensitive data such as PII inside S3 buckets. Which AWS service best fits this requirement?",
//   "answers": [
//     "Amazon Athena",
//     "Amazon Macie",
//     "AWS GuardDuty",
//     "AWS Backup"
//   ],
//   "correct": 1
// },
// {
//   "question": "A company notices a sudden spike in data transfers out of an S3 bucket and suspects a potential security issue. Which service would alert them to this unusual activity?",
//   "answers": [
//     "Amazon Macie",
//     "AWS Backup",
//     "AWS GuardDuty",
//     "Amazon QuickSight"
//   ],
//   "correct": 2
// },
// {
//   "question": "A development team needs a shared file system that multiple EC2 instances can mount simultaneously for a web application. The solution must support the NFS protocol. Which service should they choose?",
//   "answers": [
//     "Amazon EBS",
//     "Amazon S3",
//     "Amazon EFS",
//     "AWS Storage Gateway"
//   ],
//   "correct": 2
// },
// {
//   "question": "A data analytics team wants to run SQL queries directly against CSV files stored in S3 without loading them into a database. Which service should they use?",
//   "answers": [
//     "Amazon Athena",
//     "Amazon QuickSight",
//     "AWS Backup",
//     "AWS Storage Gateway"
//   ],
//   "correct": 0
// },
// {
//   "question": "A company needs extremely fast temporary storage for a high-performance compute workload. The data does not need to persist when the instance stops. Which storage option is the best fit?",
//   "answers": [
//     "EBS General Purpose SSD",
//     "EBS Provisioned IOPS SSD",
//     "Instance Store",
//     "EBS Throughput Optimized HDD"
//   ],
//   "correct": 2
// },
// {
//   "question": "A business wants to centralize backup policies for EC2, EBS, and other AWS resources across multiple Regions. Which AWS service should they use?",
//   "answers": [
//     "AWS Backup",
//     "AWS Storage Gateway",
//     "Amazon Macie",
//     "Amazon QuickSight"
//   ],
//   "correct": 0
// },
// {
//   "question": "A media company needs to store large video files that are rarely accessed but must be retrievable within a few hours. Which S3 storage class is the best fit?",
//   "answers": [
//     "S3 Standard",
//     "S3 Standard-IA",
//     "S3 Glacier (Standard retrieval)",
//     "S3 Glacier Deep Archive"
//   ],
//   "correct": 2
// },
// {
//   "question": "A team needs a hybrid solution that allows their on-premises application to access cloud-backed storage using standard storage protocols with low latency. Which service should they deploy?",
//   "answers": [
//     "Amazon EFS",
//     "AWS Storage Gateway",
//     "Amazon S3",
//     "AWS Backup"
//   ],
//   "correct": 1
// },
// {
//   "question": "A database workload requires consistently high IOPS performance. Which EBS volume type should be selected?",
//   "answers": [
//     "General Purpose SSD",
//     "Provisioned IOPS SSD",
//     "Throughput Optimized HDD",
//     "Cold HDD"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service is best suited for managing relational databases in the cloud with features such as automated backups, automatic scaling, and multi-AZ deployments?",
//   "answers": [
//     "Amazon S3",
//     "Amazon EC2",
//     "Amazon RDS",
//     "Amazon DynamoDB"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which AWS service is best suited for applications requiring a highly scalable, fully managed NoSQL database solution with low-latency access and flexible data models?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon Aurora",
//     "Amazon DynamoDB",
//     "Amazon Redshift"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which of the following best describes a Data Lake compared to a Data Warehouse?",
//   "answers": [
//     "Data Lake: A repository for structured data optimized for high-speed analytics. Data Warehouse: A storage system for unstructured data with real-time processing capabilities.",
//     "Data Lake: A centralized repository for storing all types of raw data at scale. Data Warehouse: A structured repository for processed and curated data optimized for querying and analysis.",
//     "Data Lake: A storage system for archived data with built-in machine learning capabilities. Data Warehouse: A real-time data processing engine for streaming analytics.",
//     "Data Lake: A cloud-based solution for managing data backups and disaster recovery. Data Warehouse: An on-premises solution for data storage and retrieval."
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service is best suited for an application requiring high-performance, scalable, and fully managed relational database capabilities, with compatibility for MySQL and PostgreSQL?",
//   "answers": [
//     "Amazon S3",
//     "Amazon DynamoDB",
//     "Amazon RDS",
//     "Amazon Aurora"
//   ],
//   "correct": 3
// },
// {
//   "question": "Which AWS service is purpose-built for building and managing graph databases?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon Aurora",
//     "Amazon DynamoDB",
//     "Amazon Neptune"
//   ],
//   "correct": 3
// },
// {
//   "question": "Which of the following is a fully-managed NoSQL database service?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon DynamoDB",
//     "Amazon Aurora",
//     "Amazon Redshift",
//     "Amazon Neptune"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which of the following best describes AWS DMS?",
//   "answers": [
//     "A service for analyzing and visualizing data stored in Amazon S3 buckets.",
//     "A service for migrating databases to AWS with minimal downtime.",
//     "A service for managing and optimizing DynamoDB databases.",
//     "A service for encrypting data stored in Amazon RDS instances."
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service is a fully managed relational database solution designed for complex queries, transactions, and high durability?",
//   "answers": [
//     "Amazon DynamoDB",
//     "Amazon RDS",
//     "Amazon Redshift",
//     "Amazon Neptune"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which workload is NOT a good fit for Amazon RDS?",
//   "answers": [
//     "Applications requiring complex SQL queries and transactions",
//     "Workloads needing high durability and automated backups",
//     "Massive read/write rates requiring sharding for high throughput",
//     "Medium to high query or write rate applications"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which AWS service provides a fully managed NoSQL database capable of handling unstructured and semi‑structured data with virtually unlimited storage?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon DynamoDB",
//     "Amazon Aurora",
//     "Amazon Redshift"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which feature of DynamoDB makes it suitable for applications requiring extremely high request volumes?",
//   "answers": [
//     "Support for complex SQL joins",
//     "Ability to handle over 1 trillion requests per day",
//     "Automatic conversion of relational schemas",
//     "Native OLAP query optimization"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS database service is designed to be a high‑performance, cost‑effective alternative to commercial databases and is up to 3.5x faster than MySQL and PostgreSQL?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon DynamoDB",
//     "Amazon Aurora",
//     "Amazon Neptune"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which AWS service is best suited for OLAP workloads such as trend analysis and BI reporting on large volumes of historical data?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon DynamoDB",
//     "Amazon Redshift",
//     "Amazon Aurora"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which statement best describes a Data Warehouse such as Amazon Redshift?",
//   "answers": [
//     "A repository for raw, unstructured data used for machine learning and advanced analytics",
//     "A structured system optimized for complex queries, joins, and periodic updates",
//     "A NoSQL database designed for low‑latency key‑value access",
//     "A graph database used for analyzing highly connected datasets"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which statement best describes a Data Lake?",
//   "answers": [
//     "A structured repository optimized for OLAP workloads and BI reporting",
//     "A vast storage system for diverse, unstructured data where transformation happens later",
//     "A relational database optimized for high‑speed transactions",
//     "A graph database for modeling social networks"
//   ],
//   "correct": 1
// },
// {
//   "question": "What is a major risk of poorly managed Data Lakes?",
//   "answers": [
//     "Data silos",
//     "Data swamps",
//     "High IOPS consumption",
//     "Excessive schema enforcement"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS service is purpose‑built for storing and querying highly connected datasets such as social graphs?",
//   "answers": [
//     "Amazon Redshift",
//     "Amazon Aurora",
//     "Amazon Neptune",
//     "Amazon DynamoDB"
//   ],
//   "correct": 2
// },
// {
//   "question": "Which AWS service helps migrate on‑premises databases to AWS with minimal downtime?",
//   "answers": [
//     "AWS SCT",
//     "AWS DMS",
//     "Amazon RDS",
//     "Amazon Redshift Spectrum"
//   ],
//   "correct": 1
// },
// {
//   "question": "Which AWS tool is used to convert database schemas during migrations, such as from Oracle to PostgreSQL?",
//   "answers": [
//     "AWS DMS",
//     "Amazon Aurora",
//     "AWS SCT",
//     "Amazon Neptune"
//   ],
//   "correct": 2
// },
// {
//   "question": "A financial analytics company needs a database that supports complex transactions, high durability, and medium-to-high write rates. They do NOT expect massive read/write spikes and do not want to manage sharding. Which service is the best fit?",
//   "answers": [
//     "Amazon DynamoDB",
//     "Amazon RDS",
//     "Amazon Redshift",
//     "Amazon Neptune"
//   ],
//   "correct": 1
// },
// {
//   "question": "A gaming platform needs a database that can handle unpredictable traffic spikes, low-latency reads, and over a trillion requests per day. The data is semi-structured and does not require SQL joins. Which service should they choose?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon Aurora",
//     "Amazon DynamoDB",
//     "Amazon Redshift"
//   ],
//   "correct": 2
// },
// {
//   "question": "A company wants a high-performance relational database engine that is compatible with MySQL and PostgreSQL, offers high availability, and is significantly faster than traditional open-source databases. Which service meets these requirements?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon Aurora",
//     "Amazon DynamoDB",
//     "Amazon Neptune"
//   ],
//   "correct": 1
// },
// {
//   "question": "A retail organization needs to run complex analytical queries on petabytes of historical sales data. They want to integrate data stored in S3 without loading it into the warehouse first. Which service should they use?",
//   "answers": [
//     "Amazon RDS",
//     "Amazon DynamoDB",
//     "Amazon Redshift with Redshift Spectrum",
//     "Amazon Aurora"
//   ],
//   "correct": 2
// },
// {
//   "question": "A data science team wants to store massive volumes of raw, unstructured data from IoT devices. They plan to run machine learning and advanced analytics later, after transforming the data. Which solution is the best fit?",
//   "answers": [
//     "Data Warehouse",
//     "Amazon DynamoDB",
//     "Data Lake",
//     "Amazon RDS"
//   ],
//   "correct": 2
// },
// {
//   "question": "A company’s Data Lake has grown rapidly, and analysts report that data is inconsistent, poorly cataloged, and difficult to use. What problem is the company experiencing?",
//   "answers": [
//     "Data Silos",
//     "Data Swamps",
//     "OLTP bottlenecks",
//     "Sharding failures"
//   ],
//   "correct": 1
// },
// {
//   "question": "A social networking startup needs a database that can efficiently store and query highly connected datasets, such as user relationships, followers, and recommendations. Which AWS service is the best fit?",
//   "answers": [
//     "Amazon Redshift",
//     "Amazon Neptune",
//     "Amazon DynamoDB",
//     "Amazon Aurora"
//   ],
//   "correct": 1
// },
// {
//   "question": "A company wants to migrate its on-premises Oracle database to Amazon Aurora PostgreSQL. They need to convert the schema and then replicate data with minimal downtime. Which combination of services should they use?",
//   "answers": [
//     "Amazon RDS and Amazon Redshift",
//     "AWS SCT and AWS DMS",
//     "Amazon DynamoDB and AWS Glue",
//     "Amazon Neptune and AWS DMS"
//   ],
//   "correct": 1
// },
// {
//   "question": "A business wants to consolidate multiple legacy databases into AWS with continuous replication during the migration. They need the source database to remain operational throughout the process. Which service should they use?",
//   "answers": [
//     "AWS SCT",
//     "Amazon Aurora",
//     "AWS DMS",
//     "Amazon Redshift Spectrum"
//   ],
//   "correct": 2
// },
// {
//   "question": "A BI team needs a system optimized for complex joins, trend analysis, and periodic batch updates. The workload involves large volumes of historical data and OLAP-style queries. Which AWS service is the best match?",
//   "answers": [
//     "Amazon DynamoDB",
//     "Amazon Redshift",
//     "Amazon RDS",
//     "Amazon Neptune"
//   ],
//   "correct": 1
// },
{
  "question": "How does Amazon S3 replicate objects by default to achieve high durability?",
  "answers": [
    "On multiple S3 buckets",
    "On multiple volumes within an Availability Zone",
    "In multiple Availability Zones within the same Region",
    "Across multiple Regions for higher durability"
  ],
  "correct": 2
},
{
  "question": "Which of the following is NOT one of the six pillars of the AWS Well-Architected Framework?",
  "answers": [
    "Operational Excellence",
    "Performance Efficiency",
    "Security",
    "Disaster Recovery",
    "Sustainability"
  ],
  "correct": 3
},
{
  "question": "Which one is NOT part of the Operational Excellence Pillar in the AWS Well-Architected Framework?",
  "answers": [
    "Perform operations as code",
    "Make infrequent and large changes",
    "Refine operations procedures frequently",
    "Anticipate failure",
    "Use managed services"
  ],
  "correct": 1
},
{
  "question": "Which one is NOT part of the Security Pillar in the AWS Well-Architected Framework?",
  "answers": [
    "Perform operations as code",
    "Maintain traceability",
    "Apply security at all layers",
    "Protect data in transit and at rest",
    "Keep people away from data"
  ],
  "correct": 0
},
{
  "question": "Which one is NOT a principle of the Reliability Pillar in the AWS Well-Architected Framework?",
  "answers": [
    "Perform operations as code",
    "Test recovery procedures",
    "Automatically recover from failure",
    "Maintain traceability",
    "Scale horizontally to increase aggregate workload availability",
    "Stop guessing capacity"
  ],
  "correct": 3
},
{
  "question": "Which of the following is NOT a best practice under the Performance Efficiency Pillar in the AWS Well-Architected Framework?",
  "answers": [
    "Democratize advanced technologies",
    "Go global in minutes",
    "Use serverless architectures",
    "Experiment more often",
    "Failure management"
  ],
  "correct": 4
},
{
  "question": "Which of the following is NOT a principle of the Cost Optimization Pillar in the AWS Well-Architected Framework?",
  "answers": [
    "Adopt a consumption model",
    "Measure overall efficiency",
    "Test recovery procedures",
    "Stop spending money on undifferentiated heavy lifting",
    "Analyze and attribute expenditure"
  ],
  "correct": 2
},
{
  "question": "Which of the following best describes the purpose of a load balancer in a distributed computing environment?",
  "answers": [
    "To allocate network bandwidth to different applications.",
    "To evenly distribute incoming network traffic across multiple servers or resources.",
    "To monitor the health and performance of network devices.",
    "To encrypt and decrypt data transmitted over the network."
  ],
  "correct": 1
},
{
  "question": "Which of the following AWS services is primarily used for monitoring and logging of AWS resources and applications?",
  "answers": [
    "Amazon CloudFront",
    "Amazon CloudWatch",
    "AWS CloudTrail",
    "Amazon CloudFormation"
  ],
  "correct": 1
},
{
  "question": "Which AWS service automatically adjusts the number of EC2 instances in a fleet based on demand?",
  "answers": [
    "Auto Scaling",
    "EC2 Auto Scaling",
    "Elastic Load Balancing",
    "AWS Lambda"
  ],
  "correct": 1
},
{
  "question": "What is the primary purpose of Elastic Load Balancing?",
  "answers": [
    "To store objects across multiple Availability Zones",
    "To balance incoming traffic across multiple servers",
    "To encrypt data in transit",
    "To monitor application performance"
  ],
  "correct": 1
},
{
  "question": "Which type of load balancer operates at Layer 4 and is best suited for spikey, unpredictable traffic?",
  "answers": [
    "Application Load Balancer",
    "Network Load Balancer",
    "Gateway Load Balancer",
    "Classic Load Balancer"
  ],
  "correct": 1
},
{
  "question": "Which load balancer supports assigning a static IP address or Elastic IP?",
  "answers": [
    "Application Load Balancer",
    "Network Load Balancer",
    "Gateway Load Balancer",
    "Classic Load Balancer"
  ],
  "correct": 1
},
{
  "question": "Which load balancer is typically used for routing traffic to containerized applications and supports Layer 7 routing?",
  "answers": [
    "Network Load Balancer",
    "Application Load Balancer",
    "Gateway Load Balancer",
    "Classic Load Balancer"
  ],
  "correct": 1
},
{
  "question": "Which AWS service monitors resources and allows you to set alarms or trigger events such as Auto Scaling?",
  "answers": [
    "AWS CloudTrail",
    "Amazon CloudWatch",
    "AWS Config",
    "Amazon Inspector"
  ],
  "correct": 1
},
{
  "question": "Which AWS service provides auditing by recording who did what and when in your AWS account?",
  "answers": [
    "Amazon CloudWatch",
    "AWS CloudTrail",
    "AWS Config",
    "AWS IAM"
  ],
  "correct": 1
},
{
  "question": "Which scaling type in EC2 Auto Scaling adjusts capacity based on real‑time metrics such as CPU utilization?",
  "answers": [
    "Scheduled scaling",
    "Predictive scaling",
    "Dynamic scaling",
    "Horizontal scaling"
  ],
  "correct": 2
},
{
  "question": "Which EC2 Auto Scaling feature increases or decreases the number of instances at specific times based on a known schedule?",
  "answers": [
    "Dynamic scaling",
    "Predictive scaling",
    "Scheduled scaling",
    "Horizontal scaling"
  ],
  "correct": 2
},
{
  "question": "Which EC2 Auto Scaling method uses machine learning to forecast future traffic and scale ahead of demand?",
  "answers": [
    "Scheduled scaling",
    "Predictive scaling",
    "Dynamic scaling",
    "Manual scaling"
  ],
  "correct": 1
},
{
  "question": "What does horizontal scaling refer to in EC2 Auto Scaling?",
  "answers": [
    "Increasing the size of an instance",
    "Adding more instances to handle load",
    "Migrating workloads across Regions",
    "Using larger instance families"
  ],
  "correct": 1
},
{
  "question": "Your company is experiencing sudden spikes in traffic during flash sales. You need a load balancer that can handle extremely high, unpredictable traffic patterns and also supports assigning a static IP address. Which load balancer should you choose?",
  "answers": [
    "Application Load Balancer",
    "Network Load Balancer",
    "Gateway Load Balancer",
    "Classic Load Balancer"
  ],
  "correct": 1
},
{
  "question": "A development team is deploying a microservices-based application using containers. They need a load balancer that can route traffic based on HTTP headers and paths. Which AWS service best fits this requirement?",
  "answers": [
    "Network Load Balancer",
    "Application Load Balancer",
    "Gateway Load Balancer",
    "Classic Load Balancer"
  ],
  "correct": 1
},
{
  "question": "Your security team needs to audit all API calls made in your AWS account to determine who performed specific actions and when. Which service should they use?",
  "answers": [
    "Amazon CloudWatch",
    "AWS CloudTrail",
    "AWS Config",
    "Amazon Inspector"
  ],
  "correct": 1
},
{
  "question": "A company wants to automatically scale its EC2 instances based on CPU utilization and memory usage in real time. Which EC2 Auto Scaling feature should they rely on?",
  "answers": [
    "Scheduled scaling",
    "Predictive scaling",
    "Dynamic scaling",
    "Horizontal scaling"
  ],
  "correct": 2
},
{
  "question": "Your operations team wants to receive an alert whenever CPU usage on an EC2 instance exceeds 80% for more than 5 minutes. Which AWS service should they configure?",
  "answers": [
    "AWS CloudTrail",
    "Amazon CloudWatch",
    "AWS Config",
    "Amazon SNS"
  ],
  "correct": 1
},
{
  "question": "A company knows that traffic to their application increases every weekday at 9 AM. They want EC2 instances to scale out automatically just before the spike. Which Auto Scaling method should they use?",
  "answers": [
    "Dynamic scaling",
    "Predictive scaling",
    "Scheduled scaling",
    "Horizontal scaling"
  ],
  "correct": 2
},
{
  "question": "Your application requires third‑party virtual appliances such as firewalls and intrusion detection systems to inspect traffic before it reaches your workloads. Which load balancer type is designed for this scenario?",
  "answers": [
    "Application Load Balancer",
    "Network Load Balancer",
    "Gateway Load Balancer",
    "Classic Load Balancer"
  ],
  "correct": 2
},
{
  "question": "A company wants to reduce operational overhead by avoiding the need to manage servers, patch operating systems, or handle scaling manually. Which Well-Architected principle best supports this goal?",
  "answers": [
    "Use managed services",
    "Implement observability for actionable insights",
    "Stop guessing capacity",
    "Democratize advanced technologies"
  ],
  "correct": 0
},
{
  "question": "Your security team needs to ensure that all API calls in the AWS account can be traced back to a specific user or role. Which Security pillar principle does this requirement align with?",
  "answers": [
    "Maintain traceability",
    "Keep people away from data",
    "Prepare for security events",
    "Apply security at all layers"
  ],
  "correct": 0
},
{
  "question": "A company wants to minimize the risk of data exposure by ensuring that engineers never directly access production databases. Which Security pillar principle does this support?",
  "answers": [
    "Protect data in transit and at rest",
    "Automate security best practices",
    "Keep people away from data",
    "Implement a strong identity foundation"
  ],
  "correct": 2
},
{
  "question": "Your application must remain available even if individual components fail. The team wants AWS to automatically detect and replace unhealthy instances. Which Reliability principle does this describe?",
  "answers": [
    "Test recovery procedures",
    "Automatically recover from failure",
    "Manage change in automation",
    "Scale horizontally"
  ],
  "correct": 1
},
{
  "question": "A company is expanding globally and wants to deploy its application closer to users in multiple Regions with minimal effort. Which Performance Efficiency principle does this align with?",
  "answers": [
    "Go global in minutes",
    "Experiment more often",
    "Use serverless architectures",
    "Consider mechanical sympathy"
  ],
  "correct": 0
},
{
  "question": "Your finance team wants better visibility into cloud spending and needs a process for allocating costs to individual teams. Which Cost Optimization principle addresses this?",
  "answers": [
    "Adopt a consumption model",
    "Analyze and attribute expenditure",
    "Measure overall efficiency",
    "Stop spending money on undifferentiated heavy lifting"
  ],
  "correct": 1
},
{
  "question": "A company wants to reduce its environmental impact by ensuring workloads run efficiently and avoid idle resources. Which Sustainability principle does this support?",
  "answers": [
    "Maximize utilization",
    "Understand your impact",
    "Use managed services",
    "Establish sustainability goals"
  ],
  "correct": 0
},
{
  "question": "Your organization wants to ensure that as more energy‑efficient AWS hardware becomes available, your workloads can automatically benefit without major redesign. Which Sustainability principle applies?",
  "answers": [
    "Anticipate and adopt new, more efficient hardware and software offerings",
    "Reduce downstream impact",
    "Maximize utilization",
    "Use managed services"
  ],
  "correct": 0
},
{
  "question": "A team wants to improve system reliability by reducing the risk of human error during deployments. They decide to automate configuration changes and rollouts. Which Reliability principle does this support?",
  "answers": [
    "Manage change in automation",
    "Stop guessing capacity",
    "Scale horizontally",
    "Test recovery procedures"
  ],
  "correct": 0
},
{
  "question": "Your engineering team wants to experiment with new architectures quickly without needing deep expertise in specialized technologies. Which Performance Efficiency principle supports this?",
  "answers": [
    "Democratize advanced technologies",
    "Experiment more often",
    "Use serverless architectures",
    "Consider mechanical sympathy"
  ],
  "correct": 0
},
{
  "question": "Which design principle is recommended for achieving Performance Efficiency in the AWS Well-Architected Framework?",
  "answers": [
    "Enable traceability",
    "Analyze and attribute expenditure",
    "Democratize advanced technologies",
    "Match supply with demand"
  ],
  "correct": 2
},
{
  "question": "Which of the following is NOT one of the four areas of the Performance Efficiency pillar?",
  "answers": [
    "Monitoring",
    "Tradeoffs",
    "Selection",
    "Traceability"
  ],
  "correct": 3
},
{
  "question": "Which set correctly represents the five categories evaluated by AWS Trusted Advisor?",
  "answers": [
    "Performance, cost optimization, access control, connectivity, security",
    "Security, fault tolerance, high availability, connectivity, service limits",
    "Security, access control, high availability, performance, service limits",
    "Performance, cost optimization, security, fault tolerance, service limits"
  ],
  "correct": 3
},
{
  "question": "Which of the following is NOT a principle of the Reliability Pillar in the AWS Well-Architected Framework?",
  "answers": [
    "Stop guessing capacity",
    "Maintain traceability",
    "Test recovery procedures",
    "Automatically recover from failure"
  ],
  "correct": 1
},
{
  "question": "Which AWS Well-Architected Pillar focuses on ensuring a workload performs its intended function correctly and consistently?",
  "answers": [
    "Operational Excellence",
    "Reliability",
    "Performance Efficiency",
    "Security"
  ],
  "correct": 1
},
{
  "question": "Which AWS Well-Architected Pillar focuses on the ability to run and monitor systems to deliver business value and improve processes?",
  "answers": [
    "Operational Excellence",
    "Reliability",
    "Security",
    "Cost Optimization"
  ],
  "correct": 0
},
{
  "question": "Which AWS Well-Architected Pillar focuses on using IT and computing resources efficiently as demand changes?",
  "answers": [
    "Performance Efficiency",
    "Operational Excellence",
    "Sustainability",
    "Cost Optimization"
  ],
  "correct": 0
},
{
  "question": "Which AWS Well-Architected Pillar addresses long-term environmental, economic, and societal impact?",
  "answers": [
    "Security",
    "Sustainability",
    "Cost Optimization",
    "Reliability"
  ],
  "correct": 1
},
{
  "question": "Which AWS Well-Architected Pillar focuses on avoiding unnecessary costs?",
  "answers": [
    "Cost Optimization",
    "Performance Efficiency",
    "Operational Excellence",
    "Security"
  ],
  "correct": 0
},
{
  "question": "Which AWS Well-Architected Pillar focuses on protecting information, systems, and assets through risk assessments and mitigation strategies?",
  "answers": [
    "Security",
    "Reliability",
    "Operational Excellence",
    "Sustainability"
  ],
  "correct": 0
},
{
  "question": "Which of the following is required when creating an Amazon EC2 Auto Scaling launch configuration?",
  "answers": [
    "Load balancer",
    "Amazon Elastic Block Store (EBS) volumes",
    "Instance type",
    "Amazon Machine Image (AMI)"
  ],
  "correct": 3
},
{
  "question": "Which AWS Well-Architected Pillar focuses on protecting information, systems, and assets through risk assessments and mitigation strategies?",
  "answers": [
    "Operational Excellence",
    "Security",
    "Cost Optimization",
    "Sustainability"
  ],
  "correct": 1
},
{
  "question": "Which AWS Well-Architected Pillar ensures workloads perform correctly and consistently when expected?",
  "answers": [
    "Reliability",
    "Performance Efficiency",
    "Security",
    "Cost Optimization"
  ],
  "correct": 0
},
{
  "question": "Which AWS Well-Architected Pillar emphasizes using IT and computing resources efficiently as demand changes?",
  "answers": [
    "Sustainability",
    "Operational Excellence",
    "Performance Efficiency",
    "Security"
  ],
  "correct": 2
},
{
  "question": "Which AWS Well-Architected Pillar focuses on avoiding unnecessary costs and ensuring you pay only for what you need?",
  "answers": [
    "Cost Optimization",
    "Reliability",
    "Performance Efficiency",
    "Security"
  ],
  "correct": 0
},
{
  "question": "Which AWS Well-Architected Pillar focuses on the ability to run and monitor systems to deliver business value and improve processes?",
  "answers": [
    "Security",
    "Operational Excellence",
    "Sustainability",
    "Performance Efficiency"
  ],
  "correct": 1
},
{
  "question": "Which AWS Well-Architected Pillar addresses minimizing environmental impact and promoting long-term sustainability?",
  "answers": [
    "Cost Optimization",
    "Sustainability",
    "Operational Excellence",
    "Reliability"
  ],
  "correct": 1
},
{
  "question": "A company wants to reduce waste, improve energy efficiency, and minimize long-term environmental impact. Which pillar guides these efforts?",
  "answers": [
    "Performance Efficiency",
    "Sustainability",
    "Security",
    "Cost Optimization"
  ],
  "correct": 1
},
{
  "question": "A team wants to automate operations, improve monitoring, and continuously refine processes. Which pillar does this align with?",
  "answers": [
    "Operational Excellence",
    "Reliability",
    "Security",
    "Sustainability"
  ],
  "correct": 0
},
{
  "question": "A workload must withstand component failures and continue operating as expected. Which pillar is most relevant?",
  "answers": [
    "Security",
    "Cost Optimization",
    "Reliability",
    "Performance Efficiency"
  ],
  "correct": 2
},
{
  "question": "A business wants to adopt new hardware and software technologies quickly without needing deep expertise. Which pillar supports this?",
  "answers": [
    "Operational Excellence",
    "Performance Efficiency",
    "Sustainability",
    "Security"
  ],
  "correct": 1
}
      // {
      //   question:"Which of the below are factors that have helped make public cloud so powerful?",
      //   answers: [
      //     "The ease of trying new solutions, Pay-as-you-go approach for pricing",
      //     "No special skills required", 
      //     "Traditional methods that are used for on-premise infrastructure always work just as well in cloud"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Your company has launched a new app. To access the app files, the development team needs access to a bucket that is located within your team's AWS account. The development team is using a different account and requires programmatic and console level access to your team's S3 bucket. How would you share this bucket with the development team's account?",
      //   answers: [
      //     "Setting up a Resource Based Access Control List (ACL)",
      //     "Setting up a cross account IAM Role", 
      //     "Setting up a resource-based policy", 
      //     "Setting up a shared IAM policy"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"The use of a cluster placement group is ideal",
      //   answers: [
      //     "When you need to distribute content on a CDN network.",
      //     "When you need to deploy EC2 instances that require high disk IO.", 
      //     "Your fleet of EC2 instances requires high network throughput and low latency within a single availability zone.", 
      //     "Your fleet of EC2 Instances requires low latency and high network throughput across multiple availability zones."
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"Will an Amazon EBS root volume persist independently from the life of the terminated EC2 instance to which it was previously attached? In other words, if I terminated an EC2 instance, would that EBS root volume persist?",
      //   answers: [
      //     "No - It will always be deleted immediately on termination",
      //     "Yes - It will always persist until deleted manually", 
      //     "No - Unless 'Delete on Termination' is unchecked for the root volume", 
      //     "Yes - But only for certain instance types"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"Which of the following provide the least expensive EBS options?",
      //   answers: [
      //     "Provisioned IOPS (io1)",
      //     "Throughput Optimized (st1), Cold (sc1)", 
      //     "General Purpose (gp2)", 
      //     "SSD"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"Which of the following is most suitable for OLAP (Online Analytical Processing)?",
      //   answers: [
      //     "Redshift",
      //     "DynamoDB", 
      //     "RDS", 
      //     "ElastiCache"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"DB security groups are used with DB instances that are not in a VPC and on the EC2-Classic platform. When you create a DB security group, you need to specify a destination port number.",
      //   answers: [
      //     "False",
      //     "True"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"In RDS, what is the maximum value I can set for my backup retention period?",
      //   answers: [
      //     "15 Days",
      //     "30 Days", 
      //     "35 Days", 
      //     "45 Days"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"Which of the following DynamoDB features are chargeable, when using a single region?",
      //   answers: [
      //     "Storage of Data, and Read and Write Capacity",
      //     "Local secondary indexes", 
      //     "Incoming Data Transfer"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Which of the following data formats does Amazon Athena NOT support?",
      //   answers: [
      //     "JSON",
      //     "Apache Parquet", 
      //     "Apache ORC", 
      //     "XML"
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"If you are using Amazon RDS Provisioned IOPS storage with a Microsoft SQL Server database engine, what is the maximum size RDS volume you can have by default?",
      //   answers: [
      //     "32TB",
      //     "1TB", 
      //     "16TB", 
      //     "6TB"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"RDS Reserved instances are available for multi-AZ deployments.",
      //   answers: [
      //     "True",
      //     "False"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Which of the following is NOT a feature supported by DynamoDB?",
      //   answers: [
      //     "Data reads that are either eventually consistent or strongly consistent",
      //     "The ability to perform operations by using a user-defined primary key", 
      //     "The primary key can be either a single-attribute or a composite partition-sort key", 
      //     "Amazon DynamoDB supports MongoDB workloads."
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"When you create a custom VPC, which of the following are created automatically?",
      //   answers: [
      //     "Network Access Control List (ACL), Route Table, Internet Gateway",
      //     "Network Access Control List (ACL), Route Table, Security Group", 
      //     "Network Access Control List (ACL), Route Table, Subnets", 
      //     "Network Access Control List (ACL), Route Table, NAT Gateway"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"A VPN connection consists of which of the following components?",
      //   answers: [
      //     "Customer Gateway, Virtual Private Gateway",
      //     "Customer Gateway, Direct Connect Gateway", 
      //     "Virtual Private Gateway, Direct Connect Gateway"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"You have created a new VPC and launched an EC2 instance into a public subnet. However, you did not assign a public IP to the instance during its creation. What is the easiest way to make your instance reachable from the internet?",
      //   answers: [
      //     "Associate the Private IP of your instance to the Public IP of the Internet Gateway.",
      //     "Nothing by default all instances deployed into any Public Subnet will automatically receive a Public IP.", 
      //     "Create an Elastic IP and new Network Interface. Associate the Elastic IP to the new Network Interface, and the new Network Interface to your instance.", 
      //     "Create an Elastic IP address and associate it with your EC2 instance."
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"Which of these is NOT a component of the AWS Global Accelerator service?",
      //   answers: [
      //     "Listeners",
      //     "Endpoint Groups", 
      //     "CloudFront", 
      //     "Static IP Address"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"A subnet can span multiple Availability Zones.",
      //   answers: [
      //     "True",
      //     "False"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"At which of the following levels can VPC Flow Logs be created?",
      //   answers: [
      //     "VPC Level, Network Interface Level, Security Group Level",
      //     "VPC Level, Network Interface Level, Subnet Level", 
      //     "VPC Level, Network Interface Level, Account Level"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"What is the advantage of running your AWS VPN connection through your Direct Connect connection over using the ordinary Internet?",
      //   answers: [
      //     "Improved security, Faster performance",
      //     "Can use Transit Gateway to service multiple accounts/VPCs, Faster performance", 
      //     "No data transfer charges when using Direct Connect, Faster performance"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"What is Amazon Kinesis Data Streams?",
      //   answers: [
      //     "A service for analyzing data, creating dashboards and storing data in S3.",
      //     "A service for generating streaming data", 
      //     "A service on AWS that ingests and stores data streams for processing.", 
      //     "A service for loading streaming data into data stores."
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"What happens when you create a topic on Amazon SNS?",
      //   answers: [
      //     "An Amazon Resource Name is created.",
      //     "You cannot create a topic on SNS.", 
      //     "Nothing, as topics are specific to Amazon SQS.", 
      //     "The topic will terminate your EC2 instances that aren't identified by tags."
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"What are the key components of Kinesis Data Firehose?",
      //   answers: [
      //     "Producers, records of data and consumers",
      //     "Delivery streams, shards, data stores and consumers.", 
      //     "Producers, shards and consumers", 
      //     "Delivery streams, records of data and destinations."
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"You have discovered duplicate messages being processed in your SQS queue. How do you resolve this?",
      //   answers: [
      //     "Decrease the visibility timeout of your queue, so that messages do not become visible once obtained by a consumer.",
      //     "Enable Short polling so that messages are processed faster.", 
      //     "Increase the visibility timeout of your queue, so that messages do not become visible once obtained by a consumer.", 
      //     "Enable Long polling so that messages are deleted from the queue when processed."
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"In which direction(s) does Lambda scale automatically?",
      //   answers: [
      //     "Out",
      //     "Up and Out", 
      //     "None - Lambda does not scale automatically", 
      //     "Up"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Which of these options best describes the AWS compute services that could be used for multi-threaded processing?",
      //   answers: [
      //     "EC2, ECS, & Lambda.",
      //     "Only a EC2 'Bare Steel' server.", 
      //     "ECS, and EC2.", 
      //     "None of the above."
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Which of the following services can invoke a Lambda function synchronously (with functionality built-in with the invoking service)?",
      //   answers: [
      //     "Kinesis Data Firehose, S3, API Gateway",
      //     "Kinesis Data Firehose, Amazon Lex, API Gateway", 
      //     "Kinesis Data Firehose, S3, EC2", 
      //     "IAM, Amazon Lex, API Gateway"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"Lambda pricing is NOT based on which of these measurements after the free tier?",
      //   answers: [
      //     "The number of requests for each time the lambda executes in response to an event notification, or invoke call.",
      //     "The amount of memory assigned.", 
      //     "The amount of CPU you choose.", 
      //     "Duration of each request (in ms)."
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"Your company provides an online image recognition service and uses SQS to decouple system components. Your EC2 instances poll the image queue as often as possible to keep end-to-end throughput as high as possible, but you realize that all this polling is resulting in both a large number of CPU cycles and skyrocketing costs. How can you reduce cost without compromising service?",
      //   answers: [
      //     "Enable short polling by setting the ReceiveMessageWaitTimeSeconds to a number > 0.",
      //     "Enable long polling by setting the ReceiveMessageWaitTimeSeconds to a number > 0.", 
      //     "Enable long polling by setting the ReceiveMessageWaitTimeMinutes to a number > 0.", 
      //     "Enable short polling by setting the ReceiveMessageWaitTimeMinutes to a number > 0."
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"You run a meme creation website that stores the original images in S3 and each meme's metadata in DynamoDB. You need to decide upon a low-cost storage option for the memes, which won't be accessed on a regular basis, but require rapid access when needed. If a meme object is unavailable or lost, a Lambda function will automatically recreate it but at a $10 licensing cost per creation. There is a very large number of files. Which storage solution should you use to store the memes in the most cost-effective way?",
      //   answers: [
      //     "S3 - RRS",
      //     "S3", 
      //     "S3 - OneZone-IA", 
      //     "S3 - IA"
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"What is the maximum VisibilityTimeout of an SQS message in a FIFO queue?",
      //   answers: [
      //     "14 days",
      //     "1 hour", 
      //     "1 day", 
      //     "12 hours"
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"Which of the following Amazon S3 Storage Classes offer 99.999999999% (11 x 9s) durability?",
      //   answers: [
      //     "Standard, Glacier, Reduced Redundancy Storage",
      //     "Reduced Redundancy Storage, Standard, One Zone-Infrequent Access", 
      //     "Standard, Standard-Infrequent Access, One Zone-Infrequent Access", 
      //     "Standard-Infrequent Access, One Zone-Infrequent Access, Reduced Redundancy Storage"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"You are reviewing Change Control requests and you note that there is a proposed change designed to reduce errors due to SQS Eventual Consistency by updating the 'DelaySeconds' attribute. What does this mean?",
      //   answers: [
      //     "When the consumer instance polls for new work, the consumer instance will wait a certain time until it has a full workload before closing the connection.",
      //     "When a new message is added to the SQS queue, it will be hidden from consumer instances for a fixed period.", 
      //     "While processing a message, a consumer instance can amend the message visibility counter by a fixed amount.", 
      //     "When the consumer instance polls for new work, the SQS service will allow it to wait a certain time for a message to be available before closing the connection."
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"Your company likes the idea of storing files on AWS. Your company would like to store common/recently used files locally, while storing long-term colder data in AWS. Which Storage Gateway configuration would you use to achieve both of these ends?",
      //   answers: [
      //     "File Gateway, Volume Gateway - Stored volumes",
      //     "File Gateway, Volume Gateway - Snapshot volumes", 
      //     "File Gateway, Volume Gateway - Cached volumes", 
      //     "File Gateway, Tape Gateway"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"Amazon ElastiCache can fulfill a number of roles. Choose the operations from the following list which can NOT be implemented using ElastiCache for Redis.",
      //   answers: [
      //     "Multithreaded architecture",
      //     "Pub/Sub", 
      //     "Sorted Sets", 
      //     "In-Memory Data Store"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"You are reviewing Change Control requests, and you note that there is a change designed to reduce costs by updating the Amazon SQS 'WaitTimeSeconds' attribute. What does this mean?",
      //   answers: [
      //     "While processing a message, a consumer instance can amend the message visibility counter by a fixed amount.",
      //     "When a consumer instance retrieves a message, that message will be hidden in the queue for a fixed period.", 
      //     "When the consumer instance polls for new work, the SQS service will allow it to wait a certain time for one or more messages to be available before closing the connection.", 
      //     "When the consumer instance polls for new work, the consumer instance will wait a certain time until it has a full workload before closing the connection."
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"The AWS team in a large company is spending a lot of time monitoring EC2 instances and maintenance when the instances report health check failures. How can you most efficiently automate this monitoring and repair?",
      //   answers: [
      //     "Create a cron job which monitors the instances periodically and starts a new instance if a health check has failed.",
      //     "Create an Amazon CloudWatch alarm that monitors an Amazon EC2 instance and automatically reboots the instance if a health check fails.", 
      //     "Create a Lambda function which can be triggered by a failed instance health check. Have the Lambda function destroy the instance and spin up a new instance.", 
      //     "Create a Lambda function which can be triggered by a failed instance health check. Have the Lambda function deploy a CloudFormation template which can perform the creation of a new instance."
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"You are working for a large financial institution and preparing for disaster recovery and upcoming DR drills. A key component in the DR plan will be the database instances and their data. An aggressive Recovery Time Objective (RTO) dictates that the database needs to be synchronously replicated. Which configuration can meet this requirement?",
      //   answers: [
      //     "Amazon RDS Multi-Region Deployments (Aurora)",
      //     "Amazon RDS Multi-AZ Deployments (Non-Aurora)", 
      //     "AWS Lambda to trigger a CloudFormation template launch in another Region", 
      //     "Amazon RDS read replicas"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"You have just been hired by a large organization which uses many different AWS services in their environment. Some of the services which handle data include: RDS, Redshift, ElastiCache, DynamoDB, S3, and Glacier. You have been instructed to configure a web application using stateless web servers. Which service can you NOT use to handle session state data?",
      //   answers: [
      //     "Amazon ElastiCache",
      //     "Amazon DynamoDB", 
      //     "Amazon RDS", 
      //     "Amazon Redshift"
      //   ],
      //   correct: 3
      // },
      // {
      //   question:"Your organization uses AWS CodeDeploy for deployments. Now you are starting a project on the AWS Lambda platform. For your deployments, you’ve been given a requirement of performing blue-green deployments. When you perform deployments, you want to split traffic, sending a small percentage of the traffic to the new version of your application. Which deployment configuration will allow this splitting of traffic?",
      //   answers: [
      //     "Canary",
      //     "Linear", 
      //     "All at Once", 
      //     "Weighted routing"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Your company security team has planned to do penetration testing on EC2 instances. Which policy will provide information on performing penetration testing on your EC2 instances?",
      //   answers: [
      //     "JSON Policy",
      //     "Customer Service Policy for Penetration Testing", 
      //     "AWS Terms and Conditions Policy", 
      //     "IAM Policy"
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"An online media company has created an application which provides analytical data to its clients. The application is hosted on EC2 instances in an Auto Scaling Group. You have been brought on as a consultant and add an Application Load Balancer to front the Auto Scaling Group and distribute the load between the instances. The VPC which houses this architecture is running IPv4 and IPv6. The last thing you need to do to complete the configuration is point the domain name to the Application Load Balancer. Using Route 53, which record type at the zone apex can you use to point the DNS name of the Application Load Balancer? ",
      //   answers: [
      //     "Alias with an AAAA type record set",
      //     "Alias with a CNAME record set.", 
      //     "Alias with an MX type record set."
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"Your team has provisioned Auto Scaling groups in a single Region. The Auto Scaling groups, at max capacity, would total 40 EC2 On-Demand Instances between them. However, you notice that the Auto Scaling groups will only scale out to a portion of that number of instances at any one time. What could be the problem?",
      //   answers: [
      //     "The associated load balancer can serve only 20 instances at one time.",
      //     "There is a vCPU-based On-Demand Instance limit per Region.", 
      //     "You can have only 20 instances per Region. This is a hard limit.", 
      //     "You can have only 20 instances per Availability Zone."
      //   ],
      //   correct: 1
      // },
      // {
      //   question:"A small startup company has begun using AWS for all of its IT infrastructure. The company has one AWS Solutions Architect and the demands for their time are overwhelming. The software team has been given permission to deploy their Python and PHP applications on their own. They would like to deploy these applications without having to worry about the underlying infrastructure. Which AWS service would they use for deployments?",
      //   answers: [
      //     "Elastic Beanstalk",
      //     "CloudFormation", 
      //     "CodeDeploy", 
      //     "CloudFront"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"A professional baseball league has chosen to use a key-value and document database for storage, processing, and data delivery. Many of the data requirements involve high-speed processing of data such as a Doppler radar system which samples the position of the baseball 2000 times per second. Which AWS data storage can meet these requirements?",
      //   answers: [
      //     "DynamoDB",
      //     "RDS", 
      //     "Redshift", 
      //     "S3"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"You are managing S3 buckets in your organization. This management of S3 extends to Amazon Glacier. For auditing purposes you would like to be informed if an object is restored to S3 from Glacier. What is the most efficient way you can do this?",
      //   answers: [
      //     "Create an SNS notification for any upload to S3",
      //     "Create a Lambda function which is triggered by restoration of object from Glacier to S3", 
      //     "Configure S3 notifications for restore operations from Glacier", 
      //     "Create a CloudWatch Event for uploads to S3"
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"You are consulting for a state agency focused on the state lottery. You have been given a task to have 2,000,000 bar codes created as quickly as possible. This will require EC2 instances and an average CPU utilization of 70% for each of them. So you plan to spin up 10 EC2 instances to create the bar codes. You estimate that the instances will complete the job from around 11pm to 1am. You don’t want the instances sitting idle for up to 9 hours until the next morning. What can you do to terminate these instances when they are done?",
      //   answers: [
      //     "Write a cron job which queries the instance status. If a certain status is met, have the cron job kick off CloudFormation to terminate the existing instance, and create a new instance from a template.",
      //     "Write a cron job which queries the instance status. Also write a Lambda function which can be triggered upon a certain status and terminate the instance.", 
      //     "You can create a CloudWatch alarm that is triggered when the average CPU utilization percentage has been lower than 10 percent for 4 hours, and terminates the instance.", 
      //     "Write a Python script which queries the instance status. Also write a Lambda function which can be triggered upon a certain status and terminate the instance."
      //   ],
      //   correct: 2
      // },
      // {
      //   question:"You have joined a newly formed software company as a Solutions Architect. It is a small company, and you are the only employee with AWS experience. The owner has asked for your recommendations to ensure that the AWS resources are deployed to proactively remain within budget. Which AWS service can you use to help ensure you don’t have cost overruns for your AWS resources?",
      //   answers: [
      //     "AWS Budgets",
      //     "Inspector", 
      //     "Billing and Cost Management", 
      //     "Cost Explorer"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"You are managing data storage for your company, and there are many EBS volumes. Your management team has given you some new requirements. Certain metrics on the EBS volumes need to be monitored, and the database team needs to be notified by email when certain metric thresholds are exceeded. Which AWS services can be configured to meet these requirements?",
      //   answers: [
      //     "CloudWatch, SNS",
      //     "SWF, SNS", 
      //     "SES, SNS", 
      //     "SQS, SNS"
      //   ],
      //   correct: 0
      // },
      // {
      //   question:"After an IT Steering Committee meeting, you have been put in charge of configuring a hybrid environment for the company’s compute resources. You weigh the pros and cons of various technologies based on the requirements you are given. The main requirements to drive this selection are overall cost considerations and the ability to reuse existing internet connections. Which technology best meets these requirements?",
      //   answers: [
      //     "AWS Direct Gateway",
      //     "AWS Direct Connect", 
      //     "AWS Managed VPN", 
      //     "VPC Peering"
      //   ],
      //   correct: 2
      // },

  ]);
  }
}
