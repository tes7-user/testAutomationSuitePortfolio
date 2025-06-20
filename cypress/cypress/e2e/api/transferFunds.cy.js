import loginUI from "../../models/POM/loginComponentV2";
import extractAndEnterUserPassword from "../../utilities/credentials";
import { findElement } from "../../utilities/elementCheckout";
import POST from "../../utilities/POST";

describe("Transfer Funds via Swagger API API-03 ", () => {
  beforeEach("Setup", () => {
    cy.intercept("**/parabank/services_proxy/bank/**").as("transactionTable");
    cy.visit("/");
    loginUI("john", extractAndEnterUserPassword());
  });

  it("API-03 should successfully deposit funds using API after UI login", () => {
    cy.wait("@transactionTable");
    cy.get(findElement("firstTransaction"))
      .invoke("attr", "href")
      .then((value) => {
        const accountId = value.split("=")[1];

        const formBody = new URLSearchParams({
          accountId,
          amount: "200.00",
        }).toString();

        POST("/parabank/services/bank/deposit?" + formBody).then((response) => {
          expect(response.status).eq(200);
          expect(response.body).contains(
            `Successfully deposited $200.00 to account #${accountId}`
          );
        });
      });
  });

  it("API-04 should return an error when depositing to a non-existent account", () => {
    const invalidAccountId = "00000";

    const formBody = new URLSearchParams({
      accountId: invalidAccountId,
      amount: "500.00",
    }).toString();

    POST("/parabank/services/bank/deposit?" + formBody, {
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.include("Could not find account number 0");
    });
  });
});
