# Services



## Global infrastructure

<img src="Images/image-87.png" width="400"/>  <img src="Images/image-88.png" width="400"/>

| Service | What is it? | Best Use Cases |
|-------|------------|---------------|
| **Availability Zone (AZ)** | One or more physically separate data centers within a region | High availability through redundant power, networking, and connectivity |
| **AWS Region** | A geographic area containing multiple Availability Zones | Fault isolation and regional resource deployment |
| **AWS Edge Locations** | Global points of presence for content delivery and security | Reduce latency, offload traffic from EC2, improve availability - CloudFront, Route 53, Global Accelerator, WAF, Shield |
| **AWS Local Zones** | Extension of an AWS Region that places compute, storage, database, and other select AWS services closer to large population, industry, and IT centers | Low-latency applications, data residency requirements - services such as EC2, Lambda, RDS, and S3 |



## Governance & Multi-Account Services


| Service | What is it? | Best Use Cases |
|-------|------------|---------------|
| **AWS Organizations** <br> <img src="Images/image-89.png" width="100"/> | Centralized multi-account management | Account structure, consolidated billing, SCP enforcement |
| **AWS Control Tower** <br> <img src="Images/image-90.png" width="100"/> | Automated multi-account setup with best practices | Secure and compliant AWS environment at scale |
| **AWS Resource Access Manager (RAM)** <br> <img src="Images/image-91.png" width="100"/> | Resource sharing across AWS accounts | Share VPC subnets, Transit Gateways, and other resources |
| **AWS Systems Manager – Session Manager** <br> <img src="Images/image-92.png" width="100"/> | Secure remote access to EC2 instances without SSH or RDP | Access EC2 securely using IAM, improve security posture, enable auditing without opening inbound ports |
| **AWS Systems Manager** <br> <img src="Images/image-92.png" width="100"/> | Centralized operational management of AWS resources | Secure access to EC2 without SSH/RDP, patching, automation, auditing |


## Connectivity Services

| Service | What is it? | Best Use Cases |
|-------|------------|---------------|
| **AWS Direct Connect** </br>  <img src="Images/image-107.png" width="100"/> | Dedicated private network connection to AWS | High bandwidth, low latency, secure connections to AWS |
| **AWS VPN site-to-site** </br>  <img src="Images/image-110.png" width="100"/> | Encrypted connection over the internet to AWS | Secure connectivity for hybrid cloud architectures |
|**AWS Client VPN** </br>  <img src="Images/image-108.png" width="100"/> | Managed client-based VPN service | Secure remote access for users to AWS and on-premises networks |
| **AWS PrivateLink** </br>  <img src="Images/image-109.png" width="100"/> | Private connectivity to AWS services using VPC endpoints | Access AWS services without traversing the public internet |
|

## IAM Vs IAM Identity Center
| Service | What is it? | Best Use Cases |
|-------|------------|---------------|
| **AWS Identity and Access Management (IAM)** </br>  <img src="Images/image-93.png" width="100"/> | Manage users, roles, and permissions within AWS | Control access to AWS services using policies and roles |
| **AWS IAM Identity Center** </br>  <img src="Images/image-94.png" width="100"/> | Centralized identity management and single sign-on | Provide SSO access to multiple AWS accounts and applications , usually for enterprise environments |


## Networking Services
| Service | What is it? | Best Use Cases |
|-------|------------|---------------|
| **Amazon VPC** </br>  <img src="Images/image-95.png" width="100"/> | Isolated virtual network in AWS | Host web applications, multi-tier apps, secure environments |
| **Amazon Route 53** </br>  <img src="Images/image-63.png" width="100"/> | Scalable DNS and domain registration | Website routing, health checks, global traffic management |
| **Application Load Balancer (ALB)** </br>  <img src="Images/image-96.png" width="100"/>| Layer 7 load balancing within a region | Distribute traffic across targets in a single AWS Region |

## AWS Migration Tools

