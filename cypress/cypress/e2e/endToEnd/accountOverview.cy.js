import loginUI from "../../models/POM/loginComponentV2";
import extractAndEnterUserPassword from "../../utilities/credentials";
import { findElement } from "../../utilities/elementCheckout";

describe("Account Overview: E2E-07", () => {
  beforeEach("Setup the environment", () => {
    cy.visit("/");
    loginUI("john", extractAndEnterUserPassword());
    cy.get(findElement("transactionTable")).should("be.visible");
  });

  it("E2E-07 View Accounts (Check if the table headers are present)", () => {
    cy.get(findElement("transactionTable")).within(() => {
      cy.get(findElement("transactionTableHeaders")).contains("Account");
      cy.get(findElement("transactionTableHeaders")).contains("Balance*");
      cy.get(findElement("transactionTableHeaders")).contains(
        "Available Amount"
      );
    });
  });
});
