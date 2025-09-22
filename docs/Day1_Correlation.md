## Advanced Correlation

### 🔹 What is Correlation?

Correlation is the process of handling dynamic server values (like session IDs, tokens) in performance testing tools by extracting them from server responses and passing them into subsequent requests, ensuring the script remains valid across multiple test executions.

### 🛠️ Why Do We Need It?

When you interact with a real app (login → browse → checkout), the server generates **dynamic values** such as:

- **Session IDs**
- **Authentication tokens**
- **CSRF tokens**
- **Order IDs**

👉 If you record and hardcode these values in your script, they will **expire or change** on the next run.

Result → your script **fails** (401 Unauthorized, 403 Forbidden, 500 Errors).

### Boundary Extractor

Allows the user to extract values from a server response using left and right boundaries. As a post-processor, this element will execute after each Sample request in its scope, testing the boundaries, extracting the requested values, generate the template string, and store the result into the given variable name.

### JSON Extractor

The JSON PostProcessor enables you extract data from JSON responses using JSON-PATH syntax. This post processor is very similar to Regular expression extractor. It must be placed as a child of HTTP Sampler or any other sampler that has responses. It will allow you to extract in a very easy way text content, see

### Regular Expression Extractor

Allows the user to extract values from a server response using a Perl-type regular expression. As a post-processor, this element will execute after each Sample request in its scope, applying the regular expression, extracting the requested values, generate the template string, and store the result into the given variable name.

## Extractors

- JSON Extractor → `$.token`
- Regex Extractor → "token":\s\*"(.+?)"
- Boundary Extractor → Left="token": ", Right=""
