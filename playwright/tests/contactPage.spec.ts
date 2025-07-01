import { describe } from "node:test";
import HomePage from "../models/uiModels/HomePage";
import Header from "../models/uiModels/Header";
import test, { expect } from "@playwright/test";
import Contact from "../models/uiModels/ContactForm";

describe("ContactPage: E2E-04, E2E-05, E2E-06, E2E-07", () => {
  let homePage: HomePage;
  let header: Header;
  let contactPage: Contact;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.gotoHomePage();
    header = new Header(page);
    await header.navBar.goTo("Contact");
  });

  test("E2E-04: Load Contact Page", async ({ page }) => {
    expect(page.url().includes("contact")).toBeTruthy();
  });

  test("E2E-05: Display Form Fields", async ({ page }) => {
    contactPage = new Contact(page);
    contactPage.returnField();
  });

  test("E2E-06: Submit Valid Contact Form", async ({ page }) => {
    contactPage = new Contact(page);
    const contactNameField = await contactPage.returnField("ContactName");
    const contactEmailField = await contactPage.returnField("ContactEmail");
    const contactPhone = await contactPage.returnField("ContactPhone");
    const contactSubject = await contactPage.returnField("ContactSubject");
    const contactDescription = await contactPage.returnField(
      "ContactDescription"
    );

    await contactNameField.fill("Full Name User");
    await contactEmailField.fill("test@test.com");
    await contactPhone.fill("+1232132421343254");
    await contactSubject.fill("test contact form");
    await contactDescription.fill(
      "reservation for 2 on 22-9-2021 for 3 nights"
    );
    await page.getByRole("button", { name: "Submit" }).click({ force: true });
    await expect(page.locator("#contact div").nth(2)).toContainText(
      "Thanks for getting in touch Full Name User!"
    );
    await expect(page.locator("#contact div").nth(2)).toContainText(
      "We'll get back to you"
    );
  });

  test("E2E-07: Required Field Validation", async ({ page }) => {
    contactPage = new Contact(page);
    await page.getByRole("button", { name: "Submit" }).click({ force: true });

    const errorAlert = await page.locator(".alert.alert-danger");
    errorAlert.waitFor({ state: "visible" });
    expect(errorAlert).toContainText(
      "Message must be between 20 and 2000 characters."
    );
    expect(errorAlert).toContainText("Message may not be blank");
    expect(errorAlert).toContainText("Subject may not be blank");
    expect(errorAlert).toContainText(
      "Subject must be between 5 and 100 characters."
    );
    expect(errorAlert).toContainText(
      "Phone must be between 11 and 21 characters."
    );
  });
});
