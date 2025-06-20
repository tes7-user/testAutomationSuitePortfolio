export function GET(url) {
  return cy.request({ method: "GET", url, failOnStatusCode: false });
}

Cypress.Commands.add("GET", (url) => {
  return cy.request({ method: "GET", url, failOnStatusCode: false });
});
