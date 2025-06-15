# Introduction

why you are doing it
what will it cover

## Folder Structure

### Test Cases

<u>E2E</u>
| Feature | Test Case | Steps | Expected Result |
| ---------------- | ---------------------------- | ------------------------------------------ | ----------------------------------------- |
| Authentication | E2E-01 Valid Login | Open homepage → enter valid creds → submit | Redirect to overview with welcome message |
| | E2E-02 Invalid Login | Enter invalid creds → submit | Error displayed, stay on login |
| | E2E-03 Blank Field Validation | Leave fields empty → submit | Show validation message |
| Registration | E2E-04 User Registration | Click “Register” → fill form → submit | Success redirect to login |
| | E2E-05, E2E-06 Validation Errors | Click “Register” → mismatch password, no values filled → submit | Validation errors trigered |  
| Account Overview | E2E-07 View Accounts | Log in → check “Accounts Overview” | Display accounts table with balances |

#### Instalation

where can they find the instruction on how to install and run the project
