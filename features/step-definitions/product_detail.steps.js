import { Given, When, Then } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/login.page.js";
import CatalogPage from "../pageobjects/catalog.page.js";
import ProductDetailPage from "../pageobjects/productDetail.page.js";

Given(/^user on the catalog page$/, async () => {
  await LoginPage.open();
  await LoginPage.login("standard_user", "secret_sauce");
  await CatalogPage.open();
});

// view
When(/^User clicks on a product$/, async () => {
  await ProductDetailPage.clickProduct();
});

Then(/^user should see the details of the product$/, async () => {
  await ProductDetailPage.verifyProductDetails();
});

When(/^user add "(.*)" to cart via product detail$/, async (productName) => {
  await ProductDetailPage.addToCart(productName);
});

When(/^user checks the cart icon count via product detail$/, async () => {
  await ProductDetailPage.checkCartIconCount();
});

When(
  /^user removes "(.*)" from cart via product detail$/,
  async (productName) => {
    await ProductDetailPage.removeFromCart(productName);
  }
);

Then(
  /^user checks the updated cart icon count via product detail$/,
  async () => {
    await ProductDetailPage.checkUpdatedCartIconCount();
  }
);
