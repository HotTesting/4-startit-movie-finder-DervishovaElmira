const URL = ''
let searchField = $('input[class|=form]')
let goButton = $('span.input-group-btn button.btn.btn-primary')
describe('Search Test', () => {
    it('Valid Search '), () => {

        let validInput = 'Valid Movie'
        browser.get(URL)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(searchField.getAttrubute('placeholder')).toEqual('Search for movies...');
        searchField.sendKeys(validInput);
        expect (searchField.getAttrubute('ng-reflect-model')).toEqual(validInput)
        goButton.click()
        expect (element.getAttrubute('class =orange-text')).toEqual('Search Results')
    }
    it('Invalid Search '), () => {

        let invalidInput = 'Invalind Movie'
        browser.get(URL)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(searchField.getAttrubute('placeholder')).toEqual('Search for movies...');
        searchField.sendKeys(invalidInput);
        expect (searchField.getAttrubute('ng-reflect-model')).toEqual(invalidInput)
        goButton.click()
        expect (element.getAttrubute('class =orange-text')).toEqual('Search Results')
    }

    it('Search with special characters'), () => {

        let inputWithSpecialChar = '!@#$%^&*()'
        browser.get(URL)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(searchField.getAttrubute('placeholder')).toEqual('Search for movies...');
        searchField.sendKeys(inputWithSpecialChar);
        expect (searchField.getAttrubute('ng-reflect-model')).toEqual(inputWithSpecialChar)
        goButton.click()
        expect (element.getAttrubute('class =orange-text')).toEqual('Search Results')
    }

    it('Empty search'), () => {

        let emptyInput = ''
        browser.get(URL)
        expect(browser.getCurrentUrl()).toEqual(URL);
        expect(searchField.getAttrubute('placeholder')).toEqual('Search for movies...');
        searchField.sendKeys(emptyInput);
        expect (searchField.getAttrubute('ng-reflect-model')).toEqual(emptyInput)
        goButton.click()
        expect (element.getAttrubute('class =orange-text')).not.toEqual('Search Results')
    }

}) 