import { website } from "../../pageObjects/pageobjectwebsite"

describe('website', () => {
  beforeEach(() => {
    cy.visit(website.homePage);
  });

  it('logs in as standard user', () => {
    website.logIn(website.standardUser,website.password);
  });

  it('doesn\'t login as locked-out user', () => {
    website.logIn(website.lockedUser,website.password);
    cy.get(website.lockedOutUserElement).should('contain',website.lockedOutUserMessage);
  });
});

describe('products page', () => {
  beforeEach(() => {
    cy.visit(website.homePage);
    website.logIn(website.standardUser,website.password);
  });

  it('sorts products alphabetically ascending by default', () => {
    website.checkSort();
  });

  it('sorts products alphabetically ascending on click', () => {
    cy.get(website.sortListButton).select(website.ascending)
    website.checkSort(false,false);
  });

  it('sorts products alphabetically descending on click', () => {
    cy.get(website.sortListButton).select(website.descending)
    website.checkSort(false,true);
  });

  it('sorts products by price Ascending on click', () => {
    cy.get(website.sortListButton).select(website.fromLowToHigh)
    website.checkSort(true,false);
  });

  it('sorts products by price Descending on click', () => {
    cy.get(website.sortListButton).select(website.fromHighToLow)
    website.checkSort(true,true);
  });
  
});
