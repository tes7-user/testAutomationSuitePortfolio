import { findElement } from "../../utilities/elementCheckout";

export default function loginUI(username, password) {
  cy.get(findElement("username")).type(username);
  cy.get(findElement("password")).type(password);
  cy.get(findElement("loginButton")).click();
}