| Tool | What is it? | Best Use Cases |
|-----|------------|---------------|
| **AWS Database Migration Service (AWS DMS)** </br>  <img src="Images/image-1.png" width="100"/> | Managed service that migrates databases to AWS and replicates changes in real time while the source database remains operational. | - Database migrations<br>- Continuous data changes<br>- Minimal downtime<br>- Gradual migrations |
| **AWS Application Migration Service (AWS MGN)** </br>  <img src="Images/image-2.png" width="100"/>  | Service to migrate entire servers (OS + applications) to AWS by installing an agent on the source server. | - Full application migrations<br>- No refactoring required<br>- Physical servers or VMs<br>- Fast migrations |


## AWS Database Services

| Database | Best For | SQL / NoSQL | Description |
|--------|---------|------------|-------------|
| **Amazon Aurora** </br>  <img src="Images/image-7.png" width="100"/> | High-traffic, mission-critical applications | **SQL** | Cloud-native relational database compatible with MySQL and PostgreSQL, optimized by AWS for performance and availability |
| **Amazon DynamoDB** </br>  <img src="Images/image-8.png" width="100"/> | Massive scale and serverless workloads | **NoSQL** (Key-Value / Document) | Fully managed NoSQL database with fast, predictable performance and automatic scaling |
| **Amazon RDS** </br>  <img src="Images/image-9.png" width="100"/> | Traditional applications | **SQL** | Managed relational database supporting MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB |
| **Amazon Neptune** </br>  <img src="Images/image-10.png" width="100"/>| Complex relationships | **NoSQL (Graph)** | Graph database optimized for highly connected data |
| **Amazon Redshift** </br>  <img src="Images/image-11.png" width="100"/>| Analytics and BI | **OLAP** | Data warehouse designed for analytics, reporting, and big data workloads |
| **Amazon ElastiCache** </br>  <img src="Images/image-85.png" width="100"/>| Caching and in-memory data processing | **NoSQL (Key-Value / Document)** | In-memory data store for caching and real-time analytics; compatible with Redis and Memcached |
| **Amazon TimeStream** </br>  <img src="Images/image-86.png" width="100"/>| Time-series data | **NoSQL (Time-Series)** | Managed time-series database for IoT, DevOps, and real-time analytics |
| **AWS Quantum Ledger Database (QLDB)** </br>  <img src="Images/image-106.png" width="100"/>| Immutable and cryptographically verifiable ledger | **SQL** | Managed ledger database for applications requiring an immutable and verifiable record of transactions |




# AWS Storage Services

| Service | Purpose | How it Works | Pricing |
|-------|--------|-------------|--------|
| **Amazon S3** </br>  <img src="Images/image-45.png" width="100"/> | Object storage | Stores data as objects in buckets; scalable, durable, and accessible via HTTP | Pay as you go based on storage, requests, and data transfer |
| **Amazon S3 Glacier Deep Archive**  | Long-term archival | Stores data in archives with retrieval options (Standard, Expedited, Bulk) | Pay as you go based on storage, requests, and data transfer |
| **Amazon EBS** </br>  <img src="Images/image-97.png" width="100"/> | Block storage for EC2 | Provides persistent block storage volumes for EC2 instances | Pay as you go based on volume type, size, and IOPS |
| **Amazon EFS** </br>  <img src="Images/image-98.png" width="100"/> | Scalable file storage | Provides scalable file storage accessible from multiple EC2 instances | Pay as you go based on storage used and throughput |
| **AWS Storage Gateway** </br>  <img src="Images/image-99.png" width="100"/> | Hybrid cloud storage | Connects on-premises environments to AWS cloud storage | Pay as you go based on gateway type, data transfer, and storage |
| **Amazon FSx for Lustre** </br>  <img src="Images/image-100.png" width="100"/> | High-performance file system | HPC, machine learning, and big data workloads with high throughput | | Pay as you go based on storage and throughput |
| **Amazon EBS multi-attach** </br>  <img src="Images/image-91.png" width="100"/> | Shared block storage for EC2 | Allows multiple EC2 instances to access a single EBS volume simultaneously | Pay as you go based on volume type, size, and IOPS |
## Security Controls

