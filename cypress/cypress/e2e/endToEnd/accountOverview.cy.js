import { loginUI } from "../../models/POM/loginComponent";
import { extractAndEnterUserPassword } from "../../utilities/credentials";
import { findElement } from "../../utilities/elementCheckout";
import transactionTable from "../../models/POM/transactionTableComponent";

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

  it("E2E-07 View Accounts (Check the transaction table)", () => {
    transactionTable({
      RowNumber: 1,
      Account: 12345,
      AvailableBalance: "$0.00",
      Balance: "-$2300.00",
    });
    transactionTable({
      RowNumber: 6,
      Account: 12900,
      AvailableBalance: "$0.00",
      Balance: "$0.00",
    });
    transactionTable({
      RowNumber: 12,
      Balance: "$1692.67",
    });
  });
});
