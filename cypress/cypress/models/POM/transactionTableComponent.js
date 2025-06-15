import { findElement } from "../../utilities/elementCheckout";

export default function transactionTable(row) {
  for (const item in row) {
    if (item !== "RowNumber") {
      cy.get(
        findElement("transactionTableBody") + `(${row["RowNumber"]})`
      ).contains(row[item]);
    }
  }
}
