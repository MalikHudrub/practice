import { website } from "../../pageObjects/pageobjectlogin"
describe('website', () => {
  beforeEach(() => {
    cy.visit(website.homePage)
  })
  it('logs in as standard user', () => {
    website.logIn(website.standardUser,website.pwd)
  })

  it('doesnt login as locked-out user', () => {
    website.logIn(website.lockedUser,website.pwd)
    cy.get(website.lockedOutUserElement).should('contain',website.lockedOutUserMessage);
  })
})

describe('products page', () => {
  beforeEach(() => {
    cy.visit(website.homePage)
  })
  it('sorts products alphabatically ascending by default', () => {
    website.logIn(website.standardUser,website.pwd)
    website.checkIfSortedAscByDefault()
    
  })
  it('sorts products alphabatically ascending on click', () => {
    website.logIn(website.standardUser,website.pwd)
    website.checkIfSortedAscOnClick()
    
  })
  it('sorts products alphabatically descending on click', () => {
    website.logIn(website.standardUser,website.pwd)
    website.checkIfSortedDescOnClick()
    
  })
  it('sorts products by price Ascending by default', () => {
    website.logIn(website.standardUser,website.pwd)
    website.checkIfSortedByPriceAsc()
    
  })
  it('sorts products by price descending on click', () => {
    website.logIn(website.standardUser,website.pwd)
    website.checkIfSortedDesc()
    
  })
  
})
