import { Given, When, Then } from "@wdio/cucumber-framework";
import { browser } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";

Given(/^user on the login page$/, async () => {
  await LoginPage.open();
});

When(/^user enters "(.*)" and "(.*)"$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^user should see "(.*)" on the screen$/, (result) => {
  switch (result) {
    case "catalog page":
      expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
      break;
    case "an error message":
      expect(LoginPage.errorMessage).toHaveText(
        "Epic sadface: Username and password do not match any user in this service"
      );
      break;
    case "a locked account message":
      expect(LoginPage.errorMessage).toHaveText(
        "Sorry, this user has been locked out."
      );
      break;
    case "an error message for empty password":
      expect(LoginPage.errorMessage).toHaveText(
        "Epic sadface: Password is required"
      );
      break;
    case "an error message for empty username":
      expect(LoginPage.errorMessage).toHaveText(
        "Epic sadface: Username is required"
      );
      break;
    default:
      throw new Error(`Unknown result: ${result}`);
  }
});
