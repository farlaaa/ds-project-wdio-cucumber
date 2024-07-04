import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import MenuPage from "../pageobjects/menu.page.js";
import CatalogPage from "../pageobjects/catalog.page.js";
import assert from "assert";

Given(/^user logged in with valid credentials and on the catalog page$/,
  async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await CatalogPage.open();
  }
);

When(/^user open the hamburger menu$/, async () => {
  await MenuPage.openHamburgerMenu();
});

Then(/^user should see "(.*?)" in the menu$/, async (menuOption) => {
  const isMenuOptionDisplayed = await MenuPage.isMenuOptionDisplayed(menuOption);
  assert(isMenuOptionDisplayed, `${menuOption} should be displayed`);
});
