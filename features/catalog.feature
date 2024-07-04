@catalog @view_list
Feature: Catalog

  Background:
    Given user logged in with valid credentials

  Scenario: View catalog
    When user directed to the catalog page
    Then user should see a list of available products

  @filter
  Scenario: Filter catalog
    When user applies a filter by "<filter_option>"
    Then user should see filtered products based on "<filter_option>"

    Examples:
      | filter_option      |
      | Price: Low to High |
      | Price: High to Low |
      | Name: A to Z       |
      | Name: Z to A       |

  @addremovetocart_fromcatalog
  Scenario: Adding and Removing Products from Cart via Catalog
    When user add "<product1>" to cart via catalog
    And user add "<product2>" to cart via catalog
    And user checks the cart icon count via catalog
    And user removes "<product1>" from cart via catalog
    Then user checks the updated cart icon count via catalog

    Examples:
      | product1            | product2              |
      | Sauce Labs Backpack | Sauce Labs Bike Light |
