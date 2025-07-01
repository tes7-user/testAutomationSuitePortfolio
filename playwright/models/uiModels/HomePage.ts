import { type Locator, type Page } from "@playwright/test";

export default class HomePage {
  readonly page: Page;
  readonly roomsHeader: Locator;
  readonly logoImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.roomsHeader = page
      .locator("#navbarNav")
      .getByRole("link", { name: "Rooms" });
    this.logoImage = page.locator("img").first();
  }

  async gotoHomePage() {
    await this.page.goto("https://automationintesting.online/");
  }
  async checkIfPageIsLoaded() {
    await this.roomsHeader.waitFor({ state: "visible" });
    await this.logoImage.waitFor({ state: "visible" });
  }
}
