## Confusing Question 6: examptopics

## Question 1:

A user is comparing purchase options for an application that runs on Amazon EC2 and Amazon RDS. The application cannot sustain any interruption. The application experiences a predictable amount of usage, including some seasonal spikes that last only a few weeks at a time. It is not possible to modify the application.
Which purchase option meets these requirements MOST cost-effectively?


- A. Review the AWS Marketplace and buy Partial Upfront Reserved Instances to cover the predicted and seasonal load.
- B. Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run on Spot Instances.
- C. Buy Reserved Instances for the predicted amount of usage throughout the year. Allow any seasonal usage to run at an On-Demand rate. Most Voted
- D. Buy Reserved Instances to cover all potential usage that results from the seasonal usage.

Response: C
> Explanation: Buying Reserved Instances for the predicted amount of usage throughout the year and allowing any seasonal usage to run at an On-Demand rate is the most cost-effective option. This approach ensures that the application can handle predictable loads while accommodating seasonal spikes without incurring unnecessary costs associated with over-provisioning. Spot Instances are not suitable for this scenario since the application cannot sustain any interruption.


## Question 2:
A company is migrating to the AWS Cloud instead of running its infrastructure on premises.
Which of the following are advantages of this migration? (Choose two.)

- A. Elimination of the need to perform security auditing
- B. Increased global reach and agility Most Voted
- C. Ability to deploy globally in minutes Most Voted
- D. Elimination of the cost of IT staff members
- E. Redundancy by default for all compute services

response: B, C
> Explanation: Migrating to the AWS Cloud offers several advantages, including increased global reach and agility, as well as the ability to deploy applications globally in minutes. These benefits allow companies to quickly adapt to changing market conditions and expand their operations without the need for significant upfront investments in infrastructure. However, security auditing is still necessary, IT staff members are still required for various tasks, and not all compute services provide redundancy by default.


## Question 3:
Which AWS services or features provide disaster recovery solutions for Amazon EC2 instances? (Choose two.)

- A. Reserved Instances
- B. EC2 Amazon Machine Images (AMIs) Most Voted
- C. Amazon Elastic Block Store (Amazon EBS) snapshots Most Voted
- D. AWS Shield
- E. Amazon GuardDuty

Response: B, C
> Explanation: EC2 Amazon Machine Images (AMIs) and Amazon Elastic Block Store (Amazon EBS) snapshots are both essential components of disaster recovery solutions for Amazon EC2 instances. AMIs allow users to create backups of their instances, which can be used to quickly restore or launch new instances in the event of a failure. EBS snapshots provide point-in-time backups of EBS volumes, enabling users to recover data and restore volumes as needed.


## Question 4:

A large company has multiple departments. Each department has its own AWS account. Each department has purchased Amazon EC2 Reserved Instances.
Some departments do not use all the Reserved Instances that they purchased, and other departments need more Reserved Instances than they purchased.
The company needs to manage the AWS accounts for all the departments so that the departments can share the Reserved Instances.
Which AWS service or tool should the company use to meet these requirements?

- A. AWS Systems Manager
- B. Cost Explorer
- C. AWS Trusted Advisor
- D. AWS Organizations Most Voted

Response: D
> Explanation: AWS Organizations allows companies to manage multiple AWS accounts centrally. By using consolidated billing within AWS Organizations, departments can share Reserved Instances across accounts in the same organization. 


## Question 5:
A company is planning to replace its physical on-premises compute servers with AWS serverless compute services. The company wants to be able to take advantage of advanced technologies quickly after the migration.
Which pillar of the AWS Well-Architected Framework does this plan represent?

- A. Security
- B. Performance efficiency 
- C. Operational excellence
- D. Reliability

Response: B
> Explanation: The plan to replace physical on-premises compute servers with AWS serverless compute services represents the Performance Efficiency pillar of the AWS Well-Architected Framework. This pillar focuses on using computing resources efficiently to meet system requirements and to maintain that efficiency as demand changes and technologies evolve.  It is not Operational excellence because that pillar focuses on operations processes and procedures. It is not Security because that pillar focuses on protecting information and systems. It is not Reliability because that pillar focuses on the ability of a system to recover from failures and meet customer demands.

## Question 6:
Which AWS service or feature allows users to connect with and deploy AWS services programmatically?
- A. AWS Management Console
- B. AWS Cloud9
- C. AWS CodePipeline
- D. AWS software development kits (SDKs) Most Voted

Response: D
> Explanation: AWS software development kits (SDKs) allow users to connect with and deploy AWS services programmatically. SDKs provide libraries and tools that make it easier to interact with AWS services using various programming languages. 


## Question 7:

A company plans to create a data lake that uses Amazon S3.
Which factor will have the MOST effect on cost?

- A. The selection of S3 storage tiers Most Voted
- B. Charges to transfer existing data into Amazon S3
- C. The addition of S3 bucket policies
- D. S3 ingest fees for each request


Response: A
> Explanation: The selection of S3 storage tiers will have the most effect on cost when creating a data lake using Amazon S3. Different storage tiers (such as S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, and S3 Glacier) have varying costs based on access frequency and retrieval times. 



## Question 8:
Which AWS service or feature can a company use to determine which business unit is using specific AWS resources?

- A. Cost allocation tags Most Voted
- B. Key pairs
- C. Amazon Inspector
- D. AWS Trusted Advisor

response: A
> Explanation: Cost allocation tags can be used by a company to determine which business unit is using specific AWS resources. By applying tags to resources, companies can track and allocate costs based on different business units, projects, or departments.

## Question 9:
A company wants to migrate its workloads to AWS, but it lacks expertise in AWS Cloud computing.
Which AWS service or feature will help the company with its migration?


- A. AWS Trusted Advisor
- B. AWS Consulting Partners
- C. AWS Artifacts
- D. AWS Managed Services

Response: D

> Explanation: AWS Managed Services (AMS) helps companies with their migration to AWS by providing operational support and management of AWS infrastructure. AMS offers expertise in AWS Cloud computing, allowing companies to focus on their core business while leveraging AWS services effectively.

<b>If a company lacks expertise in AWS Cloud computing, AWS Managed Services (AMS) is the most appropriate service to help with the migration.</b>


## Question 10:

Which AWS service or tool should a company use to centrally request and track service limit increases?


- A. AWS Config
- B. Service Quotas
- C. AWS Service Catalog
- D. AWS Budgets

Response: B
> Explanation: Service Quotas is the AWS service that allows companies to centrally request and track service limit increases. It provides a user-friendly interface to view and manage service limits, making it easier to request increases when needed.

## Question 11:

Which task requires using AWS account root user credentials?

- A. Viewing billing information
- B. Changing the AWS Support plan Most Voted
- C. Starting and stopping Amazon EC2 instances
- D. Opening an AWS Support case


Response: B
> Explanation: Changing the AWS Support plan requires using AWS account root user credentials. The root user has full access to all AWS services and resources in the account, including billing and support plan management.