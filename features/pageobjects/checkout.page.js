import Page from "./page.js";

class CheckoutPage extends Page {
  get firstNameInput() {
    return $("#first-name");
  }

  get lastNameInput() {
    return $("#last-name");
  }

  get postalCodeInput() {
    return $("#postal-code");
  }

  get continueButton() {
    return $("#continue");
  }

  get finishButton() {
    return $("#finish");
  }

  get confirmationMessage() {
    return $(".complete-header");
  }

  get overviewTitle() {
    return $(".title");
  }

  get informationTitle() {
    return $(".title");
  }

  async verifyCheckoutInformationPage() {
    await expect(this.informationTitle).toHaveText(
      "Checkout: Your Information"
    );
  }

  async enterShippingInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
  }

  async continueToSummary() {
    await this.continueButton.click();
  }

  async verifyCheckoutOverviewPage() {
    await expect(this.overviewTitle).toHaveText("Checkout: Overview");
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifyConfirmationMessage(expectedMessage) {
    await expect(this.confirmationMessage).toHaveText(expectedMessage);
  }

  open() {
    return super.open("checkout-step-one.html");
  }
}

export default new CheckoutPage();
