# Introduction

This automation test suite for parabank is designed in cypress. The test automation suite is created with a multi-layered architecture, with the following test suites:

1. UI Layer- This is where we are testing the UI behaviours. For example: testing if a form is dirty (filled out) and when you navigate away from the page you are getting the pop up stating that would you like to discard the changes. Theoratically, this is similar to UI component testing
2. API Layer- This is where we are testing the API of the application. For example : Suppose that there is an endpoint that allows you to do a POST request and then retrieving the data via a GET request. Consequently, allowing you to do a end to end via API
3. End to end layer - This is the time consuming aspect of the test automation suite. In this layer we test user journey via UI, this may extend to inspecting the API calls made to the UI. For example : A user login with valid credentials

## Installation

In order for the automation test suite work in your local machine, you are required to run the following command inside the cypress folder `npm install`
You are also required to paste the following credential in your environment variable. Please follow the following steps to setup your environment:

1. press start and search for `edit environment variables for your account` in your windows laptop.
2.
