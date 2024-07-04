import Page from "./page.js";

class ProductDetailPage extends Page {
  get cartIcon() {
    return $(".shopping_cart_link");
  }

  async clickProduct() {
    const productElement = await $("#item_2_title_link");
    await productElement.click();
  }

  async verifyProductDetails() {
    const productTitle = await $(".inventory_details_name");
    const productImage = await $(".inventory_details_img");
    const productDescription = await $(".inventory_details_desc");
    const productPrice = await $(".inventory_details_price");

    await expect(productTitle).toHaveText("Sauce Labs Onesie");
    await expect(productImage).toHaveAttr(
      "src",
      "/static/media/red-onesie-1200x1500.2ec615b2.jpg"
    );
    await expect(productDescription).toHaveText(
      "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
    );
    await expect(productPrice).toHaveText("$7.99");
  }

  async addToCart(productName) {
    switch (productName) {
      case "Sauce Labs Onesie":
        await $(".btn_primary").click();
        break;
      default:
        throw new Error(`Product ${productName} not found`);
    }
  }

  async checkCartIconCount() {
    const cartCount = await this.cartIcon.getText();
    console.log(`Cart icon count: ${cartCount}`);
  }

  async removeFromCart(productName) {
    switch (productName) {
      case "Sauce Labs Onesie":
        await $(".btn_secondary").click();
        break;
      // Tambahkan case lain jika ada produk lain
      default:
        throw new Error(`Product ${productName} not found`);
    }
  }

  async checkUpdatedCartIconCount() {
    const updatedCartCount = await this.cartIcon.getText();
    console.log(`Updated cart icon count: ${updatedCartCount}`);
  }
}

export default new ProductDetailPage();