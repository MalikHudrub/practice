class Website {

    // variables //
    homePage = "/"
    pwd = 'secret_sauce'
    problemUser = 'problem_user'
    standardUser = 'standard_user'
    lockedUser = 'locked_out_user'
    lockedOutUserMessage = 'Epic sadface: Sorry, this user has been locked out.'
    
    // selectors //

    usernameInput = "#user-name"
    passwordInput = "#password"
    itemName = '.inventory_item_name'
    stringToRemove = "Sauce Labs"
    sortListButton = ".product_sort_container"

    loginButton = '#login-button'
    lockedOutUserElement = '[data-test="error"]'

    // methods //

    logIn(username, password) {
        cy.get(this.usernameInput).type(`${username}`)
        cy.get(this.passwordInput).type(`${password}`)
        cy.get(website.loginButton).click()
    }

    checkIfSortedAscByDefault() {
        let allProducts = []
        // cy.pause()

        cy.get(this.itemName).each((products) => {
            allProducts.push(products.text().trim().replace(this.stringToRemove, ""))
        }).then(()=>{
            const tempProducts = [...allProducts]
            expect(tempProducts.sort()).to.deep.equal(allProducts);
            
            cy.log(allProducts)
        })
    }
    checkIfSortedAscOnClick() {
        let allProducts = []
        // cy.pause()
        cy.get(this.sortListButton).select("za")
        cy.get(this.sortListButton).select("az")


        cy.get(this.itemName).each((products) => {
            allProducts.push(products.text().trim().replace(this.stringToRemove, ""))
        }).then(()=>{
            const tempProducts = [...allProducts]
            expect(tempProducts.sort()).to.deep.equal(allProducts);
            
            cy.log(allProducts)
        })
    }
    checkIfSortedDescOnClick() {
        let allProducts = []
        // cy.pause()
        cy.get(this.sortListButton).select("za")


        cy.get(this.itemName).each((products) => {
            allProducts.push(products.text().trim().replace(this.stringToRemove, ""))
        }).then(()=>{
            const tempProducts = [...allProducts]
            expect(tempProducts.sort((a, b) => b - a)).to.deep.equal(allProducts);
            
            cy.log(allProducts)
        })
    }

    
    checkIfSortedByPriceAsc() {
        let allPrices = []

        // cy.pause()
        cy.get(this.sortListButton).select("lohi")

        cy.get(this.itemName).each((price) => {
            allPrices.push(parseFloat(price.text().trim().replace("$", "")))
        }).then(()=>{
            const tempPrices = [...allPrices]
            expect(tempPrices.sort((a,b)=>a - b)).to.deep.equal(allPrices);
        })
    }
    checkIfSortedDesc() {
        
        let allProducts = []
        // cy.pause()
        cy.get(this.sortListButton).select("hilo")
        
        cy.get(this.itemName).each((products) => {
            allProducts.push(products.text().trim().replace("$", ""))
        }).then(()=>{
            const tempProducts = [...allProducts]
            expect(allProducts).to.deep.equal(tempProducts.sort((a, b) => b - a));
            
        })
    }
}

export const website = new Website();

