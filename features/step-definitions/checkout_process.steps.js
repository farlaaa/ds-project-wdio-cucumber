import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import CatalogPage from "../pageobjects/catalog.page.js";

Given(/^user logged in with valid credentials and on the catalog page for checkout$/, async () => {
    await LoginPage.open();
    await LoginPage.login("standard_user", "secret_sauce");
    await CatalogPage.open();
  }
);

When(/^user add products to cart for checkout$/, async (dataTable) => {
  for (const { productName } of dataTable.hashes()) {
    await CatalogPage.addToCart(productName);
  }
});

When(/^user proceed to checkout$/, async () => {
  await CartPage.clickCartIcon();
  await CartPage.proceedToCheckout();
});

Given(/^user on the checkout information page$/, async () => {
  await CheckoutPage.verifyCheckoutInformationPage();
});

When(/^user enter shipping information (.+), (.+), (.+)$/,
  async (firstName, lastName, postalCode) => {
    await CheckoutPage.enterShippingInformation(
      firstName,
      lastName,
      postalCode
    );
  }
);

When(/^user continue to the checkout summary page$/, async () => {
  await CheckoutPage.continueToSummary();
});

When(/^user finish the checkout process$/, async () => {
  await CheckoutPage.verifyCheckoutOverviewPage();
  await CheckoutPage.finishCheckout();
});

Then(/^user should see a confirmation message "([^"]*)"$/,
  async (expectedMessage) => {
    await CheckoutPage.verifyConfirmationMessage(expectedMessage);
  }
);
