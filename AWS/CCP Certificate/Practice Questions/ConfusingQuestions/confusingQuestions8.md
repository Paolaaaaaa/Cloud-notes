## AWS Certified Cloud Practitioner - Confusing Questions Set 8



## Question 16:

Which credential components are required to gain programmatic access to an AWS account? (Select TWO.)

- A) Access Key ID
- B) A Primary Key
- C) Secret Access Key
- D) A User ID
- E) A Secondary key

Response: A, C
> To gain programmatic access to an AWS account, you need both an Access Key ID and a Secret Access Key. These credentials are used to authenticate API requests made to AWS services.



## Question 17:
Which statement is true regarding the AWS Shared Responsibility Model?
- A. Responsibilities vary depending on the services used.
- B. Security of the IaaS services is the responsibility of AWS.
- C. Patching the guest OS is always the responsibility of AWS.
- D. Security of the managed services is the responsibility of the customer.

Response: A
> In the AWS Shared Responsibility Model, responsibilities vary depending on the services used. For example, with IaaS services, customers are responsible for managing the guest OS, while AWS is responsible for the security of the infrastructure. In managed services, AWS takes on more responsibility, but customers still have certain security obligations.

## Question 18:

You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?
- A. The Reserved Instance discounts can only be shared with the master account.
- B. All accounts can receive the hourly cost benefit of the Reserved Instances.
- C. The purchased instances will have better performance than On-demand instances.
- D. There are no cost benefits from using consolidated billing; It is for informational purposes only.
Response: B
> In a consolidated billing setup, all accounts under the master account can benefit from the hourly cost savings of the Reserved Instances purchased by any account in the group. This allows for cost optimization across multiple accounts.

## Question 19:
What does AWS Snowball provide? (Choose TWO)
- A. Built-in computing capabilities that allow customers to process data locally.
- B. A catalog of third-party software solutions that customers need to build solutions and run their businesses.
- C. A hybrid cloud storage between on-premises environments and the AWS Cloud.
- D. An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.
- E. Secure transfer of large amounts of data into and out of the AWS.
Answer
Correct answer: A, E

> AWS Snowball provides built-in computing capabilities that allow customers to process data locally (A) and secure transfer of large amounts of data into and out of AWS (E). It is designed for transferring large datasets efficiently and securely.


## Question 20:

A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use? 

- A. AWS Health Dashboard. 
- B. AWS Support Concierge. 
- C. AWS Customer Service. 
- D. AWS Operations Support. Answer

Response: B
> AWS Support Concierge is a feature available to customers with an AWS Enterprise Support plan. It provides quick and efficient guidance for billing and account inquiries, ensuring that customers receive the assistance they need promptly.

Billing inquiries

Account structure questions

Invoices and payments

Service limits & account-level guidanc


## Question 21:

What should you do in order to keep the data on EBS volumes safe? (Choose TWO)
- A. Regularly update firmware on EBS devices.
- B. Create EBS snapshots.
- C. Ensure that EBS data is encrypted at rest.
- D. Store a backup daily in an external drive.
- E. Prevent any unauthorized access to AWS data centers.

Response: B, C
> To keep data on EBS volumes safe, you should create EBS snapshots (B) and ensure that EBS data is encrypted at rest (C). EBS snapshots provide a backup of your data, while encryption helps protect the data from unauthorized access.