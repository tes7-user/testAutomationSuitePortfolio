# Introduction

This automation test suite for parabank is designed in cypress. The test automation suite is created with a multi-layered architecture, with the following test suites:

1. API Layer- This is where we are testing the API of the application. For example : Suppose that there is an endpoint that allows you to do a POST request and then retrieving the data via a GET request. Consequently, allowing you to do a end to end via API
2. End to end layer - In this layer we test user journey via UI, this may extend to inspecting the API calls made to the UI. For example : A user login with valid credentials

talk about how this is a pom/reference model

## Installation

In order for the automation test suite work in your local machine, you are required to run the following command inside the cypress folder `npm install`
