import { findElement } from "../../utilities/elementCheckout";

export function genericForm(element, value) {
  let getElement = findElement(element).split("|")[0];
  let dataType = findElement(element).split("|")[1];

  if (dataType === "textEntry") {
    cy.get(getElement).type(value);
  }
  if (dataType === "button") {
    cy.get(getElement).click();
  }
}
