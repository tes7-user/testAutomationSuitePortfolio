# Introduction

# 🧪 ParaBank Test Automation Suite

This project is a test automation suite targeting the [**ParaBank Demo Application**](https://parabank.parasoft.com/parabank/index.htm) using **Cypress** for both **end-to-end (E2E)** and **API** testing.

It is designed as a real-world, portfolio-ready framework that demonstrates modern test automation practices including:

- ✅ Page Object Model (POM)
- ✅ Data-driven testing
- ✅ API integration testing
- ✅ Functional UI validations

> 🔧 This repo currently uses **Cypress** to test ParaBank.

## 📦 What This Covers

### E2E

| Feature          | Test Case ID             | Steps                                          | Expected Result                           |
| ---------------- | ------------------------ | ---------------------------------------------- | ----------------------------------------- |
| Authentication   | E2E-01 Valid Login       | Open homepage → enter valid creds → submit     | Redirect to overview with welcome message |
|                  | E2E-02 Invalid Login     | Enter invalid creds → submit                   | Error displayed, stay on login            |
|                  | E2E-03 Blank Validation  | Leave fields empty → submit                    | Show validation message                   |
| Registration     | E2E-04 User Registration | Click “Register” → fill form → submit          | Success redirect to login                 |
|                  | E2E-05/06 Validation     | Submit form with mismatched passwords or empty | Show validation errors                    |
| Account Overview | E2E-07 View Accounts     | Log in → check “Accounts Overview”             | Display accounts table with balances      |

### API

| Feature        | Test Case ID | Endpoint                          | Method | Test Description                      | Expected Result                                                  |
| -------------- | ------------ | --------------------------------- | ------ | ------------------------------------- | ---------------------------------------------------------------- |
| Authentication | API-01       | `/login`                          | POST   | Login with valid credentials          | 200 OK with customer ID                                          |
|                | API-02       | `/login`                          | POST   | Login with invalid credentials        | 400 Unauthorized or error message                                |
| Transfer Funds | API-03       | `/parabank/services/bank/deposit` | POST   | Submit valid deposit request          | 200 OK with confirmation message including account ID and amount |
|                | API-04       | `/parabank/services/bank/deposit` | POST   | Attempt deposit to invalid account ID | 400 Bad Request with error message about account 0               |

## 🛠 Installation

### ✅ Cypress Setup

```bash
npm install
npx cypress open

> 📝 **Note**:
> The goal is to showcase a variety of techniques for learning and portfolio purposes. In real-world projects, teams typically standardize on **one primary design pattern or structure**, depending on the context, team preferences, and complexity of the application.
>
> **Applying several best practices together here is intentional to highlight flexibility and knowledge; not necessarily a reflection of how you would structure a production system.**
```
