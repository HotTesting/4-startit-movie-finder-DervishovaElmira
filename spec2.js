let SearchPage = require('./pageObjects/searchPage.js').SearchPage
describe('Search', () => {
     let searchPage = new SearchPage()

    beforeEach (() => {
        searchPage.open() 
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()

    })




    fit('with valid input ', () => {
        let input = 'Amélie'
        let expectedValue = 'Amélie'
        let expectedResult = ''
        let firstResultValue = 'Amélie'
        let serchString = $('.orange-text')
        expect(searchPage.searchField.getAttribute(searchPage.placeholder)).toBe(searchPage.placeholderName, 'Search field should have correct name')
        searchPage.search(input)
        browser.sleep(5000)
       
        expect(searchPage.searchField.getAttribute('ng-reflect-model')).toBe('Amelie')
       
        // expect(serchString.getAttribute()).toContain('Search Results', 'Search Results string should be on screen')
        expect(searchPage.searchResults.count()).not.toBe(0, 'Search results should not be empty')
        let firstResult = searchPage.searchResults.first()
        expect(firstResult.getAttribute()).toContain('Amélie', 'First search result should contain search request')
        
        
})

    it('with invalid input ', () => {
        let input = 'Invalid Movie'
        let expectedValue = 'Invalid Movie'
        let expectedResult = ''
        searchPage.search(input, expectedValue)
        searchPage.checkSearchResult(expectedResult)
})

    it('with input with special characters', () => {

        let input = 'm)&^$Ov7I#!~E'
        let expectedValue = 'm)&^$Ov7I#!~E'
        let expectedResult = ''
        searchPage.search(input, expectedValue)
        searchPage.checkSearchResult(expectedResult)
        
    })

    it('with empty input', () => {
        let input = ''
        let expectedValue = ''
        let expectedResult = ''
        searchPage.search(input, expectedValue)
        searchPage.checkSearchResult(expectedResult)
        
    })

}) 