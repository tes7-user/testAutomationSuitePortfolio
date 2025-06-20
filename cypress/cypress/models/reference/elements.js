export const homepageElements = {
  username: "[name='username']",
  password: "[name='password']",
  loginButton: "[value='Log In']",
};

export const genericElements = {
  errorMessage: ".error",
};

export const registration = {
  registrationForm: ".form2",
  firstName: "[id='customer.firstName']|textEntry",
  lastName: "[id='customer.lastName']|textEntry",
  address: "[id='customer.address.street']|textEntry",
  city: "[id='customer.address.city']|textEntry",
  state: "[id='customer.address.state']|textEntry",
  zipCode: "[id='customer.address.zipCode']|textEntry",
  phoneNumber: "[id='customer.phoneNumber']|textEntry",
  ssnId: "[id='customer.ssn']|textEntry",
  registrationUsername: "[id='customer.username']|textEntry",
  registrationPassword: "[id='customer.password']|textEntry",
  confirmPassword: "[id='repeatedPassword']|textEntry",
  registerButton: "[value='Register']|button",
};

export const loggedInPage = {
  leftPannel: '[id="leftPanel"]',
  transactionTable: '[id="accountTable"]',
  transactionTableHeaders: "thead",
  transactionTableBody: "tbody > :nth-child",
  firstTransaction: 'a[href*="activity.htm?id="]',
};
