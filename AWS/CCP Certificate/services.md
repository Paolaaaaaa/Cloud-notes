# Services

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

# AWS Storage Services

| Service | Purpose | How it Works | Pricing |
|-------|--------|-------------|--------|
| **Amazon S3** </br>  <img src="Images/image-5.png" width="100"/> | Object storage | Stores data as objects in buckets; scalable, durable, and accessible via HTTP | Pay as you go based on storage, requests, and data transfer |
| **Amazon S3 Glacier Deep Archive** </br>  <img src="Images/image-6.png" width="100"/> | Long-term archival | Stores data in archives with retrieval options (Standard, Expedited, Bulk) | Pay as you go based on storage, requests, and data transfer |
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
| **AWS Macie** <br> <img src="Images/image-42.png" width="100"/> | Identify and protect sensitive data | Detects sensitive data, identifies risks, and provides insights | Pay as you go based on assessments |
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

## Amazon S3 Storage Classes
