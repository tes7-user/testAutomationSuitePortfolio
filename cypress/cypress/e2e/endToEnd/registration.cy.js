import { genericForm } from "../../models/genericComponents/form";
import { findElement } from "../../utilities/elementCheckout";
import { generateRandomString } from "../../utilities/credentials";

describe("Registration: E2E-04, E2E-05, E2E-06", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("Register").click();
    cy.get(findElement("registrationForm")).should("be.visible");
  });

  it("E2E-04 Valid Registration", () => {
    genericForm("firstName", "Eitan");
    genericForm("lastName", "Granov");
    genericForm("address", "10 downing street");
    genericForm("city", "London");
    genericForm("state", "England");
    genericForm("zipCode", "SE1 8AB");
    genericForm("phoneNumber", "07989033856");
    genericForm("ssnId", "2442342");
    genericForm("registrationUsername", generateRandomString(5));
    genericForm("registrationPassword", "63453453453");
    genericForm("confirmPassword", "63453453453");
    genericForm("registerButton");
    cy.url().should("include", "register.htm");
    cy.get(findElement("leftPannel")).should("contain", "Eitan Granov");
  });

  it("E2E-05 Validation errors", () => {
    cy.get("input").contains("Register").click();
    cy.get(findElement("errorMessage")).then((errorMessages) => {
      expect(errorMessages.length).eq(10);
    });
  });

  it("E2E-06 special Validation error on repeat password", () => {
    genericForm("registrationUsername", generateRandomString(5));
    genericForm("registrationPassword", "63453453453");
    genericForm("confirmPassword", "wrong password");
    cy.get("input").contains("Register").click();
    cy.get(findElement("errorMessage")).contains("Passwords did not match.");
  });
});
