import { Locator, Page } from "@playwright/test";
import NavBar from "./NavBar";

export default class Header {
  readonly page: Page;
  readonly navBar: NavBar;
  readonly logo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navBar = new NavBar(page);
    this.logo = page.getByRole("link", { name: "Shady Meadows B&B" });
  }
  async checkIfLogoPresent() {
    await this.logo.waitFor({ state: "visible" });
  }
}
