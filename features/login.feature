@login
Feature: Login

  Background:
    Given user on the login page

  Scenario Outline: Login with various credentials
    When user enters "<username>" and "<password>"
    Then user should see "<result>" on the screen

    Examples:
      | username        | password     | result                              |
      | standard_user   | secret_sauce | catalog page                        |
      | random people   |     7276kali | an error message                    |
      | locked_out_user | secret_sauce | a locked account message            |
      |                 | secret_sauce | an error message for empty username |
      | standard_user   |              | an error message for empty password |