| Service | Purpose | How it Works | Pricing |
|-------|--------|-------------|--------|
| **Amazon GuardDuty** </br>  <img src="Images/image-12.png" width="100"/> | Detects threats in AWS accounts | Analyzes CloudTrail logs, VPC Flow Logs, and DNS logs to detect malicious activity (compromised credentials, malicious IPs, anomalous EC2 behavior) | Pay as you go based on logs analyzed |
| **AWS Artifact** </br>  <img src="Images/image-13.png" width="100"/> | Access compliance and audit documentation | Portal that provides audit reports, certifications, and compliance standards (ISO, GDPR, SOC) | Free (included with AWS account) |
| **AWS Shield** </br>  <img src="Images/image-14.png" width="100"/>| Protects against DDoS attacks | Automatically detects and mitigates DDoS attacks. Two levels: Standard and Advanced | Shield Standard: Free<br>Shield Advanced: High fixed monthly cost |
| **AWS WAF** </br>  <img src="Images/image-15.png" width="100"/>| Web application firewall | Filters HTTP HTTPS traffic using rules to block SQL injection, XSS, and malicious requests | Pay as you go based on rules and requests inspected |
| **AWS Inspector** </br>  <img src="Images/image-16.png" width="100"/>| Vulnerability scanning | Scans EC2 instances, container images, and workloads for CVEs and insecure configurations | Pay as you go based on resources scanned |
| **AWS Security Hub** </br>  <img src="Images/image-17.png" width="100"/>| Centralized security view | Aggregates findings from GuardDuty, Inspector, Config, and others into a single dashboard | Pay as you go based on checks and findings |
| **AWS Trusted Advisor** </br>  <img src="Images/image-18.png" width="100"/> | Security recommendations | Provides best-practice recommendations but does not enforce controls | Included (basic checks free) |
| **AWS Marketplace** </br>  <img src="Images/image-19.png" width="100"/>| Third-party security tools | Marketplace to find and deploy third-party security software | Varies by vendor |

## Network Security Controls

| Control | Description |
|-------|-------------|
| **Network ACLs** <br> <img src="Images/image-29.png" width="100"/> | Stateless, can explicitly deny traffic from IP ranges |
| **Security Groups** <br> <img src="Images/image-28.png" width="100"/> | Stateful, cannot explicitly deny traffic; inbound traffic automatically allows outbound response |


## Access Control Services

| Service | Purpose | How it Works | Pricing |
|-------|--------|-------------|--------|
| **Amazon IAM**  <br> <img src="Images/image-33.png" width="100"/> | Manage access to AWS resources | Users, roles, policies, and permissions | Free |
| **AWS Cognito** <br> <img src="Images/image-34.png" width="100"/> | User authentication | User directory, authentication, social login, temporary credentials | Pay as you go |
| **AWS Secrets Manager** <br> <img src="Images/image-40.png" width="100"/> | Manage, rotate, and retrieve secrets | Database credentials, API keys, and other secrets throughout their lifecycle | Pay as you go |
| **AWS Key Management Service (AWS KMS)** <br> <img src="Images/image-41.png" width="100"/> | Manage encryption keys | Create and manage encryption keys, rotate keys, and control access to keys | Pay as you go |



## Logging, Audit, and Monitoring


| Service | Purpose | How it Works | Pricing |
|-------|--------|-------------|--------|
| **Amazon CloudWatch**  <br> <img src="Images/image-33.png" width="100"/> | Monitor performance and health | Collects metrics, logs, alarms, dashboards, and sends alerts | Basic metrics free; logs, custom metrics, alarms pay as you go |
| **AWS CloudTrail** <br> <img src="Images/image-32.png" width="100"/> | Track account activity | Records who did what, when, and from where; stores logs in S3; multi-region | Management events free; data events pay as you go |
| **AWS Config** <br> <img src="Images/image-31.png" width="100"/>  | Track configuration changes | Records resource configurations, detects changes, evaluates compliance | Pay as you go based on resources and rules |
| **AWS Audit Manager** <br> <img src="Images/image-30.png" width="100"/> | Prepare audit evidence | Collects data from CloudTrail, Config, and other services; generates audit reports | Pay as you go based on assessments |

## Compute Services

