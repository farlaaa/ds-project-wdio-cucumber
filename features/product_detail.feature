@product_detail @view_list @addremovetocart_fromproductdetail
Feature: Product Detail

  Background:
    Given user on the catalog page

  Scenario: View product detail
    When User clicks on a product
    Then user should see the details of the product
    When user add "<product>" to cart via product detail
    And user checks the cart icon count via product detail
    And user removes "<product>" from cart via product detail
    Then user checks the updated cart icon count via product detail

    Examples:
      | product           |
      | Sauce Labs Onesie |
