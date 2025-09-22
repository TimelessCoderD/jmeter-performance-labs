# Advanced Parameterization in JMeter

## 🔹 Concepts

### 1. Multiple CSVs (Chained Parameterization)

- Use **two or more CSV Data Set Configs** in a test plan.
- Example:
  - `users.csv` → contains usernames
  - `passwords.csv` → contains passwords
- JMeter assigns variables separately: `${username}`, `${password}`

⚠️ Note: If you want **username–password pairs** from a single row, it’s better to store them in the **same CSV file**.

---

### 2. Sharing Modes in CSV Data Set Config

Controls how CSV rows are distributed across threads.

- **All threads** (default) → all VUs share the same data rows
- **Current thread group** → rows are distributed only within that group
- **Current thread** → each thread gets its own data sequence
- **Identifier** → advanced, used to isolate data across multiple configs

Example:

- 10 users in CSV, 5 threads:
  - _All threads_: same rows reused across all threads
  - _Current thread_: each thread consumes rows independently

---

### 3. Functions

- **Random String**:

  ```jmeter
  ${__RandomString(8,abcdefghijklmnopqrstuvwxyz)}

  ```

  → Generates random 8-character string

- **UUID**:

  ```jmeter
  ${__UUID()}

  ```

  → Generates a globally unique identifier
  → Generates a globally unique identifier

- **Random Number**:
  ```jmeter
  ${__Random(1,100)}
  ```
  → Number between 1 and 100
