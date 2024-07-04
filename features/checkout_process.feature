@checkout_process
Feature: Checkout Process

  Background:
    Given user logged in with valid credentials and on the catalog page for checkout
    When user add products to cart for checkout
      | productName              |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    And user proceed to checkout

  Scenario Outline: Complete the checkout process
    Given user on the checkout information page
    When user enter shipping information <firstName>, <lastName>, <postalCode>
    And user continue to the checkout summary page
    And user finish the checkout process
    Then user should see a confirmation message "Thank you for your order!"

    Examples:
      | firstName | lastName  | postalCode |
      | Freya     | Dwi       | 32323      |
      | Ilaya     | Handayani | 11224      |