| Service | Purpose | How it Works | Pricing |
|-------|--------|-------------|--------|
| **AWS Lambda** <br> <img src="Images/image-35.png" width="100"/> | Serverless compute | Runs code in response to triggers (HTTP, schedules, AWS services); AWS handles scaling | Pay per request and compute time |
| **Amazon EC2** <br> <img src="Images/image-36.png" width="100"/> | Virtual servers | Resizable compute capacity in the cloud | Pay per instance usage |
| **AWS Elastic Beanstalk** <br> <img src="Images/image-37.png" width="100"/> | Managed app deployment | Upload code; AWS manages infrastructure, scaling, and monitoring | Pay only for underlying resources |
| **AWS Lightsail** <br> <img src="Images/image-38.png" width="100"/> | Simple hosting | Preconfigured virtual servers with fixed pricing | Fixed monthly price |
| **AWS Outposts** <br> <img src="Images/image-39.png" width="100"/> | Hybrid cloud | AWS infrastructure on-premises for low latency and data residency | Custom pricing |
| **AWS Systems Manager** <br> <img src="Images/image-43.png" width="100"/> | Automate administrative tasks | Manage and automate EC2 instances, other AWS resources, and configurations | Pay as you go based on resources |

## EC2 Instance Types

| Type | Best For |
|----|---------|
| **General Purpose** | Balanced compute, memory, networking |
| **Compute Optimized** | CPU-intensive workloads (gaming, batch processing) |
| **Memory Optimized** | Large in-memory datasets, big data |
| **Storage Optimized** | High sequential read/write workloads |
| **Accelerated Computing** | GPU, ML, deep learning |
| **HPC Optimized** | High-performance computing |

## Container Services

| Service | Description | When to Use |
|-------|------------|------------|
| **Amazon ECS** </br>  <img src="Images/image-24.png" width="100"/>| AWS-native container orchestration | Stable workloads, tight AWS integration |
| **Amazon EKS** </br>  <img src="Images/image-25.png" width="100"/> | Managed Kubernetes | Complex workloads, portability, Kubernetes ecosystem |
| **Amazon ECR** </br>  <img src="Images/image-26.png" width="100"/>| Container registry | Store and manage Docker images |
| **AWS Fargate** </br>  <img src="Images/image-27.png" width="100"/> | Serverless containers | Run containers without managing servers |
| **EC2 Fleet** </br>  <img src="Images/image-101.png" width="100"/> | Manage EC2 capacity for containers | Optimize cost and availability for container workloads |

## EC2 Pricing Models
</br>  <img src="Images/image-23.png" width="500"/>
| Model | Description | Pros | Cons | Cost | When to Use |
|-----|-------------|------|------|------|------------|
| **On-Demand** | Pay per use, no commitment | Flexible | More expensive long-term | $$$ | Dev, testing, demos |
| **Reserved Instances** | 1 or 3-year commitment | Up to 72% savings | Long-term commitment | $ | Stable workloads |
| **Spot Instances** | Use unused AWS capacity | Up to 90% cheaper | Can be interrupted | $/2 | Batch, ML, big data |
| **Dedicated Host** | Physical server for one customer | Compliance | Very expensive | $$$$ | Licensing/legal needs |
| **Savings Plans** | Commit to $/hour usage | Flexible, cost savings | Commitment required | $ | EC2, Fargate, Lambdam, similar to  reserved Instances |

## Messaging & Events

| Service | Purpose | Key Characteristics |
|-------|--------|---------------------|
| **Amazon SQS** </br>  <img src="Images/image-20.png" width="100"/>| Message queue | Pull-based, messages stored, decouples applications |
| **Amazon SNS** </br>  <img src="Images/image-21.png" width="100"/>| Notifications | Push-based, pub/sub, messages not stored long-term |
| **Amazon EventBridge** </br>  <img src="Images/image-22.png" width="100"/>| Event bus | Event-driven architecture, system and business events |




## AWS Snow Family

