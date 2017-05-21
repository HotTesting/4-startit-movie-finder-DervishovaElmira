const URL = ''
describe('Search Test', () => {
    it('Valid Search '), () => {
        let searchField = $('input[class|=form]')
        let goButton = $('span.input-group-btn button.btn.btn-primary')
        let validInput = 'Valid Movie'
        let invalidMovie = 'Invalind Movie'
        

        browser.get(URL)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(searchField.getAttrubute('placeholder')).toEqual('Search for movies...');
        searchField.sendKeys(validInput);
        expect (searchField.getAttrubute('ng-reflect-model')).toEqual(validInput)
        goButton.click()
        expect (element.getAttrubute('class =orange-text')).toEqual('Search Results')
    }

}) 