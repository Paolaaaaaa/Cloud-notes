## Exam Questions  AWS Architecture & Migration

### Question 1  
**Which AWS cloud architecture design principle supports distributing workloads across multiple Availability Zones?**

**Correct Answer:**  
- **Design for Failure**

**Explanation:**  
Designing for failure means assuming that components can fail. By distributing workloads across multiple Availability Zones, applications can remain available even if one zone fails.

**Why not the others?**
- **Automated implementation**: Focuses on automation, not availability.
- **Design for agile**: Focuses on rapid changes and flexibility.
- **Implement elasticity**: Focuses on scaling resources up or down, not multi-AZ distribution.

---

### Question 2  
**A systems administrator is reviewing servers discovered during a portfolio assessment. The servers are migrating to AWS, have no current owner, and receive very little traffic.  
Which migration strategy should be recommended?**

**Correct Answer:**  
- **Retire**

**Explanation:**  
Servers with no owner and minimal traffic likely provide no business value. Retiring them avoids unnecessary migration costs and operational overhead.

**Why not the others?**
- **Rehost**: Migrates unused resources without benefit.
- **Replatform**: Optimizes systems that are not needed.
- **Retain**: Keeps resources on-premises without justification.

---

### Exam Tips

- **Multi-AZ architecture** → Design for Failure  
- **Unused or low-value servers** → Retire  
- **Move without changes** → Rehost  
- **Small cloud optimizations** → Replatform  
- **Complete redesign** → Refactor
