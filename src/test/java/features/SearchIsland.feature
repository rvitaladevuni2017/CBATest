Feature: Validation of search and location

  Scenario: Test to verify the search  query and search button
    Given open the reference url
    Then verify the search query input field and the search button exist on the main screen of the application


  Scenario: Test to verify the empty search is forbidden
    Given open the reference url
    Then verify the empty search is forbidden


  Scenario Outline: Test to verify the result is returned after querying
    Given open the reference url
    Then verify the "<island>" Isla is returned from the search

    Examples:
      |island|
      |Isla  |


  Scenario Outline: Test to verify the user gets feedback if there are no results
    Given open the reference url
    Then verify the "<island>" returns no search results

    Examples:
      |island|
      |castle|


  Scenario Outline: Test to verify the user gets single result
    Given open the reference url
    Then verify the "<island>" Port is returned from the search

    Examples:
      |island|
      |port|
