import Page from "./page.js";

class CatalogPage extends Page {
  get cartIcon() {
    return $(".shopping_cart_link");
  }

  get itemList() {
    return $$(".inventory_item");
  }

  async open() {
    await super.open("inventory.html");
  }

  async verifyItemsDisplayed() {
    const firstItem = this.itemList[0];

    await firstItem.waitForExist();

    const imageDisplayed = await firstItem
      .$(".inventory.item-image")
      .isDisplayed();
    const nameDisplayed = await firstItem
      .$(".inventory.item-name")
      .isDisplayed();
    const descriptionDisplayed = await firstItem
      .$(".inventory.item-description")
      .isDisplayed();
    const priceDisplayed = await firstItem
      .$(".inventory.item-price")
      .isDisplayed();

    return {
      imageDisplayed,
      descriptionDisplayed,
      priceDisplayed,
      nameDisplayed,
    };
  }

  async applyFilter(filterOption) {
    switch (filterOption) {
      case "Price: Low to High":
        await (
          await $(".product_sort_container")
        ).selectByAttribute("value", "lohi");
        break;
      case "Price: High to Low":
        await (
          await $(".product_sort_container")
        ).selectByAttribute("value", "hilo");
        break;
      case "Name: A to Z":
        await (
          await $(".product_sort_container")
        ).selectByAttribute("value", "az");
        break;
      case "Name: Z to A":
        await (
          await $(".product_sort_container")
        ).selectByAttribute("value", "za");
        break;
      default:
        throw new Error(`Unsupported filter option: ${filterOption}`);
    }
  }

  async addToCart() {
    const productSelector = ".btn_primary";
    await $(productSelector).click();
  }

  async verifyCartIconCount() {
    const cartIcon = await $(".shopping_cart_badge");
    const itemCount = await cartIcon.getText();
    console.log(`Cart icon count: ${itemCount}`);
  }

  async removeFromCart() {
    const removeButtonSelector = ".btn_secondary";
    await $(removeButtonSelector).click();
  }

  async verifyUpdatedCartIconCount() {
    const cartIcon = await $(".shopping_cart_badge");
    const itemCount = await cartIcon.getText();
    console.log(`Updated cart icon count: ${itemCount}`);
  }
}
export default new CatalogPage();
