class BasePage {
    open() {
        browser.get(this.URL)
    }
}

exports.BasePage = BasePage