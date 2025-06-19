import { findElement } from "../../utilities/elementCheckout";

export default class LoginUI {
  fillUsername(username) {
    cy.get(findElement("username")).type(username);
    return this;
  }

  fillPassword(password) {
    cy.get(findElement("password")).type(password);
    return this;
  }

  submitButton() {
    cy.get(findElement("loginButton")).click();
  }
}
