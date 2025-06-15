import { loginUI } from "../../models/POM/loginComponent";
import { findElement } from "../../utilities/elementCheckout";
import { extractAndEnterUserPassword } from "../../utilities/credentials";

describe("Authentication:", () => {
  beforeEach("Setup the environment", () => {
    cy.visit("/");
  });
  it("Invalid Credentials", () => {
    loginUI("testUser12", "invalidPassword");
    cy.get(findElement("errorMessage")).should(
      "have.text",
      "The username and password could not be verified."
    );
  });

  it("Invalid Credentials: whitespace", () => {
    loginUI(" ", " ");
    cy.get(findElement("errorMessage")).contains(
      "The username and password could not be verified."
    );
  });

  it("Valid Credentials", () => {
    loginUI("john", extractAndEnterUserPassword());
    cy.url().should("include", "overview.htm");
  });
});
