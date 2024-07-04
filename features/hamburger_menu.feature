@hamburger_menu
Feature: Hamburger Menu

  Background:
    Given user logged in with valid credentials and on the catalog page

  Scenario Outline: Verify hamburger menu options
    When user open the hamburger menu
    Then user should see "<menuOption>" in the menu

    Examples:
      | menuOption      |
      | All Items       |
      | About           |
      | Logout          |
      | Reset App State |
