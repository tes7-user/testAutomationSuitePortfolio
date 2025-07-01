## 🎯 Test Automation Suite – Playwright Edition

This repository demonstrates a basic end-to-end UI test suite built with **[Playwright](https://playwright.dev/)** for the [Automation in Testing](https://automationintesting.online/) demo site. It serves as a **learning portfolio** to showcase test structure, reporting, and good practices using modern automation tools.

The focus is strictly on **UI testing**, covering common flows across the **Home**, **Rooms**, and **Contact** pages. This project **does not include API testing**.

---

## 📦 What This Covers

### UI

| Feature      | Test Case ID                     | Steps                                                                    | Expected Result                                                                   |
| ------------ | -------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| Home Page    | E2E-01 Load Home Page            | Navigate to the home page URL                                            | Home page loads successfully with all primary elements visible                    |
|              | E2E-02 Display Header and Logo   | Verify that the logo and header text are present and correctly displayed | Logo and header are visible and correctly styled                                  |
|              | E2E-03 Display Room Cards        | Go to Rooms and confirm that all room cards are displayed                | Each room card is visible with image, title, and description                      |
| Contact Page | E2E-04 Load Contact Page         | Navigate to the contact page URL (#contact)                              | Contact page loads successfully with all primary elements visible                 |
|              | E2E-05 Display Form Fields       | Verify all form fields are visible                                       | Fields (Name, Email, Phone, Subject, Description) and Submit button are visible   |
|              | E2E-06 Submit Valid Contact Form | Fill all fields with valid data → click Submit                           | Form submits successfully → confirmation message appears (e.g., "Thanks for ...") |
|              | E2E-07 Required Field Validation | Leave mandatory fields (Name, Email, Phone) empty → click Submit         | Validation error messages appear for empty required fields                        |

---

## 🛠 Installation

### ✅ Playwright Setup

```bash
npm install
npx playwright test --ui
```

> 📝 **Note**:  
> The goal is to showcase a variety of techniques for learning and portfolio purposes. In real-world projects, teams typically standardize on **one primary design pattern or structure**, depending on the context, team preferences, and complexity of the application.
>
> **Applying several best practices together here is intentional to highlight flexibility and knowledge; not necessarily a reflection of how you would structure a production system.**
