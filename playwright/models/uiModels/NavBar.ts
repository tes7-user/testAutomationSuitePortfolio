import { expect, type Locator, type Page } from "@playwright/test";

export default class NavBar {
  readonly page: Page;
  readonly rooms: Locator;
  readonly booking: Locator;
  readonly amenities: Locator;
  readonly location: Locator;
  readonly contact: Locator;
  readonly admin: Locator;

  constructor(page: Page) {
    this.page = page;
    const navbar = page.locator("#navbarNav"); //parent
    this.rooms = navbar.getByRole("link", { name: "Rooms" });
    this.booking = navbar.getByRole("link", { name: "Booking" });
    this.amenities = navbar.getByRole("link", { name: "Amenities" });
    this.location = navbar.getByRole("link", { name: "Location" });
    this.contact = navbar.getByRole("link", { name: "Contact" });
    this.admin = navbar.getByRole("link", { name: "Admin" });
  }
  private navBarItems = [
    "Rooms",
    "Booking",
    "Amenities",
    "Location",
    "Contact",
    "Admin",
  ];
  async goTo(
    section:
      | "Rooms"
      | "Booking"
      | "Amenities"
      | "Location"
      | "Contact"
      | "Admin"
  ) {
    await this[section.toLowerCase()].click();
  }

  async checkIfNavBarItemsPresent() {
    for (const item of this.navBarItems) {
      const link = this.page
        .locator("#navbarNav")
        .getByRole("link", { name: item });
      await link.waitFor({ state: "visible" });
    }
  }
}
