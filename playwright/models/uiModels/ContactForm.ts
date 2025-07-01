import { Locator, Page } from "@playwright/test";

export default class Contact {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  private availableTestId = [
    "ContactName",
    "ContactEmail",
    "ContactPhone",
    "ContactSubject",
    "ContactDescription",
  ];

  async returnField(id?: string): Promise<Locator> {
    for (const availableId of this.availableTestId) {
      const locator = this.page.getByTestId(availableId);

      if (!id) {
        try {
          await locator.waitFor({ state: "visible", timeout: 1000 });
          return locator;
        } catch {
          // Not visible, try next
        }
      } else if (id === availableId) {
        await locator.waitFor({ state: "visible" });
        return locator;
      }
    }

    if (id) {
      throw new Error(`Field with id '${id}' not found`);
    } else {
      throw new Error(`No visible fields found in availableTestId`);
    }
  }
}
