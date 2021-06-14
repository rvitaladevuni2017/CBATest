package stepdefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import pageobjectweb.SearchTest;
import utility.Hook;

public class UiStepDefinition {
    private final WebDriver webDriver;
    private SearchTest searchTest;


    public UiStepDefinition() {
        this.webDriver = Hook.getDriver();
    }

    @Given("^open the service nsw Url$")
    public void openTheNswUrl() {
        searchTest = new SearchTest(webDriver);
        searchTest.openUrl();
    }
    @Given("^open the reference url$")
    public void open_the_reference_url() {
        searchTest = new SearchTest(webDriver);
        searchTest.openUrl();
    }

    @Then("^verify the search query input field and the search button exist on the main screen of the application$")
    public void verify_the_search_query_input_field_and_the_search_button_exist_on_the_main_screen_of_the_application() {
        searchTest.test_checkQueryInputAndSeacrhButton();
    }

    @Then("^verify the empty search is forbidden$")
    public void verify_the_empty_search_is_forbidden() {
        searchTest.test_emptyQueryIsForbidden();
    }

    @Then("^verify the \"([^\"]*)\" Isla is returned from the search$")
    public void verify_the_Isla_is_returned_from_the_search(String island) {
        searchTest.test_searchReturnsIslaAsResult(island);
    }

    @Then("^verify the \"([^\"]*)\" returns no search results$")
    public void verify_the_returns_no_search_results(String island) {
        searchTest.test_searchReturnsNoResults(island);
    }

    @Then("^verify the \"([^\"]*)\" Port is returned from the search$")
    public void verify_the_Port_is_returned_from_the_search(String island) {
        searchTest.test_searchReturnsPortAsResult(island);
    }






}





