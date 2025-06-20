# Introduction

This repository is a unified test automation suite showcasing cross-framework testing practices using:

- ✅ Cypress (implemented) – targets the **ParaBank Demo Application**
- 🚧 Playwright (coming soon) – testing a different web application
- 🚧 Selenium (coming soon) – testing a different web application

### Why this project?

The goal of this project is to:

- Demonstrate real-world **E2E and API test automation** across multiple frameworks
- Provide portfolio-quality examples for **interview preparation**, **team onboarding**, or **tool evaluation**
- Apply **design patterns** like the Page Object Model (POM), modular helpers, and clean separation of test logic

### What this project covers:

- Cypress: UI + API tests for login, registration, account activity (ParaBank)
- Playwright: (coming soon) UI testing on a different modern web application
- Selenium: (coming soon) UI testing on a classic enterprise-style application
- Reusable structure, test case documentation, and scalable folder layout
- Common test flows implemented in multiple frameworks for comparison

> 📝 **Note:** This project demonstrates multiple best practices for learning and showcasing flexibility. In real-world scenarios, teams typically choose a single test framework depending on project goals.

---

#### Installation

Each test framework is organized in its own folder. Setup instructions are available in each directory:

| Framework  | Folder              | Setup Instructions                       |
| ---------- | ------------------- | ---------------------------------------- |
| Cypress    | `/cypress`    | [📘 Cypress README](./cypress/readMe.md) |
| Playwright | `/playwright` | _Coming soon – separate app under test_  |
| Selenium   | `/selenium`   | _Coming soon – separate app under test_  |

To run Cypress tests (ParaBank):

```bash
cd cypress-tests
npm install
npx cypress open
```
