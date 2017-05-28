// xdescribe('Test', ()=> {
//     it('First Test', ()=> {

//         const URL = 'https://movies-finder.firebaseapp.com/'
//         browser.get(URL)
//         browser.sleep(10000)
//         expect(browser.getCurrentUrl()).toBe(URL);
//         expect(browser.getTitle()).toBe('Movies Finder')
//     })

//     it('Second Test', ()=> {

//         const URL = 'https://movies-finder.firebaseapp.com/'
//         browser.get(URL)
//         browser.sleep(10000)

//         let searchField = element(By.css('input.form-control'))

//         expect(searchField.getAttrubute('placeholder')).toBe('Search for movies...')
//         expect(searchField.isDisplayed()).toBeTruthy()

//     })

//     it('Third Test', ()=> {

//         const URL = 'https://movies-finder.firebaseapp.com/'
//         browser.get(URL)
//         browser.sleep(10000)

//         let searchField = element(By.css('input.form-control'))

//        searchField.sendKeys('Hello')
//        browser.sleep(10000)
//        element(By.css('span.input-group-btn button.btn.btn-primary')).click()
//        browser.sleep(10000)

//     })

//     it('Fourth', ()=> {


//     })
// })



// xdecribe ('Selectors', () => {
//     it('ID', () => {
//         browser.get('')
//         let idElem = element(By.id('navbar'))
//     expect(idElem.getAttribute('id')).toEqual('navbar')
// })


//     it('css short', ()=> {
//         browser.get('')
//         let locator = $('button')
//     expect(locator.getTagname()).toEqual('button')
// })
// })

