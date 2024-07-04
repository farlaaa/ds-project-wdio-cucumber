import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import CatalogPage from "../pageobjects/catalog.page.js";

Given(/^user logged in with valid credentials$/, async () => {
  await LoginPage.open();
  await LoginPage.login("standard_user", "secret_sauce");
});

// list view
When(/^user directed to the catalog page$/, async () => {
  await CatalogPage.open();
});

Then(/^user should see a list of available products$/, async () => {
  await CatalogPage.verifyItemsDisplayed();
});

// filter
When(/^user applies a filter by "(.*)"$/, async (filterOption) => {
  await CatalogPage.applyFilter(filterOption);
});

Then(
  /^user should see filtered products based on "(.*)"$/,
  async (filterOption) => {
    console.log(`Filter applied: ${filterOption}`);
  }
);

// add or remove cart from catalog
When(/^user add "([^"]*)" to cart via catalog$/, async (productName) => {
  await CatalogPage.addToCart(productName);
});

When(/^user checks the cart icon count via catalog$/, async () => {
  await CatalogPage.verifyCartIconCount();
});

When(/^user removes "([^"]*)" from cart via catalog$/, async (productName) => {
  await CatalogPage.removeFromCart(productName);
});

Then(/^user checks the updated cart icon count via catalog$/, async () => {
  await CatalogPage.verifyUpdatedCartIconCount();
});
