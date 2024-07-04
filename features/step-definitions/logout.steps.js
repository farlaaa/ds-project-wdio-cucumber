import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import CatalogPage from "../pageobjects/catalog.page.js";
import MenuPage from "../pageobjects/menu.page.js";

Given(/^user logged in with valid credentials and on the catalog page for logout$/,
  async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await CatalogPage.open();
  }
);

When(/^user open the hamburger menu for logout$/, async () => {
  await MenuPage.openHamburgerMenu();
});

When(/^user clicks on the logout button$/, async () => {
  await MenuPage.clickLogout();
});

Then(/^user should be redirected to the login page$/, async () => {
  await LoginPage.open();
});
