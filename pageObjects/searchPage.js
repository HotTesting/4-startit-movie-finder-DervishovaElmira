let BasePage = require('./basePage').BasePage

class SearchPage extends BasePage {
    constructor() {
        super() //This is needed to correcly extend BasePage
        this.searchResults = $$('movies>.jumbotron+div movie-card')
        this.searchField = $('input.form-control')
        this.URL = ''
        this.goButton = $('span.input-group-btn button.btn.btn-primary')
        this.placeholder = 'placeholder'
        this.placeholderName = 'Search for movies...'
        
    }

    search(input, expectedValue) {
        this.typeSearchText(input, expectedValue)
        this.submitSearch();
        // this.getSearchFieldValue(expectedValue)
    }

    checkSearchResult(firstResult) {
        // this.checkSearchResultIsNotZero()
        this.checkFirstResult()
        return this.checkFirstResult.getText().toContain(firstResult, 'First result should be as expected')
    }

    waitSearchField() {
        return this.searchField.getAttribute(this.placeholder).toBe(this.placeholderName, 'Search field should have correct name');
    }

    typeSearchText(input) {
        this.searchField.sendKeys(input)
    }

    submitSearch() {
        this.goButton.click()
    }

    checkSearchResultIsNotZero() {
        return this.searchResults.count().not.toBe(0, 'Search results should not be empty')    
    }

    checkFirstResult() {
        return this.searchResults.first()
    }

    // getSearchFieldValue(expectedValue) {
    //     this.searchField.value(expectedValue)
    // }

  
}
exports.SearchPage = SearchPage