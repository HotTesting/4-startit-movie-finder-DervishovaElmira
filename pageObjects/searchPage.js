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

    search(input) {
        this.typeSearchText(input)
        this.submitSearch()
    }

    typeSearchText(input) {
        this.searchField.sendKeys(input)
    }

    submitSearch() {
        this.goButton.click()
    }
}
exports.SearchPage = SearchPage