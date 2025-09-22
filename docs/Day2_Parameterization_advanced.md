# Advanced Parameterization in JMeter

## 🔹 Why Parameterization?

Parameterization makes tests **data-driven** by feeding inputs from external sources
instead of hardcoding them in the script.  
This improves reusability, scalability, and realism of test scenarios.

---

## 1️⃣ Multiple CSV Data Files

You can use more than one CSV file in a test plan.  
Example use case:

- `users.csv` → usernames and passwords
- `products.csv` → product IDs or names

### Example

**users.csv**

JMeter setup:

- Add **CSV Data Set Config** for each file
- Reference them in HTTP requests as `${username}`, `${password}`, `${productId}`

---

## 2️⃣ Sharing Modes in CSV Data Set Config

JMeter provides options to control how data is shared across threads:

- **All threads** (default) → all VUs share the same data rows
- **Current thread group** → rows are divided per thread group
- **Current thread** → each VU gets its own independent data sequence
- **Identifier** → advanced usage (for parallel scenarios)

👉 Example:

- If 5 users and 10 threads →
  - "All threads" → data is reused by all threads
  - "Current thread" → each thread cycles its own data

---

## 3️⃣ Random Functions

JMeter provides built-in functions for generating random values.

- Random integer:
  ${\_\_Random(1,100)}

### 1️⃣ UUID (`${__UUID()}`)

**✅ What it is**

- A **universally unique identifier** (e.g., `550e8400-e29b-41d4-a716-446655440000`).
- Always random → guarantees no duplication.

### Timestamp (`${__time(yyyyMMddHHmmss)}`)

✅ **What it is**

- A **time-based value**, formatted however you want.
- Example: `20250917174512` (yyyyMMddHHmmss).

### Combination of Both

Sometimes testers combine them:

```
orderId = ${__time(yyyyMMddHHmmss)}_${__UUID()}
```

This makes every order ID unique and traceable.