| Service | Capacity | Typical Use |
|------|---------|-------------|
| **Snowcone** </br>  <img src="Images/image-3.png" width="100"/>| Up to 8 TB | Small-scale data transfer, edge computing |
| **Snowball** </br>  <img src="Images/image.png" width="100"/>| Tens of TBs to PBs | Large-scale offline data transfer |
| **Snowmobile** </br>  <img src="Images/image-4.png" width="100"/> | Exabytes | Extremely large data migrations |



## Amazon S3 Storage Classes
</br>  <img src="Images/image-45.png" width="800"/>

| Service | Description | Typical Use |
|------|-------------|-------------|
| **Amazon S3 Standard** | General-purpose object storage with high availability and durability | Frequently accessed data, web content, data lakes |
| **Amazon S3 Standard-IA** | Lower-cost storage for infrequently accessed data with millisecond retrieval | Backups, disaster recovery |
| **Amazon S3 Glacier Instant Retrieval** | Low-cost archival storage with instant access | Archive data that still needs fast access |
| **Amazon S3 Glacier Flexible Retrieval** | Archival storage with retrieval in minutes to hours | Archives accessed occasionally |
| **Amazon S3 Glacier Deep Archive** | Lowest-cost storage with very slow retrieval | Long-term retention, compliance data |
| **AWS Macie** <br> <img src="Images/image-42.png" width="100"/> | Identify and protect sensitive data | Detects sensitive data, identifies risks, and provides insights 
## AI  Services (APIs and pretrained models)
| Service | Description | Typical Use |
|-------|------------|-------------|
| **Amazon Rekognition** <br> <img src="Images/image-49.png" width="100"/> | Image and video analysis service | Object detection, facial recognition |
| **Amazon Lex**  <br> <img src="Images/image-47.png" width="100"/> | Conversational AI service | Build chatbots and voice assistants |
| **Amazon Polly** <br> <img src="Images/image-48.png" width="100"/> | Text-to-speech service | Convert text to natural-sounding speech |
| **Amazon Translate** <br> <img src="Images/image-50.png" width="100"/> | Language translation service | Translate text between languages |


## Machine Learning Services
| Service | Description | Typical Use |
|-------|------------|-------------|
| **Amazon SageMaker** <br> <img src="Images/image-51.png" width="100"/> | End-to-end machine learning platform | Build, train, and deploy ML models at scale |
| **AWS Textract** <br> <img src="Images/image-52.png" width="100"/> | Document analysis service | Extract text and data from scanned documents |
| **AWS Comprehend** <br> <img src="Images/image-55.png" width="100"/> | Natural language processing service | Sentiment analysis, entity recognition |
| **AWS Kendra** <br> <img src="Images/image-54.png" width="100"/> | Enterprise search service | Intelligent search across documents and data sources |
| **Amazon Transcribe** <br> <img src="Images/image-53.png" width="100"/> | Automatic speech recognition service | Convert speech to text |


## Analytics Services
| Service | Description | Typical Use |
|-------|------------|-------------|
| **Amazon Athena** <br> <img src="Images/image-56.png" width="100"/> | Serverless interactive query service | Analyze data in S3 using SQL |
| **Amazon EMR** <br> <img src="Images/image-57.png" width="100"/> | Managed big data platform | Process large datasets using Hadoop, Spark |
| **Amazon Kinesis** <br> <img src="Images/image-58.png" width="100"/> | Real-time data streaming service | Collect, process, and analyze streaming data |
| **AWS Glue** <br> <img src="Images/image-59.png" width="100"/> | Managed ETL service | Prepare and transform data for analytics |
| **Amazon QuickSight** <br> <img src="Images/image-60.png" width="100"/> | Business intelligence service | Create visualizations and dashboards |
| **Amazon OpenSearch Service** <br> <img src="Images/image-61.png" width="100"/> | Search and analytics engine | Full-text search, log analytics, real-time application monitoring |


### Observability and Monitoring
| Service | Description | Typical Use |
|-------|------------|-------------|
| **Amazon CloudWatch** <br> <img src="Images/image-64.png" width="100"/> | Metrics, logs, and alarms for AWS resources and apps	 | Operational monitoring, alerting, dashboards|
| **Amazon CloudTrail** <br> <img src="Images/image-65.png" width="100"/> | Audit log of API calls and account activity | Security, compliance, forensics (who did what and when)|
| **Amazon X-Ray** <br> <img src="Images/image-66.png" width="100"/> | Distributed tracing and service maps	 | Performance debugging, bottleneck detection in microservices
 |

