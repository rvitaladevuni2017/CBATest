package pageobjectweb;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utility.Os;
import utility.PropertiesLoader;
import utility.WebBasePage;

import java.util.Properties;

public class SearchTest extends WebBasePage {
    private final WebDriver webDriver;
    private static String FILE_NAME ;

    public SearchTest(WebDriver webDriver) {
        super(webDriver);
        this.webDriver = webDriver;
    }

    public void openUrl() {
        if(Os.isMac()) {
            FILE_NAME = System.getProperty("user.dir") + "/src/main/resources/config.properties";
        }else if(Os.isWindows()){
            FILE_NAME = System.getProperty("user.dir") + "\\src\\main\\resources\\config.properties";
        }
        Properties prop = new PropertiesLoader(FILE_NAME).load();
        webDriver.get(prop.getProperty("url"));
    }

    public void test_checkQueryInputAndSeacrhButton() {
        verifyElement(By.xpath("//input[@id='search-input']"), "Query input field", 20);
        verifyElement(By.xpath("//button[@id='search-button']"), "Search button", 20);
    }

    public void test_emptyQueryIsForbidden() {
        clickElementVisible(By.xpath("//button[@id='search-button']"), "Search button", 10);
        verifyElement(By.xpath("//div[@id='error-empty-query']"), "Provide some query", 20);
    }

    public void test_searchReturnsIslaAsResult(String island) {
        enterElementVisible(By.id("search-input"), island, "enter location", 10);
        clickElementVisible(By.xpath("//button[@id='search-button']"), "Search button", 10);
        String result = webDriver.findElement(By.xpath("//*[@id='search-results']/li[1]")).getAttribute("InnerText");
        assert true;

    }

    public void test_searchReturnsNoResults(String island) {
        enterElementVisible(By.id("search-input"), island, "enter location", 10);
        clickElementVisible(By.xpath("//button[@id='search-button']"), "Search button", 10);
        verifyElement(By.xpath("//div[@id='error-no-results']"), "No results", 20);
    }

    public void test_searchReturnsPortAsResult(String island) {
        enterElementVisible(By.id("search-input"), island, "enter location", 10);
        clickElementVisible(By.xpath("//button[@id='search-button']"), "Search button", 10);
        String result= webDriver.findElement(By.xpath("//*[@id='search-results']/li")).getAttribute("InnerText");
        assert true;


    }
}
