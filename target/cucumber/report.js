$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SearchIsland.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of search and location",
  "description": "",
  "id": "validation-of-search-and-location",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2909865146,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Test to verify the search  query and search button",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-search--query-and-search-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "verify the search query input field and the search button exist on the main screen of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "UiStepDefinition.open_the_reference_url()"
});
formatter.result({
  "duration": 1160183261,
  "status": "passed"
});
formatter.match({
  "location": "UiStepDefinition.verify_the_search_query_input_field_and_the_search_button_exist_on_the_main_screen_of_the_application()"
});
formatter.result({
  "duration": 122373830,
  "status": "passed"
});
formatter.after({
  "duration": 78482026,
  "status": "passed"
});
formatter.before({
  "duration": 1556512473,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Test to verify the empty search is forbidden",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-empty-search-is-forbidden",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "verify the empty search is forbidden",
  "keyword": "Then "
});
formatter.match({
  "location": "UiStepDefinition.open_the_reference_url()"
});
formatter.result({
  "duration": 1026694603,
  "status": "passed"
});
formatter.match({
  "location": "UiStepDefinition.verify_the_empty_search_is_forbidden()"
});
formatter.result({
  "duration": 118020697,
  "status": "passed"
});
formatter.after({
  "duration": 79894980,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Test to verify the result is returned after querying",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-result-is-returned-after-querying",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "verify the \"\u003cisland\u003e\" Isla is returned from the search",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-result-is-returned-after-querying;",
  "rows": [
    {
      "cells": [
        "island"
      ],
      "line": 18,
      "id": "validation-of-search-and-location;test-to-verify-the-result-is-returned-after-querying;;1"
    },
    {
      "cells": [
        "Isla"
      ],
      "line": 19,
      "id": "validation-of-search-and-location;test-to-verify-the-result-is-returned-after-querying;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1588330625,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test to verify the result is returned after querying",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-result-is-returned-after-querying;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "verify the \"Isla\" Isla is returned from the search",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UiStepDefinition.open_the_reference_url()"
});
formatter.result({
  "duration": 1017321360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Isla",
      "offset": 12
    }
  ],
  "location": "UiStepDefinition.verify_the_Isla_is_returned_from_the_search(String)"
});
formatter.result({
  "duration": 413912819,
  "status": "passed"
});
formatter.after({
  "duration": 78643115,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Test to verify the user gets feedback if there are no results",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-user-gets-feedback-if-there-are-no-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "verify the \"\u003cisland\u003e\" returns no search results",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-user-gets-feedback-if-there-are-no-results;",
  "rows": [
    {
      "cells": [
        "island"
      ],
      "line": 27,
      "id": "validation-of-search-and-location;test-to-verify-the-user-gets-feedback-if-there-are-no-results;;1"
    },
    {
      "cells": [
        "castle"
      ],
      "line": 28,
      "id": "validation-of-search-and-location;test-to-verify-the-user-gets-feedback-if-there-are-no-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1471145473,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test to verify the user gets feedback if there are no results",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-user-gets-feedback-if-there-are-no-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "verify the \"castle\" returns no search results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UiStepDefinition.open_the_reference_url()"
});
formatter.result({
  "duration": 1095091079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "castle",
      "offset": 12
    }
  ],
  "location": "UiStepDefinition.verify_the_returns_no_search_results(String)"
});
formatter.result({
  "duration": 299759732,
  "status": "passed"
});
formatter.after({
  "duration": 80192673,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Test to verify the user gets single result",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-user-gets-single-result",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "verify the \"\u003cisland\u003e\" Port is returned from the search",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-user-gets-single-result;",
  "rows": [
    {
      "cells": [
        "island"
      ],
      "line": 36,
      "id": "validation-of-search-and-location;test-to-verify-the-user-gets-single-result;;1"
    },
    {
      "cells": [
        "port"
      ],
      "line": 37,
      "id": "validation-of-search-and-location;test-to-verify-the-user-gets-single-result;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1483738905,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Test to verify the user gets single result",
  "description": "",
  "id": "validation-of-search-and-location;test-to-verify-the-user-gets-single-result;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "open the reference url",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "verify the \"port\" Port is returned from the search",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "UiStepDefinition.open_the_reference_url()"
});
formatter.result({
  "duration": 1065076169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "port",
      "offset": 12
    }
  ],
  "location": "UiStepDefinition.verify_the_Port_is_returned_from_the_search(String)"
});
formatter.result({
  "duration": 386573879,
  "status": "passed"
});
formatter.after({
  "duration": 79559110,
  "status": "passed"
});
});