# Confusing Questions part 9

This questions where retrived from here
[link](https://quizlet.com/test/aws-cloud-practitioner-exam-questions-392359849?answerTermSides=6&promptTermSides=6&questionCount=65&questionTypes=4&showImages=true)

## Question 1

96.) Which of the following storage options is best when you want to store archive data?

- A. Amazon Storage Gateway
- B. Amazon Glacier
- C. Amazon EBS
- D. Amazon S3

> Response: B

> Archive data:
- Old/Historiclal
- Accessed very rarely
- kept mainly for compliance , backup or legal reasons

## Question 2
189.) Which of the following are attributes to the costing for using the Simple Storage Service? Choose 2 answers from the options given below:

- A. The storage class used for the objects stored.
- B. Number of S3 buckets.
- C. The total size in gigabytes of all objects stored.
- D. Using encyprtion in S3.

> Response: A and C

## Question 3

100.) A company is deploying a two-tier, highly available web application to AWS. The application needs a storage layer to store artifacts such as photos and videos. Which of the following services can be used as the underlying storage mechanism?

- A. Amazon EBS volume
- B. Amazon S3
- C. Amazon EC2 instance store
- D. Amazon RDS instance
> Response: B

## Question 4

114.) Which of the following features of AWS RDS allows for offloading reads of the database?

- A. Cross region replication
- B. Creating read replica's
- C. Using snapshots
- D. Using Multi-AZ feature

> Response: B
> Offloading reads = moving read queries from the primary database  so it doesn't get overloaded

> A is for desaster recovery or global access 
> C is point in time backups not live
> standby replica 

## Question 5


75.) Which of the following can be used to work with AWS services in a programmatic manner?

- A. AWS Powershell
- B. AWS Bash
- C. AWS CLI
- D. AWS Console


> Response: C

> CLI means it runs in terminal


## Question 6

133.) Which one of the following features is normally present in all of AWS Support plan?

- A. 24*7 access to customer support
- B. Access to all features in the Trusted Advisor
- C. A technical Account Manager
- D. A dedicated support person

> Response A

> All AWS Support plans include 24×7 customer (billing/account) support — not technical support.

## Question 7

61.) Which of the following helps in DDOS protection. Choose 2 answers from the options give below.

- A. Cloudfront
- B. AWS Shield
- C. AWS EC2
- D. AWS Config

> Response A and B

> CLoud front implicit via CDN , beacuase mitigates DDoS attacks by distributing traffic across globalk edge locations and absoving a great amount of request before they reach the origin.


## Question 8

39.) Which of the below can be used to get data onto Amazon Glacier? Choose 3 answers from the options given below:

- A. AWS Glacier API
- B. AWS Console
- C. AWS Glacier SDK
- D. AWS S3 Lifecycle policies

> Response: A, C, D


## Question 9

51.) A company wants to host a self-managed database in AWS. How would you ideally implement this solution? 
- A. Using the AWS DynamoDB service 
- B. Using the AWS RDS service 
- C. Hosting a database on an EC2 Instance 
- D. Using the Amazon Aurora service
> Response C
> Self-managed means managed by me the customer not By AWS 


## Question 10

130.) Which of the following services allows you to analyze EC2 Instances against predefined security templates to check for vulnerabilities?

- A. AWS Trusted Advisor
- B. AWS Inspector
- C. AWS WAF
- D. AWS Shield

> Response B
> AWS inspector helps to check EC2 instances with predefine security templates to check for vulnerabilites

> AWS Guard Duty is a thread detector, detects suspecious activity

> Trusted Advisor reommends with a best-practice checklist


## Question 11

195.) Which of the following is not a disaster recovery deployment technique. 
- A. Pilot light 
- B. Warm standby 
- C. Single site 
- D. Mult-site

> Response: C

> There are 4 DR strategies

> 1. Backup & Restore
> 2. Pilot light: minimal core infraestructure always running and scaled up during disaster.
> 3. Warm Standby: A smaller version of production always running, faster than pilot light
> 4. Multi-site: Full production running in multiple locations, fastest recovery
