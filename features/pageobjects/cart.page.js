import Page from "./page.js";

class CartPage extends Page {
  get cartIcon() {
    return $(".shopping_cart_link");
  }
  get cartItems() {
    return $$(".cart_item");
  }
  get checkoutButton() {
    return $("#checkout");
  }

  async clickCartIcon() {
    await this.cartIcon.waitForClickable({ timeout: 5000 });
    await this.cartIcon.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async verifyCartItemCount(expectedCount) {
    await expect(this.cartItems).toBeElementsArrayOfSize(expectedCount);
  }

  open() {
    return super.open("cart.html");
  }
}

export default new CartPage();