### Business Application Services (Customer Engagement)

A service that improves agility

| Service | Capacity | Typical Use |
|------|---------|-------------|
| **Amazon Connect** </br>  <img src="Images/image-67.png" width="100"/>| Cloud contact center | Customer service; Voice and chat |
| **Amazon Simple Email Service (Amazon SES)** </br>  <img src="Images/image-68.png" width="100"/>| Email sending Service|promotional, transactional, and marketing emails; From a custom domain; Inbound if configured| 


### AWS support

| Support Plan | Response Time (SLA) | Technical Guidance | Health Dashboard | 24/7 Support | TAM | Best For |
|-------------|-------------|-------------------|------------------|-------------|-----|-----|
| **Basic** | No SLA | Documentation & forums | Full | No | Shared (Pool) | All AWS customers |
| **Developer** | < 24 hours | Core checks | Basic | No (business hours) | No | Dev & test environments |
| **Business** | < 4 hours | Full checks | Enhanced | Yes | Dedicated | Production workloads |
| **Enterprise On-Ramp** | < 1 hour | Full checks | Enhanced | 24/7 | Shared TAM | Growing organizations |
| **Enterprise** | < 15 minutes | Core + proactive | Enhanced | 24/7 | Dedicated TAM | Mission-critical workloads |



### End User computing Services


| Service | Capacity | Typical Use |
|------|---------|-------------|
| **Amazon Workspaces** </br>  <img src="Images/image-71.png" width="100"/>| Fully managed virtual desktops for Windows and Linux | Provide users with cloud-based desktops (VDI)|
| **Amazon AppStream 2.0** </br>  <img src="Images/image-72.png" width="100"/>| Streaming of applications|Access to specific apps| 
| **Amazon Workspaces Web** </br>  <img src="Images/image-73.png" width="100"/>| Access via web|Access internal websites and SaaS apps via a web browser| 


### Frontend web and mobile

| Service | Capacity | Typical Use |
|------|---------|-------------|
| **AWS Aplify** </br>  <img src="Images/image-74.png" width="100"/>| virtual escritorios for linux and windows | Build, deploy, and host web and mobile applications |
| **AWS AppSync** </br>  <img src="Images/image-75.png" width="100"/>| Managed GraphQL API service| Combine data from multiple sources (DynamoDB, Lambda, APIs) |

### IoT

| Service | Capacity | Typical Use |
|------|---------|-------------|
| **AWS IoT Core** </br>  <img src="Images/image-76.png" width="100"/>| Securely connect devices and ingest IoT data | Device-to-cloud secure communication |
| **AWS IoT Greegrass** </br>  <img src="Images/image-77.png" width="100"/>| Edge computing (local processing) | Process data locally, reduce latency, operate offline|


### Developer Services (DevOps)


| Service | Capacity | Typical Use |
|------|---------|-------------|
|**AWS CodeCommit** </br>  <img src="Images/image-78.png" width="100"/>| Fully managed Git-based source control | Store and manage source code repository |
|**AWS CodeBuild** </br>  <img src="Images/image-79.png" width="100"/>| Fully managed Build Service | Compile code, run test, produce build artifact |
|**AWS CodeDeploy** </br>  <img src="Images/image-80.png" width="100"/>| Automated deployment service| Deploy applications to EC2, lambda or non premise |
|**AWS CodePipeline** </br>  <img src="Images/image-81.png" width="100"/>| Continuous CI/CD orchestration| Automate build, test and deploy workflows |
|**AWS CodeStar** </br>  <img src="Images/image-82.png" width="100"/>| Unified DevOps project template| Quickly set up CI/CD projects |
|**AWS Cloud9** </br>  <img src="Images/image-83.png" width="100"/>| Cloud based IDE|Write, run, and debug code browser |
|**AWS CloudShell** </br>  <img src="Images/image-84.png" width="100"/>| Browser based command line| Run AWS CLI without local set up |
