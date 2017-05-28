let SearchPage = require('./pageObjects/searchPage.js').SearchPage
describe('Search', () => {
     let searchPage = new SearchPage()

    beforeEach (() => {
        searchPage.open() 
        console.log('browser')
    })

    afterEach(() => {
        browser.manage().deleteAllCookies()

    })
    it ('field has correct placeholder', () => {
        searchPage.waitSearchField()

    })




    fit('with valid input ', () => {
        let input = 'Amelie'
        let expectedValue = 'Amelie'
        let expectedResult = ''
        let firstResult = 'Amelie'
        searchPage.search(input, expectedValue)
        console.log('search')
        expect(searchPage.searchResults.count()).not.toBe(0, 'Search results should not be empty')
        console.log('not 0')
        searchPage.checkSearchResult(firstResult)
        
})

    it('with invalid input ', () => {
        let input = 'Valid Movie'
        let expectedValue = 'Valid Movie'
        let expectedResult = ''
        searchPage.search(input, expectedValue)
        searchPage.checkSearchResult(expectedResult)
})

    it('with input with special characters', () => {

        let input = 'Valid Movie'
        let expectedValue = 'Valid Movie'
        let expectedResult = ''
        searchPage.search(input, expectedValue)
        searchPage.checkSearchResult(expectedResult)
        
    })

    it('with empty input', () => {
        let input = 'Valid Movie'
        let expectedValue = 'Valid Movie'
        let expectedResult = ''
        searchPage.search(input, expectedValue)
        searchPage.checkSearchResult(expectedResult)
        
    })

}) 