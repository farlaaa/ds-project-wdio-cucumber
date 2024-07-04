@logout
Feature: User Logout

  Background:
    Given user logged in with valid credentials and on the catalog page for logout

  @logout
  Scenario: Logout
    When user open the hamburger menu for logout
    And user clicks on the logout button
    Then user should be redirected to the login page
