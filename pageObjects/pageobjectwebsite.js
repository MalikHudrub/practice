class Website {

    // variables //
    homePage = "/";
    ascending = "az";
    descending = "za";
    fromHighToLow = "hilo";
    fromLowToHigh = "lohi";
    password = 'secret_sauce';
    problemUser = 'problem_user';
    standardUser = 'standard_user';
    lockedUser = 'locked_out_user';
    lockedOutUserMessage = 'Epic sadface: Sorry, this user has been locked out.';

    // selectors //
    usernameInput = "#user-name";
    passwordInput = "#password";
    itemName = '.inventory_item_name';
    itemPrice = ".inventory_item_price"
    sortListButton = ".product_sort_container";
    loginButton = '#login-button';
    lockedOutUserElement = '[data-test="error"]';

    // methods //
    /**
     * This function checks logs in using two params, username and password.
     * @param {string} username - it is set on test to specify username
     * @param {string} password - it is set on test to specify password
     * 
     */
    logIn(username, password) {
        cy.get(this.usernameInput).type(username)
        cy.get(this.passwordInput).type(password)
        cy.get(website.loginButton).click()
    }

     /**
     * This function checks if products are sorted by Price upon selecting sort by price (low-high) or (high-low) .
     * You can provide more details about what the function does here.
     * @param {boolean} priceDescending - default is false if set true the function will check if products
     * are sorted descending by price
     */
    checkSort( byPrice = false, descending = false) {
        const allProducts = []
        cy.get(byPrice ? this.itemPrice :this.itemName ).each((products) => {
            allProducts.push(products.text().trim())
        }).then(() => {
            const tempProducts = [...allProducts]
            expect(allProducts).to.deep.equal(tempProducts.sort( descending ? ((a, b) => b - a ): ((a, b) => a - b )));
        })
    }
}
export const website = new Website();

