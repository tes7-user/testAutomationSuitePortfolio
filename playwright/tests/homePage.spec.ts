import { expect, test } from "@playwright/test";
import HomePage from "../models/uiModels/HomePage";
import { describe } from "node:test";
import Header from "../models/uiModels/Header";
import Rooms from "../models/uiModels/Rooms";
import Cards from "../models/uiModels/Cards";
import typesOfRooms from "../fixtures/typeOfRooms.json";

describe("HomePage: E2E-01, E2E-02, E2E-03", () => {
  let homePage: HomePage;
  let header: Header;
  let rooms: Rooms;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.gotoHomePage();
  });

  test("E2E-01 Load Home Page", async () => {
    await homePage.checkIfPageIsLoaded();
  });

  test("E2E-02 Display Header and Logo", async ({ page }) => {
    header = new Header(page);
    await header.navBar.checkIfNavBarItemsPresent();
    await header.checkIfLogoPresent();
  });

  test("E2E-03 Display Room Cards", async ({ page }) => {
    header = new Header(page);
    await header.navBar.goTo("Rooms");
    rooms = new Rooms(page);

    expect(await rooms.checkNumberOfCards()).toEqual(3);
    expect(await page.url()).toContain("#rooms");
    for (const room of typesOfRooms) {
      const retrievedRoomTitle = await rooms.cards.checkRoomTitle(
        room.roomType
      );
      const retrievedDescription = await rooms.cards.getRoomDescription(
        room.description
      );
      const checkIfImage = await rooms.cards.checkIfImagePresent();

      expect(retrievedRoomTitle).toEqual(room.roomType);
      expect(retrievedDescription).toEqual(room.description);
      expect(checkIfImage).toContain("/images/");
    }
  });
});
