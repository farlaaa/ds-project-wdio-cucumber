import Page from "./page.js";

class MenuPage extends Page {
  open() {
    return super.open("inventory.html");
  }
  get hamburgerMenuButton() {
    return $("#react-burger-menu-btn");
  }

  get allItems() {
    return $("#inventory_sidebar_link");
  }

  get about() {
    return $("#about_sidebar_link");
  }

  get logout() {
    return $("#logout_sidebar_link");
  }

  get resetAppState() {
    return $("#reset_sidebar_link");
  }

  async openHamburgerMenu() {
    await this.hamburgerMenuButton.click();
  }

  async isMenuOptionDisplayed(option) {
    switch (option) {
      case "All Items":
        return await this.allItems.isDisplayed();
      case "About":
        return await this.about.isDisplayed();
      case "Logout":
        return await this.logout.isDisplayed();
      case "Reset App State":
        return await this.resetAppState.isDisplayed();
      default:
        throw new Error(`Invalid menu option: ${option}`);
    }
  }

  async clickAllItems() {
    await this.allItems.click();
  }

  async clickAbout() {
    await this.about.click();
  }

  async clickLogout() {
    await this.logout.click();
  }

  async clickResetAppState() {
    await this.resetAppState.click();
  }
}

export default new MenuPage();
