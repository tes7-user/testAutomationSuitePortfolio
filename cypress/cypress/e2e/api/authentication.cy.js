import { GET } from "../../utilities/GET";
import extractAndEnterUserPassword from "../../utilities/credentials";

describe("Authentication : API-01, 	API-02", () => {
  it("API-01 : Valid Credentials", () => {
    cy.GET(
      `/parabank/services/bank/login/${"john"}/${extractAndEnterUserPassword()}`
    ).then((response) => {
      expect(response.status).eq(200);
      expect(response.body.includes("<id>12212</id>")).eq(true);
      expect(response.body).contains("12212");
    });
  });

  it("API-02 : Invalid Credentials", () => {
    GET(`/parabank/services/bank/login/${"test"}/${"password"}`).then(
      (response) => {
        expect(response.status).eq(400);
        expect(response.body.includes("Invalid username and/or password")).eq(
          true
        );
        expect(response.body).contains("Invalid username and/or password");
      }
    );
  });
});
