export default function POST(url, body) {
  return cy.request({
    method: "POST",
    url: url,
    body: body,
    failOnStatusCode: false,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
}
