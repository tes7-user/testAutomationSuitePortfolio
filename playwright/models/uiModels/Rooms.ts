import { Locator, Page } from "@playwright/test";
import Cards from "./Cards";

export default class Rooms {
  readonly page: Page;
  readonly cards: Cards;
  readonly cardContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardContainer = page.locator("#rooms .row.g-4 > div");
    this.cards = new Cards(page, this.cardContainer);
  }

  async checkNumberOfCards() {
    await this.page.waitForSelector("#rooms .row.g-4", { state: "visible" });
    return this.cardContainer.count();
  }
}
