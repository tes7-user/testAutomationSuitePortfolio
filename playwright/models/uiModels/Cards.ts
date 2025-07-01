import { Page, Locator, expect } from "@playwright/test";

export default class Cards {
  readonly page: Page;
  readonly title: Locator;
  readonly image: Locator;
  readonly description: Locator;
  readonly cardContainer: Locator;

  constructor(page: Page, cardContainer: Locator) {
    this.page = page;
    this.cardContainer = cardContainer;
    this.title = cardContainer.locator("h5.card-title");
    this.description = cardContainer.locator("p.card-text");
    this.image = cardContainer.locator("img.card-img-top");
  }

  async checkRoomTitle(roomType: string) {
    await this.title
      .filter({ hasText: roomType })
      .waitFor({ state: "visible" });
    return await this.title.filter({ hasText: roomType }).textContent();
  }

  async getRoomDescription(roomDescription: string) {
    await this.description
      .filter({ hasText: roomDescription })
      .waitFor({ state: "visible" });
    return await this.description
      .filter({ hasText: roomDescription })
      .textContent();
  }

  async checkIfImagePresent() {
    await this.image.first().waitFor({ state: "visible" });
    return await this.image.first().getAttribute("src");
  }
}
