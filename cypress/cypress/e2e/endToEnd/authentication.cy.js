import LoginUI from "../../models/POM/loginComponent";
import { findElement } from "../../utilities/elementCheckout";
import extractAndEnterUserPassword from "../../utilities/credentials";

describe("Authentication: E2E-01, E2E-02, E2E-03", () => {
  beforeEach("Setup the environment", () => {
    cy.visit("/");
  });

  it("E2E-02 Invalid Credentials", () => {
    const login = new LoginUI();
    login.fillUsername("testUser12");
    login.fillPassword("invalidPassword");
    login.submitButton();
    cy.get(findElement("errorMessage")).should(
      "have.text",
      "The username and password could not be verified."
    );
  });

  it("E2E-03 Blank Field Validation", () => {
    const login = new LoginUI();
    login.fillUsername(" ");
    login.fillPassword(" ");
    login.submitButton();
    cy.get(findElement("errorMessage")).contains(
      "The username and password could not be verified."
    );
  });

  it("E2E-01 Valid Credentials", () => {
    const login = new LoginUI();
    login.fillUsername("john");
    login.fillPassword(extractAndEnterUserPassword());
    login.submitButton();
    cy.url().should("include", "overview.htm");
  });
});
